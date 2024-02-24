function updateTime() {
  // ANKARA
  let ankara = document.querySelector("#ankara");
  let shownAnkaraDate = ankara.querySelector("p");
  let shownAnkaraTime = ankara.querySelector(".time");
  let ankaraDate = moment().tz("Europe/Istanbul");
  shownAnkaraDate.innerHTML = ankaraDate.format("MMMM Do YYYY");
  shownAnkaraTime.innerHTML = ankaraDate.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // ABU-DHABI
  let abuDhabi = document.querySelector("#abu-dhabi");
  let shownAbuDhabiDate = abuDhabi.querySelector("p");
  let shownAbuDhabiTime = abuDhabi.querySelector(".time");
  let abuDhabiDate = moment().tz("Asia/Dubai");
  shownAbuDhabiDate.innerHTML = abuDhabiDate.format("MMMM Do YYYY");
  shownAbuDhabiTime.innerHTML = abuDhabiDate.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 900);
