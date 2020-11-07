// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//loop through the data and console log 
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);


// Use d3 to appedn the one table row 'tr' to each object 
    var row = tbody.append("tr");

// Object will log each UFO sighting 
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);

//Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
// Select button

var button = d3.select("#filter-btn");
button.on("click", function() {


    tbody.html("");
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

// Get the value property of the input element
    var inputValue = inputElement.property("value");

// Console log the input value
    console.log(inputValue);

// Filter so date/time is equal to the input value
    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

// Console log filter values
    console.log(filteredData);

    filteredData.forEach(function(selections) {

    console.log(selections);

    var row = tbody.append("tr");

    Object.entries(selections).forEach(function([key, value]) {
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    });
});
});