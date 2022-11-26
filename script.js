let pp = 2;
let i = 1;
function createVideoPage(vid_id){   console.log(vid_id);            }
function createHome(pg) {
    fetch("https://www.eporner.com/api/v2/video/search/?per_page=50&order=latest&page=" + pg)
        .then((resp) => resp.json())
        .then((data) => {
            $(".preloader").remove();
            const videos = data.videos;
            videos.map(function(video) { $("#v").append(`
   
      <div id="${video.id}" onclick="createVideoPage(${video.id}" class="col-sm-3 col-md-3 col-lg-3">
      <img class="img-fluid" src="${video.default_thumb.src}" alt="${video.title} thumbnail">
        <h5 class="card-title">  
         <a href="${video.url}" target="__blank" class="text-dark text-break" style="text-decoration:none;" /> 
           ${video.title}
        </a>
        </h5>
                    
  </div>
   `)
            });
        });
};


function filterVideo(pg) {
  var filt = $( "#filter" ).val();
  
    fetch("https://www.eporner.com/api/v2/video/search/?per_page=20&order=" + filt +"&page=" + pg)
        .then((resp) => resp.json())
        .then((data) => {
            $(".preloader").remove();
            const videos = data.videos;
            videos.map(function(video) {
              
                $(".longest").append(`
   
      <div class="col-sm-3 col-md-3 col-lg-3">
       <img class="img-fluid" src="${video.default_thumb.src}" alt="${video.title} thumbnail">
        <h5 class="card-title">  
         <a href="${video.url}" target="__blank" class="text-dark text-break" style="text-decoration:none;" /> 
           ${video.title}
        </a>
        </h5>
  </div>
   `)
            });
        });
};
$('#filter').on('change', function() {
  $(".longest").empty();        filterVideo(pp);
    ++pp;
  
});

filterVideo(1)
++pp;


$("#long-show").click(function() {
  filterVideo(pp);
  ++pp;
});


createHome(i);
++i;

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
   $("#v").append(`<div class="text-center preloader" >
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`);
     createHome(i);
    ++i;
   }
});                                     $(window).on('load', function () {
     $("#cover").fadeOut(1500);           })