var navMain=document.querySelector(".main-header__nav"),navToggle=document.querySelector(".main-header__toggle");navMain.classList.remove("main-header__nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-header__nav--closed")?(navMain.classList.remove("main-header__nav--closed"),navMain.classList.add("main-header__nav--opened")):(navMain.classList.remove("main-header__nav--opened"),navMain.classList.add("main-header__nav--closed"))});