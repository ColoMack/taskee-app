'use client';

import Navbar from "../components/navbar/Navbar";

export default function Tasklistlayout({
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