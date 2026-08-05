import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiLinux,
  SiPytorch,
  SiLangchain,
  SiOpenai,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiGo,
} from "react-icons/si";
import {
  FaJava,
  FaCubes,
  FaNetworkWired,
  FaCode,
  FaFilter,
  FaComments,
  FaMicrochip,
  FaBrain,
} from "react-icons/fa6";

export type SkillIcon = {
  Icon: IconType;
  /**
   * Brand color, nudged darker where the official hue is too pale to read as a
   * logo on a light tile (JavaScript yellow, Tux yellow, Go cyan).
   */
  color: string;
  /** Short name shown under the logo — long labels break the tile grid. */
  label: string;
  /** Optional second line carrying the detail stripped out of `label`. */
  detail?: string;
};

const normalize = (skill: string) => skill.toLowerCase().trim();

/** Exact matches for the skills currently listed on the page. */
const EXACT: Record<string, SkillIcon> = {
  // Frontend
  react: { Icon: SiReact, color: "#0D9BB8", label: "React" },
  "next.js": { Icon: SiNextdotjs, color: "#111827", label: "Next.js" },
  typescript: { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  javascript: { Icon: SiJavascript, color: "#B08800", label: "JavaScript" },
  html: { Icon: SiHtml5, color: "#E34F26", label: "HTML" },
  css: { Icon: SiCss3, color: "#1572B6", label: "CSS" },
  "tailwind css": { Icon: SiTailwindcss, color: "#0891B2", label: "Tailwind" },
  redux: { Icon: SiRedux, color: "#764ABC", label: "Redux" },

  // Backend
  "node.js (express, nestjs)": {
    Icon: SiNodedotjs,
    color: "#3F7E32",
    label: "Node.js",
    detail: "Express · NestJS",
  },
  "python (django, flask)": {
    Icon: SiPython,
    color: "#3776AB",
    label: "Python",
    detail: "Django · Flask",
  },
  "java (spring boot)": {
    Icon: FaJava,
    color: "#C1590A",
    label: "Java",
    detail: "Spring Boot",
  },
  "restful apis": { Icon: FaCode, color: "#6366F1", label: "REST APIs" },
  grpc: { Icon: FaNetworkWired, color: "#2E7D8F", label: "gRPC" },
  microservices: { Icon: FaCubes, color: "#14B8A6", label: "Microservices" },

  // Cloud / DevOps
  docker: { Icon: SiDocker, color: "#2496ED", label: "Docker" },
  kubernetes: { Icon: SiKubernetes, color: "#326CE5", label: "Kubernetes" },
  "aws (ec2, s3, lambda, rds, eks)": {
    Icon: SiAmazonwebservices,
    color: "#D97706",
    label: "AWS",
    detail: "EC2 · S3 · Lambda · RDS · EKS",
  },
  aws: { Icon: SiAmazonwebservices, color: "#D97706", label: "AWS" },
  gcp: { Icon: SiGooglecloud, color: "#4285F4", label: "GCP" },
  "ci/cd (gitlab ci, github actions)": {
    Icon: SiGithubactions,
    color: "#2088FF",
    label: "CI/CD",
    detail: "GitLab CI · GitHub Actions",
  },
  terraform: { Icon: SiTerraform, color: "#7B42BC", label: "Terraform" },
  ansible: { Icon: SiAnsible, color: "#C81E1E", label: "Ansible" },
  linux: { Icon: SiLinux, color: "#1F2937", label: "Linux" },

  // AI / ML
  "machine learning": { Icon: FaBrain, color: "#7C3AED", label: "Machine Learning" },
  "deep learning (pytorch)": {
    Icon: SiPytorch,
    color: "#EE4C2C",
    label: "Deep Learning",
    detail: "PyTorch",
  },
  nlp: { Icon: FaComments, color: "#0EA5E9", label: "NLP" },
  "llm orchestration": { Icon: SiLangchain, color: "#1C3C3C", label: "LLM Orchestration" },
  "llm infra": { Icon: FaMicrochip, color: "#DB2777", label: "LLM Infra" },
  langchain: { Icon: SiLangchain, color: "#1C3C3C", label: "LangChain" },
  openai: { Icon: SiOpenai, color: "#111827", label: "OpenAI" },
  "openai api": { Icon: SiOpenai, color: "#111827", label: "OpenAI" },
  "data preprocessing": { Icon: FaFilter, color: "#F59E0B", label: "Data Prep" },

  // Databases
  postgresql: { Icon: SiPostgresql, color: "#31648C", label: "PostgreSQL" },
  mongodb: { Icon: SiMongodb, color: "#3B8C46", label: "MongoDB" },
  redis: { Icon: SiRedis, color: "#D82C20", label: "Redis" },
  elasticsearch: { Icon: SiElasticsearch, color: "#005571", label: "Elasticsearch" },

  // Languages
  go: { Icon: SiGo, color: "#0090AF", label: "Go" },
  java: { Icon: FaJava, color: "#C1590A", label: "Java" },
  python: { Icon: SiPython, color: "#3776AB", label: "Python" },
  "node.js": { Icon: SiNodedotjs, color: "#3F7E32", label: "Node.js" },
};

/**
 * Ordered substring fallbacks so new skills get a sensible logo without a map
 * entry. Order matters: "javascript" must be tested before "java".
 */
const FUZZY: Array<[string, SkillIcon]> = [
  ["javascript", EXACT["javascript"]],
  ["typescript", EXACT["typescript"]],
  ["next.js", EXACT["next.js"]],
  ["react", EXACT["react"]],
  ["tailwind", EXACT["tailwind css"]],
  ["redux", EXACT["redux"]],
  ["node", EXACT["node.js"]],
  ["python", EXACT["python"]],
  ["django", EXACT["python"]],
  ["flask", EXACT["python"]],
  ["spring", EXACT["java (spring boot)"]],
  ["java", EXACT["java"]],
  ["kubernetes", EXACT["kubernetes"]],
  ["docker", EXACT["docker"]],
  ["aws", EXACT["aws"]],
  ["gcp", EXACT["gcp"]],
  ["google cloud", EXACT["gcp"]],
  ["ci/cd", EXACT["ci/cd (gitlab ci, github actions)"]],
  ["github action", EXACT["ci/cd (gitlab ci, github actions)"]],
  ["terraform", EXACT["terraform"]],
  ["ansible", EXACT["ansible"]],
  ["linux", EXACT["linux"]],
  ["pytorch", EXACT["deep learning (pytorch)"]],
  ["deep learning", EXACT["deep learning (pytorch)"]],
  ["machine learning", EXACT["machine learning"]],
  ["langchain", EXACT["langchain"]],
  ["llm", EXACT["llm infra"]],
  ["openai", EXACT["openai"]],
  ["postgres", EXACT["postgresql"]],
  ["mongo", EXACT["mongodb"]],
  ["redis", EXACT["redis"]],
  ["elastic", EXACT["elasticsearch"]],
  ["microservice", EXACT["microservices"]],
  ["api", EXACT["restful apis"]],
  ["grpc", EXACT["grpc"]],
];

export function getSkillIcon(skill: string): SkillIcon {
  const key = normalize(skill);
  if (EXACT[key]) return EXACT[key];

  for (const [needle, icon] of FUZZY) {
    if (key.includes(needle)) return icon;
  }
  // Unknown skill: keep the tile shape, fall back to the raw name as the label.
  return { Icon: FaCode, color: "#6B7280", label: skill };
}
