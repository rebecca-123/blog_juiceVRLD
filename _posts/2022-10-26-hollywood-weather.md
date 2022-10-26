---
toc: false
layout: post
description: 
categories: [pbl]
title: Hollywood Weather Forecast
---
# Hollywood Weather Forecast
<!-- HTML table fragment for page -->
<table>
  <thead>
  <tr>
    <th>Time</th>
    <th>Temperature</th>
    <th>Description</th>
    <th>Precipitation</th>
    <th>Snow</th>
    <th>UV</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<!-- Script is layed out in a sequence (without a function) and will execute when page is loaded -->
<script>

  // prepare HTML defined "result" container for new output
  const resultContainer = document.getElementById("result");

  // prepare fetch urls
  const get_url = "https://juicevrld.nighthawkcoding.ml/starters/weather/daily";

  // prepare fetch GET options
  const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  // fetch the API
  fetch(get_url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
          error('GET API response failure: ' + response.status);
          return;
      }
      // valid response will have JSON data
      response.json().then(data => {
          console.log(data);
          for (const row of data.data) {
            // make "tr element" for each "row of data"
            const tr = document.createElement("tr");
            
            // td for time cell
            const time = document.createElement("td");
            time.innerHTML = row.datetime;  // add fetched data to innerHTML
            
            const temp = document.createElement("td");
            temp.innerHTML = row.temp;

            const description = document.createElement("td");
            description.innerHTML = row.weather.description;

            const precip = document.createElement("td");
            precip.innerHTML = row.precip;

            const snow = document.createElement("td");
            snow.innerHTML = row.snow;

            const uv = document.createElement("td");
            uv.innerHTML = row.uv;
             
            // this builds ALL td's (cells) into tr (row) element
            tr.appendChild(time);

            // this adds all the tr (row) work above to the HTML "result" container
            resultContainer.appendChild(tr);
          }
      })
  })
  // catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
    error(err + " " + get_url);
  });

  // Something went wrong with actions or responses
  function error(err) {
    // log as Error in console
    console.error(err);
    // append error to resultContainer
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  }
</script>
