import React, { useState } from 'react';
import { Feather, Copy, Check, Quote, ArrowRight, Lightbulb } from 'lucide-react';
import { LITERARY_QUOTES, TRANSITION_FORMULAS } from '../data/literaryTheory';

export const TheoryPocketbook: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const themes = ['All', 'Sức sống văn chương', 'Cá tính sáng tạo', 'Hiện thực & Đời sống', 'Bản chất thơ ca'];

  const filteredQuotes = LITERARY_QUOTES.filter((q) => {
    if (selectedTheme === 'All') return true;
    return q.theme === selectedTheme;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-[#FAF4E8] border border-[#E5DAC3] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8B2635] uppercase tracking-wider">
          <Feather className="w-4 h-4" />
          <span>Vũ khí đạt điểm 9+ môn Ngữ Văn</span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1917] mt-1">
          Sổ Tay Lí Luận Văn Học &amp; Câu Nối Chuyển Đoạn Đắt Giá
        </h2>
        <p className="text-sm text-[#66564E] mt-1.5 font-serif">
          Kho tàng các nhận định lí luận kinh điển của Bielinsky, Xê-đrin, Chế Lan Viên, Pau-tốp-xki... kèm theo công thức câu nối chuyển ý mượt mà giúp bài viết thanh thoát và giàu chất văn.
        </p>

        {/* Filter categories */}
        <div className="mt-4 pt-3 border-t border-[#E8DFC8] flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#6B5A51] mr-1">Chủ đề lí luận:</span>
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTheme(t)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                selectedTheme === t
                  ? 'bg-[#8B2635] text-white shadow-xs'
                  : 'bg-white text-[#4A3C36] border border-[#D5C9B3] hover:bg-[#F2ECE0]'
              }`}
            >
              {t === 'All' ? 'Tất cả chủ đề' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Literary Quotes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuotes.map((q) => (
          <div
            key={q.id}
            className="p-5 rounded-xl bg-white border border-[#E4D7C1] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#7B6A62] pb-2 border-b border-[#EFE5D5]">
                <span className="font-semibold text-[#8B2635]">{q.author}</span>
                <span>[{q.theme}]</span>
              </div>

              <div className="mt-3 relative pl-6">
                <Quote className="w-4 h-4 text-[#C4B39F] absolute left-0 top-0" />
                <p className="font-serif italic text-sm sm:text-base text-[#241C19] font-medium leading-relaxed">
                  "{q.quote}"
                </p>
              </div>

              {/* Application Guide */}
              <div className="mt-3.5 p-3 rounded-lg bg-[#FAF5EC] border border-[#ECE0CC] text-xs space-y-1.5">
                <div className="flex items-center gap-1 font-semibold text-[#8B2635]">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Cách vận dụng vào bài so sánh:</span>
                </div>
                <p className="text-[#52443C]">{q.applicationGuide}</p>

                <div className="pt-2 border-t border-[#E8DCC8]">
                  <span className="font-semibold text-[#281F1C]">Câu mẫu: </span>
                  <span className="italic text-[#5A4B43]">"{q.sampleTransition}"</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0E6D6] flex justify-end">
              <button
                onClick={() => handleCopy(q.id, `"${q.quote}" - ${q.author}`)}
                className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-[#F6F0E2] text-[#42352F] hover:bg-[#EFE8D6] transition-colors"
              >
                {copiedId === q.id ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Đã chép nhận định</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Chép nhận định</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Transition Formulas Section */}
      <div className="bg-white border border-[#E3D6BF] rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-[#EBE1CF]">
          <ArrowRight className="w-5 h-5 text-[#8B2635]" />
          <h3 className="font-serif font-bold text-lg text-[#1F1917]">
            Công Thức Câu Nối Chuyển Ý "Thần Sầu" Giúp Bài Văn Đạt 9+
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-[#5D4E47] font-serif">
          Điểm 9+ môn Ngữ văn không cho phép các đoạn văn rời rạc, chắp vá. Học sinh cần rèn luyện khả năng sử dụng các câu chuyển tiếp nối ý tinh tế, tự nhiên giữa các luận điểm:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {TRANSITION_FORMULAS.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#FAF5EB] border border-[#E5DAC3] space-y-2">
              <div className="font-serif font-bold text-sm text-[#8B2635]">
                {idx + 1}. {item.title}
              </div>
              <p className="text-xs text-[#705F56] italic">
                Bối cảnh sử dụng: {item.context}
              </p>
              <div className="p-2.5 bg-white rounded border border-[#E0D5BE] text-xs text-[#2A211D] font-serif leading-relaxed">
                "{item.formula}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
