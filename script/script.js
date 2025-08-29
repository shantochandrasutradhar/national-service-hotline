const heartButtons = document.querySelectorAll('.heart-btn');
const navHeartCount = document.getElementById('navHeartCount');

 let totalclick = 0;
 heartButtons.forEach(button => {
    button.addEventListener('click',() => {
        totalclick++;
        navHeartCount.textContent = totalclick;
    })
 })