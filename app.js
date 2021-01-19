const button1 = document.querySelector(".footerImage1");
const button2 = document.querySelector(".footerImage2");
const button3 = document.querySelector(".footerImage3");

button1.addEventListener("click",function(){
    document.querySelector(".images").src = "./images/img1.png";
    document.querySelector(".images").style.transform = "rotate(0deg)";
    document.querySelector(".circle").style.backgroundColor = '#017143';
});

button2.addEventListener("click",function(){
    document.querySelector(".images").src = './images/img2.png';
    document.querySelector(".images").style.transform = "rotate(0deg)";
    document.querySelector(".circle").style.backgroundColor = '#eb7495';
});

button3.addEventListener("click",function(){
    document.querySelector(".images").src = "./images/img3.png";
    document.querySelector(".images").style.transform = "rotate(-15deg)";
    document.querySelector(".circle").style.backgroundColor = '#d752b1';
});

let toggler = false;
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar-items");
const line1 = document.getElementById("1");
const line2 = document.getElementById("2");
const line3 = document.getElementById("3");
hamburger.addEventListener("click",function() {
    if(!toggler){
        nav.style.display = 'flex';
        line1.style.transform = 'rotate(45deg)';
        line2.style.display = 'none';
        line3.style.transform = 'rotate(-45deg)';
        line3.style.position = 'fixed';
        line3.style.top = '58px';
        toggler = true;
    }else{
        nav.style.display = 'none';
        line1.style.transform = 'rotate(0)';
        line2.style.display = 'block';
        line3.style.transform = 'rotate(0)';
        line3.style.top = '78px';
        toggler = false;
    }
});