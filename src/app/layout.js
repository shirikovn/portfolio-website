import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['200','400', '500', '700'],
})

export const metadata = {
  title: 'Shirikov Nikita Test Web', 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.className}>
      <body className="body">{children}</body>
    </html> 
  )
}
