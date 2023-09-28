'use client';

import Navbar from "../components/navbar/Navbar";
import { Provider } from 'react-redux';
import store from '../context/store';

export default function tasklistLayout({children}:{children: React.ReactNode}) {
  return (
    <Provider store={store}>
      <div className='flex flex-row'>
        <Navbar />
        {children}
      </div>
    </Provider>
  )
}
