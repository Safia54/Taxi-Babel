$(window).ready(function(){
  $(".wrapper").mousemove(function(e){
    var bounds = this.getBoundingClientRect();
    inner = $(".inner");

    var w = inner.width() - bounds.width;
    var h = inner.height() - bounds.height;

    x = (e.pageX - bounds.left)/ bounds.width;
    y = (e.pageY - bounds.top)/ bounds.height;

    inner.css("left", -x * w);
    inner.css("top", -y * h);
  });
});