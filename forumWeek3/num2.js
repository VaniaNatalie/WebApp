// fetch allows us to make HTTP requests to get the response, can be paired with async + await

async () => {
	let response = await fetch('/login.html');
	// Convert the return object into json format
	let data = response.json();
}
