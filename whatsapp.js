var zero = document.getElementById('zeroid');

var header = document.getElementById('headerid');
var contactSearch = document.getElementById('contact-search-id');

var header2 = document.getElementById('header2id');

var tripleDotOpen = document.getElementById('triple-dot-open-id');
var tripleDotClose = document.getElementById('triple-dot-close-id');

var stopzero = setInterval(function(){
    zero.style.display='none';
    header.style.display='block';
    header2.style.display='block';
    
    clearInterval(stopzero);
},1000);

function headerSearchFun(){
    header.style.display='none';
    header2.style.display='none';
    contactSearch.style.display='block';
}

function backToHeaderFun(){
    header.style.display='block';
    header2.style.display='block';
    contactSearch.style.display='none';
}

function tripleDotOpenFun(){
    tripleDotOpen.style.display='block';
    tripleDotClose.style.display='block';
}

function tripleDotCloseFun(){
    tripleDotOpen.style.display='none';
    tripleDotClose.style.display='none';
  
}
