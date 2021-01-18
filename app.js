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