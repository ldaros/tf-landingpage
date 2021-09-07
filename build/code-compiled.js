/** Short hand for dom querySelector. */
function select(stuff) {
    return (document.querySelector(stuff));
}
/** Checks that the form fields are not empty. */
function checkSend() {
    var namefield = select("input[name='name']");
    var mailfield = select("input[name='mail']");
    var msgfield = select("textarea[name='comment']");
    if (namefield.value == "")
        return false;
    if (mailfield.value == "")
        return false;
    if (msgfield.value == "")
        return false;
    return true;
}
/** Builds and shows the overlay. */
function openNav(name, github, mail, ig) {
    // get the content fields
    // children: [0] = svg [1] = text(p)
    var github_div = select("#ov-github");
    var mail_div = select("#ov-mail");
    var ig_div = select("#ov-ig");
    var overlay = select("#overlay");
    overlay.style.width = "100%"; // display it on the page
    select("#ov-name").textContent = name; // set the name
    if (github != null) { // set the github account
        github_div.style.display = "flex";
        github_div.children[1].textContent = github;
        github_div.attributes[1].value = "https://www.github.com/" + github;
    }
    else {
        github_div.style.display = "none";
    }
    if (mail != null) { // set the mail address
        mail_div.style.display = "flex";
        mail_div.children[1].textContent = mail;
        mail_div.attributes[1].value = "mailto:" + mail;
    }
    else {
        mail_div.style.display = "none";
    }
    if (ig != null) { // set the instagram account
        ig_div.style.display = "flex";
        ig_div.children[1].textContent = name;
        ig_div.attributes[1].value = ig;
    }
    else {
        ig_div.style.display = "none";
    }
}
/** Closes the overlay. */
function closeNav() {
    var overlay = select("#overlay");
    overlay.style.width = "0";
}
/**  Attach a listener to the send form button. */
select("#send").addEventListener("click", function () {
    if (!checkSend())
        alert("Preencha todos os campos.");
});
