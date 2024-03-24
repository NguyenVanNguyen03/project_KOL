//--------------------- slide product -------------------

let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

let slidePerView = Math.round(list.offsetWidth / firstSlideWidth);

listChildrens
    .slice(-slidePerView)
    .reverse()
    .forEach((slide) => {
        list.insertAdjacentHTML('afterbegin', slide.outerHTML);
    });
listChildrens.slice(0, slidePerView).forEach((slide) => {
    list.insertAdjacentHTML('beforeend', slide.outerHTML);
});

list.classList.add('no-transition');
list.scrollLeft = list.offsetWidth;
list.classList.remove('no-transition');

btn_next_product.forEach((btnn) => {
    btnn.addEventListener('click', () => {
        list.scrollLeft += btnn.id === 'btn_pre_product' ? -firstSlideWidth : firstSlideWidth;
    });
});

btn_pre_product.forEach((btnp) => {
    btnp.addEventListener('click', () => {
        list.scrollLeft += btnp.id === 'btn_pre_product' ? -firstSlideWidth : firstSlideWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    list.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = list.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    list.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    list.classList.remove('dragging');
};

const infiniteScroll = () => {
    if (list.scrollLeft === 0) {
        list.classList.add('no-transition');
        list.scrollLeft = list.scrollWidth - 2 * list.offsetWidth;
        list.classList.remove('no-transition');
    } else if (Math.ceil(list.scrollLeft) === list.scrollWidth - list.offsetWidth) {
        list.classList.add('no-transition');
        list.scrollLeft = list.offsetWidth;
        list.classList.remove('no-transition');
    }
    clearTimeout(timeoutId);
    if (!slide_product.matches(':hover')) autoPlay();
};

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => (list.scrollLeft += firstSlideWidth), 2000);
};
autoPlay();

list.addEventListener('mousedown', dragStart);
list.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
list.addEventListener('scroll', infiniteScroll);
slide_product.addEventListener('mouseenter', () => clearTimeout(timeoutId));
slide_product.addEventListener('mouseleave', autoPlay);
