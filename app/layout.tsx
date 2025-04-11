import './globals.css';
import React from 'react';

export const metadata = {
  title: 'მთავარი გვერდი',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <body>
        <header>🌐 მთავარი Header</header>
        <main>{children}</main>
        <footer>🔻 Footer</footer>
      </body>
    </html>
  );
}