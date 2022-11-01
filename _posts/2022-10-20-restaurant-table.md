---
toc: false
layout: post
description: A frontend data display (via JS fetch) for restaurant API (made with BE POJO and JPA).
categories: [pbl]
title: San Diego Fast Food Preferences
image: /images/fast_food.jpg
permalink: /pbl/sd-fast-food
---
<!-- HTML table fragment for page -->
<table>
  <thead>
  <tr>
    <th>Restaurant</th>
    <th>5 Star</th>
    <th>4 Star</th>
    <th>3 Star</th>
    <th>2 Star</th>
    <th>1 Star</th>
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

  // keys for joke reactions
  const FIVE = "five";
  const FOUR = "four";
  const THREE = "three";
  const TWO = "two";
  const ONE = "one";

  // prepare fetch urls
  const url = "https://juicevrld.nighthawkcoding.ml/api/restaurants";
  const get_url = url +"/";
  const five_url = url + "/five/";  // 5-star reaction
  const four_url = url + "/four/";
  const three_url = url + "/three/";
  const two_url = url + "/two/";
  const one_url = url + "/one/";  //  1-star reaction

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
  // prepare fetch PUT options, clones with JS Spread Operator (...)
  const put_options = {...options, method: 'PUT'}; // clones and replaces method

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
          for (const row of data) {
            // make "tr element" for each "row of data"
            const tr = document.createElement("tr");
            
            // td for joke cell
            const restaurant = document.createElement("td");
              restaurant.innerHTML = row.id + ". " + row.restr;  // add fetched data to innerHTML

            // td for five cell with onclick actions
            const five = document.createElement("td");
              const five_but = document.createElement("button");
              five_but.id = FIVE+row.id;   // establishes a HAHA JS id for cell
              five_but.innerHTML = row.five;  // add fetched "haha count" to innerHTML
              five_but.onclick = function () {
                // onclick function call with "like parameters"
                reaction(FIVE, five_url+row.id, five_but.id);  
              };
              five.appendChild(five_but);  // add "haha button" to haha cell
            
            const four = document.createElement("td");
              const four_but = document.createElement("button");
              four_but.id = FOUR+row.id;
              four_but.innerHTML = row.four;
              four_but.onclick = function () {
                reaction(FOUR, four_url+row.id, four_but.id);  
              };
              four.appendChild(four_but);

            const three = document.createElement("td");
              const three_but = document.createElement("button");
              three_but.id = THREE+row.id;
              three_but.innerHTML = row.three;
              three_but.onclick = function () {
                reaction(THREE, three_url+row.id, three_but.id);  
              };
              three.appendChild(three_but);  

            const two = document.createElement("td");
              const two_but = document.createElement("button");
              two_but.id = TWO+row.id;
              two_but.innerHTML = row.two;
              two_but.onclick = function () {
                reaction(TWO, two_url+row.id, two_but.id);  
              };
              two.appendChild(two_but); 
              
            // td for boohoo cell with onclick actions
            const one = document.createElement("td");
              const one_but = document.createElement("button");
              one_but.id = ONE+row.id;  // establishes a BOOHOO JS id for cell
              one_but.innerHTML = row.one;  // add fetched "boohoo count" to innerHTML
              one_but.onclick = function () {
                // onclick function call with "jeer parameters"
                reaction(ONE, one_url+row.id, one_but.id);  
              };
              one.appendChild(one_but);  // add "boohoo button" to boohoo cell  

            // this builds ALL td's (cells) into tr (row) element
            tr.appendChild(restaurant);
            tr.appendChild(five);
            tr.appendChild(four);
            tr.appendChild(three);
            tr.appendChild(two);
            tr.appendChild(one);

            // this adds all the tr (row) work above to the HTML "result" container
            resultContainer.appendChild(tr);
          }
      })
  })
  // catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
    error(err + " " + get_url);
  });

  // Reaction function to likes or jeers user actions
  function reaction(type, put_url, elemID) {

    // fetch the API
    fetch(put_url, put_options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
          error("PUT API response failure: " + response.status)
          return;  // api failure
      }
      // valid response will have JSON data
      response.json().then(data => {
          console.log(data);
          // Likes or Jeers updated/incremented
          if (type === FIVE) { // like data element
            document.getElementById(elemID).innerHTML = data.five;  // fetched haha data assigned to haha Document Object Model (DOM)
          // additional ratings
          } else if (type === FOUR) {
            document.getElementById(elemID).innerHTML = data.four;
          } else if (type === THREE) {
            document.getElementById(elemID).innerHTML = data.three;  
          } else if (type === TWO) {
            document.getElementById(elemID).innerHTML = data.two;  
          } else if (type === ONE) { // 1 star data element
            document.getElementById(elemID).innerHTML = data.one;  // fetched boohoo data assigned to boohoo Document Object Model (DOM)
          } else {
            error("unknown type: " + type);  // should never occur
          }  
      })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + put_url);
    });
    
  }

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

