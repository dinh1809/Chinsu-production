"use client"

import { useEffect, useState } from "react"
import { SparklesText } from "@/components/ui/sparkles-text"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function HomePage() {
  const [activeProductId, setActiveProductId] = useState(1)

  useEffect(() => {
    const initializeNavbar = () => {
      try {
        // --- Navbar Scroll Effect ---
        const navbar = document.getElementById("navbar")
        if (navbar) {
          const handleScroll = () => {
            try {
              navbar.classList.toggle("scrolled", window.scrollY > 50)
            } catch (error) {
              console.error("Navbar scroll error:", error)
            }
          }
          window.addEventListener("scroll", handleScroll)

          // Clean up function
          return () => {
            window.removeEventListener("scroll", handleScroll)
          }
        }

        // --- Smooth Scrolling for Navigation Links ---
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]')
        navLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault()
            const targetId = link.getAttribute("href")?.substring(1)
            if (targetId) {
              const targetElement = document.getElementById(targetId)
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }
          })
        })

        setTimeout(() => {
          try {
            // Wait for DOM to be fully ready
            const checkAndInitialize = () => {
              const switcherBtns = document.querySelectorAll(".switcher-btn")
              const productImages = document.querySelectorAll(".product-image")
              const productDetails = document.querySelectorAll(".product-detail-item")

              console.log("[v0] Product switcher check:", {
                buttons: switcherBtns.length,
                images: productImages.length,
                details: productDetails.length,
              })

              // if (switcherBtns.length === 3 && productImages.length === 3 && productDetails.length === 3) {
              //   // Initialize first product as active
              //   switcherBtns.forEach((btn) => btn.classList.remove("active"))
              //   productImages.forEach((img) => img.classList.remove("active"))
              //   productDetails.forEach((detail) => detail.classList.remove("active"))

              //   const firstBtn = document.querySelector('.switcher-btn[data-id="1"]')
              //   const firstImage = document.querySelector('.product-image[data-id="1"]')
              //   const firstDetail = document.querySelector('.product-detail-item[data-id="1"]')

              //   if (firstBtn) firstBtn.classList.add("active")
              //   if (firstImage) firstImage.classList.add("active")
              //   if (firstDetail) firstDetail.classList.add("active")

              //   console.log("[v0] Initialized first product as active")

              //   // Add click event listeners
              //   switcherBtns.forEach((btn) => {
              //     btn.addEventListener("click", (e) => {
              //       try {
              //         e.preventDefault()
              //         e.stopPropagation()
              //         const targetId = btn.getAttribute("data-id")
              //         console.log("[v0] Button clicked, switching to product:", targetId)

              //         if (!targetId) return

              //         // Remove active class from all elements
              //         switcherBtns.forEach((b) => b.classList.remove("active"))
              //         productImages.forEach((img) => img.classList.remove("active"))
              //         productDetails.forEach((detail) => detail.classList.remove("active"))

              //         // Add active class to target elements
              //         btn.classList.add("active")
              //         const targetImage = document.querySelector(`.product-image[data-id="${targetId}"]`)
              //         const targetDetail = document.querySelector(`.product-detail-item[data-id="${targetId}"]`)

              //         if (targetImage) {
              //           targetImage.classList.add("active")
              //           console.log("[v0] Activated image for product:", targetId)
              //         } else {
              //           console.error("[v0] Could not find image for product:", targetId)
              //         }

              //         if (targetDetail) {
              //           targetDetail.classList.add("active")
              //           console.log("[v0] Activated detail for product:", targetId)
              //         } else {
              //           console.error("[v0] Could not find detail for product:", targetId)
              //         }
              //       } catch (error) {
              //         console.error("[v0] Product switcher click error:", error)
              //       }
              //     })
              //   })

              //   console.log("[v0] Product switcher initialized successfully")
              // } else {
              //   console.log("[v0] Not all elements ready, retrying...")
              //   setTimeout(checkAndInitialize, 500)
              // }
            }

            // checkAndInitialize()
          } catch (error) {
            console.error("[v0] Product switcher initialization error:", error)
          }
        }, 1000)

        // --- Resource Filter Logic ---
        const filterBtns = document.querySelectorAll(".filter-btn")
        const resourceItems = document.querySelectorAll(".resource-item")

        if (filterBtns.length > 0 && resourceItems.length > 0) {
          filterBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              try {
                const filter = btn.getAttribute("data-filter")
                if (!filter) return

                // Remove active class from all filter buttons
                filterBtns.forEach((b) => b.classList.remove("active"))
                btn.classList.add("active")

                // Show/hide items based on filter
                resourceItems.forEach((item) => {
                  if (filter === "all" || item.getAttribute("data-type") === filter) {
                    item.style.display = "block"
                  } else {
                    item.style.display = "none"
                  }
                })
              } catch (error) {
                console.error("Resource filter error:", error)
              }
            })
          })

          // Set "all" filter as active by default
          const allBtn = document.querySelector('.filter-btn[data-filter="all"]')
          if (allBtn) {
            allBtn.classList.add("active")
          }
        }
      } catch (error) {
        console.error("Navbar initialization error:", error)
      }
    }

    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeNavbar, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      <div className="cursor"></div>

      <header id="navbar">
        <nav className="navbar-container">
          {/* Left Section - Logo */}
          <div className="navbar-left">
            <a href="#home" className="logo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-chinsu-logo-2%20%281%29-gY8CQJxjVtrCaoI4Twx7fUpVUGBKFf.png"
                alt="ChinSu Logo"
              />
            </a>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="#products">Sản Phẩm</a>
              </li>
              <li>
                <a href="#resources">Tài Nguyên</a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="navbar-right">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61579896609749"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@chinsufoods.official"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
            <ThemeToggle />
          </div>
        </nav>
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

        {/* Product Showcase */}
        <section id="products" className="section-padding">
          <div className="container">
            <SparklesText
              className="section-title text-justify font-sans"
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
              Tinh Hoa Trong Từng Sản Phẩm
            </SparklesText>

            <div className="product-showcase-two-column">
              {/* Left Column - Sticky Images */}
              <div className="product-images-sticky">
                <div className="product-image-stack">
                  <div className={`product-large-image ${activeProductId === 1 ? "active" : ""}`} data-id="1">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-tuong-hover-b2I3cyJKcjZ47Skx7p3zgFbJSWKIUs.png"
                      alt="Nước Tương CHIN-SU"
                    />
                  </div>
                  <div className={`product-large-image ${activeProductId === 2 ? "active" : ""}`} data-id="2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-mam-hover-z1wRObLHzQdMziPd6qUzr0awnabk9l.png"
                      alt="Nước Mắm CHIN-SU"
                    />
                  </div>
                  <div className={`product-large-image ${activeProductId === 3 ? "active" : ""}`} data-id="3">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-tuong-ot-hover-ZqFKZWrJCbA35r5cl4oL4E9b4NG8uL.png"
                      alt="Tương Ớt CHIN-SU"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Scrollable Content */}
              <div className="product-content-scrollable">
                {/* Product Switcher */}
                <div className="product-switcher-horizontal">
                  <button
                    className={`switcher-thumbnail ${activeProductId === 1 ? "active" : ""}`}
                    onClick={() => setActiveProductId(1)}
                    data-id="1"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-tuong-hover-b2I3cyJKcjZ47Skx7p3zgFbJSWKIUs.png"
                      alt="Nước Tương thumbnail"
                    />
                  </button>
                  <button
                    className={`switcher-thumbnail ${activeProductId === 2 ? "active" : ""}`}
                    onClick={() => setActiveProductId(2)}
                    data-id="2"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-nuoc-mam-hover-z1wRObLHzQdMziPd6qUzr0awnabk9l.png"
                      alt="Nước Mắm thumbnail"
                    />
                  </button>
                  <button
                    className={`switcher-thumbnail ${activeProductId === 3 ? "active" : ""}`}
                    onClick={() => setActiveProductId(3)}
                    data-id="3"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumb-cate-tuong-ot-hover-ZqFKZWrJCbA35r5cl4oL4E9b4NG8uL.png"
                      alt="Tương Ớt thumbnail"
                    />
                  </button>
                </div>

                {/* Product Details Stack */}
                <div className="product-details-stack">
                  {/* Nước Tương Details */}
                  <div className={`product-detail-block ${activeProductId === 1 ? "active" : ""}`} data-id="1">
                    <span className="product-tag traditional">Truyền Thống</span>
                    <h3 className="product-detail-title">Nước Tương Đậm Đà</h3>
                    <p className="product-detail-description">
                      Chắt lọc tinh túy từ hạt đậu nành hảo hạng, ủ theo công nghệ độc quyền, mang đến vị ngon đậm đà,
                      hài hòa cho mọi món chấm và món kho.
                    </p>
                    <a
                      href="https://shopee.vn/N%C6%B0%E1%BB%9Bc-T%C6%B0%C6%A1ng-CHIN-SU-L%C3%AAn-Men-Nh%E1%BA%ADt-B%E1%BA%A3n-Chai-300ml-i.987373161.20679764417?sp_atk=161319a1-d1b9-4700-b909-9badbe2b5254&xptdk=161319a1-d1b9-4700-b909-9badbe2b5254"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-cta-button"
                      aria-label="Mua ngay Nước Tương CHIN-SU"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                      Mua Ngay
                    </a>
                  </div>

                  {/* Nước Mắm Details */}
                  <div className={`product-detail-block ${activeProductId === 2 ? "active" : ""}`} data-id="2">
                    <span className="product-tag unique">Độc Đáo</span>
                    <h3 className="product-detail-title">Nước Mắm Cá Cơm</h3>
                    <p className="product-detail-description">
                      Được làm từ cá cơm tươi ngon nhất vùng biển Phan Thiết, ủ chượp 365 ngày, tạo nên hương vị đậm đà,
                      thơm ngon đặc trưng của biển cả.
                    </p>
                    <a
                      href="https://shopee.vn/-Ch%E1%BB%8Dn-lo%E1%BA%A1i-N%C6%B0%E1%BB%9Bc-M%E1%BA%AFm-CHIN-SU-%E1%BB%A6-Ch%C6%B0%E1%BB%A3p-365-Ng%C3%A0y-700ml-i.987373161.42463243730?sp_atk=38f6c0f0-1981-4a5c-8d73-191e721ab549&xptdk=38f6c0f0-1981-4a5c-8d73-191e721ab549"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-cta-button"
                      aria-label="Mua ngay Nước Mắm CHIN-SU"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                      Mua Ngay
                    </a>
                  </div>

                  {/* Tương Ớt Details */}
                  <div className={`product-detail-block ${activeProductId === 3 ? "active" : ""}`} data-id="3">
                    <span className="product-tag spicy">Thanh Ngọt</span>
                    <h3 className="product-detail-title">Tương Ớt Cay Nồng</h3>
                    <p className="product-detail-description">
                      Pha trộn hoàn hảo giữa vị cay nồng của ớt tươi và vị ngọt thanh của đường mía, tạo nên món tương
                      ớt đậm đà, kích thích vị giác.
                    </p>
                    <a
                      href="https://shopee.vn/Combo-2-T%C6%B0%C6%A1ng-%E1%BB%9Bt-Chin-su-1KG-v%C3%A0-1-Ponnie-HotDog-Gi%C3%B2n-%C4%82n-Li%E1%BB%81n-V%E1%BB%8B-Cay-H%E1%BB%99p-x-20-C%C3%A2y-x-28G-i.987373161.29361870949?sp_atk=56a67cb4-297a-4952-90f4-5e092a9f70d7&xptdk=56a67cb4-297a-4952-90f4-5e092a9f70d7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-cta-button"
                      aria-label="Mua ngay Tương Ớt CHIN-SU"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                      Mua Ngay
                    </a>
                  </div>
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

            {/* Enhanced filter button styling for better clickability and visual feedback */}
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
                  <h3>Khám phá Umami Việt Nam</h3>
                  <p>
                    Umami là một trong năm vị cơ bản mà con người có thể cảm nhận được bên cạnh ngọt, mặn, chua và đắng.
                    Trong tiếng Nhật, "umai" có nghĩa là "ngon", "mi" là "vị", còn trong tiếng Việt, có thể hiểu vị
                    umami là vị ngon hài hoà và cân bằng mặn ngọt. Hãy cùng Chin-su tìm hiểu sâu hơn về hương vị kỳ diệu
                    này nhé.
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
                    Trong mỗi bữa cơm của gia đình người Việt, nước mắm luôn hiện diện như một loại gia vị làm trọn vẹn
                    các món ăn; và sự ra đời của nước mắm Chin-su Cá Cơm Biển Đông chính là một bước đột phá mang đến
                    hương vị đậm đà và chất lượng tuyệt đối. Hãy khám phá ngay quy trình tỉ mẩn để sản xuất nước mắm
                    ngon cùng Chin-su nhé!
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
              {/* Ensure video cards have proper loading states */}
              <article className="resource-item video-card" data-type="video">
                {/* Enhanced video wrapper styling for better thumbnail loading */}
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
                  <h3>ChinSu Podcast - "Soi" chiến dịch Go Global của nhà ChinSu</h3>
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

              <article className="resource-item podcast-card" data-type="podcast">
                <div className="podcast-video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/nGDFVAKWI28?si=7rMdYTwrxzuh1_SH"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-content">
                  <h3>Câu Chuyện Thương Hiệu ChinSu: Nghe Ngay Kẻo Lỡ (Podcast #2)</h3>
                  <p>
                    🎙️ Podcast #2: Hành Trình Thương Hiệu ChinSu – Khám phá bí mật đằng sau sự thành công của một trong
                    những thương hiệu gia vị nổi tiếng nhất Việt Nam. Từ những ngày đầu xây dựng đến hành trình trở
                    thành cái tên quen thuộc trong bữa cơm gia đình, ChinSu đã làm gì để chạm đến trái tim hàng triệu
                    người tiêu dùng?
                  </p>
                  <div className="podcast-meta">
                    <span className="podcast-duration">{"🎧 Podcast #2"}</span>
                    <span className="podcast-views">👁️ Mới phát hành</span>
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

            <div className="resources-cta"></div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="newsletter-container">
            <h2 className="newsletter-title">ĐĂNG KÝ NHẬN THÔNG TIN MỚI</h2>
            <p className="newsletter-description">
              Bạn muốn nhận những công thức nấu ăn mới nhất và tuyệt vời nhất, cập nhật và nhiều hơn nữa từ chúng tôi,
              thẳng đến hộp thư đến của bạn? Đăng ký và nhận TIN TỨC NÓNG HỔI của chúng tôi!
            </p>
            <form className="newsletter-form" action="https://formspree.io/f/mldwpyll" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit">
                SUBMIT
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="comprehensive-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-chinsu-logo-2%20%281%29-0sgZywhv2fRdlMRqBhIy3rIiOKQZwI.png"
              alt="ChinSu Logo"
              className="footer-logo"
            />
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Hệ thống cửa hàng CHIN-SU 1000+ cửa hàng trên toàn quốc</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Hãy trò chuyện với chúng tôi nếu bạn cần hỗ trợ</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.24 1.02l-2.2 2.2z" />
                </svg>
                <span>Đường dây nóng: (206) 356-7092 hoặc (425) 589-8788 hoặc (833) 324-4678</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Email: chinsu-usa@msc.masangroup.com</span>
              </div>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>MẠNG XÃ HỘI</h4>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579896609749"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    YOUTUBE
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    TWITTER
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@chinsufoods.official" target="_blank" rel="noopener noreferrer">
                    TIKTOK
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>SẢN PHẨM</h4>
              <ul>
                <li>
                  <a href="#products">NƯỚC TƯƠNG CHIN-SU</a>
                </li>
                <li>
                  <a href="#products">NƯỚC MẮM CHIN-SU</a>
                </li>
                <li>
                  <a href="#products">TƯƠNG ỚT CHIN-SU</a>
                </li>
                <li>
                  <a href="#products">GIA VỊ CHIN-SU</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>KHÁM PHÁ</h4>
              <ul>
                <li>
                  <a href="#resources">TÌM CỬA HÀNG</a>
                </li>
                <li>
                  <a href="#resources">ĐĂNG KÝ NHẬN TIN</a>
                </li>
                <li>
                  <a href="#resources">CHƯƠNG TRÌNH KHUYẾN MÃI</a>
                </li>
                <li>
                  <a href="#resources">BẾP CHIN-SU</a>
                </li>
                <li>
                  <a href="#resources">CÔNG THỨC NẤU ĂN</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>CÔNG TY</h4>
              <ul>
                <li>
                  <a href="#resources">LIÊN HỆ</a>
                </li>
                <li>
                  <a href="#resources">CÂU HỎI THƯỜNG GẶP</a>
                </li>
                <li>
                  <a href="#resources">CHÍNH SÁCH ĐỔI TRẢ</a>
                </li>
                <li>
                  <a href="#resources">CHÍNH SÁCH BẢO MẬT</a>
                </li>
                <li>
                  <a href="#resources">ĐIỀU KHOẢN SỬ DỤNG</a>
                </li>
                <li>
                  <a href="#resources">VỀ CHÚNG TÔI</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ChinSu. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>

      <style jsx>{`
        /* Added comprehensive CSS styling for all components */
        .cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
        }

        /* Dark mode styles */
        .dark {
          background-color: #0a0a0a !important;
          color: #ffffff !important;
        }

        .dark .section-padding {
          background-color: #0a0a0a !important;
        }

        .dark .container {
          background-color: transparent !important;
        }

        /* Navbar Styles */
        #navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, #5d2e1a 0%, #4a2416 100%);
          border-top: 2px solid #e52421;
          border-bottom: 2px solid #e52421;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .navbar-left .logo img {
          height: 40px;
          width: auto;
        }

        .navbar-center .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 3rem;
        }

        .navbar-center .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .navbar-center .nav-links a:hover {
          color: #ffd700;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          color: white;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #ffd700;
        }

        /* Hero Section */
        #home {
          position: relative;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .hero-shape-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(229, 36, 33, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.4; }
        }

        /* Section Styles */
        .section-padding {
          padding: 100px 0;
          background-color: #0a0a0a;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 4rem;
          color: white;
        }

        /* Resources Section */
        .resources-hero {
          text-align: center;
          margin-bottom: 4rem;
        }

        .resources-subtitle {
          font-size: 1.3rem;
          color: #e0e0e0;
          margin-top: 1rem;
        }

        /* Enhanced filter button styling for better clickability and visual feedback */
        .resources-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          color: white;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.95rem;
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 10;
          min-width: 100px;
          text-align: center;
        }

        .filter-btn:hover {
          border-color: var(--accent-yellow, #FFC107);
          background: rgba(255, 193, 7, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .filter-btn.active {
          border-color: var(--primary-red, #e52421);
          background: rgba(229, 36, 33, 0.2);
          color: white;
          box-shadow: 0 4px 20px rgba(229, 36, 33, 0.4);
          transform: translateY(-2px);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .resource-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .resource-item:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #FFC107;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 193, 7, 0.2);
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
        }

        .card-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .card-category {
          background: rgba(229, 36, 33, 0.9);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .card-content p {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .card-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .read-time, .views, .podcast-duration, .podcast-views, .tip-type {
          color: #FFC107;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .publish-date, .channel, .usefulness {
          color: #ccc;
          font-size: 0.9rem;
        }

        .read-more-btn {
          display: inline-block;
          color: #FFC107;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .read-more-btn:hover {
          color: white;
        }

        /* Enhanced video wrapper styling for better thumbnail loading */
        .video-wrapper, .podcast-video-wrapper {
          position: relative;
          width: 100%;
          height: 225px;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
        }

        .podcast-video-wrapper {
          height: 315px;
        }

        .video-wrapper iframe, .podcast-video-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 12px;
          background: #000;
        }

        /* Ensure video cards have proper loading states */
        .video-card, .podcast-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-card:hover, .podcast-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 193, 7, 0.2);
          border-color: var(--accent-yellow, #FFC107);
        }

        .tips-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #e52421, #ff4444);
          border-radius: 50%;
          margin-bottom: 1rem;
          color: white;
        }

        .tips-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .resources-cta {
          text-align: center;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #e52421, #ff4444);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(229, 36, 33, 0.3);
        }

        /* Newsletter Section */
        .newsletter-section {
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          padding: 4rem 0;
        }

        .newsletter-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 0 2rem;
        }

        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #8B4513;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .newsletter-description {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .newsletter-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          font-size: 1rem;
          outline: none;
          background: white;
          color: black;
        }

        .newsletter-submit {
          background: #8B4513;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .newsletter-submit:hover {
          background: #a0522d;
        }

        /* Footer Styles */
        .comprehensive-footer {
          background: #000;
          color: white;
          padding: 3rem 0 1rem;
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-logo {
          height: 60px;
          width: auto;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ccc;
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
        }

        .contact-item svg {
          color: #e52421;
          flex-shrink: 0;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          border-bottom: 2px solid #e52421;
          padding-bottom: 0.5rem;
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          margin-bottom: 0.5rem;
        }

        .footer-column a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
        }

        .footer-column a:hover {
          color: #e52421;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          margin-top: 2rem;
          padding-top: 1rem;
          text-align: center;
          color: #666;
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
        }

        /* Replaced card grid styles with two-column sticky layout styles */
        /* Updated main layout to use precise CSS Grid with 40% left column */
        .product-showcase-two-column {
          display: grid;
          grid-template-columns: 40% 1fr;
          gap: 50px;
          align-items: start;
          margin-top: 4rem;
        }

        /* Applied sticky positioning with specific height and top offset */
        .product-images-sticky {
          position: sticky;
          top: 120px;
          height: 60vh;
        }

        /* Set relative positioning for image stack container */
        .product-image-stack {
          position: relative;
          border: 3px solid #FFC107;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.9) 100%);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 193, 7, 0.2);
          width: 100%;
          height: 100%;
        }

        /* Applied absolute positioning for perfect image stacking */
        .product-large-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        /* Active state with opacity and visibility for smooth fade */
        .product-large-image.active {
          opacity: 1;
          visibility: visible;
        }

        /* Object-fit contain for proper image scaling */
        .product-large-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 16px;
        }

        /* Flexbox layout for right column content */
        .product-content-scrollable {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .product-switcher-horizontal {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 0;
        }

        /* Inactive switcher buttons with reduced opacity */
        .switcher-thumbnail {
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          opacity: 0.6;
        }

        .switcher-thumbnail:hover {
          border-color: #FFC107;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
          opacity: 0.8;
        }

        /* Active switcher with prominent red border and full opacity */
        .switcher-thumbnail.active {
          border: 2px solid #C20000;
          opacity: 1;
          background: rgba(194, 0, 0, 0.1);
          box-shadow: 0 8px 25px rgba(194, 0, 0, 0.4);
          transform: translateY(-2px);
        }

        .switcher-thumbnail img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .product-details-stack {
          position: relative;
          min-height: 400px;
        }

        /* Hidden product details with opacity and visibility */
        .product-detail-block {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transform: translateY(30px);
          transition: opacity 0.4s ease-in-out;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Active product details with full visibility and smooth fade */
        .product-detail-block.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          position: relative;
        }

        .product-tag {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: bold;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
        }

        .product-tag.traditional {
          background: linear-gradient(135deg, #e52421 0%, #c41e3a 100%);
          box-shadow: 0 4px 15px rgba(229, 36, 33, 0.4);
        }

        .product-tag.unique {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
        }

        .product-tag.spicy {
          background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);
          box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
        }

        .product-detail-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .product-detail-description {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #e0e0e0;
          margin-bottom: 2.5rem;
        }

        .product-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #C20000 0%, #a01818 100%);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          min-height: 50px;
          box-shadow: 0 4px 15px rgba(194, 0, 0, 0.3);
        }

        .product-cta-button:hover {
          background: linear-gradient(135deg, #d42c2c 0%, #b01f1f 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(194, 0, 0, 0.4);
        }

        .product-cta-button:active {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(194, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .product-showcase-two-column {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .product-images-sticky {
            position: relative;
            top: auto;
          }
          
          .product-switcher-horizontal {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .switcher-thumbnail img {
            width: 60px;
            height: 60px;
          }
          
          .product-detail-title {
            font-size: 2rem;
          }
          
          .product-detail-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
