export const metadata = {
  title: "Neyshabur Chess",
  description: "Official website of Neyshabur Chess Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ fontFamily: "Vazir, sans-serif", margin: 0, background: "#f5f5f5" }}>
        {children}
      </body>
    </html>
  );
}