// NAVBAR
let isNavbarOpen = false;

const navbarBtn = document.getElementById('navbarBtn');
const navLinks = document.querySelectorAll('#navlink');

const handleNavbar = () => {
  // Elements
  const firstBar = document.getElementById('firstBar');
  const secondBar = document.getElementById('secondBar');
  const thirdBar = document.getElementById('thirdBar');

  const headerElement = document.getElementById('header');

  // Toggler
  headerElement?.classList.toggle('translate-x-full');
  isNavbarOpen = !isNavbarOpen;
  
  firstBar?.classList.toggle("rotate-45")
  firstBar?.classList.toggle("translate-y-[9px]")
  secondBar?.classList.toggle("opacity-0")
  thirdBar?.classList.toggle("-rotate-45")
  thirdBar?.classList.toggle("-translate-y-[9px]")
}

navLinks.forEach((link) => {
    link.addEventListener("click", handleNavbar)
})

navbarBtn?.addEventListener('click', handleNavbar);
