function scrollHandler() {
    var element = document.getElementById("home");
  
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
      var scrollTop = document.documentElement.scrollTop;
      
      var opacity = 1;
      
      if (scrollTop > distanceToTop) {
          opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
      }
      
      if (opacity >= 0) {
          element.style.opacity = opacity;
      }}
  
  window.addEventListener('scroll', scrollHandler);

let books = document.getElementById("books");
let music = document.getElementById("music");
let rabbitholes = document.getElementById("rabbitholes");
let youtube = document.getElementById("youtube");

music.onclick = function () {
    location.href = "music.html";
};

books.onclick = function () {
    location.href = "books.html";
};

books.addEventListener("mouseover",function(){
    
    let books_hover = document.getElementById('books_hover');
    books.style.opacity = 0.0;
    books_hover.style.opacity = 1.0;
});
books.addEventListener("mouseout",function(){
    books.style.opacity = 1.0;
    let books_hover = document.getElementById('books_hover');
    books_hover.style.opacity = 0.0;
});

music.addEventListener("mouseover",function(){
    let music_hover = document.getElementById('music_hover');
    music.style.opacity = 0.0;
    music_hover.style.opacity = 1.0;
});
music.addEventListener("mouseout",function(){
    music.style.opacity = 1.0;
    let music_hover = document.getElementById('music_hover');
    music_hover.style.opacity = 0.0;
});

rabbitholes.addEventListener("mouseover",function(){
    let rabbitholes_hover = document.getElementById('rabbitholes_hover');
    rabbitholes.style.opacity = 0.0;
    rabbitholes_hover.style.opacity = 1.0;
});
rabbitholes.addEventListener("mouseout",function(){
    rabbitholes.style.opacity = 1.0;
    let rabbitholes_hover = document.getElementById('rabbitholes_hover');
    rabbitholes_hover.style.opacity = 0.0;
});

youtube.addEventListener("mouseover",function(){
    let youtube_hover = document.getElementById('youtube_hover');
    youtube.style.opacity = 0.0;
    youtube_hover.style.opacity = 1.0;
});
youtube.addEventListener("mouseout",function(){
    youtube.style.opacity = 1.0;
    let youtube_hover = document.getElementById('youtube_hover');
    youtube_hover.style.opacity = 0.0;
});


