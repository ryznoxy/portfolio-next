import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layouts from "./commons/components/Layouts";
import SpotifyTop from "./commons/components/elements/SpotifyTop";
import TopLoader from "./commons/components/elements/TopLoader";
import ChatBubble from "./commons/components/elements/ChatBubble";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    template: "%s | Reza",
    default: "Reza",
  },
  description: "Personal website, portfolio, roadmap, and more",
  keywords: [
    "Ryznoxy",
    "Portfolio",
    "ryznoxy Portfolio",
    "Reza",
    "Reza Portfolio",
    "ryznoxy my id",
    "ryznoxy Reza Portfolio",
    "Reza",
  ],
  authors: [{ name: "Reza" }, { name: "Adi", url: "https://ryznoxy.my.id" }],
  creator: "Reza Adi N",
  openGraph: {
    title: "Reza Adi N",
    description: "Personal website, portfolio, roadmap, and more of Reza Adi N",
    url: "https://ryznox.my.id/",
    siteName: "Reza",
    images: [
      {
        url: "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ohc78qqittlujanfbobr",
        width: 1200,
        height: 630,
        alt: "Reza",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={sora.className}>
        <Providers>
          <SpotifyTop />
          {/* <TopLoader /> */}
          <NextTopLoader />
          <ChatBubble />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
