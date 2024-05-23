import Footer from '@/components/Footer/Footer'

import NavBar from '@/components/NavBar/NavBar'
import { Inter } from 'next/font/google'
import '../../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dynamatics',
  description: 'Developed by Devsnest LLC'
}

export default function RootLayout({ children }) {
  return (
    <>
      <header className='absolute z-20 w-full'>
        <NavBar />
      </header>
      <main >{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
