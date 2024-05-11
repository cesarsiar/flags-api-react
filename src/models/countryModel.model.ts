export type CountryModel = {
	population: number;
	name: { common: string };
	capital: string;
	languages: string;
	flags: {
		svg: string;
	};
};
