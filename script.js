const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');

const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓', '⭐'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    spinButton.disabled = true;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    const interval1 = setInterval(() => {
        reel1.textContent = getRandomSymbol();
        count1++;
        if (count1 > 10) {
            clearInterval(interval1);
            checkResult();
        }
    }, 100);

    const interval2 = setInterval(() => {
        reel2.textContent = getRandomSymbol();
        count2++;
        if (count2 > 20) {
            clearInterval(interval2);
        }
    }, 100);

    const interval3 = setInterval(() => {
        reel3.textContent = getRandomSymbol();
        count3++;
        if (count3 > 30) {
            clearInterval(interval3);
        }
    }, 100);

    setTimeout(() => {
        spinButton.disabled = false;
    }, 3500);
}

function checkResult() {
    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        setTimeout(() => {
            alert('当たり！');
        }, 100);
    }
}

spinButton.addEventListener('click', spin);

// 初期表示
reel1.textContent = getRandomSymbol();
reel2.textContent = getRandomSymbol();
reel3.textContent = getRandomSymbol();
