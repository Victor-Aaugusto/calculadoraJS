const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const inputResultado = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(key => {
    key.addEventListener('click', () => {
        let resultado = key.dataset.value
        input.value += resultado
    })
});

input.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
    } else if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    } else if(ev.key === 'Enter'){
        calcular()
    }
})

document.getElementById('clear').addEventListener('click', () =>{
    input.value = ''
    input.focus()
})

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
    const btn = ev.currentTarget

    if(btn.innerText === 'Copy' || btn.innerText === 'Copiar'){
        btn.innerText = 'Copiado!'
        btn.classList.add('success')
        navigator.clipboard.writeText(inputResultado.value)
    } else{
        btn.innerText = 'Copiar'
        btn.classList.remove('success')
    }
})

document.getElementById('equal').addEventListener('click', calcular)

document.getElementById('themeSwitcher').addEventListener('click', () =>{
    if(main.dataset.theme === 'dark'){
        root.style.setProperty ('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'ligth'
    } else{
        root.style.setProperty ('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

function calcular(){
    inputResultado.value = 'ERROR'
    inputResultado.classList.add('error')
    const resultado = eval(input.value)
    inputResultado.value = resultado
    inputResultado.classList.remove('error')
}