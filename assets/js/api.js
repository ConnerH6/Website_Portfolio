const countUrl = 'https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.visits;
    });
}

