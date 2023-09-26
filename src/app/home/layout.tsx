'use client';

import Navbar from '../components/navbar/Navbar';


// the functional component..
export default function HomeLayout({
    children
  }: {
    children: React.ReactNode
  }) {

    return (
      <div className='flex flex-row'>
        <Navbar />
        {children}
      </div>
      
    )
  }

