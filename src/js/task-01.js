const amountCatagoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', amountCatagoriesEl.length);
amountCatagoriesEl.forEach(element => {
    const titleEl = element.firstElementChild.textContent;
    const otherEl = element.lastElementChild.children.length;
    console.log('Category:', titleEl);
    console.log('Elements:', otherEl);
});