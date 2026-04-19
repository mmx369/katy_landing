export interface NavItem {
  label: string;
  href: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface HeroContent {
  title: string;
  description: string;
  actions: HeroAction[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  methods: string[];
}

export interface MethodCard {
  id: string;
  title: string;
  description: string;
  category: "segmentation" | "brand" | "customer";
  href: string;
}

export interface MarketplaceService {
  title: string;
  description: string;
  outcomes: string[];
}

export interface InsightCard {
  issue: string;
  impact: string;
  recommendation: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  excerpt: string;
  category: "research" | "brand" | "cx" | "marketplaces" | "product";
  readingTime: string;
  date: string;
}
