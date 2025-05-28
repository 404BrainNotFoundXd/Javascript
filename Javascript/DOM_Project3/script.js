const banner = document.querySelector('.banner')
const clock = document.querySelector('#clock')
let started = false
clock.addEventListener('mouseover',function(e){
  if (started) return; // Prevent multiple intervals
  started = setInterval(() => {
    const now = new Date ();
  const hours = now.getHours().toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds().toString().padStart(2,'0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  },1000);
});

clock.addEventListener('mouseout' , function(e){
    clearInterval(started)
    started=false
    clock.innerHTML = "";
})