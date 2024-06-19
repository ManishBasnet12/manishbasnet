
export const metadata = {
  metadataBase: new URL("https://www.manishbasnet.com/home"),
  title: "Innovative Tech Solutions",
  description:
    "Discover cutting-edge technology and innovative solutions at Ewumesh. Explore our latest products, expert insights, and how were shaping the future of tech.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomeLayout({children}) {
  return <>{children}</>;
}