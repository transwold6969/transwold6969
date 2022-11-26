let pp = 2;
let i = 1;

function ie(url,title) { 
  console.log(url);
 $("#modal_div").html(`
<div id="Modal" class="modal fade" role="dialog">
  <div class="modal-dialog">

<!-- Modal content-->
<div class="modal-content">
<div class="modal-header text-center">
 <p>${title}</p>
</div>
  <div class="modal-body">
    <img src="${url}" class="img-thumbnail" alt="${title}">
  </div>  
<div class="modal-footer">
 <a href="${url}" class="btn btn-danger" download>Download</a>
</div>
</div>
  </div>
</div>
`);
 $("#Modal").modal('show');
};

function createHome(pg) { 
fetch("https://www.eporner.com/api/v2/video/search/?per_page=200&lq=0    &order=latest&gay=0&page="+pg )    .then(resp=> resp.json())       .then((data) => {            $(".preloader").remove();            const videos = data.videos;
 videos.map(function(video) {
  $("#v").append(`
      <div class="col-sm-3 py-3 col-md-3 col-lg-3">
       <img class="img-fluid" src="${video.default_thumb.src}" alt="${video.title}" onClick="ie('${video.default_thumb.src}','${video.title}');">
  </div>
   `);
        
 });   
});
      
};

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
});
setInterval(function () {
  createHome(i);
   ++i
   
}, 5000);



