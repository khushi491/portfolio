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
   * Brand color, brightened where the official hue is too dark to read as a
   * logo against the ink background (Next.js and OpenAI black become white,
   * Tux becomes a light silhouette). All values clear 3:1 against `ink`.
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
  react: { Icon: SiReact, color: "#61DAFB", label: "React" },
  "next.js": { Icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  typescript: { Icon: SiTypescript, color: "#5A9FE0", label: "TypeScript" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  html: { Icon: SiHtml5, color: "#E34F26", label: "HTML" },
  css: { Icon: SiCss3, color: "#4A9BD8", label: "CSS" },
  "tailwind css": { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
  redux: { Icon: SiRedux, color: "#A67BE8", label: "Redux" },

  // Backend
  "node.js (express, nestjs)": {
    Icon: SiNodedotjs,
    color: "#6CC24A",
    label: "Node.js",
    detail: "Express · NestJS",
  },
  "python (django, flask)": {
    Icon: SiPython,
    color: "#5A9FD4",
    label: "Python",
    detail: "Django · Flask",
  },
  "java (spring boot)": {
    Icon: FaJava,
    color: "#E76F00",
    label: "Java",
    detail: "Spring Boot",
  },
  "restful apis": { Icon: FaCode, color: "#8B93F8", label: "REST APIs" },
  grpc: { Icon: FaNetworkWired, color: "#6BB6C9", label: "gRPC" },
  microservices: { Icon: FaCubes, color: "#2DD4BF", label: "Microservices" },

  // Cloud / DevOps
  docker: { Icon: SiDocker, color: "#2496ED", label: "Docker" },
  kubernetes: { Icon: SiKubernetes, color: "#5A8DEF", label: "Kubernetes" },
  "aws (ec2, s3, lambda, rds, eks)": {
    Icon: SiAmazonwebservices,
    color: "#FF9900",
    label: "AWS",
    detail: "EC2 · S3 · Lambda · RDS · EKS",
  },
  aws: { Icon: SiAmazonwebservices, color: "#FF9900", label: "AWS" },
  gcp: { Icon: SiGooglecloud, color: "#4285F4", label: "GCP" },
  "ci/cd (gitlab ci, github actions)": {
    Icon: SiGithubactions,
    color: "#2088FF",
    label: "CI/CD",
    detail: "GitLab CI · GitHub Actions",
  },
  terraform: { Icon: SiTerraform, color: "#A66BE8", label: "Terraform" },
  ansible: { Icon: SiAnsible, color: "#E84545", label: "Ansible" },
  linux: { Icon: SiLinux, color: "#E8E0DA", label: "Linux" },

  // AI / ML
  "machine learning": { Icon: FaBrain, color: "#A78BFA", label: "Machine Learning" },
  "deep learning (pytorch)": {
    Icon: SiPytorch,
    color: "#EE4C2C",
    label: "Deep Learning",
    detail: "PyTorch",
  },
  nlp: { Icon: FaComments, color: "#38BDF8", label: "NLP" },
  "llm orchestration": { Icon: SiLangchain, color: "#5FBFA8", label: "LLM Orchestration" },
  "llm infra": { Icon: FaMicrochip, color: "#F472B6", label: "LLM Infra" },
  langchain: { Icon: SiLangchain, color: "#5FBFA8", label: "LangChain" },
  openai: { Icon: SiOpenai, color: "#FFFFFF", label: "OpenAI" },
  "openai api": { Icon: SiOpenai, color: "#FFFFFF", label: "OpenAI" },
  "data preprocessing": { Icon: FaFilter, color: "#F59E0B", label: "Data Prep" },

  // Databases
  postgresql: { Icon: SiPostgresql, color: "#7BA7CC", label: "PostgreSQL" },
  mongodb: { Icon: SiMongodb, color: "#4DB33D", label: "MongoDB" },
  redis: { Icon: SiRedis, color: "#FF4438", label: "Redis" },
  elasticsearch: { Icon: SiElasticsearch, color: "#4AA9C7", label: "Elasticsearch" },

  // Languages
  go: { Icon: SiGo, color: "#00ADD8", label: "Go" },
  java: { Icon: FaJava, color: "#E76F00", label: "Java" },
  python: { Icon: SiPython, color: "#5A9FD4", label: "Python" },
  "node.js": { Icon: SiNodedotjs, color: "#6CC24A", label: "Node.js" },
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
  return { Icon: FaCode, color: "#9C8B82", label: skill };
}
