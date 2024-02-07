let count = 0;
document.getElementById('radio1');

setInterval( function(){
    nextImage();
}, 4000)


function nextImage(){
    count++;

    if(count>4){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}


