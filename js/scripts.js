const scramble_text = (el) => {
    // console.log(el.innerText);
    const words = el.innerText.split(' ');
    el.innerText = '';
    const iterations = words.length;
    let result_text = ''
    for (let i = 0; i < iterations; i++) {
        const random_idx = Math.floor(Math.random() * words.length);
        const word = words[random_idx];
        result_text += word + ' ';
        words.splice(random_idx, 1);
    }
    el.innerText = result_text;
}

const reset_visibility = (children) => {
    for (const kid of children) {
        for (const grand_kid of kid.children) {

            scramble_text(grand_kid)
            grand_kid.style.display = 'block';
        }
    }
}

const randomize_visibility = (children) => {
    for (const kid of children) {
        for (const grand_kid of kid.children) {
            const prob = Math.random();
            if (prob < 0.7) grand_kid.style.display = 'none';
        }
    }
}

const show_random_content = () => {
    const columns = document.getElementsByClassName('col')
    for (const col of columns) {
        // console.log(col.children);
        reset_visibility(col.children);
        randomize_visibility(col.children);
    }
}

show_random_content();
window.addEventListener('click', show_random_content);