import { knowledge } from "@/data/knowledge";

/**
 * KEYWORD WEIGHTS
 */
const KEYWORD_WEIGHTS: Record<string, number> = {
  nextjs: 3,
  react: 2,
  nodejs: 3,
  express: 2,
  mysql: 2,

  machinelearning: 3,
  ai: 4,
  ml: 3,
  cnn: 4,
  unet: 4,
  ann: 4,
  thesis: 4,
  deblurring: 4,
  restoration: 3,
  psnr: 3,
  ssim: 3,
  ffhq: 3,

  backend: 1,
  frontend: 1,
  developer: 1,
  project: 2,
  portfolio: 2,
  built: 2,
  developed: 2,
  recent: 2,
};

/**
 * TYPE BOOST
 */
const TYPE_WEIGHT: Record<string, number> = {
  project: 1.7,
  experience: 1.4,
  skills: 1.0,
  certification: 1.1,
  profile: 1.2,
  education: 1.1,
  contact: 0.8,
  "machine-learning": 1.3,
  research: 1.5,
};

/**
 * YEAR BOOST (IMPORTANT FIX)
 */
const YEAR_WEIGHT: Record<string, number> = {
  "2026": 3,
  "2025": 2.5,
  "2024": 2,
  "2023": 1.5,
  "2022": 1,
};

/**
 * QUERY EXPANSION MAP
 */
const QUERY_MAP: Record<string, string[]> = {
  backend: ["nodejs", "express", "api", "mysql"],
  frontend: ["nextjs", "react", "ui"],
  "machine learning": ["cnn", "unet", "ann", "ai", "deep learning"],
  ml: ["cnn", "unet", "ann", "ai"],
  thesis: ["research", "cnn", "unet", "deblurring", "restoration", "psnr", "ssim"],
};

/**
 * NORMALIZATION
 */
function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * TOKENIZER
 */
function tokenize(text: string): Set<string> {
  return new Set(normalize(text).split(" ").filter(Boolean));
}

/**
 * PREPROCESS KNOWLEDGE
 */
const normalizedKnowledge = knowledge.map((item) => ({
  ...item,
  normalizedKeywords: item.keywords.map(normalize),
}));

/**
 * INTENT DETECTION (CRITICAL FIX)
 */
function detectIntent(query: string): string | null {
  const q = query.toLowerCase();

  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("develop") ||
    q.includes("portfolio")
  ) {
    return "project";
  }

  if (
    q.includes("thesis") ||
    q.includes("research") ||
    q.includes("deblur") ||
    q.includes("restoration")
  ) {
    return "research";
  }

  if (q.includes("experience") || q.includes("work")) {
    return "experience";
  }

  if (q.includes("skill") || q.includes("stack")) {
    return "skills";
  }

  return null;
}

/**
 * QUERY EXPANSION
 */
function expandQuery(query: string): string {
  const tokens = tokenize(query);
  const expanded = new Set(tokens);

  for (const [key, expansions] of Object.entries(QUERY_MAP)) {
    const keyTokens = tokenize(key);

    const match = [...keyTokens].every((t) => tokens.has(t));

    if (match) {
      expansions.forEach((e) => expanded.add(normalize(e)));
    }
  }

  return [...expanded].join(" ");
}

/**
 * MAIN RETRIEVAL FUNCTION
 */
export function retrieveContext(query: string): string[] {
  const intent = detectIntent(query);

  const expandedQuery = expandQuery(query);
  const tokens = tokenize(expandedQuery);

  const scored = normalizedKnowledge.map((item) => {
    let score = 0;

    /**
     * KEYWORD MATCH
     */
    for (const keyword of item.normalizedKeywords) {
      if (tokens.has(keyword)) {
        score += KEYWORD_WEIGHTS[keyword] ?? 1;
      }
    }

    /**
     * TYPE BOOST
     */
    const typeBoost = TYPE_WEIGHT[item.type] ?? 1;

    /**
     * YEAR BOOST (IMPORTANT FIX FOR "recent")
     */
    const yearBoost =
      "year" in item && typeof (item as { year?: string }).year === "string"
        ? YEAR_WEIGHT[(item as { year: string }).year] ?? 1
        : 1;

    /**
     * INTENT BOOST
     */
    const intentBoost = intent && item.type === intent ? 2 : 1;

    /**
     * FINAL SCORE (NORMALIZED)
     */
    const finalScore =
      (score * typeBoost * yearBoost * intentBoost) /
      Math.log(item.normalizedKeywords.length + 2);

    return {
      text: item.text,
      score: finalScore,
    };
  });

  /**
   * SORT
   */
  const sorted = scored.sort((a, b) => b.score - a.score);

  /**
   * Always return top results (NO HARD FALLOUT TO EMPTY)
   */
  const top = sorted.slice(0, 3);

  return top.map((t) => t.text);
}