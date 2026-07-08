import "./globals.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: {
    default: "هیأت شطرنج شهرستان نیشابور",
    template: "%s | هیأت شطرنج شهرستان نیشابور",
  },
  description:
    "وب‌سایت رسمی هیأت شطرنج شهرستان نیشابور؛ اخبار، مسابقات، ثبت‌نام، گالری تصاویر، بازیکنان، تقویم مسابقات و آموزش شطرنج.",
  keywords: [
    "شطرنج",
    "هیأت شطرنج نیشابور",
    "مسابقات شطرنج",
    "آموزش شطرنج",
    "FIDE",
    "Neyshabur Chess",
  ],
  icons: {
    icon: "/neyshabur-chess-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}