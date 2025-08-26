import './globals.css'
import { inter } from './ui/fonts';
import MainHeader from './ui/main-header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
