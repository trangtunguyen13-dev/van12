import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getGenAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const INTERLEAVED_SYSTEM_PROMPT = `Bạn là một học sinh giỏi Văn lớp 12 chuyên Văn theo chương trình giáo dục Việt Nam, nắm vững kiến thức ngữ văn từ lớp 10 đến lớp 12 (cả thơ cổ điển và hiện đại) cùng lí luận văn học sâu sắc.
Nhiệm vụ của bạn là:
1. Khi người dùng tải lên hình ảnh đề thi Ngữ văn (hoặc nhập đề bài): Tự động đọc hình ảnh (OCR), nhận diện chính xác 2 đoạn thơ/tác phẩm thơ, tên tác giả, phần chú thích (nếu có) và yêu cầu của đề bài.
2. Viết NGAY một bài văn nghị luận so sánh 2 đoạn thơ HOÀN CHỈNH có độ dài từ 1.100 đến 1.800 chữ (trên 1.000 chữ và không quá 2.000 chữ), mục tiêu đạt 9+ điểm.

QUY TẮC SỐNG CÒN VỀ CÁCH LẬP LUẬN VÀ TÁCH ĐOẠN (BẮT BUỘC TUÂN THỦ 100%):
- TUYỆT ĐỐI KHÔNG tách riêng từng tác phẩm để phân tích rời rạc (không được viết hết tác phẩm 1 rồi mới chuyển sang phân tích tác phẩm 2).
- TRONG MỖI ĐOẠN VĂN THEO TIÊU CHÍ (cả phần Nét tương đồng lẫn phần Điểm khác biệt), bạn PHẢI ĐAN XEN 2 TÁC PHẨM VÀO TỪNG CỤM 3 - 4 CÂU VĂN để vừa phân tích, vừa trích dẫn thơ, vừa đối sánh trực tiếp làm nổi bật hình tượng nhân vật trữ tình và phong cách nghệ thuật của từng tác giả.

CẤU TRÚC TÁCH ĐOẠN BẮT BUỘC (Mỗi phần đánh dấu bằng tiêu đề ### rõ ràng để hệ thống tách đoạn tương tác):

### [TÓM TẮT ĐỀ THI NHẬN DIỆN TỪ ẢNH]
- Tác phẩm 1: Tên bài thơ - Tác giả (Trích dẫn ngắn / chú thích)
- Tác phẩm 2: Tên bài thơ - Tác giả (Trích dẫn ngắn / chú thích)
- Vấn đề nghị luận trọng tâm: ...

### Đoạn 1: I. Mở bài
Dẫn dắt gián tiếp từ đề tài hoặc nhận định lí luận văn học, giới thiệu song hành 2 tác giả, 2 đoạn trích thơ và nêu cơ sở so sánh, đánh giá.

### Đoạn 2: II.1. Khái quát chung
Viết khoảng 6 - 8 dòng giới thiệu song hành các thông tin về hai tác giả, hoàn cảnh sáng tác, xuất xứ hai tác phẩm có liên quan trong chú thích và diện mạo phong cách của hai nhà thơ.

### Đoạn 3: II.2a. Điểm tương đồng về Nội dung (Đề tài, chủ đề, nhân vật trữ tình & cảm hứng chủ đạo)
Đan xen 2 tác phẩm trong từng cụm 3 - 4 câu văn để chỉ ra điểm gặp gỡ về đề tài, chủ đề, vẻ đẹp nhân vật trữ tình/đối tượng trữ tình, cảm hứng chủ đạo và tư tưởng thông điệp (có trích dẫn thơ đối xứng của cả 2 bài ngay trong đoạn).

### Đoạn 4: II.2b. Điểm tương đồng về Đặc sắc nghệ thuật
Đan xen 2 tác phẩm trong từng cụm 3 - 4 câu để phân tích điểm chung về nghệ thuật: sự kết hợp giữa biểu cảm và miêu tả, cách chắt lọc hình ảnh thơ giàu sức gợi, ngôn ngữ hàm súc.

### Đoạn 5: II.3a. Điểm khác biệt về Nội dung (Hình tượng nhân vật trữ tình & Đối tượng trữ tình)
TUYỆT ĐỐI KHÔNG tách thành 2 đoạn riêng cho 2 bài. Trong cùng đoạn văn này, đan xen đối sánh trực tiếp 2 tác phẩm theo từng cụm 3 - 4 câu: đối chiếu xuất thân, tâm thế, vẻ đẹp tâm hồn của nhân vật trữ tình và bức tranh thiên nhiên/đối tượng trung tâm giữa hai đoạn thơ.

### Đoạn 6: II.3b. Điểm khác biệt về Ý nghĩa từ ngữ, hình ảnh thơ & Cảm hứng thẩm mỹ
Đan xen 2 tác phẩm trong từng cụm 3 - 4 câu để đối chiếu màu sắc, âm thanh, các thi ảnh biểu tượng đắt giá và mạch vận động cảm xúc riêng biệt của hai thi nhân.

### Đoạn 7: II.3c. Điểm khác biệt về Nghệ thuật (Thể thơ, nhịp, vần, giọng điệu & Biện pháp tu từ)
Đan xen đối chiếu trực tiếp hai đoạn thơ trong từng cụm 3 - 4 câu: so sánh thể thơ (thất ngôn, ngũ ngôn, lục bát hay tự do), cách ngắt nhịp, gieo vần, thanh điệu, giọng điệu chủ đạo, cách dùng từ (từ Hán Việt cổ kính đối sánh khẩu ngữ/thành ngữ dân gian) và các biện pháp tu từ đặc trưng.

### Đoạn 8: II.4. Lí giải nguyên nhân của sự tương đồng và khác biệt
Viết 8 - 12 dòng đan xen lí giải: nguyên nhân tương đồng (cùng đề tài, cùng cội nguồn yêu nước/nhân văn) và nguyên nhân khác biệt (bối cảnh thời đại, hoàn cảnh sáng tác cụ thể, quan điểm thẩm mỹ của từng thời kì và phong cách nghệ thuật độc đáo của mỗi nhà thơ).

### Đoạn 9: II.5. Đánh giá chung
Viết 4 - 6 dòng đánh giá sự tương đồng, khác biệt và khẳng định giá trị độc đáo, sự bổ khuyết cộng hưởng của mỗi tác phẩm trong nền văn học Việt Nam.

### Đoạn 10: III. Kết bài
Nêu ấn tượng sâu đậm về hai đoạn thơ và vận dụng nhận định lí luận văn học (như nhận định của Xê-đrin: "Văn học nằm ngoài các định luật của sự băng hoại, chỉ mình nó không thừa nhận cái chết") để khẳng định sức sống trường tồn của hai thi phẩm.`;

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '20mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Multimodal Vision + Interactive Paragraph Refinement Endpoint
  app.post('/api/chat-vision', async (req, res) => {
    try {
      const ai = getGenAIClient();
      if (!ai) {
        return res.status(503).json({
          error: 'Chưa cấu hình GEMINI_API_KEY trong phần Settings > Secrets. Bạn vẫn có thể sử dụng chế độ Giải Đề Mẫu Đan Xen 9+ có sẵn trên giao diện.',
        });
      }

      const {
        message,
        imageBase64,
        imageMimeType,
        pinnedParagraph,
        currentEssayContext,
        history = [],
      } = req.body;

      const parts: any[] = [];

      // If an exam image is uploaded, include inlineData
      if (imageBase64 && imageMimeType) {
        parts.push({
          inlineData: {
            mimeType: imageMimeType,
            data: imageBase64,
          },
        });
      }

      // Build contextual prompt
      let userPromptText = '';

      if (pinnedParagraph && pinnedParagraph.text) {
        userPromptText = `[CHẾ ĐỘ HỎI ĐÁP & SỬA SÂU TỪNG ĐOẠN VĂN]
Đoạn văn đang được chọn để chỉnh sửa (${pinnedParagraph.title}):
"""
${pinnedParagraph.text}
"""

Ngữ cảnh bài văn hiện tại:
${currentEssayContext ? currentEssayContext.slice(0, 2500) : '(Đang trong phiên làm việc)'}

Yêu cầu chỉnh sửa / câu hỏi của học sinh: "${message || 'Hãy viết lại đoạn văn này sâu sắc hơn, đan xen 2 tác phẩm chặt chẽ trong từng cụm 3-4 câu, bổ sung trích dẫn và từ ngữ giàu hình ảnh.'}"

Hướng dẫn trả lời khi sửa đoạn:
1. Giải thích ngắn gọn (2-3 dòng) điểm bạn vừa nâng cấp ở đoạn này.
2. Đặt đoạn văn mới đã viết lại hoàn chỉnh trong cặp thẻ <REVISED_PARAGRAPH>...</REVISED_PARAGRAPH> để học sinh có thể bấm nút cập nhật thẳng vào bài văn chính. Nhớ giữ đúng quy tắc đan xen 2 tác phẩm trong từng cụm 3-4 câu!`;
      } else if (imageBase64) {
        userPromptText = `${INTERLEAVED_SYSTEM_PROMPT}

Yêu cầu bổ sung từ người dùng: "${message || 'Hãy đọc hình ảnh đề thi này và viết ngay bài văn nghị luận so sánh 2 đoạn thơ hoàn chỉnh từ 1.100 đến 1.800 chữ theo đúng cấu trúc đan xen 2 tác phẩm trong từng đoạn.'}"`;
      } else {
        // Follow-up conversation or text prompt
        const historySummary = Array.isArray(history)
          ? history
              .slice(-4)
              .map((h: any) => `${h.role === 'user' ? 'Học sinh' : 'AI'}: ${h.content?.slice(0, 600)}`)
              .join('\n---\n')
          : '';

        userPromptText = `${INTERLEAVED_SYSTEM_PROMPT}

Lịch sử trao đổi gần đây:
${historySummary}

Ngữ cảnh bài văn hiện tại:
${currentEssayContext ? currentEssayContext.slice(0, 3000) : '(Chưa có)'}

Tin nhắn của học sinh: "${message}"
Nếu học sinh đưa ra một đề bài mới, hãy viết bài văn hoàn chỉnh 1.100 - 1.800 chữ theo đúng 10 mục ### ở trên. Nếu học sinh yêu cầu sửa một đoạn hoặc hỏi sâu kiến thức, hãy trả lời sâu sắc và nếu có viết lại đoạn văn thì bọc đoạn văn mới trong thẻ <REVISED_PARAGRAPH>...</REVISED_PARAGRAPH>.`;
      }

      parts.push({ text: userPromptText });

      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: { parts },
      });

      const replyText = response.text || 'Không nhận được phản hồi từ mô hình.';

      res.json({
        reply: replyText,
      });
    } catch (err: any) {
      console.error('Gemini chat-vision error:', err);
      res.status(500).json({
        error: err.message || 'Đã xảy ra lỗi khi phân tích đề thi. Vui lòng thử lại.',
      });
    }
  });

  // Legacy /api/compare compatibility route
  app.post('/api/compare', async (req, res) => {
    try {
      const ai = getGenAIClient();
      if (!ai) {
        return res.status(503).json({
          error: 'Chưa cấu hình GEMINI_API_KEY.',
        });
      }

      const { poem1, poem2, focusRequirement } = req.body;
      const prompt = `${INTERLEAVED_SYSTEM_PROMPT}

Đề bài: So sánh hai đoạn thơ sau:
1) "${poem1?.title}" - ${poem1?.author}:
${poem1?.excerpt}

2) "${poem2?.title}" - ${poem2?.author}:
${poem2?.excerpt}

Trọng tâm: ${focusRequirement || 'So sánh hình tượng nhân vật trữ tình và phong cách nghệ thuật của hai tác giả.'}`;

      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      res.json({ content: response.text });
    } catch (err: any) {
      res.status(500).json({ error: err.message || 'Lỗi xử lý yêu cầu' });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Literature 12 Vision Chatbot Server running on port ${port}`);
  });
}

startServer();
