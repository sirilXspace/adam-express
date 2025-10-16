(function () {
  const customMenuWrapEl = document.getElementById("customMenuWrap");
  const customMenuToggleEl = document.getElementById("customMenuToggle");
  const customMainDropdownEl = document.getElementById("customMainDropdown");

  function openCustomDropdown() {
    customMainDropdownEl.classList.add("open");
    customMenuToggleEl.setAttribute("aria-expanded", "true");
  }
  function closeCustomDropdown() {
    customMainDropdownEl.classList.remove("open");
    customMenuToggleEl.setAttribute("aria-expanded", "false");
    customMainDropdownEl
      .querySelectorAll(".custom-submenu.open")
      .forEach((s) => s.classList.remove("open"));
    customMainDropdownEl
      .querySelectorAll(
        '.has-children > .custom-item-btn[aria-expanded="true"]'
      )
      .forEach((b) => b.setAttribute("aria-expanded", "false"));
  }

  customMenuToggleEl.addEventListener("click", (e) => {
    const isOpen = customMainDropdownEl.classList.contains("open");
    if (isOpen) closeCustomDropdown();
    else openCustomDropdown();
  });

  document.addEventListener("click", (e) => {
    if (!customMenuWrapEl.contains(e.target)) closeCustomDropdown();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCustomDropdown();
  });

  customMainDropdownEl.querySelectorAll(".has-children").forEach((li) => {
    const btn = li.querySelector(".custom-item-btn");
    const submenu = li.querySelector(".custom-submenu");

    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const willOpen = !submenu.classList.contains("open");
      const parentUl = li.parentElement;
      parentUl
        .querySelectorAll(":scope > .has-children > .custom-submenu.open")
        .forEach((sib) => sib.classList.remove("open"));
      parentUl
        .querySelectorAll(
          ':scope > .has-children > .custom-item-btn[aria-expanded="true"]'
        )
        .forEach((b) => b.setAttribute("aria-expanded", "false"));

      if (willOpen) {
        submenu.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      } else {
        submenu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    btn.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        btn.click();
      }
    });
  });

  customMainDropdownEl
    .querySelectorAll("a, button.custom-item-btn")
    .forEach((el) => {
      el.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeCustomDropdown();
          customMenuToggleEl.focus();
        }
      });
    });
})();

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 30) {
    $("header").addClass("affix");
  } else {
    $("header").removeClass("affix");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});

// Remove preloader after page load
window.addEventListener("load", function () {
  document.getElementById("preloader").classList.add("fade-out");
});

$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".search-dropdown2").fadeToggle();
  });

  // Close when clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest(".search-icon, .search-dropdown2").length) {
      $(".search-dropdown2").fadeOut();
    }
  });
});

$(function () {
  $("#datepicker2").datepicker();
});


  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
  });

  const passwordInput2 = document.getElementById('password2');
  const togglePassword2 = document.getElementById('togglePassword2');

  togglePassword2.addEventListener('click', () => {
    const type = passwordInput2.type === 'password' ? 'text' : 'password';
    passwordInput2.type = type;
    togglePassword2.classList.toggle('fa-eye');
    togglePassword2.classList.toggle('fa-eye-slash');
  });