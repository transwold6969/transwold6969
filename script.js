let pp=2,i=1;function ie(e,a){$("#modal_div").html(`
<div id="Modal" class="modal fade" role="dialog">
  <div class="modal-dialog">

<!-- Modal content-->
<div class="modal-content">
<div class="modal-header text-center">
 <p>${a}</p>
</div>
  <div class="modal-body">
    <img src="${e}" class="img-thumbnail" alt="${a}">
  </div>  
<div class="modal-footer">
 <a href="${e}" class="btn btn-danger" download target="__blank">Download</a>
</div>
</div>
  </div>
</div>
`),$("#Modal").modal("show")}function createHome(e){fetch("https://www.eporner.com/api/v2/video/search/per_page=1000&lq=0    &order=latest&gay=0&page="+e).then(e=>e.json()).then(e=>{$(".preloader").remove();let a=e.videos;a.map(function(e){$("#v").append(`
      <div class="col-sm-3 py-3 col-md-3 col-lg-3 image-div idv">
       <img class="img-fluid" src="${e.default_thumb.src}" alt="${e.title}" onClick="ie('${e.default_thumb.src}','${e.title}');">
       <h2>${e.title}</h2>
  </div>
   `)}),$(".idv").removeClass("image-div")})}createHome(i),++i,$(window).scroll(function(){$(window).scrollTop()+$(window).height()>$(document).height()-100&&($("#v").append(`<div class="text-center preloader" >
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`),createHome(i),++i)}),setInterval(function(){createHome(i),++i},5e3);
