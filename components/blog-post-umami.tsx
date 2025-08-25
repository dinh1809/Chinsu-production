import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"

export function BlogPost() {
  return (
    <article className="min-h-screen bg-white">
      {/* Header with back button */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button variant="ghost" className="text-black hover:text-primary hover:bg-gray-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 leading-tight mb-8">
            Khám phá Umami Việt Nam
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">Đội ngũ Chin-su</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2024-01-20">20 tháng 1, 2024</time>
            </div>
          </div>
        </header>

        {/* Featured image */}

        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Umami là một trong năm vị cơ bản mà con người có thể cảm nhận được bên cạnh ngọt, mặn, chua và đắng. Trong
            tiếng Nhật, "umai" có nghĩa là "ngon", "mi" là "vị", còn trong tiếng Việt, có thể hiểu vị umami là vị ngon
            hài hoà và cân bằng mặn ngọt. Hãy cùng Chin-su tìm hiểu sâu hơn về hương vị kỳ diệu này nhé.
          </p>

          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-6">Sự thật về vị Umami</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Vị Umami có thành phần chính là glutamate, một loại axit amin thiết yếu cấu thành nên chất đạm trong cơ thể
            và các loài sinh vật khác. Nó thường được cảm nhận qua các loại thực phẩm giàu đạm như rau cải, nấm, thịt,
            đậu nành, cà chua và các loại thực phẩm lên men như nước mắm, xì dầu và chao.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg my-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-horizon-content-2100060-3763816.jpg-NP0lzSiWefEH20IRENijcF1LHKg2t6.jpeg"
              alt="Các nguyên liệu giàu Umami"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-sm text-gray-600 text-center italic">
              Các nguyên liệu giàu umami trong ẩm thực Việt Nam
            </p>
          </div>

          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-6">Vị "ngọt thịt" trong ẩm thực trên thế giới</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dù xuất phát từ một tên gọi trong tiếng Nhật nhưng Umami không chỉ thuộc về ẩm thực Nhật Bản mà còn hiện
            diện trong vô số món ăn và nguyên liệu trên khắp thế giới. Mỗi quốc gia lại có một nguyên liệu mang đậm dấu
            ấn cho vị ngon tròn đầy ấy, dưới đây là một vài "đại sứ" tiêu biểu.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Parmesan ở Ý</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Loại phô mai nổi tiếng này mang vị Umami mạnh mẽ nhờ quá trình lên men và lão hoá kéo dài, khi protein trong
            sữa phân hủy thành axit amin. Vị mặn từ muối, vị ngọt nhẹ và glutamate kết hợp tạo nên một hương vị tròn đầy
            khó quên.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Worcester ở Vương Quốc Anh</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sốt Worcester có hương vị đặc trưng từ cá cơm lên men, nguồn glutamate và inosinate tự nhiên. Đi kèm với
            nước tương, me, giấm và mật mía, loại sốt này mang lại cảm giác hài hoà và phức hợp, làm nên linh hồn của
            nhiều món Âu.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Rong biển Kombu ở Nhật Bản</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kombu rất giàu axit glutamic, "chìa khoá" tạo nên vị umami. Đó là lý do Kombu trở thành thành phần không thể
            thiếu trong dashi, loại nước dùng nền tảng của ẩm thực Nhật, mang lại hương vị đậm đà dù dùng ít gia vị.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Nước mắm ở Việt Nam</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Với quá trình lên men tự nhiên từ cá và muối, nước mắm Việt chứa hàm lượng axit amin và peptide dồi dào,
            chính là những yếu tố tạo nên vị umami đặc trưng. Không chỉ là gia vị chấm, nước mắm còn là linh hồn trong
            nhiều món ăn Việt, đem đến vị ngon trọn vẹn, đậm đà bản sắc.
          </p>

          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-6">
            Bí quyết tạo ra vị Umami đậm đà trong nước mắm Chin-su
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Theo tiêu chuẩn Codex nước mắm, thời gian ủ chượp các loại nước mắm hiện nay là từ 6-8 tháng nhưng đây chỉ
            là cột mốc tối thiểu để cá muối lên men và cho ra thành phẩm nước mắm ở mức cơ bản. Ngược lại, nếu ủ chượp
            quá 12 tháng, quá trình oxy hoá cùng biến tính kéo dài khiến làm lượng Nitơ và Umami suy giảm.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg my-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-quy-trinh-desktop-w3Gqbgbr1QNOEgtfVCCZQFylwTMNq0.png"
              alt="Thùng gỗ ủ chượp nước mắm Chin-su"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-sm text-gray-600 text-center italic">
              Quy trình ủ chượp 365 ngày tạo nên vị umami hoàn hảo của Chin-su
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Vì vậy mà sự khác biệt tạo nên hương vị ngon ngọt tự nhiên Umami trong nước mắm Chin-su về cả sắc, hương và
            vị là sự áp dụng công nghệ ủ chượp 365 ngày với sự giám sát chặt chẽ của các chuyên gia. Đây là thời điểm
            "vàng" để mắm chín đều, đạt độ đạm cao và có hương vị đậm đặc cùng hậu vị Umami hoàn hảo.
          </p>

          <blockquote className="border-l-4 border-primary bg-gray-50 p-6 my-8 italic text-lg text-gray-800">
            "Thành phẩm Chin-su không chỉ ngon mà còn đạt chuẩn an toàn vệ sinh thực phẩm, chất lượng triệu chai như
            một, mang đến trải nghiệm vị giác ấn tượng khó phai."
          </blockquote>

          <p className="text-gray-700 leading-relaxed mb-8">
            Qua bài viết này, hi vọng Chin-su đã giúp bạn đọc đã biết được một vài sự thật về vị Umami, vị ngon tạo nên
            nhiều món ăn "gây thương nhớ" và bí quyết của Chin-su giúp vị ngon này đạt tối đa trong dòng sản phẩm nước
            mắm. Hãy theo dõi Chin-su để biết thêm những sự thật thú vị khác trong ẩm thực Việt Nam và thế giới nha.
          </p>

          {/* Call to action */}
          <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Khám phá thêm về Chin-su</h3>
            <p className="mb-6 text-gray-300">Tìm hiểu thêm về các sản phẩm nước mắm chất lượng cao của Chin-su.</p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">Tìm hiểu thêm</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2024 Chin-su Blog. Bảo lưu mọi quyền.</p>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-primary/80 font-medium">
                Chia sẻ bài viết
              </a>
              <a href="#" className="text-primary hover:text-primary/80 font-medium">
                Bài viết khác
              </a>
            </div>
          </div>
        </div>
      </footer>
    </article>
  )
}
