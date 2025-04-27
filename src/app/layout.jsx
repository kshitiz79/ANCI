import "./../../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RootCleanup from "@/components/root-cleanup";
import { Montserrat, Nunito_Sans } from "next/font/google";

// Load Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "400", "900"] });


export const metadata = {
  title: "Home - Seamless Office Interiors: Any Scale, On Time, Every Time | A.N.C.I.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}> {/* Apply font globally */}
        <RootCleanup />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
