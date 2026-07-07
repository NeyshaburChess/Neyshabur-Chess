"use client";

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: e.target.fullName.value,
      phone: e.target.phone.value,
      birthDate: e.target.birthDate.value,
      fideId: e.target.fideId.value,
    };

    // ذخیره اطلاعات در SessionStorage تا بعد از پرداخت استفاده کنیم
    sessionStorage.setItem("registerData", JSON.stringify(data));

    // هدایت به صفحه پرداخت
    router.push("/payment");
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
        <h2 style={{ margin: 0, fontSize: 22 }}>فرم ثبت‌نام مسابقات شطرنج نیشابور</h2>
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
          <input name="fullName" required />
        </label>

        <label>
          شماره تماس:
          <input name="phone" required />
        </label>

        <label>
          تاریخ تولد:
          <input name="birthDate" type="date" required />
        </label>

        <label>
          شماره فیده (اجباری):
          <input name="fideId" required />
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
          ادامه و پرداخت
        </button>
      </form>
    </main>
  );
}