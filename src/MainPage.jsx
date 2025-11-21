import './MainPage.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function MainPage() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const paginationRef = useRef(null)

  const storyFeatures = [
    {
      id: 1,
      title: "Yangi ilhom",
      text: "Har bir dizayn yangi hikoyadan tug'iladi",
      icon: (
        <img src="/assets/idea.png" alt="Yangi ilhom" />
      )
    },
    {
      id: 2,
      title: "Yagona uslub",
      text: "Har bir taklifnoma — betakror",
      icon: (
        <img src="/assets/method.png" alt="Yagona uslub" />
      )
    },
    {
      id: 3,
      title: "Nafis tafsilotlar",
      text: "Har bir element — estetik mukammallik uchun",
      icon: (
        <img src="/assets/nafis.png" alt="Nafis tafsilotlar" />
      )
    },
    {
      id: 4,
      title: "An'anadan ilhom",
      text: "Mahalliy qadriyatlar bilan zamonaviy uyg'unlik",
      icon: (
        <img src="/assets/tradition.png" alt="An'anadan ilhom" />
      )
    }
  ]

  const storyImages = [
    {
      id: 1,
      src: "/assets/4.png",
      alt: "Design work"
    },
    {
      id: 2,
      src: "/assets/3.png",
      alt: "Laptop work"
    },
    {
      id: 3,
      src: "/assets/2.png",
      alt: "Wedding aisle"
    },
    {
      id: 4,
      src: "/assets/1.png",
      alt: "Beach wedding"
    },
    {
      id: 5,
      src: "/assets/5.png",
      alt: "Team work"
    },
    {
      id: 6,
      src: "/assets/6.png",
      alt: "Mobile phone"
    }
  ]

  const historyData = {
    title: "OUR HISTORY",
    text: "TaklifnomaVIP g‘oyasi birgina orzudan boshlandi — har bir juftlikning muhabbat hikoyasini o‘ziga xos uslubda ifodalash. Biz har bir taklifnomani qo‘lda yasalgan san’at asari sifatida yaratamiz: nafis detallar, muloyim ranglar va qayta-qayta ishlangan dizaynlar.Bizning maqsad — sizning unutilmas kuningizni yanada go‘zal qilish",
    buttonText: "SEE MORE",
    logo: {
      topText: "VIN ROUGE",
      bottomText: "Wineshop & Vineyard"
    }
  }

  const products = [
    {
      id: 1,
      title: "TABIIY GO'ZALLIK",
      description: ["Oltin ramka va nafis yozuvlar", "bilan bezatilgan"],
      sales: "120+ marta sotilgan",
      price: "99.000",
      image: "/assets/tel.png"
    },
    {
      id: 2,
      title: "SEVGI SAHIFASI",
      description: ["Oltin ramka va nafis yozuvlar", "bilan bezatilgan"],
      sales: "120+ marta sotilgan",
      price: "199.000",
      image: "/assets/tel.png"

    },
    {
      id: 3,
      title: "OLTIN LAHZA",
      description: ["Oltin ramka va nafis yozuvlar", "bilan bezatilgan"],
      sales: "120+ marta sotilgan",
      price: "299.000",
      image: "/assets/tel.png"

    },
    {
      id: 4,
      title: "ROMANTIK OQSHOM",
      description: ["Oltin ramka va nafis yozuvlar", "bilan bezatilgan"],
      sales: "120+ marta sotilgan",
      price: "149.000",
      image: "/assets/tel.png"

    },
    {
      id: 5,
      title: "ELEGANT STIL",
      description: ["Oltin ramka va nafis yozuvlar", "bilan bezatilgan"],
      sales: "120+ marta sotilgan",
      price: "249.000",
      image: "/assets/tel.png"

    },
    {
      id: 6,
      title: "KLASSIK GO'ZALLIK",
      description: ["Oltin ramka va nafis yozuvlar", "bilan bezatilgan"],
      sales: "120+ marta sotilgan",
      price: "179.000",
      image: "/assets/tel.png"

    }
  ]

  return (
    <div className="main-page">




      <main id="home" className="main-content">

        <div className="header-container">
          <div className="brand-name">TAKLIFNOMAVIP</div>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav className="navigation">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#templates" className="nav-link">TEMPLATES</a>
            <a href="#about" className="nav-link">ABOUT US</a>
            <a href="#partnership" className="nav-link">PARTNERSHIP</a>
          </nav>
        </div>
        <div className="content-wrapper">
          <div className="left-content">
            <div className="background-illustration">
            </div>
            <div className="text-content">
              <h1 className="main-headline">
                UNITILMAS LAHZALARDA – UNITILMAS TAKLIFLAR QILING
              </h1>
              <p className="body-text">
                Har bir bayram, unutilmas his-tuyg'ular bilan. Bizning platformamiz orqali yaratilgan har bir taklifnoma, sizning maxsus kuningizning samimiy hissiyotlarini aks ettirib, mehmonlaringizni unutilmas daqiqalarga chorlaydi.
              </p>
              <button className="cta-button">BUYURTMA BERISH</button>
            </div>
          </div>


          <div className="right-content">
            <div className="phone-mockups">
              <img className="phone-mockup-img" src="/assets/mobile.png" alt="mobile" />
            </div>
          </div>
        </div>
      </main>



      <section className="features-section">
        <div className="features-container">
          <div className="feature-block">
            <div className="feature-number">01.</div>
            <div className="feature-divider">
              <h3 className="feature-title">Individual</h3>
              <p className="feature-description">
                Har bir taklifnoma sizga moslab yaratiladi
              </p>
            </div>
            <div className="feature-line"></div>
          </div>

          <div className="feature-block">
            <div className="feature-number">02.</div>
            <div className="feature-divider">
              <h3 className="feature-title">Tez tayyorlash</h3>
              <p className="feature-description">
                10 daqiqada tayyor, 24 soat ichida tayyorlanadi
              </p>
            </div>
            <div className="feature-line"></div>
          </div>

          <div className="feature-block">
            <div className="feature-number">03.</div>
            <div className="feature-divider">     <h3 className="feature-title">Premium class</h3>
              <p className="feature-description">
                Professional dizaynerlar tomonidan tayyorlangan shablonlar
              </p></div>
            <div className="feature-line"></div>
          </div>

          <div className="feature-block">
            <div className="feature-number">04.</div>
            <div className="feature-divider">
              <h3 className="feature-title">Qulay xizmat</h3>
              <p className="feature-description">
                Onlayn toʻlov, avtomatik saqlash va ulashish imkoniyati
              </p>
            </div>
            <div className="feature-line"></div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2 className="about-top-heading">HAR BIR TAKLIFNOMA — SAN'AT VA TEXNOLOGIYANING UYG'UNLIGI</h2>
            <h1 className="about-main-heading">BIZ HAQIMIZDA</h1>
            <p className="about-text">
              TaklifnomaVIP - bu shunchaki onlayn taklifnoma yaratish platformasi emas, bu sizning maxsus kuningizni estetik va samimiy tarzda ifoda etish imkoniyati. Bizning jamoamiz professional dizaynerlar, dasturchilar va marketing mutaxassislaridan iborat. Maqsadimiz — har bir foydalanuvchiga qulay, chiroyli va zamonaviy raqamli taklifnoma yaratish imkonini berish.
            </p>
            <button className="about-cta-button">BA'TAFSIL</button>
          </div>
          <div className="about-right">
            <div className="about-image-wrapper">
              <img src="/assets/img_3.png" alt="About us" className="about-main-image" />
              <div className="about-year">2025</div>
            </div>
            <div className="about-decorative-elements">
              <div className="vineyard-illustration"></div>
              <div className="golden-dots"></div>
            </div>

          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="categories-container">
          <div className="category-block">
            <div className="category_text_wrapper">
              <h3 className="category-title-en">WEDDING</h3>
              <h4 className="category-title-uz">TO'Y</h4>
              <p className="category-description">Lorem ipsum malesu.</p>
            </div>


            <div className="category-icon">
              <img src="/assets/ring.png" alt="ring" />
            </div>
          </div>

          <div className="category-block">
            <div className='category_text_wrapper'>
              <h3 className="category-title-en">BIRTHDAY</h3>
              <h4 className="category-title-uz">TUG'ILGAN KUN</h4>
              <p className="category-description">Lorem ipsum malesu.</p>
            </div>

            <div className="category-icon">
              <img src="/assets/cake.png" alt="cake" />
            </div>
          </div>

          <div className="category-block">
            <div className="category_text_wrapper">
              <h3 className="category-title-en">CELEBRATION</h3>
              <h4 className="category-title-uz">TABRIKNOMA</h4>
              <p className="category-description">Lorem ipsum malesu.</p>
            </div>


            <div className="category-icon">
              <img src="/assets/list.svg" alt="list" />
            </div>
          </div>

          <div className="category-block">
            <div className="category_text_wrapper">

              <h3 className="category-title-en">BABY PARTY</h3>
              <h4 className="category-title-uz">BOLA KUNI</h4>
              <p className="category-description">Lorem ipsum malesu.</p>
            </div>

            <div className="category-icon">
              <img src="/assets/kalyaska.svg" alt="kalyaska" />
            </div>
          </div>
        </div>
      </section>

      <section className="hero-image-section">
        <div className="hero-image-container">
          <img src="/assets/bg_img.svg" alt="Hero wedding" className="hero-image" />
          <div className="hero-text-overlay">
            <h2 className="hero-main-text">ENG ZO'R TO'Y</h2>
            <p className="hero-sub-text">Bu albatta sizning to'yingiz</p>
          </div>
        </div>
      </section>


      <section id="templates" className="collection-section">
        <div className="collection-container">
          <div className="collection-header">
            <div className="collection-header-left">
              <h1 className="collection-main-title">YANGI KOLLEKSIYA 2025</h1>
              <h2 className="collection-subtitle">SIZGA MOS TAKLIFNOMA TANLANG</h2>
              <p className="collection-description">
                To'y, tug'ilgan kun yoki bayram uchun ideal yechim. Estetik dizayn, qulay narx va unutilmas taassurot.
              </p>
            </div>

          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={3}
            allowTouchMove={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              bulletClass: 'nav-dot',
              bulletActiveClass: 'nav-dot active',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.params.pagination.el = paginationRef.current
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
              },
            }}
            className="products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>

                    <div className="product-card">
                    <div className="product-phone">
                      <img src={product.image} alt={product.title} className="product-image" />
                    </div>
                  <div className="product-card-content">
                      <h3 className="product-title">{product.title}</h3>
                      <div className="product-description-wrapper">
                        {product.description.map((desc, index) => (
                          <p key={index} className="product-description">{desc}</p>
                        ))}
                        <p className="product-sales">{product.sales}</p>
                      </div>
                      <div className="product-price">
                        <span className="price-label">NARX</span>
                        <div className="product-price-row">
                          <span className="price-value">{product.price}</span>
                          <button className="product-buy-button">Sotib olish</button>
                        </div>
                      </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="collection-navigation">
            <button ref={navigationPrevRef} className="nav-arrow nav-arrow-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#482817" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div ref={paginationRef} className="nav-dots"></div>
            <button ref={navigationNextRef} className="nav-arrow nav-arrow-right">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#482817" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="collection-footer">
            <p className="collection-tagline">Shunchaki dizayn emas — his-tuyg'u, uslub va estetik go'zallik.</p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-container">
          <div className="story-header">
            <h2 className="story-subtitle">HAR BIR CHIZIQ, HAR BIR GUL YAPROG'I VA HAR BIR RAMKA — HISSIYOT BILAN YARATILGAN.</h2>
            <h1 className="story-title">
              <span className="story-title-part1">HAR BIR TAKLIFNOMADA</span>
              <span className="story-title-part2"> – MUHABBAT</span>
            </h1>
          </div>

          <div className="story-images-grid">
            {storyImages.map((image) => (
              <div key={image.id} className="story-image-item">
                <img src={image.src} alt={image.alt} className="story-image" />
              </div>
            ))}
          </div>

          <div className="story-bottom">
            <div className="story-features">
              {storyFeatures.map((feature) => (
                <div key={feature.id} className="story-feature-item">
                  <div className="story-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="story-feature-title">{feature.title}</h3>
                  <p className="story-feature-text">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="story-history">
              <h1 className="story-history-title">{historyData.title}</h1>
              <p className="story-history-text">
                {historyData.text}
              </p>
              <button className="story-history-button">{historyData.buttonText}</button>
             
            </div>
          </div>
        </div>
      </section>

      <footer id="partnership" className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2 className="footer-brand-name">TAKLIFNOMAVIP</h2>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">CONTACT US</h3>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#482817" strokeWidth="1.5"/>
                  <path d="M8 1.5C5.51472 1.5 3.5 3.51472 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.51472 10.4853 1.5 8 1.5Z" stroke="#482817" strokeWidth="1.5"/>
                </svg>
                <span>Yunsabad, Tashkent, Uzbekistan.</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L8 8.5L13.5 4.5" stroke="#482817" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2.5" y="3.5" width="11" height="9" rx="1" stroke="#482817" strokeWidth="1.5"/>
                </svg>
                <span>taklifnomavip@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 2.5H4.5C3.67157 2.5 3 3.17157 3 4V12C3 12.8284 3.67157 13.5 4.5 13.5H11.5C12.3284 13.5 13 12.8284 13 12V4C13 3.17157 12.3284 2.5 11.5 2.5Z" stroke="#482817" strokeWidth="1.5"/>
                  <path d="M3 5.5H13" stroke="#482817" strokeWidth="1.5"/>
                </svg>
                <span>+998(33)885-43-21</span>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">ABOUT US</h3>
              <a href="#" className="footer-link">Story about us</a>
              <a href="#" className="footer-link">Our latest blog posts</a>
              <a href="#" className="footer-link">Purchase our products</a>
              <a href="#" className="footer-link">Keep in touch</a>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">LASTEST NEWS</h3>
              <div className="footer-news-item">
                <span className="footer-news-date">September 11, 2019</span>
                <span className="footer-news-title">LARGEST VINEYARD</span>
              </div>
              <div className="footer-news-item">
                <span className="footer-news-date">September 11, 2019</span>
                <span className="footer-news-title">OUR BEST APERITIFS</span>
              </div>
              <div className="footer-news-item">
                <span className="footer-news-date">September 11, 2019</span>
                <span className="footer-news-title">AMAZING RECIPES</span>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>Copyright 2025 taklifnomavip.uz all rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainPage

