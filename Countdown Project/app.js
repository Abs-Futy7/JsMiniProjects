const endDate = "22 July 2024 10:00 PM"

document.getElementById("end-date").innerHTML = `<h3>${endDate}</h3>`;
const inputs = document.querySelectorAll("input");

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff<0) return;
    
    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor((diff % (3600 * 24)) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);
    
    
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

clock();
setInterval(clock, 1000);