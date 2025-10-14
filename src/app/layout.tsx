import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axel Diego | Computer Engineering Student',
  description: 'Portfolio of Axel Diego, Computer Engineering Student',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}