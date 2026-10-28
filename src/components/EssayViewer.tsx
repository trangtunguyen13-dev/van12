import React, { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Sparkles, BookOpen, Bookmark, FileText } from 'lucide-react';
import { ComparisonTopic } from '../types/literature';

interface EssayViewerProps {
  topic: ComparisonTopic;
}

type AnnotationFilter = 'all' | 'theory' | 'comparison' | 'art' | 'content' | 'origin';
type PaperTheme = 'parchment' | 'book' | 'clean';

export const EssayViewer: React.FC<EssayViewerProps> = ({ topic }) => {
  const [filter, setFilter] = useState<AnnotationFilter>('all');
  const [copied, setCopied] = useState(false);
  const [showOriginalPoem, setShowOriginalPoem] = useState(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [paperTheme, setPaperTheme] = useState<PaperTheme>('parchment');

  const getFullEssayText = () => {
    let full = `ĐỀ BÀI: ${topic.title}\n`;
    full += `Yêu cầu trọng tâm: ${topic.focusQuestion}\n\n`;
    topic.essay.sections.forEach((sec) => {
      full += `${sec.title}\n`;
      sec.content.forEach((para) => {
        full += `${para}\n\n`;
      });
    });
    return full;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullEssayText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const themeStyles = {
    parchment: 'bg-[#FCF9F2] text-[#28211E] border-[#E8DFC8]',
    book: 'bg-[#F4EFE6] text-[#221B18] border-[#DFCBB5]',
    clean: 'bg-white text-[#1A1A1A] border-slate-200 shadow-xs',
  };

  const fontClass = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  }[fontSize];

  return (
    <div className="space-y-6">
      {/* Topic header banner */}
      <div className="bg-[#FAF4E8] border border-[#E5DAC3] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#EADFC7]">
          <div className="flex items-center gap-2 text-xs text-[#7A6B63]">
            <span className="font-semibold text-[#8B2635]">{topic.targetExam}</span>
            <span aria-hidden="true">·</span>
            <span>Mục tiêu: {topic.essay.targetScore}</span>
            <span aria-hidden="true">·</span>
            <span>Ước lượng: ~{topic.essay.wordCount} từ</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white border border-[#D5C9B3] text-[#423630] hover:bg-[#F2ECE0] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép bài văn' : 'Sao chép toàn bài'}</span>
            </button>
          </div>
        </div>

        <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1917] mt-3">
          {topic.title}
        </h1>
        <p className="text-sm text-[#66564E] mt-1 font-serif italic">
          {topic.subtitle}
        </p>

        <div className="mt-4 p-3 bg-white/70 border border-[#E2D5BC] rounded-lg">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-[#8B2635] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#3E332E]">
              <span className="font-semibold text-[#8B2635]">Yêu cầu trọng tâm: </span>
              {topic.focusQuestion}
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Poem Excerpts Comparison Box */}
      <div className="bg-white border border-[#E2D6C0] rounded-xl overflow-hidden shadow-xs">
        <button
          onClick={() => setShowOriginalPoem(!showOriginalPoem)}
          className="w-full px-5 py-3.5 bg-[#F6F0E4] flex items-center justify-between text-left hover:bg-[#F0E8D9] transition-colors"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#8B2635]" />
            <span className="font-serif font-bold text-sm text-[#241C19]">
              Văn bản đoạn trích cần so sánh (Tây Tiến &amp; Đồng Chí)
            </span>
            <span className="text-xs text-[#7B6A62]">
              (Bấm để {showOriginalPoem ? 'thu gọn' : 'xem đầy đủ'})
            </span>
          </div>
          {showOriginalPoem ? <ChevronUp className="w-4 h-4 text-[#63534B]" /> : <ChevronDown className="w-4 h-4 text-[#63534B]" />}
        </button>

        {showOriginalPoem && (
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FCFAF6] border-t border-[#E8DFC8]">
            {/* Poem 1 */}
            <div className="p-4 rounded-lg bg-white border border-[#E5DAC3] shadow-2xs">
              <div className="flex items-baseline justify-between border-b border-[#EBE1CF] pb-2 mb-3">
                <span className="font-serif font-bold text-base text-[#8B2635]">
                  {topic.poem1.title}
                </span>
                <span className="text-xs text-[#75655E]">{topic.poem1.author} ({topic.poem1.year})</span>
              </div>
              <p className="text-xs text-[#6A5A53] mb-3 italic">
                {topic.poem1.context}
              </p>
              <pre className="font-serif text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-[#2B231F] bg-[#FAF6EE] p-3 rounded-md border border-[#ECE2D0]">
                {topic.poem1.excerpt}
              </pre>

              {/* Key lines insight */}
              <div className="mt-3 pt-3 border-t border-[#EFE5D5]">
                <div className="text-xs font-semibold text-[#8B2635] mb-1.5">Câu thơ đinh &amp; điểm sáng thẩm mỹ:</div>
                <ul className="space-y-1.5 text-xs text-[#52443D]">
                  {topic.keyQuotes.poem1.map((q, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-serif italic font-medium text-[#221A17]">"{q.line}"</span>
                      <span className="text-[#6E5E57]">{q.analysis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Poem 2 */}
            <div className="p-4 rounded-lg bg-white border border-[#E5DAC3] shadow-2xs">
              <div className="flex items-baseline justify-between border-b border-[#EBE1CF] pb-2 mb-3">
                <span className="font-serif font-bold text-base text-[#8B2635]">
                  {topic.poem2.title}
                </span>
                <span className="text-xs text-[#75655E]">{topic.poem2.author} ({topic.poem2.year})</span>
              </div>
              <p className="text-xs text-[#6A5A53] mb-3 italic">
                {topic.poem2.context}
              </p>
              <pre className="font-serif text-xs sm:text-sm whitespace-pre-wrap leading-relaxed text-[#2B231F] bg-[#FAF6EE] p-3 rounded-md border border-[#ECE2D0]">
                {topic.poem2.excerpt}
              </pre>

              {/* Key lines insight */}
              <div className="mt-3 pt-3 border-t border-[#EFE5D5]">
                <div className="text-xs font-semibold text-[#8B2635] mb-1.5">Câu thơ đinh &amp; điểm sáng thẩm mỹ:</div>
                <ul className="space-y-1.5 text-xs text-[#52443D]">
                  {topic.keyQuotes.poem2.map((q, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-serif italic font-medium text-[#221A17]">"{q.line}"</span>
                      <span className="text-[#6E5E57]">{q.analysis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reader Controls: Font, Theme, Rubric Filter */}
      <div className="bg-[#F8F2E6] border border-[#E5DAC3] rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
        {/* Rubric annotation filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-medium text-[#6B5A51] mr-1">Soi tiêu chí 9+:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
              filter === 'all'
                ? 'bg-[#8B2635] text-white'
                : 'bg-white text-[#52433C] border border-[#DDD3BF] hover:bg-[#F2ECE0]'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter('theory')}
            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
              filter === 'theory'
                ? 'bg-[#7030A0] text-white'
                : 'bg-white text-[#52433C] border border-[#DDD3BF] hover:bg-[#F2ECE0]'
            }`}
          >
            Lí luận văn học
          </button>
          <button
            onClick={() => setFilter('comparison')}
            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
              filter === 'comparison'
                ? 'bg-[#1E56A0] text-white'
                : 'bg-white text-[#52433C] border border-[#DDD3BF] hover:bg-[#F2ECE0]'
            }`}
          >
            Đối chiếu so sánh
          </button>
          <button
            onClick={() => setFilter('art')}
            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
              filter === 'art'
                ? 'bg-[#B45309] text-white'
                : 'bg-white text-[#52433C] border border-[#DDD3BF] hover:bg-[#F2ECE0]'
            }`}
          >
            Đặc sắc nghệ thuật
          </button>
          <button
            onClick={() => setFilter('origin')}
            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
              filter === 'origin'
                ? 'bg-[#15803D] text-white'
                : 'bg-white text-[#52433C] border border-[#DDD3BF] hover:bg-[#F2ECE0]'
            }`}
          >
            Lí giải căn nguyên
          </button>
        </div>

        {/* Font size & Theme selectors */}
        <div className="flex items-center gap-3">
          {/* Paper theme */}
          <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-lg border border-[#DDD1BA] text-xs">
            <button
              onClick={() => setPaperTheme('parchment')}
              className={`px-2 py-0.5 rounded ${paperTheme === 'parchment' ? 'bg-[#FAF4E8] font-bold text-[#8B2635]' : 'text-[#6B5A51]'}`}
              title="Màu giấy ngà ấm áp"
            >
              Giấy ngà
            </button>
            <button
              onClick={() => setPaperTheme('book')}
              className={`px-2 py-0.5 rounded ${paperTheme === 'book' ? 'bg-[#EDE4D5] font-bold text-[#8B2635]' : 'text-[#6B5A51]'}`}
              title="Màu sách cổ điển"
            >
              Sách cổ
            </button>
            <button
              onClick={() => setPaperTheme('clean')}
              className={`px-2 py-0.5 rounded ${paperTheme === 'clean' ? 'bg-slate-100 font-bold text-slate-800' : 'text-[#6B5A51]'}`}
              title="Giấy trắng tinh"
            >
              Trắng
            </button>
          </div>

          {/* Font size */}
          <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-lg border border-[#DDD1BA] text-xs">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded ${fontSize === 'normal' ? 'bg-[#EAE1CF] font-bold text-[#1F1917]' : 'text-[#6B5A51]'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded ${fontSize === 'large' ? 'bg-[#EAE1CF] font-bold text-[#1F1917]' : 'text-[#6B5A51]'}`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xl')}
              className={`px-2 py-0.5 rounded ${fontSize === 'xl' ? 'bg-[#EAE1CF] font-bold text-[#1F1917]' : 'text-[#6B5A51]'}`}
            >
              A++
            </button>
          </div>
        </div>
      </div>

      {/* Main Essay Body Container */}
      <article className={`p-6 sm:p-10 rounded-2xl border ${themeStyles[paperTheme]} shadow-sm transition-all duration-300 font-serif`}>
        <div className="max-w-4xl mx-auto space-y-8">
          {topic.essay.sections.map((section, sIdx) => {
            // Check if section annotations match active filter
            const visibleAnnotations = section.annotations?.filter((ann) => {
              if (filter === 'all') return true;
              return ann.type === filter;
            });

            return (
              <section key={section.id || sIdx} className="space-y-4 pt-2">
                {/* Section Header */}
                <div className="border-b border-[#E8DFC8] pb-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif font-bold text-lg sm:text-xl text-[#8B2635] tracking-tight">
                      {section.title}
                    </h2>
                    <span className="text-xs font-sans text-[#7E6E67]">
                      Phần {sIdx + 1}
                    </span>
                  </div>
                  {section.subtitle && (
                    <p className="text-xs sm:text-sm font-sans text-[#6B5B54] mt-0.5">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                {/* Section Paragraphs */}
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className={`${fontClass} text-justify indent-8 text-[#2C2320] leading-relaxed`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Rubric / Criteria Annotations Box (if matches filter) */}
                {visibleAnnotations && visibleAnnotations.length > 0 && (
                  <div className="mt-3 p-3.5 bg-black/3 rounded-lg border border-[#E0D5C1] space-y-2 font-sans">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B2635]">
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Điểm cộng tiêu chí bài văn 9+ ở đoạn này:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {visibleAnnotations.map((ann, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-2 rounded bg-white/80 border border-[#E2D7C4] text-[#42352F]"
                        >
                          <span
                            className={`font-semibold mr-1.5 ${
                              ann.type === 'theory'
                                ? 'text-[#7030A0]'
                                : ann.type === 'comparison'
                                ? 'text-[#1E56A0]'
                                : ann.type === 'art'
                                ? 'text-[#B45309]'
                                : 'text-[#15803D]'
                            }`}
                          >
                            [{ann.label}]:
                          </span>
                          <span>{ann.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}

          {/* End of Essay marker */}
          <div className="pt-8 text-center border-t border-[#E8DFC8]">
            <div className="inline-flex items-center gap-2 text-xs text-[#7A6B63] font-sans">
              <FileText className="w-4 h-4 text-[#8B2635]" />
              <span>Hết bài văn nghị luận so sánh</span>
              <span aria-hidden="true">·</span>
              <span>Đạt tiêu chuẩn 9+ kỳ thi THPT &amp; HSG môn Ngữ Văn</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
