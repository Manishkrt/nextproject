import { Inter } from "next/font/google"; 
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "new Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body className={inter.className}> 
      <div className="bg-light py-2">
        <div className="container">
          <div className="d-flex align-items-center gap-3">
            <Link className="fw-bold" href='/'>Logo</Link>
            <Link href='/about'>About</Link> 
            <Link href='/productsclient'>Client Product</Link> 
            <Link href='/productsserver'>Server Product</Link> 
          </div>
        </div>
        </div>
        {children}
        </body>
    </html>
  );
}

// export function generateMetadata(){
//   return{
//       title:"title",
//       description: "this is description",
//       openGraph: {
//           title: 'this is open graph title for testing',
//           description: 'Some description',
//         }
//   }
// }
