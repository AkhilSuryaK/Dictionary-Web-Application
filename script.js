const searchbtn = document.getElementById('searchbtn');
const searchinput = document.getElementById('searchinput');
const wordheading = document.getElementById('wordheading');
const definition = document.getElementById('definition');

const dictionary = word => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'fa88f2193emsh718563529a8ac1cp107d70jsn1d350d75e8dc',
			'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
		},
	};

	fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
		.then(response => response.json())
		.then(response => {
			wordheading.innerHTML = response.word || "No word found";
			definition.innerHTML = response.definition
				? response.definition
						.replace('2.', '<br>2.')
						.replace('3.', '<br>3.')
						.replace('4.', '<br>4.')
				: "No definition available.";
		})
		.catch(err => {
			console.error(err);
			definition.innerHTML = "Error fetching data. Try again.";
		});
};

searchbtn.addEventListener('click', e => {
	e.preventDefault();
	dictionary(searchinput.value.trim());
});
