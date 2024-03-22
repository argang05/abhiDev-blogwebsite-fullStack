//This is the main layout page: all designs defined here is visible and applied to all children pages:
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

//Defining a template for title of website:
// export const metadata = {
//   title: {
//          default : "Next.js 14 Homepage",
//          template : "%s | Next.js 14"
//  }
//   description: 'Abhidev Blog Website Homepage',
// }

export const metadata = {
  title: {
    default: "Abhidev Blog Website",
    template : "%s | Abhidev Blog Web"
  },
  description: 'Abhidev Blog Website Homepage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* This children below denotes all the subpages (i.e. about , contact , blog etc) */}
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}