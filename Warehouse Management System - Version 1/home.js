
const wrapper=document.querySelector('.wrapper');
const login=document.querySelector('.login-link');
const register=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin');
const iconClose=document.querySelector('.icon-close');

register.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

login.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll(".navigation a");
            const offset = 100; // Adjust this value to set the offset from the top

            navLinks.forEach(link => {
                link.addEventListener("click", function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                });
            });
    const loginButton = document.getElementById('clkbtn');
    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate the password
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one symbol.');
            return;
        }
        

        // Simulate successful login for demonstration
        // In a real application, you would validate credentials against a database or backend
        const fakeUsername = 'admin';
        const fakePassword = 'Password123!';

        if (username === fakeUsername && password === fakePassword) {
            // Redirect to dashboard or another page
            window.location.href = 'dash.html';
        } else {
            alert('Incorrect username or password.');
        }
        document.querySelector('.regbtn').addEventListener('click', function (e) {
            e.preventDefault();
    
            const usernames = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const passwords = document.getElementById('passwords').value;
            const confirmPassword = document.getElementById('confirmpasswords').value;
    
            // Basic validation
            if (!usernames || !email || !passwords || !confirmPassword) {
                alert('Please fill out all fields.');
                return;
            }
    
            if (passwords !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
    
            // Simulate a successful registration process
            alert('Registration successful!');
    
            // Redirect to form.html
            window.location.href = 'form.html';
        });
    });
});
