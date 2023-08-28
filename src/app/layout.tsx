import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { useTheme } from '@/context/ThemeContext';
import { ThemeProvider } from '@/context/ThemeContext';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
      
        </ThemeProvider>
      </body>
    </html>
  );
}
