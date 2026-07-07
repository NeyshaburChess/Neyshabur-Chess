"use client";

export default function Payment() {
  const goToGateway = () => {
    // لینک درگاه پرداخت واقعی
    window.location.href = "https://your-payment-gateway.com";
  };

  return (
    <main className="main-bg" style={{ maxWidth: 700, margin: "0 auto" }}>
      <div
        style={{
          background: "rgba(0, 31, 63, 0.85)",
          color: "white",
          padding: "15px 20px",
          borderRadius: 10,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        <h2>پرداخت هزینه ثبت‌نام</h2>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: 25,
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: 20 }}>هزینه ثبت‌نام: 50,000 تومان</p>

        <button
          onClick={goToGateway}
          style={{
            background: "#001F3F",
            color: "white",
            padding: "12px 20px",
            borderRadius: 10,
            fontSize: 18,
            border: "none",
            cursor: "pointer",
          }}
        >
          انتقال به درگاه پرداخت
        </button>
      </div>
    </main>
  );
}