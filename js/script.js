// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// Ketika tombol submit diklik
// tampilkan tombol loading, sembunyikan tombol kirim
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");

// tampilkan tombol kirim, hilangkan tombol loading
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");
