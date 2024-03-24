let UserApi = 'http://localhost:3000/user';

// function login() {
//     getUser(handleLogin);
// }

// login();

// function getUser(callback) {
//     fetch(UserApi).then(function (res) {
//         return res.json().then(callback);
//     });
// }
handleLogin();

function handleLogin() {
    let btn_formSignIn = document.getElementById('btn_formSignIn');
    btn_formSignIn.onclick = async function (e) {
        e.defaultPrevented;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        const resp = await fetch(`http://localhost:3000/user?email=${email}`);
        const users = await resp.json();
        const userExisted = users[0];
        if (userExisted.password === password) {
            localStorage.setItem('user', JSON.stringify(userExisted));
            location.reload();
            alert('login success!');
        } else {
            alert('login failed!');
        }
    };
}

function signUp() {
    handleCreateUser();
}
signUp();

function createUser(data) {
    fetch(UserApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (res) {
        return res.json();
    });
    if (data) {
        alert('Đăng ký thành công');
    }
}

function handleCreateUser() {
    let btn_formSignUp = document.getElementById('btn_formSignUp');
    btn_formSignUp.onclick = function (e) {
        let fullname_signUp = document.getElementById('fullname_signUp').value;
        let email_signUp = document.getElementById('email_signUp').value;
        let password_signUp = document.getElementById('password_signUp').value;
        let user = {
            username: fullname_signUp,
            email: email_signUp,
            password: password_signUp
        };
        createUser(user);
    };
}
