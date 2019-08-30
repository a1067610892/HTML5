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
                    <span class='span'>${res.data[j].name}</span>
                    <span class='author'>作者：${res.data[j].author}</span>
                    <span class='author'>更新时间：${res.data[j].time}</span>
                    <span class='chapter'>最新章节：${res.data[j].chapter}</span>
                `;
                box.appendChild(odivs);
            }
        })
    }
}
function Return () {
    location.href = 'home.html'
}