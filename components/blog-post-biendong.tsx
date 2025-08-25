import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"

// Đặt tên component mới để dễ phân biệt
export function BlogPost() {
  return (
    <article className="min-h-screen bg-white">
      {/* Header with back button */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-black hover:text-primary hover:bg-gray-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 leading-tight mb-8">
            Tinh tuý từ biển Đông: Bí quyết cho bữa ăn ngon và sức khoẻ gia đình
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">Đội ngũ Chin-su</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2024-02-15">15 tháng 2, 2024</time>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Trong mỗi bữa cơm của gia đình người Việt, nước mắm luôn hiện diện như một loại gia vị làm trọn vẹn các món
            ăn; và sự ra đời của nước mắm Chin-su Cá Cơm Biển Đông chính là một bước đột phá mang đến hương vị đậm đà và
            chất lượng tuyệt đối. Hãy khám phá ngay quy trình tỉ mẩn để sản xuất nước mắm ngon cùng Chin-su nhé!
          </p>

          <div className="my-8">
            {/* --- HÌNH ẢNH 1 ĐÃ CẬP NHẬT --- */}
            <Image
              src="/rot-nuoc-mam.jpg"
              alt="Rót nước mắm từ thùng gỗ ra bát"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-6">Cận cảnh quá trình lên men nước mắm an toàn</h2>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Bước 1: Chọn lọc nguyên liệu khắt khe</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Từ biển Đông xa xôi, cá cơm được đánh bắt và tuyển chọn nghiêm ngặt, không ươn hay lẫn các loài cá, tạp chất
            khác. Cùng với đó, muối dùng để ướp cá là những hạt muối to, đều, viền hơi trong và các hạt không dính lại
            với nhau được lấy từ Vũng Tàu bởi muối ở đây có độ tinh khiết cao, không có vị chát hay nóng cổ.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Bước 2: Trộn cá và muối kịp thời</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cá cơm tươi được rửa sạch và ướp với muối tinh khiết trong thời gian vàng ngay tại thuyền để giữ độ tươi với
            tỷ lệ 3:1 (3 tấn cá cơm sẽ được trộn đều với 1 tấn muối), đây là tỷ lệ pha trộn cá muối hoàn hảo được cha
            ông ta đúc kết qua bao năm.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Bước 3: Ủ chượp cá muối công phu</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Đây là giai đoạn quan trọng, quyết định hương vị và độ đạm của nước mắm. Hỗn hợp cá muối sẽ được cho vào
            thùng chượp bằng gỗ được gia cố bằng những sợi dây to bằng cây mây rừng. Để đảm hương vị nước mắm thơm ngon
            hơn, bên trên hỗn hợp được phủ dày bởi 1 lớp muối rồi nén cá lại và để “ngủ đông” 12 tháng. Trong thời gian
            này, cần phơi chượp vào sáng sớm để khơi dậy vị umami và đảo chượp thật đều bên trong để rút ngắn thời gian
            mắm “chín”.
          </p>

          <div className="my-8">
            {/* --- HÌNH ẢNH 2 ĐÃ CẬP NHẬT --- */}
            <Image
              src="/chuyen-gia-kiem-tra.jpg"
              alt="Chuyên gia kiểm tra chất lượng nước mắm trong nhà thùng"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Bước 4: Rút mắm nhĩ và lọc mắm tinh xảo</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sau thời gian chượp mắm “chín” sẽ được rút nhĩ qua vòi nằm ở gần đáy chượp, loại nước mắm này có độ đạm rất
            cao, vị mặn đằm nên thường không được bán trên thị trường, mà được sử dụng để pha với các loại nước mắm thấp
            đạm khác. Nước mắm còn lại trong thùng sẽ qua quy trình lọc mắm để lọc sạch tạp chất, giúp nước mắm trong
            hơn.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Bước 5: Đóng chai và kiểm định kỹ càng</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nước mắm sau khi lọc sẽ được đóng chai và chuyển đến cơ sở kiểm định chất lượng và vệ sinh an toàn thực
            phẩm. Khi đạt tiêu chuẩn sẽ được đưa đến tay người tiêu dùng. Với quy trình lên men tỉ mỉ và nghiêm ngặt từ
            khâu chọn lọc nguyên liệu cho đến khi đóng chai, từng giọt nước mắm Chin-su không chỉ giữ trọn vẹn hương vị
            đậm đà mà còn đảm bảo độ tinh khiết, an toàn cho bữa ăn hằng ngày. Chính sự kỹ lưỡng này khiến nước mắm
            Chin-su trở thành lựa chọn đáng tin cậy để bảo vệ sức khỏe cho cả gia đình. Hãy cùng khám phá tiếp những lợi
            ích mà nước mắm sạch mang lại cho dinh dưỡng và đời sống của cả gia đình nhé.
          </p>

          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-6">Lợi ích của nước mắm sạch với sức khoẻ</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nước mắm Cá Cơm Biển Đông Chin-su chiết xuất từ tinh hoa của biền Đông, cá cơm tươi kết hợp cùng muối vùng
            biển Vũng Tàu. Gia vị này không chỉ tăng thêm hương vị đậm đà cho món ăn mà còn bổ sung nhiều dưỡng chất tốt
            cho sức khoẻ gia đình.
          </p>

          <div className="my-8">
            {/* --- HÌNH ẢNH 3 ĐÃ CẬP NHẬT --- */}
            <Image
              src="/san-pham-chinsu.jpg"
              alt="Các chai sản phẩm nước mắm Chin-su"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Cung cấp nguồn axit amin</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Được ủ chượp từ cá và muối, nước mắm trong quá trình thuỷ phân sản sinh ra nhiều axit amin có lợi giúp điều
            hoà cơ thể, hỗ trợ giấc ngủ và tăng cảm giác ngon miệng. Ngoài ra, lysine có trong nước mắm sạch giúp tăng
            khả năng hấp thụ canxi và gia tăng chuyển hoá. Do rất dễ bị phá huỷ trong quá trình đun nấu, các vi chất này
            càng trở nên quý giá khi được bảo toàn nhờ quá trình lên men trong nước mắm sạch.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Bổ sung hàm lượng Vitamin tự nhiên</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Theo ước tính, cứ khoảng 100ml nước mắm sạch sẽ có 5 microgam vitamin B12. Đây là loại vitamin cần thiết cho
            bữa ăn hằng ngày bởi cơ thể không thể tự tổng hợp được mà chỉ có thể bổ sung qua thực phẩm. Với hàm lượng
            vitamin dồi dào, nước mắm sạch trở thành một trong những nguồn bổ sung B12 tự nhiên, hóp phần duy trì năng
            lượng cho cả gia đình.
          </p>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-4">Cung cấp Omega 3</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hàm lượng Omega 3 trong cá cơm rất dồi dào, đặc biệt là “hàng tuyển” thì lại càng nhiều dưỡng chất hơn. Cứ
            khoảng 100g cá cơm sẽ chứa 2113 Omega 3, đóng vai trò quan trọng với sự phát triển thị lực và trí thần kinh.
            Ngoài ra, chất béo có lợi này có tác dụng làm giảm mỡ máu và bảo vệ tim mạch. Với những người ít ăn cá thì
            nước mắm chính là nguồn bổ sung Omega 3 tự nhiên tốt nhất.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Qua bài viết này, hẳn bạn đã nắm được quy trình làm nước mắm Chin-su Cá Cơm Biển Đông và lợi ích của nước
            mắm sạch đối với sức khoẻ. Là người tiêu dùng thông minh, hãy chọn loại nước mắm từ thương hiệu uy tín để an
            tâm thưởng thức nước mắm thơm ngon hảo hạn và có một sức khoẻ thật tốt nhé.
          </p>
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
