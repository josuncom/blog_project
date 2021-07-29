let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".menu-flexbox a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
      mouseCursor.style.zIndex = "-1";  
      link.classList.add("hovered-link");
    });
    
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-link");
    });
  });