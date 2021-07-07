name_student_array = [];
function submit()
{
    var d_name = [];
for ( var j = 1;j <=4; j++)
{
var name_stundent = document.getElementById("name_of_the_student"+j).value;
console.log(name_stundent);
name_student_array.push(name_stundent);
}
console.log(name_student_array);
var lenth_array = name_student_array.length;
console.log(lenth_array);
for ( var k = 0; k <lenth_array; k++){
    d_name.push("<h4>NAME-"+ name_student_array[k]+"</h4>");
}
console.log(d_name);
document.getElementById("display_name_with_commas").innerHTML =d_name ;
var r_comma = d_name.join("");
document.getElementById("display_name_without_comma").innerHTML = r_comma;
}
