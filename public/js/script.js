// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  console.log('local JS imported successfully!');
});

const popUp = document.getElementById('pop-up');
const popUpClose = document.getElementById('pop-up-close');
const heartIcon = document.getElementById('heart-icon');
const body = document.getElementById('body');
const overlay = document.querySelector('.overlay');
const mobileBarBtn = document.getElementById('mobile-bar');
const mobileBarMenu = document.querySelector('.mobile-menu');
const mobileCloseBtn = document.getElementById('mobile-close');
const mobileCloseMenu = document.querySelector('.mobile-close');
const navUl = document.getElementById('nav-ul');
const navBarContainer = document.getElementById('nav-bar');
const profileSubmitBtn = document.getElementById('profile-submit-btn');
const navLinks = document.querySelectorAll('.nav-ul a');
const searchInputContainer = document.querySelector('.search-input-container');
const searchInput = document.getElementById('search-input');
const locationBtn = document.getElementById('location-btn');

function clickMobileBar() {
  mobileBarMenu.classList.toggle('active');
  mobileCloseMenu.classList.toggle('active');
  navUl.classList.toggle('active');
  navLinks.forEach((navLinks) => {
    navLinks.classList.toggle('active');
  });
  searchInputContainer.classList.toggle('active');

  if (navUl.style.display === 'block') {
    navUl.style.display = 'none';
  } else {
    navUl.style.display = 'block';
  }
}
mobileBarBtn.addEventListener('click', clickMobileBar);
mobileCloseBtn.addEventListener('click', clickMobileBar);

fetch('/userInSession')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const userInSession = data.userInSession;
    const heartIcons = document.getElementsByClassName('heart-icon');
    for (let i = 0; i < heartIcons.length; i++) {
      heartIcons[i].addEventListener('click', clickHeart);
    }
    function clickHeart(event) {
      if (userInSession) {
        searchInputContainer.classList.toggle('active');
        event.target.classList.toggle('active');
        return;
      }
      popUp.style.display = 'block';
      popUpClose.style.display = 'block';
      body.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  })
  .catch((error) => console.log('Error:', error));

function closePopUp() {
  popUpClose.style.display = 'none';
  popUp.style.display = 'none';
  body.classList.remove('active');
  overlay.classList.remove('active');
}
popUpClose.addEventListener('click', closePopUp);

// About me function

function aboutMeInfo() {
  console.log('works');
  console.log(profileSubmitBtn);
}

profileSubmitBtn.addEventListener('click', aboutMeInfo);

// GEO LOCATION
// GEO LOCATION
function submitLocation(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

locationBtn.addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(submitLocation, error); // Removed 'options' as it's not defined in provided code
});

