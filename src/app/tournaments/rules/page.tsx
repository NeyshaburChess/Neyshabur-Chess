export default function RulesPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          marginBottom: "15px",
        }}
      >
        قوانین جهانی شطرنج
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "40px",
          fontSize: "17px",
        }}
      >
        آخرین نسخه قوانین جهانی شطرنج (FIDE Laws of Chess)
      </p>
 
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 8px 20px rgba(0,0,0,.12)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#001F3F",
                color: "white",
              }}
            >
              <th style={cell}>عنوان</th>
              <th style={cell}>فرمت</th>
              <th style={cell}>عملیات</th>
            </tr>
          </thead>
 
          <tbody>
            <tr>
              <td style={cell}>قوانین جهانی شطرنج (FIDE Laws of Chess)</td>
 
              <td style={cell}>PDF</td>
 
              <td style={cell}>
                <a
                  href="/pdf/Fide-Law-of-Chess.pdf"
                  target="_blank"
                  style={{
                    background: "#FFD700",
                    color: "#001F3F",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  📄 مشاهده فایل
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
 
const cell = {
  padding: "15px",
  borderBottom: "1px solid #ddd",
};
