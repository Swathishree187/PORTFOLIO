
let menuIcon = document.querySelector('#menu-icon');
let nabar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navvbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top= window.scrollY;
    let offset = set.offsetTop - 100;
    let height = set.offfsetHeight;
    let id =sec.getAttribute('id');


    if(top >= offset && top < offset + height){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href '=' +nid + ]').classList.add(active);
      });
      sec.classList.add('show-animate');
  
    }
    sec.classList.add('show-animate');
  });
let Header = document.querySelector('header');


  Header.classlist.toggle('sticky',window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navvbar.classList.remove('active');

}