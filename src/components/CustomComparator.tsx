import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, BookOpen, RefreshCw, AlertCircle, FileText } from 'lucide-react';

export const CustomComparator: React.FC = () => {
  const [poem1Title, setPoem1Title] = useState('Việt Bắc');
  const [poem1Author, setPoem1Author] = useState('Tố Hữu');
  const [poem1Excerpt, setPoem1Excerpt] = useState(`Mình về mình có nhớ ta
Mười lăm năm ấy thiết tha mặn nồng.
Mình về mình có nhớ không
Nhìn cây nhớ núi, nhìn sông nhớ nguồn?`);

  const [poem2Title, setPoem2Title] = useState('Tây Tiến');
  const [poem2Author, setPoem2Author] = useState('Quang Dũng');
  const [poem2Excerpt, setPoem2Excerpt] = useState(`Sông Mã xa rồi Tây Tiến ơi!
Nhớ về rừng núi nhớ chơi vơi
Sài Khao sương lấp đoàn quân mỏi
Mường Lát hoa về trong đêm hơi`);

  const [focusRequirement, setFocusRequirement] = useState('So sánh nỗi nhớ và phong cách nghệ thuật của hai nhà thơ');
  const [mode, setMode] = useState<'full_essay' | 'outline'>('full_essay');

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleQuickPreset = (preset: {
    p1: { title: string; author: string; excerpt: string };
    p2: { title: string; author: string; excerpt: string };
    req: string;
  }) => {
    setPoem1Title(preset.p1.title);
    setPoem1Author(preset.p1.author);
    setPoem1Excerpt(preset.p1.excerpt);
    setPoem2Title(preset.p2.title);
    setPoem2Author(preset.p2.author);
    setPoem2Excerpt(preset.p2.excerpt);
    setFocusRequirement(preset.req);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          poem1: { title: poem1Title, author: poem1Author, excerpt: poem1Excerpt },
          poem2: { title: poem2Title, author: poem2Author, excerpt: poem2Excerpt },
          focusRequirement,
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra khi tạo bài viết');
      }

      setResult(data.content);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Không thể kết nối đến máy chủ.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-[#FAF4E8] border border-[#E5DAC3] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8B2635] uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Xưởng Nghị Luận Thơ 12 Tùy Biến</span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1917] mt-1">
          So Sánh Bất Kỳ 2 Tác Phẩm / Đoạn Trích Thơ Lớp 12
        </h2>
        <p className="text-sm text-[#66564E] mt-1.5 font-serif">
          Nhập hai đoạn thơ bất kỳ, AI Studio sẽ áp dụng chính xác 100% khung tiêu chí 9+ (Nội dung, Nghệ thuật, Bối cảnh &amp; Lí luận văn học) đã được huấn luyện để viết bài hoàn chỉnh hoặc lập dàn ý chi tiết.
        </p>

        {/* Quick presets */}
        <div className="mt-4 pt-3 border-t border-[#E8DFC8] flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#6B5A51] mr-1">Bộ đề thi thử nhanh:</span>
          <button
            type="button"
            onClick={() =>
              handleQuickPreset({
                p1: {
                  title: 'Việt Bắc',
                  author: 'Tố Hữu',
                  excerpt: `Mình về mình có nhớ ta\nMười lăm năm ấy thiết tha mặn nồng.\nMình về mình có nhớ không\nNhìn cây nhớ núi, nhìn sông nhớ nguồn?`,
                },
                p2: {
                  title: 'Tây Tiến',
                  author: 'Quang Dũng',
                  excerpt: `Sông Mã xa rồi Tây Tiến ơi!\nNhớ về rừng núi nhớ chơi vơi\nSài Khao sương lấp đoàn quân mỏi\nMường Lát hoa về trong đêm hơi`,
                },
                req: 'So sánh nỗi nhớ và phong cách nghệ thuật của hai nhà thơ',
              })
            }
            className="px-2.5 py-1 text-xs bg-white text-[#4A3C36] rounded border border-[#D5C9B3] hover:bg-[#F2ECE0]"
          >
            Việt Bắc vs Tây Tiến
          </button>

          <button
            type="button"
            onClick={() =>
              handleQuickPreset({
                p1: {
                  title: 'Đồng Chí',
                  author: 'Chính Hữu',
                  excerpt: `Áo anh rách vai\nQuần tôi có vài mảnh vá\nMiệng cười buốt giá\nChân không giày\nThương nhau tay nắm lấy bàn tay!`,
                },
                p2: {
                  title: 'Bài thơ về tiểu đội xe không kính',
                  author: 'Phạm Tiến Duật',
                  excerpt: `Không có kính, ừ thì có bụi,\nBụi phun tóc trắng như người già\nChưa cần rửa, phì phèo châm điếu thuốc\nNhìn nhau mặt lấm cười ha ha.`,
                },
                req: 'So sánh tinh thần lạc quan và vẻ đẹp người lính qua hai thời kỳ kháng chiến (chống Pháp vs chống Mỹ)',
              })
            }
            className="px-2.5 py-1 text-xs bg-white text-[#4A3C36] rounded border border-[#D5C9B3] hover:bg-[#F2ECE0]"
          >
            Đồng Chí vs Xe Không Kính
          </button>

          <button
            type="button"
            onClick={() =>
              handleQuickPreset({
                p1: {
                  title: 'Tràng Giang',
                  author: 'Huy Cận',
                  excerpt: `Sóng gợn tràng giang buồn điệp điệp,\nCon thuyền xuôi mái nước song song.\nThuyền về nước lại, sầu trăm ngả;\nCủi một cành khô lạc mấy dòng.`,
                },
                p2: {
                  title: 'Đây Thôn Vĩ Dạ',
                  author: 'Hàn Mặc Tử',
                  excerpt: `Sao anh không về chơi thôn Vĩ?\nNhìn nắng hàng cau nắng mới lên.\nVườn ai mướt quá xanh như ngọc\nLá trúc che ngang mặt chữ điền.`,
                },
                req: 'So sánh không gian nghệ thuật và tâm trạng u hoài của cái tôi Thơ Mới',
              })
            }
            className="px-2.5 py-1 text-xs bg-white text-[#4A3C36] rounded border border-[#D5C9B3] hover:bg-[#F2ECE0]"
          >
            Tràng Giang vs Đây Thôn Vĩ Dạ
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleGenerate} className="bg-white border border-[#E3D6BF] rounded-xl p-6 shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Poem 1 Input */}
          <div className="space-y-3 p-4 rounded-lg bg-[#FCFBF8] border border-[#EBE1CF]">
            <div className="font-serif font-bold text-sm text-[#8B2635] flex items-center justify-between">
              <span>Tác phẩm / Đoạn trích 1</span>
              <BookOpen className="w-4 h-4 text-[#8B2635]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium text-[#6B5A51] mb-1">Tên tác phẩm</label>
                <input
                  type="text"
                  value={poem1Title}
                  onChange={(e) => setPoem1Title(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded border border-[#D5C9B3] bg-white focus:outline-none focus:ring-1 focus:ring-[#8B2635]"
                  placeholder="Ví dụ: Tây Tiến"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6B5A51] mb-1">Tác giả</label>
                <input
                  type="text"
                  value={poem1Author}
                  onChange={(e) => setPoem1Author(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded border border-[#D5C9B3] bg-white focus:outline-none focus:ring-1 focus:ring-[#8B2635]"
                  placeholder="Ví dụ: Quang Dũng"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6B5A51] mb-1">Đoạn thơ trích dẫn</label>
              <textarea
                rows={4}
                value={poem1Excerpt}
                onChange={(e) => setPoem1Excerpt(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded border border-[#D5C9B3] bg-white font-serif leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#8B2635]"
                placeholder="Dán các câu thơ đoạn 1 vào đây..."
                required
              />
            </div>
          </div>

          {/* Poem 2 Input */}
          <div className="space-y-3 p-4 rounded-lg bg-[#FCFBF8] border border-[#EBE1CF]">
            <div className="font-serif font-bold text-sm text-[#1E56A0] flex items-center justify-between">
              <span>Tác phẩm / Đoạn trích 2</span>
              <BookOpen className="w-4 h-4 text-[#1E56A0]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium text-[#6B5A51] mb-1">Tên tác phẩm</label>
                <input
                  type="text"
                  value={poem2Title}
                  onChange={(e) => setPoem2Title(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded border border-[#D5C9B3] bg-white focus:outline-none focus:ring-1 focus:ring-[#1E56A0]"
                  placeholder="Ví dụ: Đồng Chí"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6B5A51] mb-1">Tác giả</label>
                <input
                  type="text"
                  value={poem2Author}
                  onChange={(e) => setPoem2Author(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded border border-[#D5C9B3] bg-white focus:outline-none focus:ring-1 focus:ring-[#1E56A0]"
                  placeholder="Ví dụ: Chính Hữu"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6B5A51] mb-1">Đoạn thơ trích dẫn</label>
              <textarea
                rows={4}
                value={poem2Excerpt}
                onChange={(e) => setPoem2Excerpt(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded border border-[#D5C9B3] bg-white font-serif leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#1E56A0]"
                placeholder="Dán các câu thơ đoạn 2 vào đây..."
                required
              />
            </div>
          </div>
        </div>

        {/* Requirements and mode */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-[#6B5A51] mb-1">
              Yêu cầu so sánh cụ thể
            </label>
            <input
              type="text"
              value={focusRequirement}
              onChange={(e) => setFocusRequirement(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded border border-[#D5C9B3] bg-white focus:outline-none focus:ring-1 focus:ring-[#8B2635]"
              placeholder="Ví dụ: So sánh vẻ đẹp hình tượng người lính và phong cách nghệ thuật..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#6B5A51] mb-1">Chế độ tạo</label>
            <div className="flex rounded-md border border-[#D5C9B3] overflow-hidden p-0.5 bg-[#FAF6EE]">
              <button
                type="button"
                onClick={() => setMode('full_essay')}
                className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
                  mode === 'full_essay'
                    ? 'bg-[#8B2635] text-white shadow-xs'
                    : 'text-[#5B4C45] hover:bg-white'
                }`}
              >
                Bài văn 9+
              </button>
              <button
                type="button"
                onClick={() => setMode('outline')}
                className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
                  mode === 'outline'
                    ? 'bg-[#8B2635] text-white shadow-xs'
                    : 'text-[#5B4C45] hover:bg-white'
                }`}
              >
                Dàn ý chi tiết
              </button>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#8B2635] text-white font-serif font-bold text-sm hover:bg-[#721F2C] disabled:opacity-60 transition-colors shadow-sm"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Đang phân tích &amp; vận dụng lí luận...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Tạo bài văn so sánh chuẩn 9+</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Thông báo:</div>
            <div>{error}</div>
            <div className="mt-1 text-amber-800">
              Bạn có thể xem các bài văn so sánh mẫu đỉnh cao đã được biên soạn sẵn ở các tab trên (Tây Tiến &amp; Đồng Chí, Mùa xuân xanh &amp; Mùa xuân nho nhỏ, Sóng &amp; Vội vàng).
            </div>
          </div>
        </div>
      )}

      {/* Result view */}
      {result && (
        <div className="bg-[#FCF9F2] border border-[#E5DAC3] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E8DFC8]">
            <div className="flex items-center gap-2 text-xs text-[#7A6A62]">
              <FileText className="w-4 h-4 text-[#8B2635]" />
              <span className="font-semibold text-[#8B2635]">Kết quả bài viết so sánh văn học</span>
              <span aria-hidden="true">·</span>
              <span>Dung lượng: ~{result.split(/\s+/).length} từ</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-[#D5C9B3] text-xs text-[#42352F] hover:bg-[#F2ECE0] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép văn bản'}</span>
            </button>
          </div>

          <div className="font-serif text-sm sm:text-base leading-relaxed text-[#2C231F] whitespace-pre-wrap space-y-4">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};
