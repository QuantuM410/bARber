import '../styles/globals.css'
import { Poppins } from 'next/font/google' // Assuming 'Poppins' is the correct font name

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

export const metadata = {
  title: 'bARber',
  description: 'You Better Have A Haircut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
