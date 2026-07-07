"use client";

export default function Verify() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const trackingCode = e.target.trackingCode.value;

    const userData = JSON.parse(sessionStorage.getItem("registerData"));

    const finalData = {
      ...userData,
      trackingCode,
    };

    console.log("ثبت‌نام نهایی:", finalData);

    alert("ثبت‌نام شما با موفقیت تکمیل شد!");
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
        <h2>ثبت کد پیگیری پرداخت</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: 25,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <label>
          کد پیگیری پرداخت:
          <input name="trackingCode" required />
        </label>

        <button
          type="submit"
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
          ثبت نهایی
        </button>
      </form>
    </main>
  );
}