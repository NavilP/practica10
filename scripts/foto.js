// Esta funcion permite crear un elemento del DOM que es una imagen
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

// Se crea el element albumView que hace referencia al id
const albumView = document.querySelector('#album-view');

// Se itera la lista de referencias y se guardan en albumView
for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    albumView.appendChild(image);
    image.addEventListener('click', onThumbnailClick);
}

// Se crea una funcion para que al hacer clic se muestre la imagen
// La imagen se guarda en modalView pero aqui aun no esta creada
function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

// Se crea una funcion para resetear los elementos de la pagina
function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

// Se crea modalView
const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);