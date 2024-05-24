
function getFormvalue() {
	var form = document.getElementById("form1");
    var firstName = form.fname.value.trim();
    var lastName = form.lname.value.trim();
    var fullName = firstName + " " + lastName;
    alert(fullName);
}
