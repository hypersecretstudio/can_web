const reset_visibility = (children) => {
    for (const kid of children) {
        for (const grand_kid of kid.children) {

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