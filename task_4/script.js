const buttonNode = document.querySelector('.btn__task-four');
const resultNode = document.querySelector('.result__task-four');
const inputWidthNode = document.querySelector('.input__task-four_width');
const inputHeightNode = document.querySelector('.input__task-four_height');

const useRequest = (url) => {
    return fetch(url)
    .then((response) => {
        return response;
    })
    .then((data) => {
        const cardBlock = `
            <div class="cards">
                <img src="${data.url}" alt="Random image" class="cards__img-two">
            </div>
            `;
        resultNode.innerHTML = cardBlock;
    })
    .catch((data) => {
        return data;
    })
}

buttonNode.addEventListener('click', async () => {
    if (inputWidthNode.value < 100 || inputWidthNode.value > 300 || isNaN(inputWidthNode.value)) {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    } else if (inputHeightNode.value < 100 || inputHeightNode.value > 300 || isNaN(inputHeightNode.value)) {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        await useRequest(`https://picsum.photos/${inputWidthNode.value}/${inputHeightNode.value}`);
    }
})