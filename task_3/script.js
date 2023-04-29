const inputNode = document.querySelector('.input__task-three');
const buttonNode = document.querySelector('.btn__task-three');
const resultNode = document.querySelector('.result__task-three');

function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
            <div class="cards">
                <img src="${item.download_url}" alt="Random image" class="cards__img-one">
                <p class="cards__title">${item.author}</p>
            </div>
            `;
        cards += cardBlock;
    });

    resultNode.innerHTML = cards;
}

buttonNode.addEventListener('click', () => {
    if (inputNode.value < 1 || inputNode.value > 10 || isNaN(inputNode.value)) {
        resultNode.innerHTML = 'Число вне диапазона от 1 до 10!';
    } else {
        useRequest(`https://picsum.photos/v2/list/?limit=${inputNode.value}`, displayResult);
    }
})