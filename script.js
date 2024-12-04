
const boxes = document.querySelectorAll('.box');
const totalPriceElement = document.getElementById('total-price');
boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(otherBox => {
      otherBox.classList.remove('clicked');
      otherBox.querySelector('.details').classList.add('hidden');
    });

    box.classList.add('clicked');
    box.querySelector('.details').classList.remove('hidden');

    const priceText = box.querySelector('.price').textContent;
    const price = priceText.match(/\$([\d.]+)/)[1];
    totalPriceElement.textContent = `$${price} USD`;
  });
});
