const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const miniatureImages = document.getElementsByClassName('miniature');

function insertMemeImage() {
  memeImage.src = '';
  const imagePreview = URL.createObjectURL(memeInsert.files[0]);
  memeImage.src = imagePreview;
}

function addMemeFromMiniature(event) {
  memeImage.src = event.target.src;
}

function changeBorder(style) {
  const memeImageContainer = document.getElementById('meme-image-container');
  const newBorder = style;
  memeImageContainer.style.border = newBorder;
}

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});
memeInsert.addEventListener('change', insertMemeImage);
fireButton.addEventListener('click', () => {
  const fireStyle = '3px dashed rgb(255, 0, 0)';
  changeBorder(fireStyle);
});
waterButton.addEventListener('click', () => {
  const waterStyle = '5px double rgb(0, 0, 255)';
  changeBorder(waterStyle);
});
earthButton.addEventListener('click', () => {
  const earthStyle = '6px groove rgb(0, 128, 0)';
  changeBorder(earthStyle);
});

for (let i = 0; i < miniatureImages.length; i += 1) {
  const meme = miniatureImages[i];
  meme.addEventListener('click', addMemeFromMiniature);
}
