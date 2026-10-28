import React from 'react';
import { BookOpen, Layers, Award, Sparkles, Feather, Printer, Volume2, VolumeX } from 'lucide-react';
import { ComparisonTopic } from '../types/literature';

interface HeaderProps {
  topics: ComparisonTopic[];
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
  activeTab: 'essay' | 'matrix' | 'rubric' | 'theory' | 'custom';
  setActiveTab: (tab: 'essay' | 'matrix' | 'rubric' | 'theory' | 'custom') => void;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  activeTab,
  setActiveTab,
  isSpeaking,
  onToggleSpeech,
  onPrint,
}) => {
  return (
    <header className="border-b border-[#E8DFC8] bg-[#F7F2E7]/80 backdrop-blur-md sticky top-0 z-40">
      {/* Top bar with academic brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#8B2635] text-[#FAF7F2] flex items-center justify-center shadow-xs">
            <Feather className="w-5 h-5 text-[#FAF7F2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-[#1F1917] tracking-tight">
                Thi Văn 12
              </span>
              <span className="text-[#8B2635] text-xs font-semibold tracking-wider uppercase">
                Chuyên Đề Nghị Luận So Sánh Thơ 9+
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#705F55]">
              <span>Chuẩn cấu trúc 2025 - 2026</span>
              <span aria-hidden="true">·</span>
              <span>Đối chiếu hình tượng & Phong cách nghệ thuật</span>
              <span aria-hidden="true">·</span>
              <span>Dung lượng &gt;1.500 chữ</span>
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSpeech}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              isSpeaking
                ? 'bg-[#8B2635] text-white border-[#8B2635]'
                : 'bg-white text-[#55473F] border-[#E0D5BE] hover:bg-[#FAF7F2]'
            }`}
            title="Đọc to bài văn bằng giọng tiếng Việt"
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isSpeaking ? 'Dừng đọc' : 'Đọc bài văn'}</span>
          </button>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white text-[#55473F] border border-[#E0D5BE] hover:bg-[#FAF7F2] transition-colors"
            title="In hoặc lưu dạng PDF để học tập"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>In bài (PDF)</span>
          </button>
        </div>
      </div>

      {/* Topics selection bar */}
      <div className="bg-[#EFE8D6]/70 border-t border-[#E8DFC8] px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#705F55]">
            <span>Đề bài trọng tâm:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onSelectTopic(t.id)}
                  className={`px-3 py-1 text-xs rounded-md font-serif transition-colors ${
                    selectedTopicId === t.id
                      ? 'bg-[#8B2635] text-white font-semibold shadow-xs'
                      : 'bg-white/80 text-[#473B35] hover:bg-white border border-[#DDD3BC]'
                  }`}
                >
                  {t.id === 'taytien-dongchi' && '★ '}
                  {t.poem1.title} &amp; {t.poem2.title}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-[#8B2635] font-serif italic">
            Mục tiêu: Đạt điểm 9.0 - 9.5 Ngữ Văn THPT
          </div>
        </div>
      </div>

      {/* Main navigation tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 sm:space-x-4 border-t border-[#E8DFC8]/60 pt-1" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('essay')}
            className={`flex items-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'essay'
                ? 'border-[#8B2635] text-[#8B2635] font-semibold'
                : 'border-transparent text-[#6B5A51] hover:text-[#1F1917] hover:border-[#D5C9B3]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Bài Văn Mẫu 9+ &amp; Chú Giải</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'matrix'
                ? 'border-[#8B2635] text-[#8B2635] font-semibold'
                : 'border-transparent text-[#6B5A51] hover:text-[#1F1917] hover:border-[#D5C9B3]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Ma Trận Đối Chiếu Song Song</span>
          </button>

          <button
            onClick={() => setActiveTab('rubric')}
            className={`flex items-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'rubric'
                ? 'border-[#8B2635] text-[#8B2635] font-semibold'
                : 'border-transparent text-[#6B5A51] hover:text-[#1F1917] hover:border-[#D5C9B3]'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Khung Tiêu Chí &amp; Dàn Ý Chuẩn</span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`flex items-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'theory'
                ? 'border-[#8B2635] text-[#8B2635] font-semibold'
                : 'border-transparent text-[#6B5A51] hover:text-[#1F1917] hover:border-[#D5C9B3]'
            }`}
          >
            <Feather className="w-4 h-4" />
            <span>Sổ Tay Lí Luận &amp; Chuyển Đoạn</span>
          </button>

          <button
            onClick={() => setActiveTab('custom')}
            className={`flex items-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'custom'
                ? 'border-[#8B2635] text-[#8B2635] font-semibold'
                : 'border-transparent text-[#6B5A51] hover:text-[#1F1917] hover:border-[#D5C9B3]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#8B2635]" />
            <span>Tạo Đề &amp; Phân Tích Thơ Mới (AI)</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
