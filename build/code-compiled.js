var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
/** Submit form data */
function SubmitData() {
    return __awaiter(this, void 0, void 0, function () {
        var namefield, mailfield, msgfield, data, options, request, recieve;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    namefield = select("input[name='name']");
                    mailfield = select("input[name='mail']");
                    msgfield = select("textarea[name='comment']");
                    data = {
                        name: namefield.value,
                        email: mailfield.value,
                        message: msgfield.value
                    };
                    options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    };
                    return [4 /*yield*/, fetch("https://tf-landingpage.glitch.me/api", options)];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    recieve = _a.sent();
                    console.log(recieve);
                    alert("Enviado com sucesso");
                    return [2 /*return*/];
            }
        });
    });
}
/**  Attach a listener to the send form button. */
select("#send").addEventListener("click", function (event) {
    event.preventDefault();
    if (!checkSend())
        alert("Preencha todos os campos.");
});
