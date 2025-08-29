const heartButtons = document.querySelectorAll('.heart-btn');
const navHeartCount = document.getElementById('navHeartCount');

 let totalclick = 0;
 heartButtons.forEach(button => {
    button.addEventListener('click',() => {
        totalclick++;
        navHeartCount.textContent = totalclick;
    });
 });




 document.getElementById('btn-1').addEventListener('click', function(){
    alert('National Service Helpline   Call - 999')
 })