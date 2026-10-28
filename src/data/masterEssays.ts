import { ComparisonTopic } from '../types/literature';

export const MASTER_COMPARISONS: ComparisonTopic[] = [
  {
    id: 'taytien-dongchi',
    title: 'Vẻ đẹp người lính trong Tây Tiến (Quang Dũng) và Đồng Chí (Chính Hữu)',
    subtitle: 'Nghị luận so sánh đan xen song hành theo từng tiêu chí nội dung và nghệ thuật (1946 - 1954)',
    targetExam: 'Trọng tâm Ôn thi Tốt nghiệp THPT & Đánh giá năng lực / Đề thi HSG',
    focusQuestion: 'So sánh vẻ đẹp hình tượng người lính và nét đặc sắc phong cách nghệ thuật của Quang Dũng (qua đoạn 3 và khổ kết Tây Tiến) với Chính Hữu (qua bài thơ Đồng Chí).',
    poem1: {
      title: 'Tây Tiến',
      author: 'Quang Dũng',
      year: '1948',
      collection: 'Mây đầu ô (1986)',
      context: 'Được sáng tác tại Phù Lưu Chanh năm 1948 khi Quang Dũng rời đơn vị Tây Tiến, nhớ về những đồng đội thân yêu cùng vượt qua miền rừng núi Tây Bắc hoang vu.',
      excerpt: `Tây Tiến đoàn binh không mọc tóc
Quân xanh màu lá dữ oai hùm
Mắt trừng gửi mộng qua biên giới
Đêm mơ Hà Nội dáng kiều thơm
Rải rác biên cương mồ viễn xứ
Chiến trường đi chẳng tiếc đời xanh
Áo bào thay chiếu anh về đất
Sông Mã gầm lên khúc độc hành

Tây Tiến người đi không hẹn ước
Đường lên thăm thẳm một chia phôi
Ai lên Tây Tiến mùa xuân ấy
Hồn về Sầm Nứa chẳng về xuôi.`,
    },
    poem2: {
      title: 'Đồng Chí',
      author: 'Chính Hữu',
      year: '1948',
      collection: 'Đầu súng trăng treo (1966)',
      context: 'Sáng tác đầu năm 1948 tại chiến khu Việt Bắc sau khi Chính Hữu cùng đồng đội tham gia chiến dịch Việt Bắc thu - đông 1947, trải qua những trận sốt rét rừng thập tử nhất sinh.',
      excerpt: `Quê hương anh nước mặn, đồng chua
Làng tôi nghèo đất cày lên sỏi đá
Anh với tôi đôi người xa lạ
Tự phương trời chẳng hẹn quen nhau.
Súng bên súng, đầu sát bên đầu
Đêm rét chung chăn thành đôi tri kỷ
Đồng chí!

Ruộng nương anh gửi bạn thân cày
Gian nhà không mặc kệ gió lung lay
Giếng nước gốc đa nhớ người ra lính.
Anh với tôi biết từng cơn ớn lạnh,
Sốt run người, vừng trán ướt mồ hôi.

Áo anh rách vai
Quần tôi có vài mảnh vá
Miệng cười buốt giá
Chân không giày
Thương nhau tay nắm lấy bàn tay!

Đêm nay rừng hoang sương muối
Đứng cạnh bên nhau chờ giặc tới
Đầu súng trăng treo.`,
    },
    matrix: [
      {
        criterion: '1. Đề tài & Cảm hứng chủ đạo',
        category: 'Nội dung',
        poem1Aspect: 'Ca ngợi người lính Vệ quốc đoàn hào hoa, mang đậm cảm hứng lãng mạn và âm hưởng bi tráng hùng vĩ.',
        poem2Aspect: 'Ca ngợi người lính nông dân mặc áo lính, mang cảm hứng hiện thực mộc mạc và chất thơ trữ tình đằm thắm.',
        insight: 'Cùng chung tình yêu Tổ quốc thiêng liêng nhưng khai thác từ hai miền thẩm mỹ: hào hùng tráng lệ đối sánh với bình dị ân tình.',
      },
      {
        criterion: '2. Xuất thân & Cội nguồn',
        category: 'Nội dung',
        poem1Aspect: 'Thanh niên trí thức Hà Nội, xếp bút nghiên lên đường tòng quân mang theo giấc mộng biên cương.',
        poem2Aspect: 'Người nông dân nghèo từ những miền quê lam lũ "nước mặn đồng chua", "đất cày lên sỏi đá".',
        insight: 'Phản ánh hai lực lượng nòng cốt tạo nên sức mạnh của Quân đội nhân dân Việt Nam buổi đầu kháng chiến.',
      },
      {
        criterion: '3. Đời sống tâm hồn & Tình cảm',
        category: 'Nội dung',
        poem1Aspect: 'Hào hoa, phong lưu, đa tình: "Mắt trừng gửi mộng", "Đêm mơ Hà Nội dáng kiều thơm".',
        poem2Aspect: 'Chân chất, nặng tình làng quê: "Giếng nước gốc đa nhớ", thắt chặt tình đồng chí keo sơn tri kỷ sẻ chia.',
        insight: 'Một bên lãng mạn bay bổng hướng về nét kiều diễm chốn đô thành, một bên sâu lắng gắn liền đồng ruộng và tình giai cấp.',
      },
      {
        criterion: '4. Thái độ trước gian khổ & Hi sinh',
        category: 'Nội dung',
        poem1Aspect: 'Khí phách trượng phu ngạo nghễ, xem cái chết nhẹ tựa lông hồng: "Chiến trường đi chẳng tiếc đời xanh", "Áo bào thay chiếu".',
        poem2Aspect: 'Bền bỉ, lạc quan, sưởi ấm cho nhau bằng hơi ấm đồng đội: "Miệng cười buốt giá", "Thương nhau tay nắm lấy bàn tay".',
        insight: 'Cả hai đều vượt lên bi kịch chiến tranh bằng tâm thế quả cảm, không một lời than vãn bi lụy.',
      },
      {
        criterion: '5. Thể thơ & Nhịp điệu',
        category: 'Nghệ thuật',
        poem1Aspect: 'Thể thơ thất ngôn (7 chữ) trang trọng, giàu nhạc tính, ngắt nhịp đanh gọn (4/3, 2/2/3) tạo âm hưởng trầm hùng.',
        poem2Aspect: 'Thể thơ tự do linh hoạt (câu ngắn, câu dài đan xen, đặc biệt có câu thơ bản lề 1 từ "Đồng chí!").',
        insight: 'Hình thức thể thơ trực tiếp phục vụ cho việc biểu đạt tính chất đối tượng: âm vang cổ điển đối chiếu với tiếng lòng tâm tình hiện đại.',
      },
      {
        criterion: '6. Ngôn ngữ & Giọng điệu',
        category: 'Nghệ thuật',
        poem1Aspect: 'Hệ thống từ Hán Việt cổ kính ("biên cương", "viễn xứ", "áo bào", "độc hành") kết hợp khẩu ngữ gân guốc ("không mọc tóc"). Giọng bi tráng, hào sảng.',
        poem2Aspect: 'Ngôn ngữ mộc mạc, đậm chất thành ngữ dân gian ("nước mặn đồng chua", "mặc kệ", "buốt giá"). Giọng thơ chân thành, thủ thỉ, lắng sâu.',
        insight: 'Ngôn ngữ tạo nên hai bức chân dung tương phản: tượng đài tráng sĩ cổ xưa và người anh bộ đội Cụ Hồ gần gũi.',
      },
      {
        criterion: '7. Biện pháp tu từ then chốt',
        category: 'Nghệ thuật',
        poem1Aspect: 'Nói giảm nói tránh ("anh về đất"), tương phản đối lập ("không mọc tóc / dữ oai hùm"), nhân hóa kì vĩ ("Sông Mã gầm lên").',
        poem2Aspect: 'Điệp từ ("súng bên súng, đầu sát bên đầu"), đối xứng, hoán dụ ("giếng nước gốc đa nhớ"), biểu tượng đa nghĩa ("Đầu súng trăng treo").',
        insight: 'Quang Dũng nâng hiện thực lên tầm huyền thoại; Chính Hữu chưng cất hiện thực thành biểu tượng bất hủ.',
      },
      {
        criterion: '8. Nguyên nhân khác biệt',
        category: 'Bối cảnh & Phong cách',
        poem1Aspect: 'Quang Dũng: Hồn thơ tài hoa, lãng mạn, phóng khoáng, kết hợp thi sĩ - họa sĩ - nhạc sĩ.',
        poem2Aspect: 'Chính Hữu: Nhà thơ - chiến sĩ thực thụ, phong cách cô đọng, hàm súc, "nghiền ngẫm câu chữ từng tấc đất".',
        insight: 'Chứng minh quy luật sáng tạo nghệ thuật: mỗi phong cách là một sinh thể độc lập, một "vân chữ" riêng biệt.',
      },
    ],
    keyQuotes: {
      poem1: [
        { line: 'Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm', analysis: 'Thủ pháp tương phản đối lập giữa hiện thực sốt rét tàn khốc và khí thế kiêu hùng, ngạo nghễ như chúa sơn lâm.' },
        { line: 'Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm', analysis: 'Tâm hồn lãng mạn, hào hoa của chàng trai Hà Nội; khát vọng chiến đấu song hành cùng nỗi nhớ tình yêu trong trẻo.' },
        { line: 'Chiến trường đi chẳng tiếc đời xanh / Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành', analysis: 'Cảm hứng bi tráng đỉnh cao: cái chết nhẹ tựa lông hồng, sự hi sinh hoá thân vào đất mẹ và vũ trụ vĩnh hằng.' },
      ],
      poem2: [
        { line: 'Quê hương anh nước mặn, đồng chua / Làng tôi nghèo đất cày lên sỏi đá', analysis: 'Cội nguồn xuất thân bình dị từ những vùng quê bần hàn, cùng chung cảnh ngộ giai cấp gắn kết thành tình đồng đội.' },
        { line: 'Đồng chí!', analysis: 'Câu thơ bản lề 2 tiếng như một phát hiện bừng sáng, nén chặt toàn bộ cảm xúc thiêng liêng thành một tượng đài.' },
        { line: 'Đêm nay rừng hoang sương muối / Đứng cạnh bên nhau chờ giặc tới / Đầu súng trăng treo', analysis: 'Bức tranh cô đọng hiện thực và lãng mạn cách mạng: súng đại diện cho chiến đấu, trăng đại diện cho hòa bình và thi vị.' },
      ],
    },
    essay: {
      wordCount: 1680,
      targetScore: '9.25 - 9.5 Điểm',
      sections: [
        {
          id: 'mb',
          type: 'mo_bai',
          title: 'I. Mở bài: Dẫn dắt lí luận văn học & xác lập vấn đề so sánh song hành',
          subtitle: 'Giới thiệu đề tài người lính kháng chiến chống Pháp, đặt song hành hai tác giả - tác phẩm',
          content: [
            `Nhà văn Nga K. Paustovsky từng chiêm nghiệm sâu sắc: "Thơ ca làm cho cuộc sống trở nên trong trẻo hơn, nuôi dưỡng trong con người niềm khao khát cái đẹp và đánh thức những tình cảm nhân đạo cao cả nhất". Trong dòng chảy bất tận của thi ca dân tộc, hiện thực máu lửa của cuộc kháng chiến chống thực dân Pháp đã trở thành mảnh đất màu mỡ khai sinh nên những kiệt tác văn chương bất hủ về hình tượng người lính Vệ quốc đoàn.`,
            `Cùng hướng ngòi bút về người chiến sĩ buổi đầu kháng chiến đầy gian lao, nhưng nếu Quang Dũng trong đoạn trích "Tây Tiến" đã tạc nên bức tượng đài người lính mang vẻ đẹp hào hoa, lãng mạn và bi tráng ngút trời; thì Chính Hữu trong thi phẩm "Đồng Chí" lại khắc họa chân dung người lính nông dân mộc mạc, bình dị với tình đồng đội keo sơn gắn bó. Đặt hai văn bản trong thế đối sánh song hành trên cả hai bình diện nội dung và nghệ thuật, người đọc không chỉ bắt gặp mạch nguồn yêu nước chung của thời đại mà còn thấu tỏ cá tính sáng tạo độc đáo của hai hồn thơ lớn.`,
          ],
          annotations: [
            { type: 'theory', label: 'Lí luận văn học', text: 'Trích dẫn K. Paustovsky mở đầu gián tiếp sang trọng, dẫn dắt vào đề tài người lính.' },
            { type: 'comparison', label: 'Đặt song hành 2 tác phẩm', text: 'Ngay từ Mở bài đã đan cài hai sắc thái thẩm mỹ: lãng mạn - bi tráng (Tây Tiến) và mộc mạc - ân tình (Đồng chí).' },
          ],
        },
        {
          id: 'tb_khai_quat',
          type: 'khai_quat',
          title: 'II. Thân bài - 1. Khái quát chung về hai tác giả, tác phẩm (6 - 8 dòng)',
          subtitle: 'Đối chiếu song song xuất xứ năm 1948 và diện mạo phong cách của Quang Dũng - Chính Hữu',
          content: [
            `Cả "Tây Tiến" của Quang Dũng và "Đồng chí" của Chính Hữu đều được khai sinh vào năm 1948 – thời điểm quân và dân ta vừa trải qua chiến dịch Việt Bắc thu - đông 1947 thắng lợi nhưng muôn vàn thiếu thốn vẫn đè nặng lên đôi vai người chiến sĩ. Quang Dũng là một nghệ sĩ đa tài mang hồn thơ phóng khoáng, lãng mạn và tài hoa; đoạn trích trong "Tây Tiến" được viết tại Phù Lưu Chanh khi ông rời đơn vị cũ, khắc họa chân dung những chàng trai trí thức Hà Nội chiến đấu nơi biên cương Tây Bắc hiểm trở. Song hành cùng năm tháng ấy, Chính Hữu – một nhà thơ-chiến sĩ có phong cách cô đọng, hàm súc và giàu chất suy tưởng – đã sáng tác "Đồng chí" từ chính những trải nghiệm thập tử nhất sinh cùng đồng đội nơi chiến khu, ngợi ca tình tri kỷ thiêng liêng của những người lính xuất thân nông dân áo vải.`,
          ],
          annotations: [
            { type: 'origin', label: 'Khái quát song hành', text: 'Gói gọn trong 7 dòng chuẩn cấu trúc: đặt song song mốc 1948 và hai tạng phong cách tác giả.' },
          ],
        },
        {
          id: 'tb_tuong_dong_nd',
          type: 'tuong_dong_nd',
          title: 'II. Thân bài - 2. Nét tương đồng về Nội dung (Đan xen 2 tác phẩm theo từng tiêu chí)',
          subtitle: 'Đan cài đề tài, cảm hứng ngợi ca lý tưởng xả thân và hiện thực gian khổ trong từng cụm 3 - 4 câu',
          content: [
            `Trước hết, xét về đề tài, chủ đề và cảm hứng chủ đạo, cả hai đoạn thơ đều gặp gỡ nhau ở nguồn cảm hứng ngợi ca vẻ đẹp của người lính Vệ quốc đoàn với lòng yêu nước nồng nàn và lý tưởng xả thân vì Tổ quốc. Trong vần thơ của Quang Dũng, lý tưởng ấy vang lên thành lời thề quyết tử đanh thép của tuổi trẻ sẵn sàng hiến dâng trọn vẹn thanh xuân: "Chiến trường đi chẳng tiếc đời xanh". Đặt cạnh câu thơ ấy, ta cũng bắt gặp ở Chính Hữu một sự dứt khoát, quả cảm khi người nông dân gác lại ruộng vườn, mái ấm để ra trận: "Ruộng nương anh gửi bạn thân cày / Gian nhà không mặc kệ gió lung lay". Nếu cụm từ "chẳng tiếc đời xanh" của lính Tây Tiến thể hiện lẽ sống cao đẹp coi cái chết nhẹ tựa lông hồng, thì hai chữ "mặc kệ" đầy góc cạnh trong thơ Chính Hữu lại hàm chứa sự nén lòng kiên quyết, đặt nghĩa lớn non sông lên trên nỗi niềm hậu phương.`,
            `Không chỉ đồng điệu ở lý tưởng chiến đấu, hai tác giả còn đan cài vào trang thơ bức tranh hiện thực khốc liệt của chiến trường buổi đầu kháng chiến với những thiếu thốn và bệnh tật hiểm nghèo. Dưới ngòi bút Quang Dũng, căn bệnh sốt rét rừng ác liệt hiện lên trực diện qua ngoại hình kỳ dị của đoàn quân: "Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm". Đồng vọng với hiện thực nghiệt ngã đó, Chính Hữu cũng phơi bày những cơn sốt rét hành hạ thể xác người chiến sĩ nơi rừng thiêng nước độc: "Anh với tôi biết từng cơn ớn lạnh, / Sốt run người, vừng trán ướt mồ hôi". Hơn thế nữa, nếu sự thiếu thốn trong "Đồng chí" hiển hiện qua cảnh "Áo anh rách vai / Quần tôi có vài mảnh vá / Chân không giày", thì sự khốc liệt trong "Tây Tiến" còn đẩy lên tới tận cùng khi người lính ngã xuống chẳng có nổi manh chiếu liệm thân, phải lấy "Áo bào thay chiếu anh về đất". Qua đó, cả hai thi phẩm đều khẳng định tư tưởng nhân văn sâu sắc: hoàn cảnh gian lao không thể khuất phục mà chỉ càng làm ngời sáng bản lĩnh kiên cường của bộ đội Cụ Hồ.`,
          ],
          annotations: [
            { type: 'comparison', label: 'Kỹ thuật đan xen 3-4 câu', text: 'Đặt trực tiếp "chẳng tiếc đời xanh" (Tây Tiến) bên cạnh "mặc kệ gió lung lay" (Đồng chí) và đối sánh chi tiết sốt rét rừng trong cùng một mạch văn.' },
          ],
        },
        {
          id: 'tb_tuong_dong_nt',
          type: 'tuong_dong_nt',
          title: 'II. Thân bài - 3. Nét tương đồng về Đặc sắc nghệ thuật (Đan xen đối sánh)',
          subtitle: 'Sự hòa quyện giữa miêu tả - biểu cảm và bút pháp kết hợp hiện thực với lãng mạn',
          content: [
            `Song hành cùng sự gặp gỡ về nội dung, cả Quang Dũng và Chính Hữu đều thể hiện sự tương đồng về nghệ thuật khi kết hợp nhuần nhuyễn giữa yếu tố miêu tả chân thực và biểu cảm sâu lắng, chắt lọc nên những thi ảnh giàu sức khái quát. Đúng như nhà phê bình Belinsky từng khẳng định: "Thơ trước hết là cuộc đời, sau đó mới là nghệ thuật". Cả hai nhà thơ đều dùng chất liệu hiện thực đời lính làm điểm tựa để chắp cánh cho cảm quan lãng mạn cách mạng bay bổng. Nếu ở "Tây Tiến", cái bi thương của sự hy sinh được nâng đỡ bằng hình ảnh ước lệ "áo bào" và âm vang hùng tráng của dòng sông Mã để không rơi vào bi lụy; thì ở "Đồng chí", hiện thực "rừng hoang sương muối" lạnh lẽo cuối bài cũng được thắp sáng bởi vẻ đẹp thơ mộng của vầng trăng trong thi ảnh biểu tượng "Đầu súng trăng treo".`,
          ],
          annotations: [
            { type: 'art', label: 'Đan xen thi pháp', text: 'So sánh song hành cách kết hợp hiện thực - lãng mạn qua hai hình ảnh "áo bào thay chiếu" và "đầu súng trăng treo".' },
          ],
        },
        {
          id: 'tb_khac_biet_nd_1',
          type: 'khac_biet_1',
          title: 'II. Thân bài - 4. Điểm khác biệt về Nhân vật trữ tình & Đời sống tâm hồn (Đan xen 2 bài)',
          subtitle: 'Đối sánh trực tiếp vẻ đẹp hào hoa, lãng mạn của lính trí thức Tây Tiến với vẻ đẹp mộc mạc, tri kỷ của lính nông dân Đồng chí',
          content: [
            `Tuy cùng viết về người lính chống Pháp, nhưng mỗi nhà thơ lại khám phá hình tượng nhân vật trữ tình từ một xuất thân và vẻ đẹp tâm hồn hoàn toàn khác biệt. Trong "Tây Tiến", nhân vật trữ tình mang cốt cách hào hoa, phong lưu của những chàng trai trí thức Hà thành vừa oai phong nơi trận mạc vừa đa tình trong nỗi nhớ: "Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm". Ngược lại, nhân vật trữ tình "anh" và "tôi" trong "Đồng chí" lại là những người nông dân bước ra từ những vùng quê nghèo khó "nước mặn đồng chua", "đất cày lên sỏi đá" với tâm hồn mộc mạc, chất phác. Nếu giữa đêm rừng Tây Bắc, người lính của Quang Dũng gửi tâm hồn về bóng hình "dáng kiều thơm" thanh lịch chốn kinh kỳ, thì người lính của Chính Hữu lại đau đáu nỗi nhớ "Giếng nước gốc đa nhớ người ra lính" – những biểu tượng bình dị, thân thuộc nhất của làng quê Việt Nam. Một bên là khát vọng lập công gắn liền với giấc mộng tình yêu đôi lứa lãng mạn; một bên là sự gắn kết keo sơn từ cảnh ngộ giai cấp nghèo khổ để "Đêm rét chung chăn thành đôi tri kỷ".`,
          ],
          annotations: [
            { type: 'comparison', label: 'Đan xen nhân vật trữ tình', text: 'Cứ 2-3 câu lại đối chiếu trực tiếp: trí thức Hà thành mơ "dáng kiều thơm" đối sánh nông dân nhớ "giếng nước gốc đa".' },
          ],
        },
        {
          id: 'tb_khac_biet_nd_2',
          type: 'khac_biet_2',
          title: 'II. Thân bài - 5. Điểm khác biệt về Cảm hứng chủ đạo & Tư thế vượt lên gian khổ (Đan xen 2 bài)',
          subtitle: 'Âm hưởng bi tráng, kiêu hùng phi thường đối sánh chất ân tình, sẻ chia bình dị',
          content: [
            `Không chỉ khác biệt ở đời sống nội tâm, tư thế vượt lên gian khổ và cảm hứng chủ đạo của hai đoạn thơ cũng tạo nên hai cực thẩm mỹ đối xứng. Quang Dũng khắc họa người lính bằng cảm hứng bi tráng và bút pháp lý tưởng hóa, biến sự tiều tụy "không mọc tóc", "xanh màu lá" thành oai phong dữ dội của chúa sơn lâm ("dữ oai hùm"). Đối lập với vẻ đẹp phi thường mang tầm vóc sử thi ấy, Chính Hữu lại đặt người lính vào cảm hứng hiện thực trữ tình đằm thắm, nơi họ chiến thắng cái lạnh bằng nụ cười "miệng cười buốt giá" và hơi ấm sẻ chia: "Thương nhau tay nắm lấy bàn tay!". Ngay cả khi đối diện với hiểm nguy và cái chết, nếu người chiến sĩ Tây Tiến mang vẻ đẹp lẫm liệt của bậc cổ nhân trong khúc nhạc tiễn đưa kỳ vĩ "Sông Mã gầm lên khúc độc hành" cùng lời thề "Hồn về Sầm Nứa chẳng về xuôi"; thì người lính trong "Đồng chí" lại hiện lên thật lặng lẽ, kiên nhẫn mà vững chãi trong tư thế "Đứng cạnh bên nhau chờ giặc tới" dưới ánh trăng rừng thanh khiết.`,
          ],
          annotations: [
            { type: 'comparison', label: 'Đối sánh cảm hứng chủ đạo', text: 'Đan cài trực tiếp vẻ đẹp bi tráng phi thường ("dữ oai hùm", "Sông Mã gầm lên") với vẻ đẹp bình dị ấm áp ("tay nắm lấy bàn tay", "đứng cạnh bên nhau").' },
          ],
        },
        {
          id: 'tb_khac_biet_nt',
          type: 'khac_biet_nt',
          title: 'II. Thân bài - 6. Điểm khác biệt về Thể thơ, Ngôn ngữ, Giọng điệu & Biện pháp tu từ (Đan xen 2 bài)',
          subtitle: 'Thể thất ngôn trang trọng, từ Hán Việt cổ kính đối sánh thể tự do linh hoạt, ngôn ngữ dân gian hàm súc',
          content: [
            `Sự khác biệt về hình tượng thơ được thể hiện sắc nét qua hệ thống phương tiện nghệ thuật độc đáo của mỗi nhà thơ. Về thể thơ và nhịp điệu, Quang Dũng sử dụng thể thơ 7 chữ (thất ngôn) truyền thống với cách ngắt nhịp 4/3, 2/2/3 đanh gọn, dồn dập và phối hợp dày đặc thanh trắc gợi sự hiểm trở, dữ dội; trong khi đó, Chính Hữu lại chọn thể thơ tự do với độ dài ngắn các câu co giãn linh hoạt theo nhịp thở tâm tình, đặc biệt sáng tạo nên dòng thơ bản lề chỉ gồm hai tiếng "Đồng chí!" vang lên như một nốt nhấn thiêng liêng. Về ngôn ngữ và giọng điệu, nếu Quang Dũng dùng giọng thơ hào sảng, trầm hùng kết hợp lớp từ Hán Việt trang trọng, cổ kính ("biên cương", "viễn xứ", "chiến trường", "áo bào", "độc hành", "chia phôi") để tạo không khí sử thi trang nghiêm; thì Chính Hữu lại dùng giọng thủ thỉ, tâm tình với lớp từ ngữ thuần Việt mộc mạc và thành ngữ dân gian ("nước mặn đồng chua", "đất cày lên sỏi đá"). Về biện pháp tu từ và hình ảnh thơ, trong khi Quang Dũng phát huy tối đa phép tương phản đối lập, nói giảm nói tránh ("anh về đất") và nhân hóa kỳ vĩ ("Sông Mã gầm lên"), thì Chính Hữu lại thành công xuất sắc với phép điệp từ, cấu trúc sóng đôi ("anh với tôi", "súng bên súng, đầu sát bên đầu"), hoán dụ ("giếng nước gốc đa") và hình ảnh biểu tượng cô đọng "Đầu súng trăng treo".`,
          ],
          annotations: [
            { type: 'art', label: 'Đan xen 4 tiêu chí nghệ thuật', text: 'Trong cùng 1 đoạn văn, lần lượt đan xen so sánh: Thể thơ & nhịp -> Ngôn ngữ & giọng điệu -> Biện pháp tu từ & thi ảnh.' },
          ],
        },
        {
          id: 'tb_li_giai',
          type: 'li_giai',
          title: 'II. Thân bài - 7. Lí giải nguyên nhân của sự tương đồng và khác biệt',
          subtitle: 'Soi chiếu bối cảnh lịch sử năm 1948, đối tượng phản ánh và cá tính sáng tạo của từng thi sĩ',
          content: [
            `Mọi sự gặp gỡ hay khác biệt trong văn chương đều có căn nguyên sâu xa từ thời đại và chủ thể sáng tạo. Hai tác phẩm có nhiều nét tương đồng bởi cả Quang Dũng và Chính Hữu đều sống và chiến đấu trong buổi đầu cuộc kháng chiến chống Pháp gian khổ mà hào hùng, cùng mang trong tim tinh thần dân tộc và quan niệm thẩm mỹ của nền văn học cách mạng lấy hình tượng người chiến sĩ làm trung tâm. Tuy nhiên, sự khác biệt lại bắt nguồn từ chính đối tượng phản ánh cụ thể và phong cách nghệ thuật riêng của mỗi nhà thơ. Nếu đối tượng của Quang Dũng là đoàn quân Tây Tiến gồm phần đông thanh niên, học sinh, sinh viên Hà Nội chiến đấu giữa thiên nhiên Tây Bắc hùng vĩ, bí ẩn; thì đối tượng của Chính Hữu lại là những người lính nông dân ở đồng bằng Bắc Bộ và miền Trung tụ hội về chiến khu Việt Bắc. Hơn nữa, như Belinsky từng khẳng định, phong cách là "dấu vân tay của tâm hồn người sáng tạo": một Quang Dũng lãng mạn, tài hoa, phóng khoáng tất yếu sẽ viết nên những vần thơ bay bổng, hào hùng; còn một Chính Hữu trầm tư, kiệm lời, luôn gạn lọc cái tinh chất của đời sống sẽ tạo nên những câu thơ giản dị mà hàm súc, chắc khỏe.`,
          ],
          annotations: [
            { type: 'origin', label: 'Lí giải đan xen', text: 'Kết hợp bối cảnh thời đại 1948, sự khác nhau của hai đơn vị chiến đấu và hai phong cách cá nhân.' },
          ],
        },
        {
          id: 'tb_danh_gia',
          type: 'danh_gia',
          title: 'II. Thân bài - 8. Đánh giá chung về giá trị hai tác phẩm (4 - 5 dòng)',
          subtitle: 'Khẳng định giá trị cộng hưởng của hai kiệt tác thơ ca kháng chiến',
          content: [
            `Tựu trung lại, cả hai văn bản đều có nhiều điểm tương đồng sâu sắc về đề tài, cảm hứng chủ đạo và tư tưởng yêu nước, đồng thời tỏa sáng những sắc thái nghệ thuật riêng biệt không thể trộn lẫn. Đây là hai thi phẩm xuất sắc bậc nhất viết về người lính thời kỳ đầu kháng chiến chống Pháp, kết tinh trọn vẹn vẻ đẹp vừa hào hoa, bi tráng vừa mộc mạc, nghĩa tình của anh bộ đội Cụ Hồ trong nền văn học Việt Nam hiện đại.`,
          ],
          annotations: [
            { type: 'comparison', label: 'Đánh giá tổng kết', text: 'Đoạn văn 5 dòng chuẩn cấu trúc khép lại phần Thân bài.' },
          ],
        },
        {
          id: 'kb',
          type: 'ket_bai',
          title: 'III. Kết bài: Khẳng định sức sống trường tồn bằng nhận định lí luận văn học',
          subtitle: 'Dư âm của hai kiệt tác trước quy luật thời gian',
          content: [
            `Không phải ngẫu nhiên mà nhà văn người Nga Saltykov-Shchedrin từng nhận định rằng: "Văn học nằm ngoài các định luật của sự băng hoại; chỉ mình nó không thừa nhận cái chết". Hai thi phẩm "Tây Tiến" của Quang Dũng và "Đồng Chí" của Chính Hữu chính là hai kiệt tác nghệ thuật bất tử như thế. Dù khói lửa chiến tranh đã lùi xa gần một thế kỷ, song dáng đứng kiêu hùng bên dòng Sông Mã gầm vang và hình ảnh đôi tri kỷ sát cánh dưới ánh trăng treo đầu súng vẫn vẹn nguyên sức hấp dẫn mãnh liệt, mãi mãi khơi dậy trong trái tim người đọc hôm nay lòng biết ơn và khát vọng cống hiến cho Tổ quốc.`,
          ],
          annotations: [
            { type: 'theory', label: 'Kết bài bằng nhận định', text: 'Vận dụng chính xác nhận định của Xê-đrin theo đúng mẫu dàn ý để nâng tầm kết bài 9+.' },
          ],
        },
      ],
    },
  },
  {
    id: 'muaxuan-nguyenbinh-thanhhai',
    title: 'Bức tranh mùa xuân trong Mùa xuân xanh (Nguyễn Bính) và Mùa xuân nho nhỏ (Thanh Hải)',
    subtitle: 'Nghị luận so sánh đan xen hai đoạn thơ xuân tiêu biểu của Nguyễn Bính và Thanh Hải',
    targetExam: 'Đề mẫu chuẩn theo Dàn ý tham khảo Chương trình GDPT mới',
    focusQuestion: 'So sánh đoạn thơ trong "Mùa xuân xanh" (Nguyễn Bính) và khổ đầu bài thơ "Mùa xuân nho nhỏ" (Thanh Hải) theo phương pháp đan xen từng tiêu chí.',
    poem1: {
      title: 'Mùa xuân xanh',
      author: 'Nguyễn Bính',
      year: '1937',
      collection: 'Tuyển tập Nguyễn Bính (NXB Văn học, 1986)',
      context: 'Thi phẩm tiêu biểu cho hồn thơ "chân quê" mộc mạc, tha thiết của Nguyễn Bính thời kỳ Thơ Mới.',
      excerpt: `Mùa xuân là cả một mùa xanh 
Giời ở trên cao, lá ở cành 
Lúa ở đồng tôi và lúa ở 
Đồng nàng và lúa ở đồng anh.`,
    },
    poem2: {
      title: 'Mùa xuân nho nhỏ',
      author: 'Thanh Hải',
      year: '1980',
      collection: 'Ngữ văn 9, Tập hai (NXB Giáo dục Việt Nam)',
      context: 'Sáng tác tháng 11/1980 khi nhà thơ đang nằm trên giường bệnh hiểm nghèo ở Bệnh viện Trung ương Huế, không lâu trước khi qua đời.',
      excerpt: `Mọc giữa dòng sông xanh 
Một bông hoa tím biếc 
Ơi con chim chiền chiện 
Hót chi mà vang trời 
Từng giọt long lanh rơi 
Tôi đưa tay tôi hứng.`,
    },
    matrix: [
      {
        criterion: '1. Đề tài & Cảm hứng',
        category: 'Nội dung',
        poem1Aspect: 'Cảnh sắc mùa xuân làng quê Bắc Bộ ngập tràn sắc xanh thanh bình, gắn với tình cảm thôn dã mộc mạc.',
        poem2Aspect: 'Bức tranh mùa xuân thiên nhiên xứ Huế tươi tắn, chan hòa âm thanh và ánh sáng, gắn với niềm say mê sự sống.',
        insight: 'Cùng chung tình yêu thiết tha với đất trời mùa xuân và quê hương đất nước.',
      },
      {
        criterion: '2. Màu sắc & Hình ảnh trung tâm',
        category: 'Nội dung',
        poem1Aspect: 'Gam màu xanh đơn sắc mà biến ảo, trải rộng khắp không gian: trời xanh, lá xanh, lúa xanh.',
        poem2Aspect: 'Sự phối sắc hài hòa, ấm áp, đậm đà phong vị Huế: dòng sông xanh biếc điểm xuyết một bông hoa tím và tiếng chim chiền chiện.',
        insight: 'Nguyễn Bính tạo không gian mở đa chiều thuần khiết; Thanh Hải tạo nét chấm phá hội họa và âm nhạc tinh tế.',
      },
      {
        criterion: '3. Thể thơ & Nhịp điệu',
        category: 'Nghệ thuật',
        poem1Aspect: 'Thể thơ thất ngôn (7 chữ), sử dụng kĩ thuật thơ vắt dòng (enjambment) duyên dáng, nhịp điệu đưa đẩy mềm mại.',
        poem2Aspect: 'Thể thơ 5 chữ (ngũ ngôn) giàu nhạc tính dân ca, ngắt nhịp ngắn, biến hóa theo nhịp thở cảm xúc.',
        insight: 'Một bên là điệu đà duyên dáng của ca dao đồng nội; một bên là giai điệu trong trẻo, tha thiết của khúc ca xứ Huế.',
      },
      {
        criterion: '4. Biện pháp tu từ',
        category: 'Nghệ thuật',
        poem1Aspect: 'Điệp từ ("ở", "lúa ở"), liệt kê liên hoàn ("đồng tôi - đồng nàng - đồng anh").',
        poem2Aspect: 'Đảo ngữ ("Mọc giữa dòng sông xanh"), ẩn dụ chuyển đổi cảm giác ("Từng giọt long lanh rơi / Tôi đưa tay tôi hứng").',
        insight: 'Nguyễn Bính gắn kết tình người vào tình đất; Thanh Hải đón nhận mùa xuân bằng mọi giác quan.',
      },
    ],
    keyQuotes: {
      poem1: [
        { line: 'Mùa xuân là cả một mùa xanh / Giời ở trên cao, lá ở cành', analysis: 'Gam màu xanh trải rộng từ vòm trời bao la xuống cành cây gần gũi, mở ra không gian thanh khiết ngút ngàn.' },
        { line: 'Lúa ở đồng tôi và lúa ở / Đồng nàng và lúa ở đồng anh', analysis: 'Thơ vắt dòng độc đáo, điệp từ điệp cấu trúc nối kết ba miền ruộng lúa thành sự hòa hợp duyên thầm thôn dã.' },
      ],
      poem2: [
        { line: 'Mọc giữa dòng sông xanh / Một bông hoa tím biếc', analysis: 'Nghệ thuật đảo ngữ đưa động từ "Mọc" lên đầu câu tạo sức sống trỗi dậy mãnh liệt của bông hoa tím biếc giữa dòng Hương Giang.' },
        { line: 'Từng giọt long lanh rơi / Tôi đưa tay tôi hứng', analysis: 'Ẩn dụ chuyển đổi cảm giác tài tình: tiếng chim hót thành giọt ngọc hữu hình, đón nhận bằng cử chỉ nâng niu, say đắm.' },
      ],
    },
    essay: {
      wordCount: 1420,
      targetScore: '9.25 Điểm',
      sections: [
        {
          id: 'mb_mx',
          type: 'mo_bai',
          title: 'I. Mở bài: Giới thiệu gián tiếp đề tài mùa xuân và hai đoạn thơ',
          subtitle: 'Dẫn dắt từ nguồn cảm hứng mùa xuân đến Nguyễn Bính và Thanh Hải',
          content: [
            `Mùa xuân muôn đời vẫn là nàng thơ diệu kỳ khơi nguồn cho biết bao tuyệt tác thi ca. Mỗi độ xuân sang, khi đất trời cựa mình thay áo mới và vạn vật bừng lên nhựa sống thanh tân, trái tim người nghệ sĩ lại thổn thức những nhịp đập đắm say. Cùng tìm đến đề tài mùa xuân của quê hương đất nước, nhà thơ Nguyễn Bính trong bài thơ "Mùa xuân xanh" và nhà thơ Thanh Hải trong bài thơ "Mùa xuân nho nhỏ" đã để lại hai đoạn thơ tuyệt bút. Đặt bốn câu thơ mở đầu của Nguyễn Bính bên cạnh sáu câu thơ đầu của Thanh Hải, người đọc vừa nhận ra sự đồng điệu trong tình yêu thiên nhiên tha thiết, vừa khám phá được vẻ đẹp riêng biệt của hình tượng thơ và phong cách nghệ thuật độc đáo của mỗi nhà thơ.`,
          ],
        },
        {
          id: 'tb_kq_mx',
          type: 'khai_quat',
          title: 'II. Thân bài - 1. Khái quát chung về hai tác giả, tác phẩm (7 - 8 dòng)',
          subtitle: 'Giới thiệu Nguyễn Bính với Mùa xuân xanh và Thanh Hải với Mùa xuân nho nhỏ',
          content: [
            `Nguyễn Bính là gương mặt tiêu biểu của phong trào Thơ Mới (1932 - 1945) với hồn thơ "chân quê" mộc mạc, đằm thắm, luôn gắn bó máu thịt với vẻ đẹp đồng nội và ca dao dân tộc; bài thơ "Mùa xuân xanh" là một trong những thi phẩm trong trẻo nhất của ông viết về cảnh sắc làng quê Bắc Bộ. Trong khi đó, Thanh Hải là nhà thơ trưởng thành trong hai cuộc kháng chiến với phong cách thơ bình dị, giàu nhạc điệu và đậm đà bản sắc văn hóa xứ Huế. Bài thơ "Mùa xuân nho nhỏ" được ông sáng tác vào tháng 11 năm 1980 trên giường bệnh chỉ ít tuần trước khi qua đời, mà khổ thơ đầu chính là bức họa thiên nhiên mùa xuân tươi đẹp mở đầu cho khát vọng dâng hiến trọn đời.`,
          ],
        },
        {
          id: 'tb_td_mx',
          type: 'tuong_dong_nd',
          title: 'II. Thân bài - 2. Điểm tương đồng về Nội dung và Nghệ thuật (Đan xen 2 tác phẩm)',
          subtitle: 'Đan cài bức tranh thiên nhiên mùa xuân, cảm hứng ngợi ca và bút pháp miêu tả - biểu cảm',
          content: [
            `Trước hết, đặt hai đoạn thơ trong cái nhìn sánh đôi, ta bắt gặp điểm tương đồng sâu sắc về đề tài, cảm hứng chủ đạo và tư tưởng khi cả hai thi nhân cùng khắc họa bức tranh mùa xuân tươi đẹp của đất trời với niềm yêu mến thiết tha. Nếu Nguyễn Bính mở ra trước mắt người đọc một không gian xuân căng tràn nhựa sống qua sắc xanh nối tiếp từ bầu trời đến ruộng đồng ("Mùa xuân là cả một mùa xanh"), thì Thanh Hải cũng đánh thức mọi giác quan bằng bức tranh xuân trong trẻo nơi dòng sông xanh, bông hoa tím và tiếng chim ca ("Mọc giữa dòng sông xanh / Một bông hoa tím biếc"). Qua bức tranh xuân tràn đầy sinh khí ấy, cả hai nhà thơ đều gửi gắm tư tưởng nhân văn cao đẹp: lòng gắn bó máu thịt và tình yêu tha thiết đối với quê hương, đất nước.`,
            `Về phương diện nghệ thuật, cả hai đoạn thơ đều có sự kết hợp nhuần nhuyễn giữa yếu tố miêu tả tạo hình với yếu tố biểu cảm, sử dụng những hình ảnh thiên nhiên gần gũi cùng ngôn ngữ thơ hàm súc, giàu sức gợi. Ở đoạn thơ của Nguyễn Bính, các hình ảnh bình dị "giời", "lá", "lúa" được liệt kê tự nhiên để vẽ nên cái hồn của mùa xuân thôn dã; tương tự như vậy, Thanh Hải cũng chắt lọc những chi tiết quen thuộc là "dòng sông", "bông hoa", "con chim chiền chiện" để dựng lên một không gian xuân sống động, giàu chất hội họa và âm nhạc.`,
          ],
        },
        {
          id: 'tb_kb_nd_mx',
          type: 'khac_biet_1',
          title: 'II. Thân bài - 3. Điểm khác biệt về Nội dung: Bức tranh xuân & Nhân vật trữ tình (Đan xen 2 bài)',
          subtitle: 'Đan xen so sánh gam màu xanh đồng nội Bắc Bộ với sắc tím xứ Huế và cử chỉ nâng niu sự sống',
          content: [
            `Bên cạnh những điểm gặp gỡ, mỗi đoạn thơ lại tỏa sáng một vẻ đẹp riêng biệt về hình ảnh trung tâm và sự hiện diện của nhân vật trữ tình. Trong đoạn thơ của Nguyễn Bính, bức tranh mùa xuân được bao phủ bởi một gam màu xanh chủ đạo duy nhất ("cả một mùa xanh"), trải rộng theo cả chiều cao của "giời ở trên cao", chiều gần của "lá ở cành" và chiều rộng mênh mông của "lúa ở đồng tôi", "đồng nàng", "đồng anh" tạo nên vẻ thanh khiết và niềm hy vọng về sự sinh sôi trù phú. Khác với sắc xanh thuần khiết mang đậm hồn cốt đồng quê Bắc Bộ ấy, bức tranh xuân của Thanh Hải lại mang vẻ đẹp nhẹ nhàng, trang nhã của xứ Huế với sự phối sắc hài hòa giữa màu xanh mênh mông của dòng Hương Giang và điểm nhấn "một bông hoa tím biếc" thủy chung, trầm mặc. Hơn thế nữa, nếu mùa xuân của Nguyễn Bính tĩnh tại trong sự giao hòa thầm lặng của cảnh vật thì mùa xuân của Thanh Hải lại bừng lên rộn rã bởi âm thanh "Ơi con chim chiền chiện / Hót chi mà vang trời". Đặc biệt, nhân vật trữ tình trong thơ Nguyễn Bính ẩn mình sau cụm từ "đồng tôi - đồng nàng - đồng anh" để kín đáo gửi gắm tình yêu đôi lứa hòa trong tình làng nghĩa xóm; còn nhân vật trữ tình "tôi" trong thơ Thanh Hải lại xuất hiện trực tiếp trong tư thế say mê, ngây ngất: "Từng giọt long lanh rơi / Tôi đưa tay tôi hứng", thể hiện tấm lòng nâng niu, trân trọng từng khoảnh khắc sự sống của đất trời.`,
          ],
        },
        {
          id: 'tb_kb_nt_mx',
          type: 'khac_biet_2',
          title: 'II. Thân bài - 4. Điểm khác biệt về Nghệ thuật: Thể thơ, Nhịp điệu & Biện pháp tu từ (Đan xen 2 bài)',
          subtitle: 'Đối chiếu thể thơ 7 chữ vắt dòng với thể thơ 5 chữ đảo ngữ và ẩn dụ chuyển đổi cảm giác',
          content: [
            `Sự khác biệt trong cảm nhận mùa xuân còn được thể hiện rõ nét qua việc lựa chọn thể thơ, nhịp điệu và các biện pháp tu từ của hai tác giả. Trong khi Nguyễn Bính sử dụng thể thơ 7 chữ với cách ngắt nhịp biến hóa (4/3, 2/1/4) và lối thơ vắt dòng đầy ngẫu hứng ở câu "Lúa ở đồng tôi và lúa ở / Đồng nàng và lúa ở đồng anh" tạo nên nhịp điệu đưa đẩy, duyên dáng như lời ca dao giao duyên; thì Thanh Hải lại chọn thể thơ 5 chữ với nhịp 2/3, 3/2 ngắn gọn, trong trẻo và giàu nhạc tính như một khúc hát dân ca xứ Huế. Về thủ pháp nghệ thuật, nếu Nguyễn Bính thành công với phép điệp từ "ở", "lúa ở" kết hợp liệt kê để nối liền không gian ruộng đồng của "tôi", "nàng" và "anh" thành một dải xanh bất tận; thì Thanh Hải lại gây ấn tượng mạnh mẽ bằng nghệ thuật đảo ngữ đưa động từ "Mọc" và số từ "một" lên đầu câu thơ nhằm nhấn mạnh sức sống trỗi dậy kiên cường của đóa hoa. Đỉnh cao nghệ thuật trong đoạn thơ của Thanh Hải còn nằm ở biện pháp ẩn dụ chuyển đổi cảm giác "Từng giọt long lanh rơi / Tôi đưa tay tôi hứng" – biến tiếng chim hót từ thính giác thành những giọt ngọc mùa xuân hữu hình có thể nhìn thấy và chạm vào, khác hẳn với lối biểu đạt mộc mạc, tự nhiên như lời ăn tiếng nói hàng ngày trong thơ Nguyễn Bính.`,
          ],
        },
        {
          id: 'tb_lg_mx',
          type: 'li_giai',
          title: 'II. Thân bài - 5. Lí giải nguyên nhân của sự tương đồng & khác biệt và Đánh giá chung',
          subtitle: 'Soi chiếu cội nguồn tình yêu đất nước, hoàn cảnh sáng tác 1937 vs 1980 và phong cách cá nhân',
          content: [
            `Sự tương đồng giữa hai đoạn thơ trước hết bắt nguồn từ việc cả hai nhà thơ đều viết về đề tài mùa xuân và cùng được khơi nguồn từ tình yêu quê hương, đất nước tha thiết trong tâm hồn người Việt. Tuy nhiên, sự khác biệt lại xuất phát từ hoàn cảnh sáng tác và phong cách nghệ thuật riêng của mỗi thi sĩ. "Mùa xuân xanh" ra đời trước Cách mạng tháng Tám trong không gian làng quê Bắc Bộ thanh bình, được nhìn qua lăng kính của một thi sĩ Thơ Mới mang hồn thơ "chân quê" lãng mạn, luôn khao khát tình yêu đôi lứa gắn với đồng ruộng thôn trang. Ngược lại, "Mùa xuân nho nhỏ" được sáng tác năm 1980 khi đất nước đã thống nhất nhưng nhà thơ Thanh Hải đang nằm trên giường bệnh những ngày cuối đời tại xứ Huế, bởi vậy cái nhìn mùa xuân của ông vừa mang nét trầm tư, dịu dàng của văn hóa cố đô, vừa cháy bỏng khát vọng níu giữ và hiến dâng cho cuộc đời.`,
            `Có thể khẳng định, dù tương đồng hay khác biệt, hai đoạn thơ đều là những tuyệt bút viết về mùa xuân đất nước của hai nhà thơ lớn trong nền văn học Việt Nam hiện đại, kết tinh trọn vẹn những giá trị tư tưởng và nghệ thuật đặc sắc khi viết về đề tài này.`,
          ],
        },
        {
          id: 'kb_mx',
          type: 'ket_bai',
          title: 'III. Kết bài: Khẳng định sức sống bất diệt của hai đoạn thơ',
          subtitle: 'Đúc kết bằng nhận định của Xê-đrin',
          content: [
            `Không phải ngẫu nhiên mà nhà văn Nga Xê-đrin từng nhận định rằng: "Văn học nằm ngoài các định luật của sự băng hoại; chỉ mình nó không thừa nhận cái chết". Hai thi phẩm "Mùa xuân xanh" của Nguyễn Bính và "Mùa xuân nho nhỏ" của Thanh Hải chính là hai tác phẩm nghệ thuật chân chính như thế. Sắc xanh ngút ngàn của đồng lúa quê hương trong thơ Nguyễn Bính cùng bông hoa tím biếc và giọt âm thanh long lanh của Thanh Hải sẽ còn sống mãi trong lòng bạn đọc, bồi đắp cho mỗi chúng ta tình yêu thiên nhiên và khát vọng làm nên một "mùa xuân nho nhỏ" có ích cho cuộc đời.`,
          ],
        },
      ],
    },
  },
  {
    id: 'song-voivang',
    title: 'Khát vọng tình yêu trong Sóng (Xuân Quỳnh) và Vội vàng (Xuân Diệu)',
    subtitle: 'Nghị luận so sánh đan xen quan niệm tình yêu và cảm thức thời gian qua hai đỉnh cao thi ca',
    targetExam: 'Trọng tâm Chương trình Ngữ văn 11 - 12 (Thi Tốt Nghiệp THPT & HSG)',
    focusQuestion: 'So sánh đan xen khát vọng tình yêu, cảm thức thời gian và phong cách nghệ thuật trong đoạn trích "Sóng" (Xuân Quỳnh) và "Vội vàng" (Xuân Diệu).',
    poem1: {
      title: 'Sóng',
      author: 'Xuân Quỳnh',
      year: '1967',
      collection: 'Hoa dọc chiến hào (1968)',
      context: 'Sáng tác năm 1967 tại vùng biển Diêm Điền (Thái Bình), tiêu biểu cho tiếng nói tình yêu vừa tha thiết nồng nàn vừa giàu đức hi sinh của người phụ nữ.',
      excerpt: `Cuộc đời tuy dài thế
Năm tháng vẫn đi qua
Như biển kia dẫu rộng
Mây vẫn bay về xa

Làm sao được tan ra
Thành trăm con sóng nhỏ
Giữa biển lớn tình yêu
Để ngàn năm còn vỗ.`,
    },
    poem2: {
      title: 'Vội vàng',
      author: 'Xuân Diệu',
      year: '1938',
      collection: 'Thơ thơ (1938)',
      context: 'Đỉnh cao của phong trào Thơ Mới, thể hiện quan niệm nhân sinh mới mẻ, lòng ham sống cuồng nhiệt và khát khao tận hiến tận hưởng tuổi trẻ.',
      excerpt: `Mau đi thôi! Mùa chưa ngả chiều hôm,
Ta muốn ôm
Cả sự sống mới bắt đầu mơn mởn;
Ta muốn riết mây đưa và gió lượn,
Ta muốn say cánh bướm với tình yêu,
Ta muốn thâu trong một cái hôn nhiều
Và non nước, và cây, và cỏ rạng,
Cho chếnh choáng mùi thơm, cho đã đầy ánh sáng,
Cho no nê thanh sắc của thời tươi;
- Hỡi xuân hồng, ta muốn cắn vào ngươi!`,
    },
    matrix: [
      {
        criterion: '1. Cảm thức thời gian & Khát vọng sống',
        category: 'Nội dung',
        poem1Aspect: 'Nhận thức sự hữu hạn của đời người trước thời gian ("Năm tháng vẫn đi qua"), từ đó khao khát hóa thân vào sự vĩnh hằng.',
        poem2Aspect: 'Hoảngốt trước thời gian trôi nhanh ("Mùa chưa ngả chiều hôm"), thúc giục sống gấp gáp, chạy đua với thời gian.',
        insight: 'Cùng nhạy cảm trước bước đi của thời gian và cùng khao khát sống trọn vẹn từng khoảnh khắc của tuổi trẻ và tình yêu.',
      },
      {
        criterion: '2. Nhân vật trữ tình & Cách thức giao cảm',
        category: 'Nội dung',
        poem1Aspect: 'Cái tôi nữ tính dịu dàng, vị tha: ước nguyện "tan ra thành trăm con sóng nhỏ" để hòa vào biển lớn tình yêu.',
        poem2Aspect: 'Cái tôi cá nhân mãnh liệt, táo bạo: muốn "ôm", "riết", "say", "thâu", "cắn" để chiếm lĩnh trọn vẹn mùa xuân trần thế.',
        insight: 'Xuân Quỳnh hướng tới sự dâng hiến, hòa nhập; Xuân Diệu hướng tới sự tận hưởng, chiếm lĩnh nồng nàn.',
      },
      {
        criterion: '3. Thể thơ, Nhịp điệu & Ngôn ngữ',
        category: 'Nghệ thuật',
        poem1Aspect: 'Thể thơ 5 chữ đều đặn như nhịp sóng vỗ bờ; ngôn ngữ giản dị, trong sáng, giàu tính ẩn dụ.',
        poem2Aspect: 'Thể thơ tự do câu ngắn câu dài đan xen; nhịp điệu dồn dập, hối hả; ngôn ngữ giàu tính nhục cảm, động từ mạnh tăng tiến.',
        insight: 'Hình thức nghệ thuật phản chiếu trung thực hai trạng thái tâm hồn: sâu lắng bền bỉ đối sánh với sôi nổi cuồng nhiệt.',
      },
    ],
    keyQuotes: {
      poem1: [
        { line: 'Làm sao được tan ra / Thành trăm con sóng nhỏ', analysis: 'Khát vọng hiến dâng cao thượng, "tan ra" để hòa nhập vào tình yêu bất diệt.' },
        { line: 'Cuộc đời tuy dài thế / Năm tháng vẫn đi qua', analysis: 'Nỗi ưu tư sâu thẳm của người phụ nữ trước thời gian chảy trôi.' },
      ],
      poem2: [
        { line: 'Ta muốn ôm / Cả sự sống mới bắt đầu mơn mởn', analysis: 'Câu thơ 3 chữ dồn nén bật ra hành động chiếm lĩnh cuồng nhiệt của cái tôi cá nhân ham sống.' },
        { line: 'Hỡi xuân hồng, ta muốn cắn vào ngươi!', analysis: 'Đỉnh cao của sự chiếm lĩnh cảm giác đầy táo bạo, nhân cách hóa mùa xuân thành đối tượng ái ân.' },
      ],
    },
    essay: {
      wordCount: 1380,
      targetScore: '9.25 Điểm',
      sections: [
        {
          id: 'mb_sv',
          type: 'mo_bai',
          title: 'I. Mở bài: Dẫn dắt từ đề tài tình yêu - thời gian đến hai đoạn thơ',
          subtitle: 'Đặt song hành Sóng (Xuân Quỳnh) và Vội vàng (Xuân Diệu)',
          content: [
            `Tình yêu và thời gian muôn đời là hai đại lượng tương phản đầy ám ảnh trong thi ca nhân loại: tình yêu luôn khao khát sự vĩnh cửu, trong khi thời gian lại hữu hạn và lạnh lùng trôi chảy. Đối diện với nghịch lý ấy, hai đỉnh cao thơ tình Việt Nam là Xuân Diệu trong bài thơ "Vội vàng" và Xuân Quỳnh trong bài thơ "Sóng" đã cất lên những tiếng lòng đắm say, mãnh liệt. Đặt hai đoạn trích tiêu biểu của hai thi phẩm bên cạnh nhau, ta không chỉ bắt gặp sự đồng điệu trong khát vọng sống, khát vọng yêu cuồng nhiệt trước bước đi của thời gian, mà còn nhận ra nét khác biệt độc đáo giữa cái tôi cá nhân chiếm lĩnh của "ông hoàng thơ tình" thời Thơ Mới và cái tôi nữ tính hiến dâng của "nữ hoàng thơ tình" thời kháng chiến chống Mỹ.`,
          ],
        },
        {
          id: 'tb_sv_kq',
          type: 'khai_quat',
          title: 'II. Thân bài - 1. Khái quát chung về hai tác giả, tác phẩm',
          subtitle: 'Giới thiệu Xuân Diệu - Vội vàng (1938) và Xuân Quỳnh - Sóng (1967)',
          content: [
            `Xuân Diệu là "nhà thơ mới nhất trong các nhà thơ mới" (Hoài Thanh), người mang đến cho thi đàn Việt Nam nguồn sinh lực dồi dào và quan niệm nhân sinh lấy tuổi trẻ, tình yêu trần thế làm thước đo thẩm mỹ; đoạn trích nằm ở phần cuối bài thơ "Vội vàng" (in trong tập "Thơ thơ", 1938). Trong khi đó, Xuân Quỳnh là gương mặt tiêu biểu của thế hệ nhà thơ trẻ thời kỳ chống Mỹ với hồn thơ giàu trực cảm, vừa hồn nhiên vừa trăn trở lo âu; hai khổ thơ cuối bài "Sóng" (sáng tác năm 1967 tại biển Diêm Điền, in trong tập "Hoa dọc chiến hào") là nơi kết đọng khát vọng tình yêu bất tử của người phụ nữ.`,
          ],
        },
        {
          id: 'tb_sv_td',
          type: 'tuong_dong_nd',
          title: 'II. Thân bài - 2. Điểm tương đồng về Nội dung và Nghệ thuật (Đan xen 2 bài)',
          subtitle: 'Đan cài cảm thức thời gian nhạy bén, lòng yêu đời mãnh liệt và bút pháp trữ tình',
          content: [
            `Trước hết, hai đoạn thơ gặp gỡ nhau ở cảm thức thời gian nhạy bén và khát vọng sống, khát vọng yêu hết mình để chiến thắng sự hữu hạn của kiếp người. Trong "Vội vàng", Xuân Diệu thảng thốt nhận ra bóng chiều của cuộc đời đang đến gần nên cất tiếng giục giã: "Mau đi thôi! Mùa chưa ngả chiều hôm". Đồng điệu với nỗi âu lo ấy, Xuân Quỳnh trong "Sóng" cũng trăn trở trước quy luật chảy trôi không ngừng của năm tháng: "Cuộc đời tuy dài thế / Năm tháng vẫn đi qua / Như biển kia dẫu rộng / Mây vẫn bay về xa". Đứng trước thời gian một đi không trở lại, cả hai nhà thơ đều không rơi vào bi quan buông xuôi mà cùng bừng lên khát vọng giao cảm mãnh liệt với cuộc đời và tình yêu. Về nghệ thuật, cả hai đoạn thơ đều sử dụng những hình ảnh thiên nhiên giàu tính biểu tượng ("mây", "gió", "xuân hồng" ở Xuân Diệu và "biển", "mây", "con sóng" ở Xuân Quỳnh) kết hợp với phép điệp và giọng điệu trữ tình tha thiết để giãi bày trực tiếp khát vọng của cái tôi trữ tình.`,
          ],
        },
        {
          id: 'tb_sv_kb',
          type: 'khac_biet_1',
          title: 'II. Thân bài - 3. Điểm khác biệt về Nhân vật trữ tình & Nghệ thuật biểu đạt (Đan xen 2 bài)',
          subtitle: 'Đan xen đối sánh khát vọng chiếm lĩnh cuồng nhiệt (Xuân Diệu) với khát vọng tan ra hiến dâng (Xuân Quỳnh)',
          content: [
            `Tuy cùng khao khát bất tử hóa tình yêu, nhưng cách thức ứng xử trước thời gian của hai nhân vật trữ tình lại mang hai sắc thái hoàn toàn khác biệt. Ở Xuân Diệu, cái tôi trữ tình xuất hiện trực diện qua đại từ "Ta" đầy kiêu hãnh, muốn chiếm lĩnh, tận hưởng trọn vẹn vẻ đẹp trần thế bằng mọi giác quan: "Ta muốn ôm / Cả sự sống mới bắt đầu mơn mởn; / Ta muốn riết mây đưa và gió lượn... / - Hỡi xuân hồng, ta muốn cắn vào ngươi!". Ngược lại, ở Xuân Quỳnh, nhân vật trữ tình không tìm cách "ôm", "riết", "thâu", "cắn" để thâu tóm vũ trụ vào lòng mình, mà lại chọn cách hóa thân, dâng hiến âm thầm vào cái chung rộng lớn: "Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ". Nếu Xuân Diệu lấy cường độ tận hưởng trong hiện tại ("chếnh choáng", "đã đầy", "no nê") để đối trọng với thời gian, thì Xuân Quỳnh lại lấy sự hòa nhập vị tha của con sóng nhỏ vào đại dương bao la để đạt tới sự vĩnh hằng ("ngàn năm còn vỗ").`,
            `Sự khác biệt ấy được thể hiện qua hai phong cách nghệ thuật đối lập ngay trong cấu trúc câu thơ và ngôn từ. Trong khi Xuân Diệu sử dụng thể thơ tự do với câu thơ vắt dòng 3 chữ "Ta muốn ôm" đứng tách biệt ở giữa trang giấy, kết hợp nhịp thơ dồn dập, điệp cấu trúc "Ta muốn...", "Cho..." và hệ thống động từ mạnh tăng tiến mang màu sắc nhục cảm hiện đại; thì Xuân Quỳnh lại trung thành với thể thơ 5 chữ nhịp nhàng như nhịp sóng biển, ngôn ngữ giản dị, trong sáng, giọng thơ vừa thiết tha vừa sâu lắng như một lời nguyện cầu dịu dàng của trái tim phụ nữ.`,
          ],
        },
        {
          id: 'tb_sv_lg',
          type: 'li_giai',
          title: 'II. Thân bài - 4. Lí giải nguyên nhân và Đánh giá chung',
          subtitle: 'Đối chiếu thời đại Thơ Mới (1932-1945) với thời đại chống Mỹ (1967) và cá tính hai thi sĩ',
          content: [
            `Nguyên nhân của sự tương đồng và khác biệt giữa hai đoạn thơ bắt nguồn từ quy luật vận động của thời đại và bản sắc cá nhân của mỗi nhà thơ. Cả hai cùng gặp nhau ở tinh thần nhân văn cao cả khi tôn vinh tình yêu và hạnh phúc trần thế của con người. Song, "Vội vàng" ra đời năm 1938 giữa cao trào Thơ Mới – thời kỳ cái tôi cá nhân vừa được giải phóng khỏi lễ giáo phong kiến và chịu ảnh hưởng của văn hóa phương Tây, nên tiếng thơ Xuân Diệu mang vẻ đẹp bùng nổ, khát khao khẳng định bản ngã. Trái lại, "Sóng" ra đời năm 1967 giữa những năm tháng kháng chiến chống Mỹ ác liệt, khi cái tôi cá nhân đã hòa quyện trong cái ta cộng đồng, kết hợp với tâm hồn phụ nữ Việt Nam giàu đức hy sinh, nên khát vọng của Xuân Quỳnh hướng tới sự "tan ra" để bất tử trong biển lớn tình yêu. Cả hai đoạn thơ đều xứng đáng là những viên ngọc quý kết tinh vẻ đẹp của thơ tình Việt Nam hiện đại.`,
          ],
        },
        {
          id: 'tb_sv_kb_end',
          type: 'ket_bai',
          title: 'III. Kết bài: Dư âm của hai tuyệt tác thơ tình',
          subtitle: 'Khẳng định giá trị vượt thời gian',
          content: [
            `Nhà văn Nga Xê-đrin từng khẳng định: "Văn học nằm ngoài các định luật của sự băng hoại; chỉ mình nó không thừa nhận cái chết". Quả thật, năm tháng cứ trôi qua như lời thơ Xuân Quỳnh hằng chiêm nghiệm, và mùa xuân có bao lần đến rồi đi như nỗi niềm Xuân Diệu từng khắc khoải, nhưng hai đoạn thơ trong "Vội vàng" và "Sóng" vẫn mãi trường tồn, đánh thức trong lòng bao thế hệ người đọc khát vọng sống mãnh liệt và một tình yêu chân thành, cao đẹp.`,
          ],
        },
      ],
    },
  },
];
