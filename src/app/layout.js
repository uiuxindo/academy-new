import { Geist, Geist_Mono, Imprima } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "aos/dist/aos.css";
import AOSInit from "./components/plugin/aos/Aos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UIUXINDO Academy",
  description: "UIUXINDO Academy adalah platform edukasi yang berfokus pada dunia digital produk desain dan teknologi terlengkap no 1 di Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
