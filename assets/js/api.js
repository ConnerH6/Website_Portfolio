const countUrl = 'https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count'
const countElement = document.getElementById('counting');

updateVisitCount();

function updateVisitCount() {
    $.get(countUrl).done(function(data) {
      var obj = JSON.parse(data.body);
      countElement.innerHTML = obj.visits;
      
    })
}