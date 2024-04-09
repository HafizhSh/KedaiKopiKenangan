// TOOGLE KELAS AKTIF
const navigation = document.querySelector('.navbar-nav');

// ketika hambuger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navigation.classList.toggle('active');
};

// KLIK DI LUAR SIDEBAR UTK HILANGKAN NAVBAR

const hambuger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hambuger.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove('active');
  }
});
