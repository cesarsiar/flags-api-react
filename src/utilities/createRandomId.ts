export function createRandomId(population: number) {
	return Math.round(Math.random() * (population + 1.2));
}
