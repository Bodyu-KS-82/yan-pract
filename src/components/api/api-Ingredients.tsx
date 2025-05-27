// Функции запросов внешних данных

// Запрос данных по Ingredients
export const getIngredients = async () => {
	const URL = 'https://norma.nomoreparties.space/api/ingredients';
	try {
		const response = await fetch(URL);
		if (!response.ok) {
			throw new Error('Возникла проблема с получением данных');
		}
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};
