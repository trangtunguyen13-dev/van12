import React from 'react';
import { Award, CheckCircle, FileText, Compass, ListOrdered, Sparkles, BookOpen } from 'lucide-react';

export const RubricGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-[#FAF4E8] border border-[#E5DAC3] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8B2635] uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Cẩm nang phương pháp luận</span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1917] mt-1">
          Quy Chuẩn Viết Bài Văn Nghị Luận So Sánh 2 Tác Phẩm Thơ (Mục Tiêu 9+ Điểm)
        </h2>
        <p className="text-sm text-[#66564E] mt-1.5 font-serif">
          Hệ thống tiêu chí chấm điểm khắt khe và công thức triển khai dàn ý chi tiết bám sát chương trình Giáo dục Phổ thông Ngữ Văn 12 và cấu trúc đề thi THPT Quốc gia / Đánh giá năng lực.
        </p>
      </div>

      {/* Part 1: Criteria Breakdown */}
      <div className="bg-white border border-[#E3D6BF] rounded-xl p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#EBE1CF]">
          <Compass className="w-5 h-5 text-[#8B2635]" />
          <h3 className="font-serif font-bold text-lg text-[#1F1917]">
            1. Các Tiêu Chí So Sánh 2 Tác Phẩm Thơ Cốt Lõi
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Content Criteria */}
          <div className="p-4 rounded-lg bg-[#FCFBF8] border border-[#EAE0CE]">
            <div className="font-serif font-bold text-base text-[#8B2635] mb-2 flex items-center justify-between">
              <span>A. Tiêu chí về Nội dung</span>
              <span className="text-xs font-sans text-[#7B6A62]">7 khía cạnh cốt tử</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3E322D]">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Đề tài, chủ đề:</span>
                <span>Cùng hướng về một đề tài (người lính, mùa xuân, tình yêu quê hương, đất nước) nhưng khai thác lát cắt đời sống nào?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Nhan đề tác phẩm:</span>
                <span>Nhan đề mang tính khái quát, ước lệ (Tây Tiến) hay chứa đựng định danh triết lý tình cảm (Đồng chí)?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Nhân vật trữ tình:</span>
                <span>Là ai? Xuất thân từ đâu (trí thức đô thị, nông dân bần hàn)? Tâm thế, phong thái và lý tưởng ra sao?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Cảm hứng chủ đạo &amp; Mạch cảm xúc:</span>
                <span>Cảm hứng lãng mạn bi tráng, cảm hứng ngợi ca sử thi, hay cảm hứng ân tình trầm lắng, hoài niệm?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Đối tượng trữ tình (Hình ảnh trung tâm):</span>
                <span>Hình tượng người chiến sĩ, con người trong thử thách, không gian núi rừng Tây Bắc hay chiến khu Việt Bắc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Ý nghĩa từ ngữ &amp; Thi ảnh biểu tượng:</span>
                <span>Sức nén của các chi tiết đắt giá ("mắt trừng", "áo bào", "đầu súng trăng treo", "giọt long lanh rơi").</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#8B2635] shrink-0">• Tư tưởng, thông điệp nhân sinh:</span>
                <span>Khẳng định bản lĩnh con người Việt Nam, bài học về lý tưởng sống, đức hy sinh và tình người thời tao loạn.</span>
              </li>
            </ul>
          </div>

          {/* Art Criteria */}
          <div className="p-4 rounded-lg bg-[#FCFBF8] border border-[#EAE0CE]">
            <div className="font-serif font-bold text-base text-[#1E56A0] mb-2 flex items-center justify-between">
              <span>B. Tiêu chí về Nghệ thuật</span>
              <span className="text-xs font-sans text-[#7B6A62]">5 trụ cột thi pháp</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3E322D]">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#1E56A0] shrink-0">• Thể thơ:</span>
                <span>Thất ngôn (7 chữ) trang trọng, ngũ ngôn (5 chữ) cô đọng, lục bát ngọt ngào hay thơ tự do biến hóa phóng khoáng?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#1E56A0] shrink-0">• Ngôn ngữ thơ, nhịp, vần, thanh điệu:</span>
                <span>Ngắt nhịp đanh gọn (4/3, 2/2/3) hay nhịp vắt dòng duyên dáng; phối thanh trắc gân guốc đối phối thanh bằng du dương?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#1E56A0] shrink-0">• Giọng điệu chủ đạo:</span>
                <span>Hào sảng, trầm hùng, bi tráng hay thủ thỉ, tâm tình, tha thiết, đượm phong vị ca dao?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#1E56A0] shrink-0">• Cách sử dụng từ ngữ, hình ảnh thơ:</span>
                <span>Hệ thống từ Hán Việt cổ kính đối sánh với thành ngữ dân gian mộc mạc; khẩu ngữ đời lính tự nhiên.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#1E56A0] shrink-0">• Các biện pháp tu từ đặc sắc:</span>
                <span>Nói giảm nói tránh, tương phản đối lập, ẩn dụ chuyển đổi cảm giác, điệp cấu trúc, hoán dụ, nhân hóa kì vĩ.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Part 2: Standard Master Outline */}
      <div className="bg-white border border-[#E3D6BF] rounded-xl p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-[#EBE1CF]">
          <ListOrdered className="w-5 h-5 text-[#8B2635]" />
          <h3 className="font-serif font-bold text-lg text-[#1F1917]">
            2. Cấu Trúc Dàn Ý Bài Văn So Sánh Đạt Chuẩn 9+ Điểm
          </h3>
        </div>

        {/* Section 1: Opening */}
        <div className="border-l-3 border-[#8B2635] pl-4 space-y-2">
          <div className="font-serif font-bold text-base text-[#8B2635]">
            I. Mở bài (Khoảng 8 - 10 dòng)
          </div>
          <p className="text-xs sm:text-sm text-[#4E3F37] leading-relaxed">
            <strong>Cách viết 9+:</strong> Đi mở bài gián tiếp bằng một nhận định lí luận văn học (nhận định của Pau-tốp-xki, Chế Lan Viên, Belinsky, Tô Hoài) về sứ mệnh văn chương hoặc cội nguồn sáng tạo; dẫn dắt về đề tài; giới thiệu ngắn gọn 2 tác giả, 2 tác phẩm/đoạn trích và nêu bật vấn đề cần so sánh (hình tượng nhân vật trữ tình &amp; phong cách nghệ thuật).
          </p>
        </div>

        {/* Section 2: Body */}
        <div className="border-l-3 border-[#1E56A0] pl-4 space-y-4">
          <div className="font-serif font-bold text-base text-[#1E56A0]">
            II. Thân bài (Trọng tâm chiếm 70% dung lượng bài viết)
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#4E3F37]">
            <div className="p-3 bg-[#FAF6EE] rounded-md border border-[#EAE0CD]">
              <span className="font-bold text-[#8B2635]">(*) Bước 1: Khái quát chung (6 - 8 dòng):</span>
              <p className="mt-1">
                Giới thiệu hoàn cảnh ra đời của hai thi phẩm (năm sáng tác, bối cảnh lịch sử dân tộc), vị trí của hai đoạn trích trong toàn bài, cùng diện mạo phong cách của hai tác giả.
              </p>
            </div>

            <div className="p-3 bg-[#FAF6EE] rounded-md border border-[#EAE0CD]">
              <span className="font-bold text-[#8B2635]">(*) Bước 2: Phân tích các nét tương đồng (Viết thành 2 đoạn riêng biệt):</span>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  <strong>Đoạn 1 (Tương đồng về nội dung):</strong> Cùng gặp gỡ ở đề tài, cảm hứng ngợi ca lòng yêu nước, ý chí quả cảm, lý tưởng xả thân vì độc lập và sự phản ánh chân thực hiện thực gian khó của chiến tranh.
                </li>
                <li>
                  <strong>Đoạn 2 (Tương đồng về nghệ thuật):</strong> Khả năng chắt lọc thi ảnh biểu tượng, sự kết hợp nhuần nhuyễn giữa hiện thực và cảm quan lãng mạn, ngôn ngữ cô đọng giàu sức nén.
                </li>
              </ul>
            </div>

            <div className="p-3 bg-[#FAF6EE] rounded-md border border-[#EAE0CD]">
              <span className="font-bold text-[#8B2635]">(*) Bước 3: Phân tích các điểm khác biệt (Viết thành 2 - 3 đoạn sâu sắc):</span>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  <strong>Khác biệt về nội dung (Hình tượng nhân vật trữ tình):</strong> Phân tích tỉ mỉ vẻ đẹp người lính trong tác phẩm 1 (hào hoa, lãng mạn, bi tráng của lính trí thức Tây Tiến) đối chiếu với vẻ đẹp trong tác phẩm 2 (mộc mạc, bình dị, keo sơn tình giai cấp của người lính nông dân Đồng chí).
                </li>
                <li>
                  <strong>Khác biệt về đặc sắc nghệ thuật:</strong> Thể thơ, nhịp, vần, thanh điệu, hệ thống từ ngữ (từ Hán Việt đối sánh thành ngữ dân gian), giọng điệu (hào hùng bi tráng đối sánh thủ thỉ tâm tình) và các biện pháp tu từ đặc trưng.
                </li>
              </ul>
            </div>

            <div className="p-3 bg-[#FAF6EE] rounded-md border border-[#EAE0CD]">
              <span className="font-bold text-[#8B2635]">(*) Bước 4: Lí giải nguyên nhân của nét tương đồng và khác biệt (8 - 10 dòng):</span>
              <p className="mt-1">
                <strong>Nguyên nhân tương đồng:</strong> Cùng chung bối cảnh lịch sử thời đại hào hùng (năm 1948 - kháng chiến chống Pháp), cùng trải nghiệm đời lính gian lao, cùng chịu sự quy định của cảm hứng sử thi thời đại Hồ Chí Minh.
              </p>
              <p className="mt-1">
                <strong>Nguyên nhân khác biệt:</strong> Đối tượng phản ánh cụ thể (trí thức Hà Nội vs nông dân các miền quê nghèo) và đặc biệt là cá tính sáng tạo, tạng tâm hồn thẩm mỹ riêng biệt của từng nghệ sĩ (Quang Dũng tài hoa phóng khoáng vs Chính Hữu trầm tư hàm súc).
              </p>
            </div>

            <div className="p-3 bg-[#FAF6EE] rounded-md border border-[#EAE0CD]">
              <span className="font-bold text-[#8B2635]">(*) Bước 5: Đánh giá chung (4 - 5 dòng):</span>
              <p className="mt-1">
                Khẳng định vị thế và đóng góp độc đáo của mỗi tác phẩm cho nền thi ca dân tộc, khẳng định hai bài thơ đã bổ khuyết cho nhau để tạo nên tượng đài toàn diện về con người Việt Nam yêu nước.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Conclusion */}
        <div className="border-l-3 border-[#15803D] pl-4 space-y-2">
          <div className="font-serif font-bold text-base text-[#15803D]">
            III. Kết bài (Khoảng 6 - 8 dòng)
          </div>
          <p className="text-xs sm:text-sm text-[#4E3F37] leading-relaxed">
            <strong>Cách viết 9+:</strong> Nâng tầm bài viết bằng nhận định lí luận văn học về sức sống trường tồn của tác phẩm nghệ thuật chân chính (ví dụ nhận định của Xê-đrin: <em>"Văn học nằm ngoài các định luật của sự băng hoại; chỉ mình nó không thừa nhận cái chết"</em>). Khẳng định sức lay động vượt thời gian của hai thi phẩm và liên hệ bài học trách nhiệm, lý tưởng sống đối với tuổi trẻ hôm nay.
          </p>
        </div>
      </div>
    </div>
  );
};
