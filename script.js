const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".hour");
const secondEl = document.querySelector(".hour");
const timeEl = document.querySelector(".hour");
const dateEl = document.querySelector(".hour");
const toggle = document.querySelector(".hour");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener('click', (e) => () {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
})
