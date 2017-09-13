document.addEventListener('DOMContentLoaded', function(){
    let waraper = document.getElementById('waraper');
    let topLayer = waraper.querySelector('.top');
    let handle = waraper.querySelector('.handle');
    let scwed = 0;
    let delta = 0;

    if(waraper.className.indexOf('scwed')!= -1){
        scwed =1000;
    }
    
    waraper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth/2)*0.5;
    handle.style.left= e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + scwed + delta + 'px';
    });

});

