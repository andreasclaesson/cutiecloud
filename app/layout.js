import './globals.css';

export const metadata = {
  title: 'CutieCloud',
  description: 'Dreamy cloud hosting vibes on Bunny.net storage.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
