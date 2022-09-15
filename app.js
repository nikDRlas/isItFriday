


const itsFriday = document.querySelector('#isFriday');
const whichDay = document.createElement('p');
const refreshSite = document.querySelector('img');
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = new Date();
let today = weekday[day.getDay()];

if (today === "Friday"){
    itsFriday.textContent = "It's Friday 🎉";
  } else {
    whichDay.textContent = `Today is ${today}.`;
    itsFriday.textContent = `Maybe tomorrow 🥲 `;
    itsFriday.append(whichDay);
  };

refreshSite.addEventListener('click', () => {
    refreshSite.style.scale = "1.1";
    setTimeout(document.location.reload(), 3000);
})