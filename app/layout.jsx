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
// export function reportWebVitals(metric) {
//   switch (metric.name) {
//     case "FCP":
//       sendAnalytics(metric);
//       break;
//     case "LCP":
//       sendAnalytics(metric);
//       break;
//     case "CLS":
//       sendAnalytics(metric);
//       break;
//     case "FID":
//       sendAnalytics(metric);
//       break;
//     case "TTFB":
//       sendAnalytics(metric);
//       break;
//     case "Next.js-hydration":
//       sendAnalytics(metric);
//       break;
//     case "Next.js-route-change-to-render":
//       sendAnalytics(metric);
//       break;
//     case "Next.js-render":
//       sendAnalytics(metric);
//       break;
//     default:
//       break;
//   }
// }