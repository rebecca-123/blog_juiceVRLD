---
layout: page
title: About Us
permalink: /about/
---

# AP CSA Period 2: Team Juice Vrld

## [Scrum Board](https://github.com/users/Rebecca-123/projects/2), [Insights](https://github.com/Rebecca-123/blog_juiceVRLD/graphs/contributors)

## Contributors

<!-- HTML table fragment for page -->
<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>GitHub ID</th>
    <th>Role</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<!-- Script is layed out in a sequence (no function) and will execute when page is loaded -->
<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

   // define a function to hold data for each team member
    function Student(name, ghID, role) {
        this.name = name;
        this.ghID = ghID;
        this.role = role;
    }

    // define a JSON conversion "method" associated with Student
    Student.prototype.toJSON = function() {
        const obj = {name: this.name, ghID: this.ghID, role: this.role};
        const json = JSON.stringify(obj);  // json/string is useful when passing data on internet
        return json;
    }

    // define array of students
    var team = [ 
        new Student("Divyanshi Suri", "@divyanshisuri", "Frontend Developer"),
        new Student("Linda Liu", "@LindaLiu1202", "DevOps"),
        new Student("Rebecca Su", "@Rebecca-123", "Scrum Master"),
        new Student("Vaishavi Jayashankar", "@vaishavijay", "Backend Developer")
    ];
  
    // define a classroom and build Classroom objects and json
    function Classroom(students){
        // add each Student to Classroom
        this.classroom = students;
        // build json/string format of Classroom
        this.json = [];
        this.classroom.forEach(student => this.json.push(student.toJSON()));
    }
  
    // make a CompSci classroom
    compsci = new Classroom(team);

    for (const row of compsci.classroom) {
        // tr for each row
        const tr = document.createElement("tr");
        // td for each column
        const name = document.createElement("td");
        const id = document.createElement("td");
        const role = document.createElement("td");
        // data is specific to the API
        name.innerHTML = row.name;
        id.innerHTML = row.ghID; 
        role.innerHTML = row.role; 
        // this build td's into tr
        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(role);
        // add HTML to container
        resultContainer.appendChild(tr);
    }
</script>
