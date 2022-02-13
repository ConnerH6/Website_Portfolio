const countURL = 'https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count'



function getVisitors() {
 // addVisitor();
  $.get("https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count").done(function(data){
      $("#counting").text("You are visitor number " + data.count);
  });
}
//function addVisitor() {
 // $.get("https://t6fxdv1nr0.execute-api.us-east-1.amazonaws.com/Add").done(function(data){
  //});
//}