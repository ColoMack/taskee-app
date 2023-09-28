'use client';

import { Provider } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import store from '../context/store';


// the functional component..
export default function HomeLayout({
    children
  }: {
    children: React.ReactNode
  }) {

    return (
      <Provider store={store}>
        <div className='flex flex-row'>
          <Navbar />
          {children}
        </div>
      </Provider>
    );
  };

