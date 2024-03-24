//---------------------------- Scroll------------------------
let calcScrollValue = () => {
    let scrollBtn = document.getElementById('btn_scroll');
    let BtnValue = document.getElementById('btn_top-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollBtn.style.display = 'grid';
    } else {
        scrollBtn.style.display = 'none';
    }

    scrollBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    scrollBtn.style.background = `conic-gradient(#dd7d3c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// --------------------------- Change background home ---------------------------

var homepage = document.querySelector('.homepage');

function changeBgr(e) {
    var src_bgr = e.children[0].children[0].src;
    bgr_home.style.backgroundImage = 'url(' + src_bgr + '), url(' + src_bgr + ')';
    homepage.classList.remove('animation-opacity');
    homepage.classList.add('animation-opacity');
}

// ------------------------ Sign in / Sign up ------------------

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const btn_user = document.querySelector('.User');
const showform_user = document.querySelector('.form_user');
const close__formUser = document.querySelector('.btn_close_form');
const update_userName = document.querySelector('#update_userName');

btn_user.addEventListener('click', () => {
    const user = localStorage.getItem('user');
    if (!user) {
        if (showform_user.style.display == 'none') {
            showform_user.style.display = 'flex';
        } else {
            showform_user.style.display = 'none';
        }
    } else {
        const modal_User = document.querySelector('.modal_User');
        const userData = JSON.parse(user);
        update_userName.innerText = userData.username;
        if (modal_User.style.display == 'none') {
            modal_User.style.display = 'flex';
        } else {
            modal_User.style.display = 'none';
        }
    }
});

close__formUser.addEventListener('click', function () {
    showform_user.style.display = 'none';
});

showform_user.addEventListener('click', function () {
    showform_user.style.display = 'none';
});

container.addEventListener('click', function (event) {
    event.stopPropagation();
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// ------------------------ Log Out ----------------------
var btn_logOut = document.getElementById('logOut');

btn_logOut.addEventListener('click', function (e) {
    localStorage.clear();
    window.location.reload();
});

// ------------------------ Form validation  -----------------------

// ham validator
function Validator(options) {
    // ham thuc validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    //   lay element cua form can valida
    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                //  xu ly truong hop blur khoi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };

                // xu ly moi khi nguoi dung nhap vao input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                };
            }
        });
    }
}

// Dinh nghia rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        }
    };
};

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này nhập email';
        }
    };
};

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiếu ${min} kí tự`;
        }
    };
};
