/** Short hand for dom querySelector. */
function select(stuff:string):any { 
   return (document.querySelector(stuff)); 
}

/** Checks that the form fields are not empty. */
function checkSend():boolean {
  const namefield:HTMLInputElement = select("input[name='name']");
  const mailfield:HTMLInputElement  = select("input[name='mail']");
  const msgfield:HTMLTextAreaElement = select("textarea[name='comment']");

  if (namefield.value == "") return false;
  if (mailfield.value == "") return false;
  if (msgfield.value == "") return false;

  return true;
}

/** Builds and shows the overlay. */
function openNav(name:string, github:string, mail:string, ig:string):void {
  // get the content fields
  // children: [0] = svg [1] = text(p)
  let github_div:HTMLDivElement = select("#ov-github");
  let mail_div:HTMLDivElement = select("#ov-mail");
  let ig_div:HTMLDivElement = select("#ov-ig");
  let overlay:HTMLDivElement = select("#overlay");
  
  overlay.style.width = "100%"; // display it on the page

  select("#ov-name").textContent = name; // set the name

  if (github != null) { // set the github account
    github_div.style.display = "flex";
    github_div.children[1].textContent = github;
    github_div.attributes[1].value = "https://www.github.com/" + github;
  } else {
    github_div.style.display = "none";
  }

  if (mail != null) { // set the mail address
    mail_div.style.display = "flex";
    mail_div.children[1].textContent = mail;
    mail_div.attributes[1].value = "mailto:" + mail;
  } else {
    mail_div.style.display = "none";
  }

  if (ig != null) { // set the instagram account
    ig_div.style.display = "flex";
    ig_div.children[1].textContent = name;
    ig_div.attributes[1].value = ig;
  } else {
    ig_div.style.display = "none";
  }
}

/** Closes the overlay. */
function closeNav():void {
  let overlay:HTMLDivElement = select("#overlay");
  overlay.style.width = "0";
}

/** Submit form data */
async function SubmitData() {
  if (!checkSend()) {
    alert("Preencha todos os campos.");
    return false;
  };

  select(".lds-ring").style.display = "inline-block";
  const namefield:HTMLInputElement = select("input[name='name']");
  const mailfield:HTMLInputElement  = select("input[name='mail']");
  const msgfield:HTMLTextAreaElement = select("textarea[name='comment']");
  
  // package my data
  const data = {
    name: namefield.value,
    email: mailfield.value,
    message: msgfield.value
  };
  
  // set up request parameters
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  
  // fetch the request
  const request = await fetch("https://tf-landingpage.glitch.me/api", options);
  const recieve = await request.json();
  
  console.log(recieve);
  alert("Enviado com sucesso");
  select(".lds-ring").style.display = "none";
}

/**  Attach a listener to the send form button. */
select("#send").addEventListener("click",  (event) => {
  event.preventDefault()
});
