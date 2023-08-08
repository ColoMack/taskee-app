import Navbar from '../components/navbar/Navbar';

// the functional component..
export default function HomeLayout({
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

