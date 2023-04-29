const buttonNode = document.querySelector('.btn__task-five');
const resultNode = document.querySelector('.result__task-five');
const inputPageNode = document.querySelector('.input__task-five_page');
const inputLimitNode = document.querySelector('.input__task-five_limit');

if (JSON.parse(localStorage.getItem("images"))) {
    showCards();
}

const useRequest = (url) => {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        let imagesData = [];
        data.forEach(item => {
            imagesData.push({
                imageSrc: item.download_url,
            });
        });
        localStorage.setItem("images", JSON.stringify(imagesData));
        showCards();
    })
    .catch(() => {
        console.log('error')
    })
}

function showCards() {
    let cards = '';
    const data = JSON.parse(localStorage.getItem("images"));

    data.forEach(item => {
        const cardBlock = `
            <div class="cards">
                <img src="${item.imageSrc}" alt="Random image" class="cards__img-one">
            </div>
            `;
        cards += cardBlock;
    });

    resultNode.innerHTML = cards;
}

buttonNode.addEventListener('click', async () => {
    if ((inputPageNode.value < 1 || inputPageNode.value > 10 || isNaN(inputPageNode.value)) && (inputLimitNode.value < 1 || inputLimitNode.value > 10 || isNaN(inputLimitNode.value))) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (inputPageNode.value < 1 || inputPageNode.value > 10 || isNaN(inputPageNode.value)) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (inputLimitNode.value < 1 || inputLimitNode.value > 10 || isNaN(inputLimitNode.value)) {
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        await useRequest(`https://picsum.photos/v2/list?page=${inputPageNode.value}&limit=${inputLimitNode.value}`);
    }
})