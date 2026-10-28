export interface PoemExcerpt {
  title: string;
  author: string;
  year?: string;
  collection?: string;
  context?: string;
  excerpt: string;
}

export interface ComparisonMatrixItem {
  criterion: string;
  category: 'Nội dung' | 'Nghệ thuật' | 'Bối cảnh & Phong cách';
  poem1Aspect: string;
  poem2Aspect: string;
  insight: string;
}

export interface EssaySection {
  id: string;
  type:
    | 'mo_bai'
    | 'khai_quat'
    | 'tuong_dong_nd'
    | 'tuong_dong_nt'
    | 'khac_biet_1'
    | 'khac_biet_2'
    | 'khac_biet_nt'
    | 'li_giai'
    | 'danh_gia'
    | 'ket_bai';
  title: string;
  subtitle?: string;
  content: string[];
  annotations?: {
    type: 'theory' | 'comparison' | 'art' | 'content' | 'origin';
    label: string;
    text: string;
  }[];
}

export interface ComparisonTopic {
  id: string;
  title: string;
  subtitle: string;
  targetExam: string;
  poem1: PoemExcerpt;
  poem2: PoemExcerpt;
  focusQuestion: string;
  essay: {
    wordCount: number;
    targetScore: string;
    sections: EssaySection[];
  };
  matrix: ComparisonMatrixItem[];
  keyQuotes: {
    poem1: { line: string; analysis: string }[];
    poem2: { line: string; analysis: string }[];
  };
}

export interface LiteraryQuote {
  id: string;
  author: string;
  source?: string;
  quote: string;
  theme:
    | 'Bản chất thơ ca'
    | 'Cá tính sáng tạo'
    | 'Hiện thực & Đời sống'
    | 'Tình cảm trong thơ'
    | 'Sức sống văn chương';
  applicationGuide: string;
  sampleTransition: string;
}

// Multimodal Vision Chatbot & Interactive Essay Paragraph Types
export interface InteractiveEssayParagraph {
  id: string;
  sectionGroup: string;
  criterionTitle: string;
  content: string;
  interleavedHighlight: string;
}

export interface ExtractedPoemData {
  title: string;
  author: string;
  excerpt: string;
  contextNote?: string;
}

export interface SuggestedParagraphUpdate {
  targetParagraphId?: string;
  criterionTitle: string;
  newContent: string;
  improvementNote: string;
  applied?: boolean;
}

export interface ChatVisionMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  imagePreviewUrl?: string;
  pinnedCriterionTitle?: string;
  suggestedUpdate?: SuggestedParagraphUpdate;
}
