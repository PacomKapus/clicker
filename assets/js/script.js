let unit1cost = 10;
let unit2cost = 3;
let unit3cost = 4
let unit4cost = 1;
let unit1up = 20;
let unit2up = 600;
let unit3up = 1000;
let unit4up = 5000;

let Count = 0;
let interval1, interval2, interval3, interval4;
let units1 = 0;
let units2 = 0;
let units3 = 0;
let units4 = 0;

let income1 = 1;
let income2 = 10;
let income3 = 20;
let income4 = 50;

let clickValue = 1;
let clickCost = 50;

const score = document.getElementById("score");
const buyunits1 = document.getElementById("buyunits1");
const buyunits2 = document.getElementById("buyunits2");
const buyunits3 = document.getElementById("buyunits3");
const buyunits4 = document.getElementById("buyunits4");
const upgradeunits1 = document.getElementById("upgradeunits1");
const upgradeunits2 = document.getElementById("upgradeunits2");
const upgradeunits3 = document.getElementById("upgradeunits3");
const upgradeunits4 = document.getElementById("upgradeunits4");
const houseDiv1 = document.getElementById("house_div1");
const houseDiv2 = document.getElementById("house_div2");
const houseDiv3 = document.getElementById("house_div3");
const houseDiv4 = document.getElementById("house_div4");
const costhouse_but = document.getElementById("costhouse_but");
const upgradeButton = document.getElementById("upgrade");

let achievement1 = false;
let achievement2 = false;
let achievement3 = false;

function updateGameStats() {
    score.textContent = Count;

    buyunits1.disabled = Count < unit1cost;
    buyunits2.disabled = Count < unit2cost;
    buyunits3.disabled = Count < unit3cost;
    buyunits4.disabled = Count < unit4cost;

    upgradeunits1.disabled = Count < unit1up || units1 === 0;
    upgradeunits2.disabled = Count < unit2up || units2 === 0;
    upgradeunits3.disabled = Count < unit3up || units3 === 0;
    upgradeunits4.disabled = Count < unit4up || units4 === 0;

    document.getElementById("house_level1").textContent = units1;
    document.getElementById("house_cost1").textContent = unit1up;
    document.getElementById("house_income1").textContent = income1 * units1;

    document.getElementById("house_level2").textContent = units2;
    document.getElementById("house_cost2").textContent = unit2up;
    document.getElementById("house_income2").textContent = income2 * units2;

    document.getElementById("house_level3").textContent = units3;
    document.getElementById("house_cost3").textContent = unit3up;
    document.getElementById("house_income3").textContent = income3 * units3;

    document.getElementById("house_level4").textContent = units4;
    document.getElementById("house_cost4").textContent = unit4up;
    document.getElementById("house_income4").textContent = income4 * units4;

    upgradeButton.textContent = `Увеличить очки за клик (стоимость: ${clickCost})`;

    checkAchievements();
}

function checkAchievements() {
    if (Count >= 100000 && !achievement1) {
        achievement1 = true;
        alert("Достижение: Вы накопили 100 000 монет!");
        document.getElementById("pp1").textContent = "Вы собрали 100 000 монет!";
        document.getElementById("troph_img1_d").style.display ="none";
        document.getElementById("troph_img1_n").style.display ="block";
    }

    if (units1 >= 50 && units2 >= 50 && units3 >= 50 && units4 >= 50 && !achievement2) {
        achievement2 = true;
        alert("Достижение: Все здания улучшены до 50 уровня!");
        document.getElementById("pp3").textContent = "Все здания улучшены до 50 уровня!";
        document.getElementById("troph_img3_d").style.display ="none";
        document.getElementById("troph_img3_n").style.display ="block";
    }

    if (units1 > 0 && units2 > 0 && units3 > 0 && units4 > 0 && !achievement3) {
        achievement3 = true;
        alert("Достижение: Вы купили все здания!");
        document.getElementById("pp2").textContent = "Вы купили все здания!";
        document.getElementById("troph_img2_d").style.display ="none";
        document.getElementById("troph_img2_n").style.display ="block";
    }
}

document.getElementById("clickme").addEventListener("click", () => {
    Count += clickValue;
    document.getElementById("clickme").textContent = "Кликни меня!";
    updateGameStats();
});

upgradeButton.addEventListener("click", () => {
    if (Count >= clickCost) {
        Count -= clickCost;
        clickValue++;
        clickCost = Math.floor(clickCost * 1.5);
        updateGameStats();
    }
});

buyunits1.addEventListener("click", () => {
    if (Count >= unit1cost) {
        Count -= unit1cost;
        units1++;
        updateGameStats();

        if (!interval1) {
            interval1 = setInterval(() => {
                Count += income1 * units1;
                updateGameStats();
            }, 1000);
        }

        houseDiv1.style.opacity = 1;
        document.getElementById("costhouse_but1").style.display = 'none';
    }
});

buyunits2.addEventListener("click", () => {
    if (Count >= unit2cost) {
        Count -= unit2cost;
        units2++;
        updateGameStats();

        if (!interval2) {
            interval2 = setInterval(() => {
                Count += income2 * units2;
                updateGameStats();
            }, 1000);
        }

        houseDiv2.style.opacity = 1;
        document.getElementById("costhouse_but2").style.display = 'none';
    }
});

buyunits3.addEventListener("click", () => {
    if (Count >= unit3cost) {
        Count -= unit3cost;
        units3++;
        updateGameStats();

        if (!interval3) {
            interval3 = setInterval(() => {
                Count += income3 * units3;
                updateGameStats();
            }, 1000);
        }

        houseDiv3.style.opacity = 1;
        document.getElementById("costhouse_but3").style.display = 'none';
    }
});

buyunits4.addEventListener("click", () => {
    if (Count >= unit4cost) {
        Count -= unit4cost;
        units4++;
        updateGameStats();

        if (!interval4) {
            interval4 = setInterval(() => {
                Count += income4 * units4;
                updateGameStats();
            }, 1000);
        }

        houseDiv4.style.opacity = 1;
        document.getElementById("costhouse_but4").style.display = 'none';
    }
});

upgradeunits1.addEventListener("click", () => {
    if (Count >= unit1up && units1 > 0) {
        Count -= unit1up;
        units1++;
        income1 = Math.floor(income1 * 1.2);
        unit1up = Math.floor(unit1up * 1.5);
        updateGameStats();
    }
});

upgradeunits2.addEventListener("click", () => {
    if (Count >= unit2up && units2 > 0) {
        Count -= unit2up;
        units2++;
        income2 = Math.floor(income2 * 1.2);
        unit2up = Math.floor(unit2up * 1.5); 
        updateGameStats();
    }
});

upgradeunits3.addEventListener("click", () => {
    if (Count >= unit3up && units3 > 0) {
        Count -= unit3up;
        units3++;
        income3 = Math.floor(income3 * 1.2);
        unit3up = Math.floor(unit3up * 1.5); 
        updateGameStats();
    }
});

upgradeunits4.addEventListener("click", () => {
    if (Count >= unit4up && units4 > 0) {
        Count -= unit4up;
        units4++;
        income4 = Math.floor(income4 * 1.2);
        unit4up = Math.floor(unit4up * 1.5); 
        updateGameStats();
    }
});

document.getElementById("clear").addEventListener("click", () => {
    window.location.reload();
});

setInterval(() => {
    const randomPercentage = Math.random() * 0.5 + 0.5; 
    const randomEvent = Math.random() > 0.5; 

    const changeAmount = Math.floor(Count * randomPercentage);

    if (randomEvent) {
        Count += changeAmount;
        alert(`Случайное событие: Вам добавлено ${changeAmount} монет.`);
    } else {
        Count -= changeAmount;
        if (Count < 0) Count = 0;
        alert(`Случайное событие: У вас забрано ${changeAmount} монет.`);
    }

    updateGameStats(); 
}, 60000);
