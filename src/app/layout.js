import '@/app/globals.css'
import { Inter, Concert_One, Eczar } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
const inter = Eczar({ subsets: ['latin']})

export const metadata = {
  title: 'The Blog Piece',
  description: 'The  blog  piece  is  real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
