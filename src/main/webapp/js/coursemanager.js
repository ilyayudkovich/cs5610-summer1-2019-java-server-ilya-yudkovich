function newRow()  {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var div = document.createElement('div')
    div.className = 'row'

    titleDiv = document.createElement('div')
    div.appendChild(titleDiv)
    titleDiv.className = "col-md-6 col-sm-9"
    var givenCourseName = document.getElementById("newCourse").value

    if (givenCourseName) {
        text = document.createTextNode(givenCourseName)
    } else {
        text = document.createTextNode('New Course')
    }

    titleDiv.appendChild(text)

    ownerDiv = document.createElement('div')
    div.appendChild(ownerDiv)
    ownerDiv.className = "col-md-2 col-sm-1"
    text = document.createTextNode('New Owner')
    ownerDiv.appendChild(text)

    dateDiv = document.createElement('div')
    div.appendChild(dateDiv)
    dateDiv.className = "col-md-2 col-sm-1"
    text = document.createTextNode(today)
    dateDiv.appendChild(text)

    modDiv = document.createElement('div')
    div.appendChild(modDiv)
    modDiv.className = "col-md-2 col-sm-1"
    text = document.createTextNode(today)
    modDiv.appendChild(text)

    document.getElementById("listOfCourses").appendChild(div)
}

