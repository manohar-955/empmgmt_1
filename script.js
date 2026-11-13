
function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    if (name == "" || id == "") {
        alert("Please enter all details");
    }
    else {
        let li = document.createElement("li");

        li.innerHTML = name + " - " + id;

        document.getElementById("list").appendChild(li);

        alert("Employee Added Successfully");
    }
}
