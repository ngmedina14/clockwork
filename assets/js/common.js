// Return an array from sessionStorage 
function retrieveSessionData(data) {
    dataArray = JSON.parse(sessionStorage.getItem(data))
    return (dataArray == null) ? [] : dataArray
}


// Append a form data to sessionStorage and return true
// ex. 
// <form id="register">
// if (appendSessionFormData('register')) alert('saved')
function appendSessionFormData(formID) {
    try {
        let objectItem = new Object();
        let formArray = retrieveSessionData(formID);
        let form = document.getElementById(formID);
        let formData = new FormData(form);
        [...formData].map((value) => {
            if ([...formData].filter((data) => data[0] == value[0]).length != 1) {
                if (objectItem.hasOwnProperty(value[0])) {
                    objectItem[value[0]].push(value[1])
                } else {
                    objectItem[value[0]] = [value[1]]
                }
            } else {
                objectItem[value[0]] = value[1]
            }
        });
        (formArray.length === 0) ? formArray = [objectItem] : formArray.push(objectItem);
        sessionStorage.setItem(formID, JSON.stringify(formArray));
        return true
    } catch (err) {
        console.log("sessionStorage saving error: " + err.message)
        return false
    }

}


// Toast display message
// toast('message','color')
function toast(message, color) {
    let toast = document.getElementById('toast');
    toast.style.visibility = "visible";
    toast.textContent = message;
    toast.style.color = color;
}