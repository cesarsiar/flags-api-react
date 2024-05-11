'use client';

import { getCountrys } from '@/api/getCountrys';
import { Container } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { CountryModel } from '@/models/countryModel.model';
import { createRandomId } from '@/utilities/createRandomId';

const CountryList = () => {
	const [countries, setCountries] = useState([]);

	const fetchCountries = async () => {
		const response = await getCountrys();
		setCountries(response.data);
	};

	useEffect(() => {
		fetchCountries();
	}, []);
	return (
		<div>
			<Container>
				{countries.map((country: CountryModel) => (
					<CountryCard
						key={createRandomId(country.population)}
						{...country}
					/>
				))}
			</Container>
		</div>
	);
};

export default CountryList;
