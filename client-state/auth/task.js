document.getElementById('signin__btn').addEventListener('click', async function(event) {
	event.preventDefault();

	const login = document.querySelector('input[name="login"]').value;
	const password = document.querySelector('input[name="password"]').value;

	const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
		method: 'POST',
		body: JSON.stringify({
			login,
			password
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	if (data.success) {
		localStorage.setItem('user_id', data.user_id);
		const welcomeBlock = document.getElementById('welcome');
		const userIdSpan = document.getElementById('user_id');
		userIdSpan.textContent = data.user_id;
		welcomeBlock.classList.add('welcome_active');
		document.getElementById('signin__form').reset(); // Сброс формы
	} else {
		const errorElement = document.getElementById('error');
		errorElement.textContent = 'Неверный логин/пароль';
	}
});