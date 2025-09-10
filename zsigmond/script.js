// type out info on opening the site
document.addEventListener('DOMContentLoaded', async () => {
    const info_elements = document.getElementById('info').lastElementChild;
    // Convert HTMLCollection to an array to use forEach with await
    const childrenArray = Array.from(info_elements.children);
    const speed = 10;
    for (const element of childrenArray) {
        await typeOut(element, speed);
    }
    const buttons = document.querySelectorAll("button")
    for (const button of buttons) {
        await typeOut(button);
    }

});


const typingSound = document.getElementById('typingSound');

function typeOut(element, speed = 50) {
    return new Promise(resolve => {
        let i = 0;
        element.innerHTML = '';
        const text = element.dataset.text;
        element.classList.add('typing');

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                typingSound.play();
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing');
                resolve();
            }
        }
        type();
    });
}

const deleteSound = document.getElementById('deleteSound');
function deleteText(element) {
    return new Promise(resolve => {
        element.classList.add('typing');
        function del() {
            if (element.innerHTML.length > 0) {
                element.innerHTML = element.innerHTML.slice(0, -1);
                deleteSound.play();
                setTimeout(del, 30);
            }
            else {
                element.classList.remove('typing');
                resolve();
            }
        }
        del();
    });
}


async function toggle(event, id) {
    const element = document.getElementById(id);
    element.classList.toggle('active');
    event.target.disabled = true;
    if (element.classList.contains('active')) {
        event.target.classList.add('active');
        element.style.display = 'block';
        if (element.childElementCount === 0) {
            typeOut(element);
            element.scrollIntoView();
        }
        else {
            const childs = Array.from(element.children);
            for (const child of childs) {
                child.style.display = 'block';
                await typeOut(child, 30);
            }
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    else {
        event.target.classList.remove('active');
        if (element.childElementCount === 0) {
            await deleteText(element);
        }
        else {
            const childs = Array.from(element.children).reverse();
            for (const child of childs) {
                await deleteText(child);
                child.style.display = 'none';
            }
        }
        element.style.display = 'none';
    }
    event.target.disabled = false;
}