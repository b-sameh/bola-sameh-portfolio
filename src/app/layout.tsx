import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Bola Sameh Dawoud | Mechatronics Engineer',
  description: 'Portfolio of Bola Sameh Dawoud - Mechatronics Engineer specializing in Robotics, Industrial IoT, and Predictive Maintenance.',
  keywords: ['Mechatronics', 'Robotics', 'IoT', 'Machine Learning', 'Egypt'],
  authors: [{ name: 'Bola Sameh Dawoud' }],
  openGraph: {
    title: 'Bola Sameh Dawoud | Mechatronics Engineer',
    description: 'Where Hardware Meets Intelligence. Senior Mechatronics student at Ain Shams University.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-slateBg text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
