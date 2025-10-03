const buttonSorteio = document.querySelector('.button-draw')
const drawnNumber = document.querySelector('.drawn-number')

function Sortear() {

    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)

    if (document.querySelector('.min').value === "" || document.querySelector('.max').value === "") {
        alert("Por favor, digite os valores mínimo e máximo.");
        return;
    }

    if (max < min) {
        alert("O valor MÁXIMO deve ser maior que o valor MÍNIMO.");
        return;
    }

    if (max == min) {
        alert("Coloque pelo menos dois valores diferentes!");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    drawnNumber.innerHTML = `<span>${result}</span>`;
}



buttonSorteio.addEventListener('click', Sortear)


