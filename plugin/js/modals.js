//-------------------- showMenu------------------------

btn_menu.addEventListener('click', (event) => {
    if (showMenu.style.display == 'none') {
        showMenu.style.display = 'block';
    } else {
        showMenu.style.display = 'none';
    }
    event.preventDefault();
});

close__menu.addEventListener('click', function () {
    showMenu.style.display = 'none';
});

// ---------------------show Card ---------------------

function showCard() {
    modal_cards.classList.toggle('open');
}

function hideCard() {
    modal_cards.classList.remove('open');
}

for (const bt__card of btns_cards) {
    bt__card.addEventListener('click', showCard);
}

for (const close_card of close_cards) {
    close_card.addEventListener('click', hideCard);
}

modal_cards.addEventListener('click', hideCard);

container_cards.addEventListener('click', function (event) {
    event.stopPropagation();
});
