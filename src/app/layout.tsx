import './globals.css'
import { Varela_Round } from "next/font/google";
import ClientOnly from './components/ClientOnly';
import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';
import { Provider } from "react-redux";
import store from './context/store';

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
      <html lang="en">
        <body className={font.className}>
          <>
            
              <ClientOnly>
                <AuthContext>
                  <ToasterContext />
                  {children}
                </AuthContext>
              </ClientOnly>
             
          </>
        </body>
      </html>
    )
  }
