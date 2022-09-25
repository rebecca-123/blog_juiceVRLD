---
toc: true
layout: post
description: Designing tables/models for website data.
categories: [pbl]
title: Data Modeling for Travel Website
---
# Data Modeling for Travel Website

## Packing List
<!-- HTML table fragment for page -->
<table>
  <thead>
  <tr>
    <th>Label</th>
    <th>#</th>
    <th>Item</th>
    <th>Packed?</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
// prepare HTML result container for new output
const resultContainer = document.getElementById("result");

// define a function to hold data for each item
function Stuff(label, item) {
    this.label = label;
    this.item = item;
}

// define a JSON conversion "method" associated with each item
Stuff.prototype.toJSON = function() {
    const obj = {label: this.label, item: this.item};
    const json = JSON.stringify(obj);  // json/string is useful when passing data on internet
    return json;
}

// define array of students
var stuffs = [ 
    new Stuff("Clothing", "Jacket"),
];

function Luggage(stuffs){
    this.luggage = stuffs;
    // build json/string format
    this.json = [];
    this.luggage.forEach(stuff => this.json.push(stuff.toJSON()));
}

// make a 
myLuggage = new Luggage(stuffs);

var i = 0;
for (const row of myLuggage.luggage) {
    // tr for each row
    const tr = document.createElement("tr");
    // td for each column
    const label = document.createElement("td");
    const num = document.creatElement("td");
    const item = document.createElement("td");
    const packed = document.createElement("td");
    
    // data is specific to the API
    label.innerHTML = row.label;
    item.innerHTML = row.item; 
    num.innerHTML = i;
    packed.innerHTML = <input type="checkbox">
  
    // this build td's into tr
    tr.appendChild(label);
    tr.appendChild(num);
    tr.appendChild(item);
    tr.appendChild(packed);

    // add HTML to container
    resultContainer.appendChild(tr);

    i++;
}

</script>
- Would need added functionality of a database (adding/removing/editing rows)

## Itinerary
Retains same concept as above but with different column names.