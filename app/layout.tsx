import type { Metadata } from "next";
import { Calistoga, Lexend } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Aayushmaan Soni | Full Stack Web Developer",
    template: "Aayushmaan Soni | %s",
  },
  description: "Hi, I’m Aayushmaan Soni, a passionate Full Stack Web Developer specializing in modern JavaScript frameworks and creating innovative web applications. Explore my projects, skills, and journey in web development.",
  icons: {
    icon: '/assets/media/memoji.ico',
  },
  openGraph: {
    title: "Aayushmaan Soni | Full Stack Web Developer",
    description: "Explore my portfolio to learn more about my web development skills and projects.",
    images: ['/assets/media/og-image.jpg'],
  },
  keywords: ['Full Stack Developer', 'Web Development', 'Portfolio', 'MERN', 'Next.js'],
};


const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-lexend',
});

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-calistoga',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${lexend.className}
          ${lexend.variable} ${calistoga.variable}
          antialiased suppress-hydration-warning bg-dark-primary
        `}
      >
        {children}
      </body>
    </html>
  );
}