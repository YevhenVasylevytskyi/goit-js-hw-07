const ulElem = Array.from(document.querySelector('#categories').children);

for (let elem of ulElem) {
    let category = elem.firstElementChild.textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category}`);
    console.log(`Количество элементов: ${quantityElem}`);
};