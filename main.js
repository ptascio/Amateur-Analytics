var now;
var end;
var totalClicks = 0;
var clickInfo = {red: 0, blue: 0, yellow: 0, green: 0};
var allTargets;
var logout;
var tag = "AM";


function updateClickInfo(id){
  totalClicks += 1;
  clickInfo[this.id] += 1;
  console.log(totalClicks);
  console.log(clickInfo);
}

function logoutTime(){
  end = new Date();
  var endMins = end.getMinutes();
  var endHours = end.getHours();
  logoutMsg(endHours, endMins);
}

function adjustHours(hrs){
  hrs-=12;
  tag = "PM";
  return hrs;
}

function logoutMsg(hours, mins){
  if (mins < 10){
    mins = padMinutes(mins);
  }
  if (hours > 12){
    hours = adjustHours(hours);
  }
  var logr = document.getElementById("logger");
  logr.innerText = `You've logged off at ${hours}:${mins} ${tag}`;
}

function padMinutes(min){
  min = min.toString();
  return `0${min}`;
}

function bindClickEvent(trgts){
  for(var i = 0; i < trgts.length; i++){
    trgts[i].addEventListener("click", updateClickInfo, false);
  }
}

function showStart(time){
  var startMins = time.getMinutes();
  if (startMins < 10) {
    startMins = padMinutes(startMins);
  }
  var startHours = time.getHours();
  if (startHours > 12) {
    startHours = adjustHours(startHours);
  }
  var logr = document.getElementById("logger");
  logr.innerText = `You've logged on at ${startHours}:${startMins} ${tag}`;
}

document.addEventListener("DOMContentLoaded", () => {
  allTargets = document.getElementsByClassName("targets");
  bindClickEvent(allTargets);

  now = new Date();
  showStart(now);

  logout = document.getElementById("logout");
  logout.addEventListener("click", logoutTime, false);

});
