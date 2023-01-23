
const loginOption = document.querySelector('#loginOption');
const logoutOption = document.querySelector('#logoutOption');


const userExistenceCheck = () => {
    let userDetails = '';
    try {
        userDetails = document.cookie
        .split('; ')
        .find(row => row.startsWith('user'))
        .split('=')[1];

        return JSON.parse(userDetails);
    } catch (error) {
        console.log('No User Logged In');
        return '';
    }
}

const createCookie = (name, value, days) => {
    var expires = '',
        date = new Date();
    if (days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

window.addEventListener('load', () => {
    const userDetails = userExistenceCheck();
    if(userDetails !== '') {
        loginOption.style.display = 'none';
        logoutOption.style.display = 'block';
        console.log(userDetails);
    }
});

function logOut() {
    document.cookie = "user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location.reload();
}

function registerAccount(event) {
    event.preventDefault();

    const details = {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        age: event.target.age.value
    }
    console.log(details);
    createCookie('user', JSON.stringify(details), 1);
    alert('Account Succesfully Created');
    window.location.href = "usf.html";

}
