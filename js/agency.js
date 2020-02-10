/* Example script of populating a bootstrap table*/
var $table = $('#table');
var tbldata = [
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "created_by": "D", 
        "col2": "test", 
        "col3": "test"
    }, 
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "created_by": "C", 
        "col2": "test", 
        "col3": "test"
    }, 
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "created_by": "B", 
        "col2": "test", 
        "col3": "test"
    }, 
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "created_by": "A", 
        "col2": "test", 
        "col3": "test"
    } 
]; 

// Populating bootstrap table with data. 
// Data will probably be provided in the first HTTP GET response from server. 

$('#table').bootstrapTable({
    data: tbldata
});


// JQuery to make each row of a dynamically loaded table clickable
// Probably this script should be inside the GET request, so that
// we can attach a pdf url to each row
$(document).on('click', '#table tbody tr', function(e){
    alert("Click")
});

$('#newProjectBtn').on('click', function(event) {
    alert("Click"); 
});

