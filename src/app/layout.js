import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layouts from "./commons/components/Layouts";
import SpotifyTop from "./commons/components/elements/SpotifyTop";
import TopLoader from "./commons/components/elements/TopLoader";
import ChatBubble from "./commons/components/elements/ChatBubble";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Home | Reza",
  description: "Personal website, portfolio, roadmap, and more",
  keywords:
    "Ryznoxy ,Portfolio,ryznoxy Portfolio,Reza, Reza Portfolio,ryznoxy my id,ryznoxy Reza Portfolio,Reza",
  creator: "Reza Adi N",
  openGraph: {
    title: "Reza - Personal Website",
    description:
      "Personal website, portfolio, roadmap, and more of Ryznoxy AKA Reza",
    url: "https://ryznox.my.id/",
    siteName: "Ryznoxy",
    images: [
      {
        url: "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ohc78qqittlujanfbobr",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  profile:
    "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ohc78qqittlujanfbobr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={sora.className}>
        <Providers>
          <SpotifyTop />
          <TopLoader />
          <ChatBubble />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
