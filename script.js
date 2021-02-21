var prev=document.getElementById('previous')
var next=document.getElementById('next')

var arr = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg"]

var i = 0

next.addEventListener('click', function(){
    i++
    if(i >arr.length - 1 ){
        i=0
    }
})

prev.addEventListener('click', function(){
    i++
    if(i < 0 ){
        i = arr.length - 1
    }
    document.getElementById('image').src = arr[i]
})