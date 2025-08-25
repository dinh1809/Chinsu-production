// Dòng này "gọi" component từ vị trí hiện tại của nó (không có /ui)
import { BlogPost } from "@/components/blog-post-biendong"; // <--- TÔI ĐÃ SỬA ĐƯỜNG DẪN Ở ĐÂY

// Đây là trang mới của bạn
export default function Page() {
  return (
    <main>
      <BlogPost />
    </main>
  );
}
