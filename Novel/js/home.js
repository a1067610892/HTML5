window.onload = function () {
    let num = 1
    let html = document.getElementById('Home')
    setInterval(() => {
        switch (num) {
            case 1:
                html.style.backgroundImage = "url('./img/3.jpg')"
                num = num + 1
                break
            case 2:
                html.style.backgroundImage = "url('./img/4.jpg')"
                num = num + 1
                break
            case 3:
                html.style.backgroundImage = "url('./img/5.jpg')"
                num = num + 1
                break
            case 4:
                html.style.backgroundImage = "url('./img/6.jpg')"
                num = num + 1
                break
            case 5:
                html.style.backgroundImage = "url('./img/2.jpg')"
                num = 1
                break
        }
    },4500)
    let Homes = document.getElementById('Home').querySelectorAll('.border');
    for (let i = 0; i < Homes.length; i++) {
        Homes[i].onclick = function() {
            location.href=`novel.html?id=${i}`
        }
    }
}