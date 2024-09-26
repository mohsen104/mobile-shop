import "./globals.css";
import Footer from "@/components/modules/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MyAppProvider from "@/components/provider/MyAppProvider";

export const metadata = {
  title: "موبایل شاپ",
  description: "بزرگترین فروشگاه موبایل ایران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyAppProvider>
          {children}
        </MyAppProvider>
        <Footer />
        <ToastContainer
          position='top-right' />
        <SpeedInsights />
      </body>
    </html>
  );
}
