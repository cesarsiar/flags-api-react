import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Flags',
	description: 'Made by Cesar Silva',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Theme accentColor='cyan'>
					<ThemePanel />
					{children}
				</Theme>
			</body>
		</html>
	);
}
