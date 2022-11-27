let pp = 2;
let i = 1;
let q='';

function ie(url,title,id) { 
 $("#modal_div").html(`
<div id="Modal" class="modal fade" role="dialog" style="width:100%;height:60vh;" >
 <div class="modal-dialog"><div class="modal-content">
<h5 class="modal-title bg-dark text-white">${title}</h5> <iframe class="bg-success responsive-iframe" src="https://www.eporner.com/embed/${id}/"style="width:auto;height:35vh;">Error loading Video.</iframe></div><div class="modal-footer"><button type="button" class="btn btn-danger rounded" data-dismiss="modal">Close</button></div></div></div>
`);
  
 $("#Modal").modal('show');
};

function createHome(pg) { 
let url= "https://www.eporner.com/api/v2/video/search/?query="+q+"&per_page=10&lq=0&order=latest&gay=0&page="+pg;
  console.log(url)
fetch(url)   
.then(resp=> resp.json())       
.then((data) => {            $(".preloader").remove();            const videos = data.videos;
 videos.map(function(video) {
  $("#v").append(`
      <div class="col-sm-3 py-3 col-md-3 col-lg-3">
       <img class="img-fluid" src="${video.default_thumb.src}" alt="${video.title}" onClick="ie('${video.default_thumb.src}','${video.title}','${video.id}');">
       <a href="${video.default_thumb.src}" class="btn btn-outline-danger darkmode-ignore" target="__blank">Download Image</a>
       
  <button class="btn btn-outline-secondary darkmode-ignore" onClick="ie('${video.default_thumb.src}','${video.title}','${video.id}');">Watch▶️</button>
  </div>
   `);
    
 });   
})
.catch(error => { $(".preloader").remove();  
  $('#v').html("<h2 class='mt-5 display-3'>Sorry,for the inconvenience.An error occured while loading videos.</h2>");});
 
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
   
}, 50000);
$("#inp").keyup(function(){

  
if($("#inp").val().length > 2){
    q =$("#inp").val();
    console.log(q);
    $('#v').empty();
  
  $("#v").append(`<div class="text-center preloader" ><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span>
  </div>
</div>`);
    i =1;
  createHome(i);
    ++i;
  

  
  };});



