import './globals.css';

export const metadata = {
  title: 'Lumi | Adaptive learning that helps next',
  description: 'A calm adaptive learning experience that helps people understand what they know, where they are, and what they should do next.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
