export const metadata = {
  metadataBase: new URL("https://www.manishbasnet.com/admin"),
  title: "Admin Panel",
  description: "Admin Panel",
  twitter: {
    card: "summary_large_image",
  },
};

export default function AdminLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
