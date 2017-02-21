function loadJS(){
  //zadanie1 - menu
  var oFirmie = document.querySelectorAll('.main-menu li')[0];
  var hoverMenu = document.querySelector('.hover-menu');
  oFirmie.addEventListener('mouseover', showHoverMenu);
  function showHoverMenu(){
    hoverMenu.style.visibility = 'visible';
  }
  hoverMenu.addEventListener('mouseout', hideHoverMenu);
  function hideHoverMenu(){
    hoverMenu.style.visibility = 'hidden';
  }
  //zadanie2 - zdjęcia
  var imagesList = document.querySelectorAll('.box-img');
  for (i=0; i<imagesList.length; i++) {
    imagesList[i].addEventListener('mouseover', hideWhiteBelt);
    imagesList[i].addEventListener('mouseout', showWhiteBelt);
  }
  function hideWhiteBelt(){
    var whiteBelt = this.querySelector('.white-belt');
    whiteBelt.style.visibility = 'hidden';
  }
  function showWhiteBelt(){
    var whiteBelt = this.querySelector('.white-belt');
    whiteBelt.style.visibility = 'visible';
  }
  //zadanie3 - slider
  var next = document.querySelector('.right-arrow');
  var prev = document.querySelector('.left-arrow');
  var lis = document.querySelectorAll('.slider li');
  var visibleIndex = 0;
  lis[visibleIndex].classList.add('visible');
  next.addEventListener('click', nextPicture);
  function nextPicture(){
    lis[visibleIndex].classList.remove('visible');
    visibleIndex++;
    if (visibleIndex>=lis.length){
      visibleIndex=0;
    }
    lis[visibleIndex].classList.add('visible');
  }
  prev.addEventListener('click', prevPicture);
  function prevPicture(){
    lis[visibleIndex].classList.remove('visible');
    visibleIndex--;
    if (visibleIndex<0){
      visibleIndex=lis.length-1;
    }
    lis[visibleIndex].classList.add('visible');
  }
}
document.addEventListener('DOMContentLoaded', loadJS);
