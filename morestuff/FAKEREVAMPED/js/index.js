//use tab key to prank someone
var strs = [
      "I'm fool!",
      "I'm cool!"
    ];

var t = $('#txt'),
    str = strs[0],
    len = str.length,
    on = false;

t.keydown(function(e){
  var l = t.val().length%len+1;
  
  if(e.which == 9){
  	str = strs[(on = !on)|0];
    len = str.length;
  }
  
  t.val(str.substr(0,l));
  e.preventDefault();
})