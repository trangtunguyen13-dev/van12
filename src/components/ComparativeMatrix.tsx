import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRightLeft, Sparkles, Filter } from 'lucide-react';
import { ComparisonTopic } from '../types/literature';

interface ComparativeMatrixProps {
  topic: ComparisonTopic;
}

export const ComparativeMatrix: React.FC<ComparativeMatrixProps> = ({ topic }) => {
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Nội dung' | 'Nghệ thuật' | 'Bối cảnh & Phong cách'>('All');

  const filteredMatrix = topic.matrix.filter((item) => {
    if (categoryFilter === 'All') return true;
    return item.category === categoryFilter;
  });

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-[#FAF4E8] border border-[#E5DAC3] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8B2635] uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Bảng ma trận đối chiếu trực quan</span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1917] mt-1">
          So sánh đối chiếu chi tiết: {topic.poem1.title} ({topic.poem1.author}) &amp; {topic.poem2.title} ({topic.poem2.author})
        </h2>
        <p className="text-sm text-[#66564E] mt-1.5 font-serif">
          Hệ thống hóa toàn bộ các bình diện nội dung, đặc sắc nghệ thuật và căn nguyên thẩm mỹ giúp học sinh nắm trọn cấu trúc so sánh trong 3 phút.
        </p>

        {/* Filter categories */}
        <div className="mt-4 pt-3 border-t border-[#E8DFC8] flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-[#6B5A51] mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Lọc khía cạnh:</span>
          </div>
          {(['All', 'Nội dung', 'Nghệ thuật', 'Bối cảnh & Phong cách'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                categoryFilter === cat
                  ? 'bg-[#8B2635] text-white shadow-xs'
                  : 'bg-white text-[#4A3C36] border border-[#D5C9B3] hover:bg-[#F2ECE0]'
              }`}
            >
              {cat === 'All' ? 'Tất cả tiêu chí' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-[#E2D5BC] rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F4ECE0] border-b border-[#E0D3BC] text-xs font-serif font-bold text-[#2A211D]">
                <th className="py-3 px-4 w-1/5">Tiêu chí so sánh</th>
                <th className="py-3 px-4 w-2/5 border-l border-[#E2D5BC] text-[#8B2635]">
                  {topic.poem1.title} ({topic.poem1.author})
                </th>
                <th className="py-3 px-4 w-2/5 border-l border-[#E2D5BC] text-[#1E56A0]">
                  {topic.poem2.title} ({topic.poem2.author})
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBE1CF] text-xs sm:text-sm">
              {filteredMatrix.map((item, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-[#FAF7F0] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FDFBF7]'
                  }`}
                >
                  {/* Criterion column */}
                  <td className="py-3.5 px-4 font-serif font-bold text-[#2C231F] align-top">
                    <div>{item.criterion}</div>
                    <span className="inline-block mt-1 text-[11px] font-sans font-normal text-[#8A7A72]">
                      [{item.category}]
                    </span>
                  </td>

                  {/* Poem 1 column */}
                  <td className="py-3.5 px-4 border-l border-[#EAE0CD] text-[#2C231F] leading-relaxed align-top">
                    {item.poem1Aspect}
                  </td>

                  {/* Poem 2 column */}
                  <td className="py-3.5 px-4 border-l border-[#EAE0CD] text-[#2C231F] leading-relaxed align-top">
                    {item.poem2Aspect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E3D7C2]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8B2635] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Mấu chốt đạt điểm 9+ ở bài so sánh này</span>
          </div>
          <p className="text-xs sm:text-sm text-[#4E3F37] leading-relaxed font-serif">
            Học sinh không được phân tích rời rạc từng tác phẩm thành hai bài văn thu nhỏ! Phải luôn dùng thao tác lập luận so sánh song hành: sau khi phân tích hình tượng người lính Tây Tiến hào hoa, bi tráng, lập tức đặt cạnh hình ảnh người lính nông dân mộc mạc của Đồng chí để làm bừng sáng nét riêng của từng thi phẩm.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E3D7C2]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1E56A0] mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Nguyên tắc tách đoạn chuẩn mực</span>
          </div>
          <p className="text-xs sm:text-sm text-[#4E3F37] leading-relaxed font-serif">
            Mỗi yếu tố so sánh (nhân vật trữ tình, cảm hứng chủ đạo, ngôn ngữ, thể thơ, lí giải nguyên nhân) bắt buộc phải tách thành một đoạn văn độc lập có câu chủ đề rõ ràng, câu chuyển tiếp mượt mà, tránh gộp chung thành một đoạn dài gây ngợp và mất điểm cấu trúc.
          </p>
        </div>
      </div>
    </div>
  );
};
