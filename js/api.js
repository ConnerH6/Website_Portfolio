// INTERACT WITH DynamoDB 
const countURL = 'https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count'
const countElement = document.getElementById('counting');

updateVisitCount();

function updateVisitCount(){
  fetch(countURL)
    .then(res => res.json())
    .then(res => {
    countElement.innerHTML = res.count;
  });
}