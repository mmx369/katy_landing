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

export interface MetricItem {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  photo: string;
}

export interface LegalSection {
  title?: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string[];
}
