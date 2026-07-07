export default function Footer() {
  return (
    <footer
      style={{
        background: "#001F3F",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p>© 2026 انجمن شطرنج نیشابور</p>

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {/* واتساپ */}
        <a
          href="https://chat.whatsapp.com/JDk9FwIfeVZ4aEYpgQbs4l?s=cl&p=a&mlu=2&amv=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/whatsapp.png"
            alt="واتساپ"
            style={{ width: "40px", height: "40px" }}
          />
        </a>

        {/* ایتا */}
        <a
          href="https://eitaa.com/CHESSABARSHAHR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/eitaa.png"
            alt="ایتا"
            style={{ width: "40px", height: "40px" }}
          />
        </a>

        {/* اینستاگرام */}
        <a
          href="https://www.instagram.com/chessneyshabur.official?igsh=c3AzNHV1bGx1MzI="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/instagram.png"
            alt="اینستاگرام"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </div>
    </footer>
  );
}