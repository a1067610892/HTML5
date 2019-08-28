window.onload = function () {
    let num = 1
    let html = document.getElementById('Home')
    setInterval(() => {
        if (num === 1) {
            html.style.backgroundImage = "url('./img/3.jpg')"
            num = num + 1
        } else if (num === 2) {
            html.style.backgroundImage = "url('./img/4.jpg')"
            num = num + 1
        } else if (num === 3) {
            html.style.backgroundImage = "url('./img/5.jpg')"
            num = num + 1
        } else if (num === 4) {
            html.style.backgroundImage = "url('./img/6.jpg')"
            num = num + 1
        } else if (num === 5) {
            html.style.backgroundImage = "url('./img/2.jpg')"
            num = 1
        }
    },3000)
}