let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".menu-flexbox a");
let navLinks2 = document.querySelectorAll(".email");//메뉴 링크
let contactLink = document.querySelectorAll(".contact-contents span");
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
      mouseCursor.classList.add("cursor-white");
      mouseCursor.style.zIndex = "-1";  
      link.classList.add("hovered-black");
    });
    
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-white");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-black");
    });
  });


  // contact-email hover effect
  navLinks2.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-black");
      mouseCursor.style.zIndex = "-1";  
      link.classList.add("hovered-white");
    });
    
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-black");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-white");
    });
  });



  contactLink.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-white");
      mouseCursor.style.zIndex = "-1";  
      link.classList.add("hovered-white");
    });
    
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-white");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-white");
    });
  });