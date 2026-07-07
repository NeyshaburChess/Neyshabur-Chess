"use client";

export default function Account() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    // فعلاً فقط نمایش — بعداً API اضافه می‌کنیم
    console.log("اطلاعات حساب کاربری:", data);

    alert("اطلاعات حساب کاربری با موفقیت ثبت شد.");
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
        <h2 style={{ margin: 0, fontSize: 22 }}>حساب کاربری</h2>
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
          نام و نام خانوادگی:
          <input
            name="fullName"
            required
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          ایمیل:
          <input
            name="email"
            type="email"
            required
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          شماره تماس:
          <input
            name="phone"
            required
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
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
            marginTop: 10,
          }}
        >
          ذخیره اطلاعات
        </button>
      </form>
    </main>
  );
}