const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');
const securePage = document.getElementById('securePage');
const logoutButton = document.getElementById('logout');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        document.getElementById('registerMessage').textContent = 'User already exists!';
    } else {
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('registerMessage').textContent = 'Registration successful!';
        setTimeout(() => {
            document.getElementById('registerMessage').textContent = '';
            container.classList.remove('right-panel-active');
        }, 2000);
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        setTimeout(() => {
            document.getElementById('loginMessage').textContent = '';
            container.classList.add('hidden');
            securePage.classList.remove('hidden');
        }, 2000);
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid email or password!';
    }
});

logoutButton.addEventListener('click', () => {
    securePage.classList.add('hidden');
    container.classList.remove('hidden');
});
