const loginForm = document.querySelector('form');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // validate username and password her ;

  // redirect to navigation page
  window.location.href = 'navigation.html';
});
