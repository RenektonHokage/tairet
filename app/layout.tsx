import './globals.css';
import CardLocal from '@/components/CardLocal';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white p-6">
        {children}
        <footer className="mt-10 text-center text-sm text-gray-400">
          © 2025 Tairet
        </footer>
      </body>
    </html>
  );
}
