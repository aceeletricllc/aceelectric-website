export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceRecord {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  summary: string;
  warningSigns: string[];
  process: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  /** Short label for cards and form select */
  shortLabel: string;
}
