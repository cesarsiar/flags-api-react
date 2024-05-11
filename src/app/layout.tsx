import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { CountriesInterceptor } from '@/interceptors/getCountryInterceptor.interceptor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Flags',
	description: 'Made by Cesar Silva',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	CountriesInterceptor();
	return (
		<>
			<html lang='en'>
				<body className={inter.className}>
					<Theme accentColor='cyan'>{children}</Theme>
				</body>
			</html>
		</>
	);
}
