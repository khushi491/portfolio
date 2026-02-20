const fs = require('fs');
const path = require('path');

const GITHUB_USER = "khushi491";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=owner`;
const OUTPUT_PATH = path.join(__dirname, '../src/data/github-repos.json');

async function fetchGithubRepos() {
  console.log(`Fetching repos for ${GITHUB_USER}...`);
  
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(GITHUB_REPOS_URL, { headers });
    if (!res.ok) {
      throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();

    const reposWithReadmes = await Promise.all(
      data.map(async (repo) => {
        try {
          const readmeRes = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/readme`, { headers });
          if (readmeRes.ok) {
            const readmeData = await readmeRes.json();
            const decodedReadme = Buffer.from(readmeData.content, 'base64').toString('utf8');
            
            // Basic cleanup: remove markdown headers and truncate
            const cleanDescription = decodedReadme
              .replace(/#.*?\n/g, "") // Remove headers
              .replace(/\[.*?\]\(.*?\)/g, "") // Remove links
              .replace(/[*#`]/g, "") // Remove common markdown chars
              .replace(/\n/g, " ") // Remove newlines
              .trim()
              .slice(0, 120) + "...";
            
            return {
              name: repo.name,
              description: cleanDescription || repo.description || "No description available.",
              html_url: repo.html_url,
              language: repo.language,
            };
          }
        } catch (e) {
          console.error(`Failed to fetch readme for ${repo.name}`, e);
        }
        return {
          name: repo.name,
          description: repo.description || "No description available.",
          html_url: repo.html_url,
          language: repo.language,
        };
      })
    );

    // Ensure directory exists
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(reposWithReadmes, null, 2));
    console.log(`Successfully saved ${reposWithReadmes.length} repos to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    process.exit(1);
  }
}

fetchGithubRepos();
