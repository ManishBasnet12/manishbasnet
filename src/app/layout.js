import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../Components/Navbar";
import CustomCarousel from "../../Components/CustomCarousel";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.manishbasnet.com'),
  title:{
    default:'Manish Basnet - Frontend Developer',
    template:'%s - Manish'
  },
  description:'Transform your digital presence with our innovative tech solution, design and development services, and software development',
  twitter: {
    card:'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CustomCarousel />

        {/* <Suspense fallback={<Loading />}> */}
          {children}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
