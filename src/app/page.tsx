import Image from 'next/image';
import styles from './page.module.css';
import { Container, Flex, Text } from '@radix-ui/themes';

export default function Home() {
	return (
		<Container size={'4'} align={'center'}>
			<Flex justify={'center'} direction={'column'}>
				<Text size={'6'}>Hola Mundo</Text>
			</Flex>
		</Container>
	);
}
