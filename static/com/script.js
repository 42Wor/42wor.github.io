// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


function resetMessageBoxColor() {
  var messageBox = document.getElementById("message");
  messageBox.style.backgroundColor = "beige";
  messageBox.style.color = "green";
}
// from start

// from end
function handleCVFile() {
  // Define the file URL
  var fileUrl = 'Assets/MBK_CV.pdf'; // Replace this with the actual file URL

  // Check if the user is on a mobile device
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
      // If user is on a mobile device, initiate download
      var a = document.createElement('a');
      a.href = fileUrl;
      a.download = 'MBK_CV.pdf'; // Set the desired filename here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  } else {
      // If user is on a desktop, open in a new tab/window
      window.open(fileUrl, '_blank');
  }
}



function HireMeLink() {
    window.open('https://www.linkedin.com/in/', '_blank'); // Replace with your target URL
  }



function openProjectPage(id) {
    window.open('https://https://maazwaheed.netlify.app/Project/#' + id, '_blank'); // Replace with your target URL
  }


function AskForCookieConsent() {
    fetch('https://https://maazwaheed.netlify.app/Assets/cookie.html').then(response => response.text()).then(html => {
        document.getElementById('cookie').innerHTML = html;
        const termsVersion = document.getElementById('termsVersion').innerText.split(': ')[1];
        checkCookie(termsVersion);
    });
}

function SaveCookie(){
    const termsVersion = document.getElementById('termsVersion').innerText.split(': ')[1];
    setCookie('agreed', termsVersion, 365);
    hideOverlay();
}

function checkCookie(currentVersion) {
    const agreedVersion = getCookie('agreed');
    if (agreedVersion === currentVersion) {
        hideOverlay();
    }
}

function hideOverlay() {
    document.getElementById('cookieNotice').style.display = 'none';
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function hideCookieNotice() {
    document.getElementById('cookieNotice').style.display = 'none';
}