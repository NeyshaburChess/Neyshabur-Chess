"use client";

export default function Home() {
  const sections = [
    { title: "کلاس‌های آموزشی", icon: "/icons/training.png", link: "/training" },
    { title: "مقالات شطرنج", icon: "/icons/articles.png", link: "/articles" },
    { title: "کتابخانه آنلاین", icon: "/icons/library.png", link: "/library" },
    { title: "قوانین جهانی شطرنج", icon: "/icons/rules.png", link: "/rules" },

    // مسابقات و رویدادها
    {
      title: "مسابقات و رویدادها",
      icon: "/icons/events.png",
      link: "/tournaments"
    },

    {
      title: "جدول زمان‌بندی مسابقات",
      icon: "/icons/schedule.png",
      link: "/tournaments/schedule"
    },

    {
      title: "آیین‌نامه مسابقات",
      icon: "/icons/regulations.png",
      link: "/tournaments/rules"
    },

    {
      title: "آرشیو نتایج مسابقات",
      icon: "/icons/results.png",
      link: "/tournaments/results"
    },

    // رزومه و افتخارات
    {
      title: "رزومه و افتخارات بازیکنان",
      icon: "/icons/achievements.png",
      link: "/achievements"
    },

    // حساب کاربری
    {
      title: "حساب کاربری",
      icon: "/icons/account.png",
      link: "/account"
    },
  ];


  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", fontFamily: "sans-serif" }}>

      {/* هدر */}

      <header
        style={{
          background: "#001F3F",
          color: "white",
          padding: "15px 25px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {/* لوگو و عنوان */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src="/neyshabur-chess-logo.png"
            alt="لوگو"
            style={{
              width: "55px",
              height: "55px",
            }}
          />

          <div>
            <h2 style={{ margin: 0, fontSize: "22px" }}>
              هیأت شطرنج شهرستان نیشابور
            </h2>

            <p
              style={{
                margin: 0,
                color: "#d1d5db",
                fontSize: "13px",
              }}
            >
              Chess Association of Neyshabur
            </p>
          </div>
        </div>


        {/* منو */}
        <nav
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            fontWeight: "bold",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            خانه
          </a>

          <a href="/news" style={{ color: "white", textDecoration: "none" }}>
            اخبار
          </a>

          <a href="/tournaments" style={{ color: "white", textDecoration: "none" }}>
            مسابقات
          </a>

          <a href="/players" style={{ color: "white", textDecoration: "none" }}>
            بازیکنان
          </a>

          <a href="/coaches" style={{ color: "white", textDecoration: "none" }}>
            مربیان
          </a>

          <a href="/gallery" style={{ color: "white", textDecoration: "none" }}>
            گالری
          </a>


          {/* درباره هیأت */}
          <div
            style={{
              position: "relative",
            }}
          >
            <span
              style={{
                cursor: "pointer",
              }}
            >
              درباره هیأت ▾
            </span>

            <div
              style={{
                position: "absolute",
                top: "25px",
                right: 0,
                background: "white",
                color: "#001F3F",
                width: "180px",
                borderRadius: "10px",
                padding: "10px",
                display: "none",
              }}
            >
              <a href="/about" style={{ display: "block", color: "#001F3F" }}>
                معرفی هیأت
              </a>

              <a href="/statistics" style={{ display: "block", color: "#001F3F" }}>
                آمار و اطلاعات
              </a>

              <a href="/honors" style={{ display: "block", color: "#001F3F" }}>
                افتخارات
              </a>
            </div>
          </div>


          <a href="/register" style={{ color: "white", textDecoration: "none" }}>
            ثبت‌نام
          </a>
        </nav>


        {/* آمار */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >

          <div style={{
            background: "#082B52",
            padding: "8px 12px",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            👥
            <br />
            <small>بازیکنان</small>
            <br />
            <b>60</b>
          </div>


          <div style={{
            background: "#082B52",
            padding: "8px 12px",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            ⚖️
            <br />
            <small>داوران</small>
            <br />
            <b>8</b>
          </div>


          <div style={{
            background: "#082B52",
            padding: "8px 12px",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            🎓
            <br />
            <small>مربیان</small>
            <br />
            <b>12</b>
          </div>


          <div style={{
            background: "#082B52",
            padding: "8px 12px",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            🏆
            <br />
            <small>مسابقات</small>
            <br />
            <b>10</b>
          </div>

        </div>


        {/* دکمه‌ها */}
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <a
            href="/account"
            style={{
              background: "#FFD700",
              color: "#001F3F",
              padding: "10px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            حساب کاربری
          </a>

          <a
            href="/contact"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            تماس با ما
          </a>
        </div>

      </header>
      {/* آخرین اخبار */}

      <section style={{ marginTop: "50px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#001F3F",
            fontSize: "32px",
            marginBottom: "30px",
          }}
        >
          آخرین اخبار
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "بیست و نهمین دوره مسابقات سریع",
              date: "۱۹ تیر ۱۴۰۵",
              image: "/news/news1.jpg",
            },
            {
              title: "شروع ثبت نام کلاس های تابستان",
              date: "۲۰ تیر ۱۴۰۵",
              image: "/news/news2.jpg",
            },
            {
              title: "انتشار آخرین قوانین فیده",
              date: "۲۲ تیر ۱۴۰۵",
              image: "/news/news3.jpg",
            },
          ].map((news) => (
            <div
              key={news.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,.12)",
              }}
            >
              <img
                src={news.image}
                alt={news.title}
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    color: "#001F3F",
                    marginBottom: "10px",
                  }}
                >
                  {news.title}
                </h3>

                <p style={{ color: "#777" }}>{news.date}</p>

                <a
                  href="/news"
                  style={{
                    color: "#0055cc",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  مشاهده خبر →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
 
<section style={{ marginTop: "60px", marginBottom: "40px" }}>
  <h2
    style={{
      textAlign: "center",
      color: "#001F3F",
      fontSize: "32px",
      marginBottom: "30px",
    }}
  >
    مسابقات آینده
  </h2>
 
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
    }}
  >
    {[
      {
        title: "بیست و نهمین دوره مسابقات سریع",
        date: "۱۹ تیر ۱۴۰۵",
        time: "۱۰:۰۰ صبح",
        place: "هیأت شطرنج نیشابور",
      },
      {
        title: "مسابقات برق‌آسا",
        date: "۲ مرداد ۱۴۰۵",
        time: "۱۷:۰۰",
        place: "سالن شطرنج",
      },
    ].map((item) => (
      <div
        key={item.title}
        style={{
          background: "#001F3F",
          color: "white",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,.15)",
        }}
      >
        <h3 style={{ color: "#FFD700", marginBottom: "15px" }}>
          {item.title}
        </h3>
 
        <p>📅 {item.date}</p>
        <p>🕒 {item.time}</p>
        <p>📍 {item.place}</p>
 
        <a
          href="/register"
          style={{
            display: "inline-block",
            marginTop: "15px",
            background: "#FFD700",
            color: "#001F3F",
            padding: "10px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ثبت‌نام
        </a>
      </div>
    ))}
  </div>
</section>

{/* قهرمانان نیشابور */}

      <section style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#001F3F",
            fontSize: "32px",
            marginBottom: "35px",
          }}
        >
          بازیکنان برتر هیأت شطرنج نیشابور
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              id: 1,
              name: "نام بازیکن",
              title: "قهرمان استان",
              image: "/players/player1.jpg",
            },
            {
              id: 2,
              name: "روشا اکبری",
              title: "استاد فیده و قهرمان جهان",
              image: "/players/player2.jpg",
            },
            {
              id: 3,
              name: "ثنا شادان پور",
              title: "قهرمان کشور",
              image: "/players/player3.jpg",
            },
          ].map((player) => (
            <div
              key={player.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 6px 18px rgba(0,0,0,.12)",
                transition: "0.3s",
              }}
            >
              <img
                src={player.image}
                alt={player.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    color: "#001F3F",
                    fontSize: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {player.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  {player.title}
                </p>

                <a
                  href="/players"
                  style={{
                    display: "inline-block",
                    background: "#FFD700",
                    color: "#001F3F",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  مشاهده رزومه
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* بخش‌ها + آیکون‌ها */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {sections.map((item) => (
          <a
            key={item.title}
            href={item.link}
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "25px",
              textAlign: "center",
              textDecoration: "none",
              color: "#001F3F",
              border: "1px solid #e5e7eb",
              boxShadow: "0 8px 25px rgba(0,0,0,.12)",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 18px 35px rgba(0,31,63,.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.12)";
            }}
          >
            <img
              src={item.icon}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                marginBottom: "18px",
              }}
            />

            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#666",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              برای ورود به بخش {item.title} کلیک کنید.
            </p>
          </a>
        ))}
      </div>

      {/* فوتر */}
      <footer
        style={{
          background: "#001F3F",
          color: "white",
          padding: "20px 10px",
          borderRadius: "10px",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <a href="https://www.instagram.com/chessneyshabur.official" target="_blank">
            <img src="/icons/instagram.png" style={{ width: "40px", margin: "0 10px" }} />
          </a>
          <a href="https://chat.whatsapp.com/JDk9FwIfeVZ4aEYpgQbs4l" target="_blank">
            <img src="/icons/whatsapp.png" style={{ width: "40px", margin: "0 10px" }} />
          </a>
          <a href="https://eitaa.com/CHESSABARSHAHR" target="_blank">
            <img src="/icons/eitaa.png" style={{ width: "40px", margin: "0 10px" }} />
          </a>
        </div>

        <p style={{ fontSize: "14px" }}>
          © هیأت شطرنج شهرستان نیشابور - تمامی حقوق محفوظ است
        </p>

        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          Design & Development by <strong>Mehrab Boozhmehrani</strong>
        </p>
      </footer>

    </main>
  );
}