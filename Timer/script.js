function countDown() {
  const today = new Date().getTime();
  const birthday = "26 September 2022";
  const myBirthdayDate = new Date(birthday).getTime();
  let diff = (myBirthdayDate - today) / 1000;

  const remainDays = Math.floor(diff / (3600 * 24));
  const remainHours = Math.floor((diff / 3600) % 24);
  const remainMinutes = Math.floor((diff / 60) % 60);
  const remainSeconds = Math.floor(diff % 60);
  document.getElementById("days").innerHTML = remainDays;
  document.getElementById("hours").innerHTML = remainHours;
  document.getElementById("minutes").innerHTML = remainMinutes;
  document.getElementById("seconds").innerHTML = remainSeconds;
}

countDown();

setInterval(countDown,1000);
