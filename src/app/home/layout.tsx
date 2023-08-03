import Image from 'next/image';
import { Varela_Round } from "next/font/google";
import Navbar from '../components/navbar/Navbar';


// This is the metadata for the whole site..
export const metadata = {
  title: 'taskee',
  description: 'Task Manager',
}

// Initializing the font to be used in the whole site...which is labled 'children' in this case.. 
const font = Varela_Round({
  subsets: ["latin"],
  weight: '400',
});

// the functional component..
export default function RootLayout({
  children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar />
      </>
    )
  }