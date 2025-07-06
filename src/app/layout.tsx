
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = { 
  title: 'WebGo',
  description: 'Sitio web de WebGo'
};

export const viewport: Viewport = { 
  width: 'device-width', 
  initialScale: 1 
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}