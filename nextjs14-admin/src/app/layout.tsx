import clsx from 'clsx';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Registry from '@/theme/registry';
import { getTheme } from '@/lib/actions';

const noto = Noto_Sans_KR({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = await getTheme();
  return (
    <html lang="en">
      <body
        className={clsx(
          noto.className,
          'antialiased',
          'quantum',
          `${mode}-mode`,
        )}
      >
        <Registry themeMode={mode}>{children}</Registry>
      </body>
    </html>
  );
}
