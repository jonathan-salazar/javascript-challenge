// from data.js
var tbody = d3.select("tbody");

//Defining button 
var filterButton = d3.select("#filter-btn");

//Defining Date Time input field for filter
var inputDateTime = d3.select("#datetime");

var tableData = data;

//Loads the table with our data
tableData.forEach(function(ufo_sighting){
    //console.log(ufo_sighting);
    var row = tbody.append("tr");

    Object.entries(ufo_sighting).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value)
      });
});

// Create a custom filtering function
function filterData(ufo_sighting) {
    inputDateValue = inputDateTime.property("value");

    if(inputDateValue != ""){
        return ufo_sighting.datetime == inputDateValue; 
    }
};
  
function handleClick() {
   // console.log("You clicked the filter button!");
    var rows = tbody.selectAll("tr")
    rows.remove();
   
    var filteredData = tableData.filter(filterData);

    //Loads the table with our data
    filteredData.forEach(function(ufo_sighting){
        //console.log(ufo_sighting);
        var row = tbody.append("tr");
    
        Object.entries(ufo_sighting).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });
    });
  }
  
// We can use the `on` function in d3 to attach an event to the handler function
filterButton.on("click", handleClick);



