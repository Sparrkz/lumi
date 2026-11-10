import './globals.css';

export const metadata = {
  title: 'Lumi — Learning that adapts to you',
  description: 'An adaptive learning environment for every age, background and kind of curiosity. Learn at your own pace, in your own way. Free at launch.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
