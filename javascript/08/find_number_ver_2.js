document.getElementById('start').addEventListener('click', function() {
    let count = 0;
    const r = Math.floor(Math.random() * 100) + 1;
    console.log(`정답: ${r}`);

    const grid = document.querySelector("#grid");
    grid.innerHTML = '';

    const countDisplay = document.querySelector("#count");
    countDisplay.textContent = '시도 횟수 : 0';

    for (let i = 0; i < 100; i++) {
        const button = document.createElement('button');
        button.textContent = i + 1;
        grid.appendChild(button);

        button.addEventListener('click', function() {
            const chooseNum = parseInt(button.textContent);
            count++;

            if (chooseNum === r) {
                button.textContent = '정답!';
                button.style.backgroundColor = "lightyellow";
                alert('정답입니다!');
                disableAllButtons();
            } else {
                button.textContent = chooseNum < r ? 'UP' : 'DN';
                button.style.backgroundColor = chooseNum < r ? 'lightblue' : 'lightcoral';
                disableButtons(chooseNum, chooseNum < r);
            }

            button.disabled = true;
            countDisplay.textContent = `시도 횟수 : ${count}`;
        });
    }

    function disableButtons(num, isBelow) {
        const buttons = grid.querySelectorAll('button');
        buttons.forEach(button => {
            const buttonNum = parseInt(button.textContent);
            if ((isBelow && buttonNum < num) || (!isBelow && buttonNum > num)) {
                button.disabled = true;
                button.style.backgroundColor = "grey";
            }
        });
    }

    function disableAllButtons() {
        const buttons = grid.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
});
