/* Example script of populating a bootstrap table*/
var $table = $('#table');
var tbldata = [
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "col1": "test", 
        "col2": "test", 
        "col3": "test"
    }, 
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "col1": "test", 
        "col2": "test", 
        "col3": "test"
    }, 
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "col1": "test", 
        "col2": "test", 
        "col3": "test"
    }, 
    {
        "Project Name": "Test 1", 
        "Progress": "Progress Test",
        "Date Submitted": "01/01/2020", 
        "col1": "test", 
        "col2": "test", 
        "col3": "test"
    } 
]; 

// Populating bootstrap table with data. 
// Data will probably be provided in the first HTTP GET response from server. 
$(function () {
    $('#table').bootstrapTable({
        data: tbldata
    });
});

$('#newProjectBtn').on('click', function(event) {
    alert("Click"); 
});

