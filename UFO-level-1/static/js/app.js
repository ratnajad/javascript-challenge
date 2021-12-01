// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
//console.log(tableData);

function buildTable(data) {
    tbody.html("");
    data.forEach(
        function(sightingReport) {
          console.log(sightingReport);
          var row = tbody.append("tr");
          var values = Object.values(sightingReport);
          values.forEach(
            function(val){
              row.append("td").text(val)
            }
          )
      });
}

function updatedDate() {
    var filterDate = d3.select("#datetime");
    var dateValue = filterDate.property("value");
    console.log(dateValue);
    filterTable(dateValue);
}

function filterTable(dateValue) {
    var filterData = tableData;
    filterData = filterData.filter(r => r.datetime == dateValue);
    buildTable(filterData);
}

d3.selectAll("button").on("click", updatedDate);

buildTable(tableData);
