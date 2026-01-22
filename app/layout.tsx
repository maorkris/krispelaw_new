import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "עו\"ד יוסף קריספל | משרד עורכי דין",
  description: "משרד בוטיק המתמקד בכם - ליווי משפטי אישי עם מחויבות, דיוק והבנה מעמיקה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
