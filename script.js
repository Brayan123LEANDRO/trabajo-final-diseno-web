// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Tema claro/oscuro (guarda preferencia)
const temaBtn = document.getElementById('tema-btn');
const root = document.documentElement;

const temaOscuro = () => {
  root.style.setProperty('--bg', '#1a1a2e');
  root.style.setProperty('--text', '#eee');
  root.style.setProperty('--accent', '#ff69b4');
  root.style.setProperty('--card', '#16213e');
  temaBtn.textContent = 'Modo Claro';
  localStorage.setItem('tema', 'oscuro');
};

const temaClaro = () => {
  root.style.setProperty('--bg', '#fff1f8');
  root.style.setProperty('--text', '#333');
  root.style.setProperty('--accent', '#ff1493');
  root.style.setProperty('--card', '#fff');
  temaBtn.textContent = 'Modo Oscuro';
  localStorage.setItem('tema', 'claro');
};

temaBtn.addEventListener('click', () => {
  if (localStorage.getItem('tema') === 'oscuro') {
    temaClaro();
  } else {
    temaOscuro();
  }
});

// Cargar tema guardado
if (localStorage.getItem('tema') === 'oscuro') {
  temaOscuro();
} else {
  temaClaro();
}

// Efecto click en tarjetas
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    const sabor = tarjeta.dataset.sabor || tarjeta.querySelector('h3').textContent;
    alert(`¡Delicioso! Elegiste ${sabor} 🍦✨`);
  });
});