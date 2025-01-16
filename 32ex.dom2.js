const div = document.querySelector('div');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', e => {

        let width = window.getComputedStyle(div).width;
        width = width.substring(0, width.length-2);
        let height = window.getComputedStyle(div).height;
        height = height.substring(0, height.length-2);

        switch(e.target.textContent) {
            case '배경색blue':
                div.style.backgroundColor = 'blue';
                break;
            case '배경색red':
                div.style.backgroundColor = 'red';
                break;
            case '크기X2':
                // inline style이 아닌 경우 window.getComputedStyle로
                // 스타일 값을 가져와야 함
                div.style.width = width * 2 + 'px';
                div.style.height = height * 2 + 'px';
                break;
            case '크기/2':
                div.style.width = width / 2 + 'px';
                div.style.height = height / 2 + 'px';
                break;
            case 'blue클래스':
                div.classList.add('blue');
                div.classList.remove('red');
                break;                
            case 'red클래스':
                div.classList.add('red');
                div.classList.remove('blue');
        }
    });
    
});
