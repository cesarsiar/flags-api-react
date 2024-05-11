'use client';

import { CountryModel } from '@/models/countryModel.model';
import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';
import React from 'react';

const CountryCard = ({ name, capital, languages, flags }: CountryModel) => {
	return (
		<Box>
			<Card>
				<Flex gap='3' align='center'>
					<Avatar
						size='3'
						src={flags.svg}
						radius='full'
						fallback='T'
					/>
					<Box>
						<Text as='div' size='2' weight='bold'>
							{name.common}
						</Text>
						<Text as='div' size='2' color='gray'>
							{capital}
						</Text>
					</Box>
				</Flex>
			</Card>
		</Box>
	);
};

export default CountryCard;
