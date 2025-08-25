"use client"

import { useEffect } from "react"
import { SparklesText } from "@/components/ui/sparkles-text"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function HomePage() {
  useEffect(() => {
    const initializeInteractions = () => {
      try {
        // --- Custom Cursor ---
        const cursor = document.querySelector(".cursor")
        if (cursor) {
          const handleMouseMove = (e: MouseEvent) => {
            cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`)
          }
          document.addEventListener("mousemove", handleMouseMove)

          const hoverElements = document.querySelectorAll("a, button, .resource-card")
          hoverElements.forEach((el) => {
            el.addEventListener("mouseover", () => cursor.classList.add("hovered"))
            el.addEventListener("mouseout", () => cursor.classList.remove("hovered"))
          })
        }

        // --- Navbar Scroll Effect ---
        const navbar = document.getElementById("navbar")
        if (navbar) {
          const handleScroll = () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50)
          }
          window.addEventListener("scroll", handleScroll)
        }

        // --- Scrollytelling: Brand Story Timeline ---
        const storyPoints = document.querySelectorAll(".story-point")
        const timelineProgress = document.querySelector(".timeline-progress")
        const storyContainer = document.querySelector("#brand-story")

        if (storyPoints.length > 0 && storyContainer) {
          const storyObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("is-visible")
              })
            },
            { threshold: 0.5 },
          )

          storyPoints.forEach((point) => storyObserver.observe(point))

          const handleTimelineScroll = () => {
            const rect = storyContainer.getBoundingClientRect()
            const progress = Math.max(
              0,
              Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
            )
            if (timelineProgress) {
              ;(timelineProgress as HTMLElement).style.height = `${progress * 100}%`
            }
          }
          window.addEventListener("scroll", handleTimelineScroll)
        }

        // --- Interactive Product Showcase ---
        const productDetails = document.querySelectorAll(".product-detail-item")
        const productImages = document.querySelectorAll(".product-image")
        const switcherBtns = document.querySelectorAll(".switcher-btn")

        if (productDetails.length > 0 && productImages.length > 0 && switcherBtns.length > 0) {
          const setActiveProduct = (id: string) => {
            productImages.forEach((img) => img.classList.toggle("active", (img as HTMLElement).dataset.id === id))
            switcherBtns.forEach((btn) => btn.classList.toggle("active", (btn as HTMLElement).dataset.id === id))
          }

          const productObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const id = (entry.target as HTMLElement).dataset.id
                  if (id) setActiveProduct(id)
                }
              })
            },
            { threshold: 0.6 },
          )

          productDetails.forEach((detail) => productObserver.observe(detail))

          switcherBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = btn.getAttribute("data-id")
              const targetDetail = document.querySelector(`.product-detail-item[data-id="${id}"]`)

              if (targetDetail) {
                const targetPosition = (targetDetail as HTMLElement).offsetTop - 200
                window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth",
                })
              }
            })
          })

          // Initialize first product
          setActiveProduct("1")
        }

        // --- Resources Filter Functionality ---
        const filterButtons = document.querySelectorAll(".filter-btn")
        const resourceItems = document.querySelectorAll(".resource-item")

        if (filterButtons.length > 0 && resourceItems.length > 0) {
          filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
              const filter = (button as HTMLElement).dataset.filter

              // Update active button
              filterButtons.forEach((btn) => btn.classList.remove("active"))
              button.classList.add("active")

              // Filter items
              resourceItems.forEach((item) => {
                const itemType = (item as HTMLElement).dataset.type
                if (filter === "all" || itemType === filter) {
                  item.classList.remove("hidden")
                } else {
                  item.classList.add("hidden")
                }
              })
            })
          })
        }
      } catch (error) {
        console.error("Error initializing interactions:", error)
      }
    }

    const timeoutId = setTimeout(initializeInteractions, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      <div className="cursor"></div>

      <header id="navbar">
        <GlowingEffect>
          <nav className="navbar-container">
            <a href="#home" className="logo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-chinsu-logo-2%20%281%29-gY8CQJxjVtrCaoI4Twx7fUpVUGBKFf.png"
                alt="ChinSu Logo"
              />
            </a>
            <ul className="nav-links">
              <li>
                <a href="#brand-story">Hành Trình</a>
              </li>
              <li>
                <a href="#products">Sản Phẩm</a>
              </li>
              <li>
                <a href="#resources">Tài Nguyên</a>
              </li>
            </ul>
            <ThemeToggle />
          </nav>
        </GlowingEffect>
      </header>

      <main>
        <section className="text-neutral-50 shadow-md" id="home">
          <div className="image-background">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_2_banner-home-with-text-KMNPM52sg0nVYmvjPyK6L9m2KE5yV0.png"
              alt="ChinSu Products Kitchen Scene"
              className="background-image"
            />
          </div>
          <div className="hero-content">
            <div className="hero-text-container">
              <div className="hero-shape-bg"></div>
            </div>
          </div>
        </section>

        <div className="section-padding">
          <div className="container">
            <SparklesText
              className="section-title"
              style={{
                color: "white",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "900",
                textAlign: "center",
                marginBottom: "80px",
                textShadow: "0 4px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.9)",
                position: "relative",
                zIndex: 10,
                letterSpacing: "0.02em",
              }}
            >
              Hành Trình Vị Giác
            </SparklesText>
          </div>
        </div>

        <section id="brand-story" className="section-padding">
          <div className="container">
            <div className="story-container">
              <div className="timeline">
                <div className="timeline-progress"></div>
              </div>
              <div className="story-point">
                <div className="story-year">2002</div>
                <div className="story-content">
                  <h3>Khởi Nguồn Đam Mê</h3>
                  <p>Chin-Su ra đời với khát vọng mang gia vị Việt vươn tầm.</p>
                  <div className="story-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-19%20171055-3p8Px5keiffs9Sj6MKNozU2sYCEbZi.png"
                      alt="ChinSu Founders"
                      className="timeline-story-image"
                    />
                  </div>
                </div>
              </div>
              <div className="story-point" style={{ marginLeft: "2 rem" }}>
                <div className="story-year">2007</div>
                <div className="story-content">
                  <h3>Cú Hit Tương Ớt</h3>
                  <p>Tương ớt Chin-Su trở thành biểu tượng, định nghĩa lại vị cay.</p>
                  <div className="story-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-19%20171550-x3wcKSuVM5byv0hmuC5hKqEUI5WJHJ.png"
                      alt="ChinSu Chili Sauce Hit"
                      className="timeline-story-image"
                    />
                  </div>
                </div>
              </div>
              <div className="story-point">
                <div className="story-year">2015</div>
                <div className="story-content">
                  <h3>Chinh Phục Thế Giới</h3>
                  <p>Những sản phẩm đầu tiên được xuất khẩu, mang hương vị Việt Nam ra quốc tế.</p>
                  <div className="story-image" style={{ marginTop: "1rem" }}>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-19%20171959-iObH6TfMXGT6PmR4FXsGYB1jfqlflq.png"
                      alt="ChinSu Global Expansion - 131 Countries"
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="story-point">
                <div className="story-year">Today</div>
                <div className="story-content">
                  <h3>Không Ngừng Sáng Tạo</h3>
                  <p>Tiếp tục hành trình đổi mới, tạo ra những sản phẩm đầy cảm hứng.</p>
                  <div className="story-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4pFKBt0waMFlp2g6iRYLZISJvAorBC.png"
                      alt="ChinSu Tương Ớt - Đượm vị cay, hứng vị ngon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section-padding">
          <div className="container">
            <h2 className="section-title">Tinh Hoa Trong Từng Sản Phẩm</h2>
            <div className="product-showcase-container">
              <div className="product-image-sticky">
                <div className="product-image-wrapper">
                  <div className="product-image" data-id="1">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-tuong-hover-b2I3cyJKcjZ47Skx7p3zgFbJSWKIUs.png"
                      alt="Nước Tương"
                    />
                  </div>
                  <div className="product-image" data-id="2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-mam-hover-z1wRObLHzQdMziPd6qUzr0awnabk9l.png"
                      alt="Nước Mắm"
                    />
                  </div>
                  <div className="product-image" data-id="3">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-tuong-ot-hover-ZqFKZWrJCbA35r5cl4oL4E9b4NG8uL.png"
                      alt="Tương Ớt"
                    />
                  </div>
                </div>
              </div>
              <div className="product-details-scroll">
                <div className="product-switcher">
                  <button className="switcher-btn" data-id="1">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-tuong-hover-b2I3cyJKcjZ47Skx7p3zgFbJSWKIUs.png"
                      alt="Nước Tương thumbnail"
                    />
                  </button>
                  <button className="switcher-btn" data-id="2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-mam-hover-z1wRObLHzQdMziPd6qUzr0awnabk9l.png"
                      alt="Nước Mắm thumbnail"
                    />
                  </button>
                  <button className="switcher-btn" data-id="3">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-tuong-ot-hover-ZqFKZWrJCbA35r5cl4oL4E9b4NG8uL.png"
                      alt="Tương Ớt thumbnail"
                    />
                  </button>
                </div>
                <div className="product-detail-item" data-id="1">
                  <span className="product-tag">Truyền Thống</span>
                  <h3>Nước Tương Đậm Đà</h3>
                  <p>
                    Chắt lọc tinh túy từ hạt đậu nành hảo hạng, ủ theo công nghệ độc quyền, mang đến vị ngon đậm đà, hài
                    hòa cho mọi món chấm và món kho.
                  </p>
                </div>
                <div className="product-detail-item" data-id="2">
                  <span className="product-tag">Độc Đáo</span>
                  <h3>Nước Mắm Cá Cơm</h3>
                  <p>
                    Sự kết hợp tiên phong giữa nước mắm cốt truyền thống và tinh chất cá cơm biển đông, tạo ra hương vị
                    ngọt thanh, sang trọng và giàu dinh dưỡng.
                  </p>
                </div>
                <div className="product-detail-item" data-id="3">
                  <span className="product-tag">Thanh Ngọt</span>
                  <h3>Tương Ớt Cay Nồng</h3>
                  <p>
                    Sự kết hợp hoàn hảo giữa ớt tươi cay nồng và gia vị truyền thống, tạo ra hương vị đậm đà, kích thích
                    vị giác. Thích hợp cho mọi món ăn từ nướng, chiên đến chấm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="section-padding">
          <div className="container">
            <div className="resources-hero">
              <SparklesText
                className="section-title text-justify font-sans"
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  fontWeight: "900",
                  textAlign: "center",
                  marginBottom: "1rem",
                  textShadow: "0 4px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.9)",
                  position: "relative",
                  zIndex: 10,
                  letterSpacing: "0.02em",
                }}
              >
                Kho Tàng Ẩm Thực
              </SparklesText>

              <p
                className="resources-subtitle"
                style={{
                  color: "#e0e0e0",
                  fontSize: "1.3rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Khám phá thế giới công thức, mẹo vặt và cảm hứng nấu nướng từ cộng đồng ChinSu
              </p>
            </div>

            <div className="resources-filter">
              <button className="filter-btn active" data-filter="all">
                Tất Cả
              </button>
              <button className="filter-btn" data-filter="blog">
                Bài Viết
              </button>
              <button className="filter-btn" data-filter="video">
                Video
              </button>
              <button className="filter-btn" data-filter="podcast">
                Podcast
              </button>
              <button className="filter-btn" data-filter="tips">
                Mẹo Vặt
              </button>
            </div>

            <div className="resources-grid">
              {/* Blog Posts */}
              <article className="resource-item blog-card" data-type="blog">
                <div className="card-image">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_38_banner-quy-trinh-desktop-Dm5ST1QU2rV874dsya6RJU7ZnyYfGD.png"
                    alt="Traditional fish sauce production process"
                  />
                  <div className="card-overlay">
                    <span className="card-category">Bài Viết</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>TIN TỨC NƯỚC MẮM</h3>
                  <p>
                    Cùng tìm hiểu nước mắm là gì, thành phần nước mắm an toàn, cách phân biệt nước mắm thật – giả cũng
                    như bí quyết lựa chọn nước mắm thơm ngon, bảo vệ sức khỏe cả nhà.
                  </p>
                  <div className="card-meta">
                    <span className="read-time">6 phút đọc</span>
                    <span className="publish-date">15/01/2025</span>
                  </div>
                  <a
                    href="https://chinsu.vercel.app/blog/kham-pha-umami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                  >
                    Xem thêm
                  </a>
                </div>
              </article>

              <article className="resource-item blog-card" data-type="blog">
                <div className="card-image">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_18_cach-lam-ba-roi-chien-nuoc-mam-2.jpg-J1nMKWDXGarNO6z3mhH5YByAx712JZ.jpeg"
                    alt="Vietnamese pork belly glazed with fish sauce"
                  />
                  <div className="card-overlay">
                    <span className="card-category">Bài Viết</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>Nước Mắm - Linh Hồn Ẩm Thực Việt</h3>
                  <p>
                    Tìm hiểu về lịch sử và cách sử dụng nước mắm trong các món ăn truyền thống Việt Nam, từ những công
                    thức gia truyền đến những sáng tạo hiện đại.
                  </p>
                  <div className="card-meta">
                    <span className="read-time">8 phút đọc</span>
                    <span className="publish-date">20/01/2025</span>
                  </div>
                  <a
                    href="https://chinsu.vercel.app/blog/bien_dong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                  >
                    Đọc thêm
                  </a>
                </div>
              </article>

              {/* Video Content */}
              <article className="resource-item video-card" data-type="video">
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="225"
                    src="https://www.youtube.com/embed/ix96tIyQPpk?si=3ysIvkq044TkQYgG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-content">
                  <h3>Cách Làm Chả Cá Thăng Long Chuẩn Vị</h3>
                  <p>Hướng dẫn chi tiết cách làm món chả cá Thăng Long với nước mắm ChinSu...</p>
                  <div className="card-meta">
                    <span className="views">125K lượt xem</span>
                    <span className="channel">@ChinSuOfficial</span>
                  </div>
                </div>
              </article>

              <article className="resource-item video-card" data-type="video">
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="225"
                    src="https://www.youtube.com/embed/vtC--aKtqsg?si=5dBc53GPHVtL5U8A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-content">
                  <h3>Phở Bò Truyền Thống - Bí Quyết Nước Dùng</h3>
                  <p>Học cách nấu nước dùng phở trong suốt, thơm ngon với gia vị ChinSu...</p>
                  <div className="card-meta">
                    <span className="views">89K lượt xem</span>
                    <span className="channel">@ChinSuOfficial</span>
                  </div>
                </div>
              </article>

              {/* Podcast Video */}
              <article className="resource-item podcast-card" data-type="podcast">
                <div className="podcast-video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/v3KruA0fBR4?si=e1t2GG66GV81mU4-"
                    title="ChinSu Podcast"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-content">
                  <h3>ChinSu Podcast - Câu Chuyện Gia Vị</h3>
                  <p>
                    Khám phá những câu chuyện thú vị về gia vị Việt Nam và hành trình phát triển của thương hiệu
                    ChinSu...
                  </p>
                  <div className="podcast-meta">
                    <span className="podcast-duration">{"🎧 3 phút"}</span>
                    <span className="podcast-views">👁️ 12 lượt xem</span>
                  </div>
                </div>
              </article>

              {/* Updated card to TIN TỨC NGÀNH GIA VỊ */}
              <article
                className="resource-item tips-card"
                data-type="tips"
                onClick={() => window.open("https://giavichinsu.com/tin-tuc", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="tips-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                </div>
                <div className="card-content">
                  <h3>TIN TỨC NGÀNH GIA VỊ</h3>
                  <p>
                    Chuyên mục Tin tức của Gia Vị CHIN-SU cập nhật thông tin mới nhất về thị trường gia vị Việt, giúp
                    người dùng tự tin lựa chọn và sử dụng các loại gia vị thơm ngon, an toàn cho bữa ăn gia đình trọn
                    vẹn dưỡng chất.
                  </p>
                  <div className="tips-meta">
                    <span className="tip-type">{"Tin Tức\n"} </span>
                    <span className="usefulness">Xem thêm →</span>
                  </div>
                </div>
              </article>

              <article
                className="resource-item tips-card"
                data-type="tips"
                onClick={() => window.open("https://giavichinsu.com/tin-tuc-nuoc-mam", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="tips-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                </div>
                <div className="card-content">
                  <h3>TIN TỨC NƯỚC MẮM</h3>
                  <p>
                    Cùng tìm hiểu nước mắm là gì, thành phần nước mắm an toàn, cách phân biệt nước mắm thật – giả cũng
                    như bí quyết lựa chọn nước mắm thơm ngon, bảo vệ sức khỏe cả nhà.
                  </p>
                  <div className="tips-meta">
                    <span className="tip-type">Tin Tức</span>
                    <span className="usefulness">Xem thêm →</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="resources-cta">
              <button className="cta-button">
                Xem Thêm Nội Dung
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <p>&copy; 2025 ChinSu Foods. A Modern Concept.</p>
      </footer>

      <style jsx>{`
        :root {
          --primary-red: #E52421;
          --secondary-black: #0a0a0a;
          --accent-yellow: #FFC107;
          --text-white: #f5f5f5;
          --bg-dark-grey: #111111;
          --transition-speed: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Be Vietnam Pro', sans-serif;
          background-color: var(--secondary-black);
          color: var(--text-white);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .section-padding { padding: 120px 0; }
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          text-align: center;
          margin-bottom: 80px;
        }

        /* --- Custom Cursor --- */
        .cursor { display: none; }
        @media (pointer: fine) {
          .cursor {
            display: block; position: fixed; width: 20px; height: 20px;
            border: 1px solid var(--text-white); border-radius: 50%;
            left: 0; top: 0; pointer-events: none;
            transform: translate(-50%, -50%); z-index: 9999;
            transition: width 0.2s, height 0.2s, background-color 0.2s;
          }
          .cursor.hovered {
            width: 50px; height: 50px;
            background-color: rgba(229, 36, 33, 0.2);
            border-color: var(--primary-red);
          }
        }

        /* --- Navigation Bar --- */
        #navbar {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 1.5rem 0;
          transition: background-color 0.3s ease, padding 0.3s ease;
        }
        #navbar.scrolled {
          background-color: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px); padding: 1rem 0;
        }
        .navbar-container {
          display: flex; justify-content: space-between; align-items: center;
          max-width: 1400px; margin: 0 auto; padding: 1rem 2rem;
          position: relative;
        }
        .logo img { height: 45px; transition: height 0.3s ease; }
        #navbar.scrolled .logo img { height: 40px; }
        .nav-links { list-style: none; display: flex; }
        .nav-links li { margin-left: 3rem; }
        .nav-links a {
          color: #fff; text-decoration: none; font-weight: 500;
          position: relative; transition: color 0.3s ease;
        }
        #navbar.scrolled .nav-links a {
          color: #fff;
        }
        .nav-links a:hover { color: var(--primary-red); }

        /* Added theme toggle button styling */
        .theme-toggle-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
        }

        .theme-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        /* Added dark mode styles */
        .dark {
          --bg-color: #1a1a1a;
          --text-color: #ffffff;
          --card-bg: #2a2a2a;
        }

        .dark body {
          background-color: var(--bg-color);
          color: var(--text-color);
        }

        .dark .section-padding {
          background-color: var(--bg-color);
        }

        .dark .blog-card {
          background-color: var(--card-bg);
          border-color: rgba(255, 255, 255, 0.1);
        }

        /* --- Hero Section --- */
        #home {
          height: 100vh; display: flex; justify-content: center; align-items: center;
          position: relative; overflow: hidden;
        }
        /* Updated background styling for image instead of video */
        .image-background { 
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -2; 
        }
        .background-image { 
          width: 100%; height: 100%; object-fit: cover; object-position: center;
        }
        #home::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to top, var(--secondary-black) 5%, transparent 50%); z-index: -1;
        }

        .hero-content h1 {
          font-size: clamp(3rem, 8vw, 7rem); font-weight: 900; 
          /* updated to white color with black shadow for better contrast */
          color: white;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5); 
          transform: scale(1.1); opacity: 0;
          animation: hero-fade-in 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0.5s forwards;
        }
        @keyframes hero-fade-in { to { transform: scale(1); opacity: 1; } }

        /* --- Brand Story (Scrollytelling) --- */
        #brand-story { position: relative; padding-bottom: 200px; }
        .timeline {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          background-color: #333; transform: translateX(-50%);
        }
        .timeline-progress { width: 100%; height: 0; background-color: var(--primary-red); transition: height 0.1s linear; }
        .story-point {
          position: relative; margin-bottom: 20vh; width: 45%;
          opacity: 0; transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          display: flex;
          align-items: center;
        }
        .story-point.is-visible { opacity: 1; transform: translateY(0); }
        .story-point:nth-child(odd) { left: 0; padding-right: 5%; text-align: right; }
        .story-point:nth-child(even) { left: 55%; flex-direction: row-reverse; }
        .story-point::after {
          content: ''; position: absolute; top: 10px; width: 12px; height: 12px;
          border-radius: 50%; background-color: var(--bg-dark-grey); border: 2px solid var(--primary-red);
        }
        .story-point:nth-child(odd)::after { right: -31px; transform: translateX(50%); }
        .story-point:nth-child(even)::after { left: -31px; transform: translateX(-50%); }
        .story-year { font-size: 2rem; font-weight: 900; color: var(--primary-red); }
        .story-content h3 { font-size: 1.5rem; margin: 10px 0; }
        .story-content p { color: #ccc; }
        .story-image-point {
          justify-content: flex-end;
        }
        .story-image {
          max-width: 300px;
          animation: float 3s ease-in-out infinite;
          margin-top: 2rem;
        }
        .story-image img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
          border-radius: 16px;
        }
        .timeline-image {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: auto;
          max-height: 80%;
          object-fit: contain;
          animation: float 3s ease-in-out infinite;
        }
        .timeline-image-left {
          left: -31px;
          transform: translateY(-50%) translateX(-50%);
        }
        /* added right side positioning for timeline images */
        .timeline-image-right {
          right: -31px;
          transform: translateY(-50%) translateX(50%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* --- Sticky Product Showcase --- */
        #products { background-color: var(--bg-dark-grey); }
        .product-showcase-container { display: flex; gap: 5%; }
        .product-image-sticky {
          width: 45%; position: sticky; top: 120px; height: 70vh;
          perspective: 1500px;
        }
        .product-image-wrapper {
          width: 100%; height: 100%; position: relative;
          /* Added fallback color for yellow border to fix production visibility */
          border: 2px solid #FFC107;
          border: 2px solid var(--accent-yellow, #FFC107);
          border-radius: 20px;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        .product-image {
          position: absolute; width: 100%; height: 100%;
          display: flex; justify-content: center; align-items: center;
          backface-visibility: hidden;
          transition: opacity 0.6s ease;
          opacity: 0;
          /* Added fallback color for yellow border to fix production visibility */
          border: 3px solid #FFC107;
          border: 3px solid var(--accent-yellow, #FFC107);
          border-radius: 15px;
        }
        .product-image[data-id="1"] {
          opacity: 1;
        }
        .product-image.active {
          opacity: 1;
        }
        .product-image img { max-width: 80%; max-height: 80%; object-fit: contain; }

        .product-details-scroll { width: 50%; }
        .product-detail-item {
          min-height: 80vh; display: flex; flex-direction: column;
          justify-content: center; padding: 2rem 0;
        }
        .product-detail-item h3 { font-size: 3rem; color: var(--text-white); }
        .product-detail-item p { font-size: 1.1rem; color: #ccc; margin: 20px 0; }
        .product-tag {
          display: inline-block; padding: 5px 15px; 
          /* Added fallback color for production deployment */
          background-color: #e52421; /* Fallback red color */
          background-color: var(--primary-red, #e52421); /* CSS custom property with fallback */
          border-radius: 20px; font-size: 0.9rem; margin-bottom: 15px;
          color: white; /* Ensure text is visible on red background */
        }
        
        /* --- Interactive Switcher --- */
        .product-switcher {
          position: sticky;
          top: 120px;
          padding: 20px 0;
          z-index: 10;
        }
        .switcher-btn {
          background: var(--bg-dark-grey);
          border: 2px solid #444;
          border-radius: 10px;
          padding: 10px;
          margin-right: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }
        .switcher-btn:hover {
          transform: translateY(-5px);
          border-color: var(--accent-yellow);
        }
        .switcher-btn.active {
          border-color: var(--primary-red);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 0 15px rgba(229, 36, 33, 0.5);
        }
        .switcher-btn img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        /* --- Modern Resources Section --- */
        #resources {
          background: linear-gradient(135deg, var(--bg-dark-grey) 0%, #1a1a1a 100%);
          position: relative;
        }

        #resources::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(180deg, transparent 0%, rgba(26, 26, 26, 0.7) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .resources-hero {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 10;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .resource-item {
          background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid #333;
          position: relative;
        }

        .resource-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(229, 36, 33, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .resource-item:hover::before {
          opacity: 1;
        }

        .resource-item:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--accent-yellow);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 193, 7, 0.2);
        }

        .resource-item.hidden {
          display: none;
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .resource-item:hover .card-image img {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .card-category {
          background: linear-gradient(135deg, var(--primary-red), #ff4444);
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .recipe-stats {
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-end;
        }

        .recipe-stats span {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 8px;
          border-radius: 10px;
          font-size: 0.75rem;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 25px;
        }

        .card-content h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-white);
          line-height: 1.3;
        }

        .card-content p {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #888;
        }

        .read-time, .views {
          color: var(--accent-yellow, #FFC107);
          font-weight: 500;
        }

        /* Video Card Specific Styles */
        .video-wrapper {
          position: relative;
          height: 225px;
        }

        .video-placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-red), #ff4444);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(229, 36, 33, 0.4);
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(229, 36, 33, 0.6);
        }

        .video-duration {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Recipe Card Specific Styles */
        .recipe-difficulty {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .difficulty {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .difficulty.easy {
          background: linear-gradient(135deg, #4CAF50, #66BB6A);
          color: white;
        }

        .difficulty.medium {
          background: linear-gradient(135deg, #FF9800, #FFB74D);
          color: white;
        }

        .rating {
          color: var(--accent-yellow, #FFC107);
          font-size: 0.85rem;
        }

        /* Tips Card Specific Styles */
        .tips-card {
          display: flex;
          align-items: center;
          padding: 25px;
          min-height: 140px;
        }

        .tips-icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--accent-yellow), #FFD54F);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          margin-right: 20px;
        }

        .tips-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .tip-type {
          background: linear-gradient(135deg, #333, #444);
          color: var(--accent-yellow, #FFC107);
          padding: 4px 10px;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .usefulness {
          color: #4CAF50;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* Podcast Card Specific Styles */
        .podcast-video-wrapper {
          position: relative;
          width: 100%;
          height: 315px;
          border-radius: 15px;
          overflow: hidden;
        }

        .podcast-video-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 15px;
        }

        .podcast-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #888;
        }

        .podcast-duration, .podcast-views {
          color: var(--accent-yellow, #FFC107);
          font-weight: 500;
        }

        /* CTA Section */
        .resources-cta {
          text-align: center;
        }

        .cta-button {
          background: linear-gradient(135deg, var(--primary-red), #ff4444);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(229, 36, 33, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .resources-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .filter-btn {
            padding: 10px 18px;
            font-size: 0.9rem;
          }
          
          .tips-card {
            flex-direction: column;
            text-align: center;
          }
          
          .tips-icon {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }

        /* Added styles for hero text container and shape background */
        .hero-text-container {
          position: relative;
          display: inline-block;
        }
        
        .hero-shape-bg {
          position: absolute;
          top: -1rem;
          left: 1rem;
          width: 300px;
          height: 80px;
          background: linear-gradient(135deg, rgba(213, 0, 0, 0.3) 0%, rgba(255, 215, 0, 0.2) 100%);
          border-radius: 50px 20px 50px 20px;
          transform: rotate(-2deg);
          z-index: -1;
          filter: blur(1px);
        }

        .text-accent-yellow {
          color: var(--accent-yellow, #FFC107);
        }

        .text-accent-yellow:hover {
          text-decoration: underline;
        }

        /* --- Resources Filter --- */
        .resources-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 18px;
          font-size: 0.9rem;
          background: transparent;
          border: 2px solid #ddd;
          border-radius: 25px;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          margin: 0 4px;
        }

        .filter-btn:hover {
          border-color: #dc2626;
          color: #dc2626;
        }

        .filter-btn.active {
          background: #dc2626;
          border-color: #dc2626;
          color: white;
        }
      `}</style>
    </div>
  )
}
