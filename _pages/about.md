---
layout: page
title: About Us
permalink: /about/
---

# AP CSA Period 2: Team Juice Vrld

## [Scrum Board](https://github.com/users/Rebecca-123/projects/2), [Insights](https://github.com/Rebecca-123/blog_juiceVRLD/graphs/contributors)

## Contributors

<script>
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
    
    // define an HTML conversion "method" associated with Classroom
    Classroom.prototype._toHtml = function() {
        // HTML Style is build using inline structure
        var style = (
        "display:inline-block;" +
        "border: 2px solid grey;" +
        "box-shadow: 0.8em 0.4em 0.4em grey;"
        );
    
        // HTML Body of Table is build as a series of concatenations (+=)
        var body = "";
        // Heading for Array Columns
        body += "<tr>";
        body += "<th><mark>" + "Name" + "</mark></th>";
        body += "<th><mark>" + "GitHub ID" + "</mark></th>";
        body += "<th><mark>" + "Role" + "</mark></th>";
        body += "</tr>";
        // Data of Array, iterate through each row of compsci.classroom 
        for (var row in compsci.classroom) {
        // tr for each row, a new line
        body += "<tr>";
        // td for each column of data
        body += "<td>" + compsci.classroom[row].name + "</td>";
        body += "<td>" + compsci.classroom[row].ghID + "</td>";
        body += "<td>" + compsci.classroom[row].role + "</td>";
        // tr to end line
        body += "<tr>";
        }
    
        // Build and HTML fragment of div, table, table body
        return (
        "<div style='" + style + "'>" +
            "<table>" +
            body +
            "</table>" +
        "</div>"
        );
    
    };
    
    // IJavaScript HTML processor receive parameter of defined HTML fragment
    $$.html(compsci._toHtml());
</script>

