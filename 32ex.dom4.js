document.querySelectorAll("#fileList button").forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e.target.dataset.btnId);
        console.log(e.target.dataset.btnType);
    });
});