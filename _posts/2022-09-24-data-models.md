---
toc: true
layout: post
description: Designing tables/models for website data.
categories: [pbl]
title: Data Modeling for Travel Website
---
# Data Modeling for Travel Website

![]({{site.baseurl}}/images/uml.png)

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
    new Stuff("Clothing", "Socks"),
    new Stuff("Identification", "Passport"),
    new Stuff("Identification", "Drivers License"),
    new Stuff("Other", "Umbrella"),
    new Stuff("Other", "Hand Sanitizer"),
    new Stuff("Other", "First Aid Kit"),
    new Stuff("Other", "Sunscreen"),
    new Stuff("Technology", "Power Bank"),
    new Stuff("Technology", "Phone Charging Cord"),
    new Stuff("Technology", "Laptop"),
];

function Luggage(stuffs){
    this.luggage = stuffs;
    // build json/string format
    this.json = [];
    this.luggage.forEach(stuff => this.json.push(stuff.toJSON()));
}

// make a 
myLuggage = new Luggage(stuffs);

for (const row of myLuggage.luggage) {
    // tr for each row
    const tr = document.createElement("tr");
    // td for each column
    const label = document.createElement("td");
    const num = document.createElement("td");
    const item = document.createElement("td");
    const packed = document.createElement("td");
    
    // data is specific to the API
    label.innerHTML = row.label;

    // number items in table
    num.innerHTML = myLuggage.luggage.indexOf(row) + 1;
    item.innerHTML = row.item; 

    // checkboxes
    packed.innerHTML += '<input type="checkbox">';
  
    // this build td's into tr
    tr.appendChild(label);
    tr.appendChild(num);
    tr.appendChild(item);
    tr.appendChild(packed);

    // add HTML to container
    resultContainer.appendChild(tr);
}

</script>
- Would need added functionality of a database (adding/removing/editing rows)

## Itinerary
Retains same concept as above but with different column names.