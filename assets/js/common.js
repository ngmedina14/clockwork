// Return an array from localStorage 
function retrieveSessionData(data) {
    dataArray = JSON.parse(localStorage.getItem(data))
    return (dataArray == null) ? [] : dataArray
}


// Append a form data to localStorage and return true
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
        localStorage.setItem(formID, JSON.stringify(formArray));
        return true
    } catch (err) {
        console.log("localStorage saving error: " + err.message)
        return false
    }

}


// Create a card
// details = new Object()
// createCard('container', details)
function createCard(parentID, data) {
    // get parent id
    var nodeParent = document.getElementById("list");

    // create Element
    var card = document.createElement("div");
    var body = document.createElement("div");
    var coverImage = document.createElement("img");
    var overlay = document.createElement("div");
    var profile = document.createElement("img");
    var content = document.createElement("div");
    var overlayIcon = document.createElement("div");
    var overlayInfo = document.createElement("div");
    var contentTitle = document.createElement("div");
    var contentLanguage = document.createElement("div");
    var contentPortfolio = document.createElement("a");
    var overlayIconBadge = document.createElement("span");
    var overlayIconLink = document.createElement("div");
    var overlayIconLinkLinkedIn = document.createElement("a");
    var overlayIconLinkGithub = document.createElement("a");
    var overlayIconLinkMail = document.createElement("a");
    var overlayIconLinkLinkedInIcon = document.createElement("i");
    var overlayIconLinkGithubIcon = document.createElement("i");
    var overlayIconLinkMailIcon = document.createElement("i");
    var overlayInfoMobileItalic = document.createElement("i");
    var overlayInfoLocationItalic = document.createElement("i");
    var overlayInfoMobile = document.createElement("span");
    var overlayInfoLocation = document.createElement("span");
    var contentTitleFullname = document.createElement("h4");
    var contentTitleExpertise = document.createElement("h6");
    

    // add class to Element
    card.classList.add("card","col-xs","m-3","p-0","border-primary");
    body.classList.add("card-body","p-0","m-0");
    coverImage.classList.add("img-fluid", "w-100");
    overlay.classList.add("card-img-overlay", "w-100");
    profile.classList.add("img-thumbnail", "rounded-circle");
    content.classList.add("text-center", "mt-4", "pt-5");
    overlayIcon.classList.add("d-flex", "align-items-center", "justify-content-between");
    overlayInfo.classList.add("vstack", "text-end");
    contentLanguage.classList.add("hstack", "gap-2", "justify-content-center", "flex-wrap");
    contentPortfolio.classList.add("btn", "btn-outline-primary", "fs-6", "my-3", "position-relative");
    overlayIconBadge.classList.add("badge", "bg-primary", "bg-opacity-50");
    overlayIconLink.classList.add("hstack", "gap-3");
    overlayIconLinkLinkedIn.classList.add("text-primary", "opacity-75");
    overlayIconLinkGithub.classList.add("text-primary", "opacity-75");
    overlayIconLinkMail.classList.add("text-primary", "opacity-75");
    overlayIconLinkLinkedInIcon.classList.add("fa-brands", "fa-linkedin", "animate");
    overlayIconLinkGithubIcon.classList.add("fa-brands", "fa-github", "animate");
    overlayIconLinkMailIcon.classList.add("fa-solid", "fa-envelope", "animate");
    overlayInfoMobile.classList.add("fst-italic", "bg-light", "bg-opacity-75", "px-1");
    overlayInfoLocation.classList.add("fst-italic", "bg-light", "bg-opacity-75", "px-1");
    contentTitleExpertise.classList.add("font-monospace");

    // add Attribute
    card.setAttribute("style", "width: 300px");
    coverImage.setAttribute("src", `https://placeimg.com/330/200/tech?random${data["Mobile"]}`);
    coverImage.setAttribute("height", "200");
    profile.setAttribute("style", "position:absolute; top:100px;left:24.84%; width:150px; height:150px;");
    profile.setAttribute("src", `https://i.pravatar.cc/150?u=${data["Mobile"]}`);
    overlayInfo.setAttribute("style", "font-size: 10px");
    overlayIconLinkLinkedIn.setAttribute("href", "https://www.linkedin.com/in/neil-medina-079740195");//Linked IN
    overlayIconLinkGithub.setAttribute("href", "https://github.com/ngmedina14/clockwork");//Github
    overlayIconLinkMail.setAttribute("href", `mailto:${data["Email"]}`);//Personal email Mailto
    contentPortfolio.setAttribute("href", `${data["Portfolio"]}`);//Personal email Mailto

    // create Text
    var textPortfolio = document.createTextNode("Portfolio");
    switch (data["Skill"]){
      case "1":
    var textBadge = document.createTextNode("Beginner");
        break;
      case "2":
    var textBadge = document.createTextNode("Intermediate");
        break;
      case "3":
    var textBadge = document.createTextNode("Expert");
        break;
    } 
    var textMobile = document.createTextNode(data["Mobile"]);//Mobile
    var textLocation = document.createTextNode(data["Location"]);//Location
    var textFullname = document.createTextNode(data["Fullname"]);//FullName
    var textExpertise = document.createTextNode(data["Expertise"]);//Expertise

    // append Text to Element
    contentPortfolio.appendChild(textPortfolio);
    overlayIconBadge.appendChild(textBadge);
    overlayInfoMobile.appendChild(textMobile);
    overlayInfoLocation.appendChild(textLocation);
    contentTitleFullname.appendChild(textFullname);
    contentTitleExpertise.appendChild(textExpertise);

    // append ChildElement to ParentElement
    card.appendChild(body);
    body.appendChild(coverImage);
    body.appendChild(overlay);
    body.appendChild(profile);
    body.appendChild(content);
    overlay.appendChild(overlayIcon);
    overlay.appendChild(overlayInfo);
    content.appendChild(contentTitle);
    content.appendChild(contentLanguage);
    content.appendChild(contentPortfolio);
    overlayIcon.appendChild(overlayIconBadge);
    overlayIcon.appendChild(overlayIconLink);
    overlayIconLink.appendChild(overlayIconLinkLinkedIn);
    overlayIconLink.appendChild(overlayIconLinkGithub);
    overlayIconLink.appendChild(overlayIconLinkMail);
    overlayIconLinkLinkedIn.appendChild(overlayIconLinkLinkedInIcon);
    overlayIconLinkGithub.appendChild(overlayIconLinkGithubIcon);
    overlayIconLinkMail.appendChild(overlayIconLinkMailIcon);
    overlayInfo.appendChild(overlayInfoMobileItalic);
    overlayInfo.appendChild(overlayInfoLocationItalic);
    overlayInfoMobileItalic.appendChild(overlayInfoMobile);
    overlayInfoLocationItalic.appendChild(overlayInfoLocation);
    contentTitle.appendChild(contentTitleFullname);
    contentTitle.appendChild(contentTitleExpertise);


    //Language
    if (Array.isArray(data["Language"])){
      data["Language"].map(lang=>{
        var list = document.createElement("div");
      list.classList.add("bg-primary", "bg-opacity-25", "border-primary", "px-1");
      var listText = document.createTextNode(lang); 
      list.appendChild(listText);
      contentLanguage.appendChild(list);
      })
    }else{
      var list = document.createElement("div");
      list.classList.add("bg-primary", "bg-opacity-25", "border-primary", "px-1");
      var listText = document.createTextNode(data["Language"]); 
      list.appendChild(listText);
      contentLanguage.appendChild(list);
    }
    

    // append cardComponent to Parent
    nodeParent.appendChild(card);
  }
