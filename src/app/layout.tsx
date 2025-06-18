import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Me@Walmart Incidents',
  description: 'Me@Walmart Incidents Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
