import "./globals.css"

export const metadata = {
  title: "Bell Weddings - Your Dream Wedding Awaits",
  description:
    "Creating magical wedding experiences with personalized planning, stunning decorations, and flawless execution.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
