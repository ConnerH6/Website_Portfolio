const countURL = 'https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count'

getVisitors();
function getVisitors() {
  return fetch("https://ryb7z9tjek.execute-api.us-east-1.amazonaws.com/Count",
  {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    },
  })
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
    return responseData;
  })
  .catch(error => console.warn(error));
}




