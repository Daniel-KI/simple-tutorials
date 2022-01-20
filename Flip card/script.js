const card = document.getElementById('card');

//click
card.addEventListener('click', () => {
    card.classList.toggle('card--flipped');
})

//hover
card.addEventListener('mouseenter', () => {
    card.classList.add('card--grown');
})
card.addEventListener('mouseleave', () => {
    card.classList.remove('card--grown');
})
