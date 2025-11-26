
const btnTema = document.getElementById('tema-btn');
let modoOscuro = false;

btnTema.addEventListener('click', () => {
if (!modoOscuro) {
document.documentElement.style.setProperty('--bg', '#fdc2e6ff');
document.documentElement.style.setProperty('--text', '#000000ff');
modoOscuro = true;
} else {
document.documentElement.style.setProperty('--bg', '#fffaf0');
document.documentElement.style.setProperty('--text', '#000000ff');
modoOscuro = false;
}
});


document.querySelectorAll('.tarjeta').forEach(tarjeta => {
tarjeta.addEventListener('click', () => {
alert(`¡Estás viendo el sabor ${tarjeta.querySelector('h3').textContent}! 🍦`);
});
});
