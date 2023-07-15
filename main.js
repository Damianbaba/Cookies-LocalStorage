document.addEventListener('DOMContentLoaded', () => {



    const cookieBox = document.querySelector('.cookie-box')
    const btn = document.querySelector('.cookie-btn')

    const showCookie = () => {
        const cookieEaten = localStorage.getItem('cookie');
        if (cookieEaten) {
            cookieBox.classList.add('hide');
        }
    };

    const handleCookieBox = () => {
        localStorage.setItem('cookie', 'true');
        cookieBox.classList.add('hide');
    };

    btn.addEventListener('click', handleCookieBox);
    showCookie();

});
