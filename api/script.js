fetch("https://catfact.ninja/fact")
  .then((ans) => {
    return ans.json(); //conversion into readable json format and not into json object
  })
  .then((res) => {
    console.log(res.length);
  })
  .catch();
