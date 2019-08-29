function getText(a, head, i, type, text) {
    if (a[1] == i) {
        document.getElementsByTagName
        let box = document.getElementById('row');
        title.innerHTML = text;
        head.innerHTML = text;
        axios.get(`https://a1067610892.github.io/-Novel_JSON/${type}.json`).then((res) => {
            for (let j = 0; j < res.data.length; j++) {
                let odivs = document.createElement('div')
                odivs.innerHTML = `
                    <img class='img' src="${res.data[j].img}" />
                    <span>${res.data[j].name}</span>
                `;
                box.appendChild(odivs);
            }
        })
    }
}
function Return () {
    location.href = 'home.html'
}