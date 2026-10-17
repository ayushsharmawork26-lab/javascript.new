const box = document.getElementById('bigBox')
const btn = document.getElementById('btn')

console.log(btn);


btn.addEventListener('click', () => {
    box.style.backgroundColor = "green"
})
