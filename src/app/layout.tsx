import './globals.css'
import { Varela_Round } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: 'taskee',
  description: 'Task Manager',
}

const font = Varela_Round({
  subsets: ["latin"],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
