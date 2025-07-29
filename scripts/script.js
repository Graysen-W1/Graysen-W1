document.addEventListener("DOMContentLoaded", () => {
    // Document is ready
    console.log("hello console!");
    checkCookie();
    addExampleBlogEntry();
    loadDataFromServer();
  });

function addExampleBlogEntry() {
    const blogEntries = document.getElementById('blog-entries');
    if (blogEntries) {
        const entry = document.createElement('div');
        entry.className = 'blog-entry';
        entry.innerHTML = `
        <h5 class="blog-title"><i class="bi bi-pencil-square"></i>Experimenting with JavaScript Functions</h5>
        <p>Lately, I have been tinkering with JavaScript functions. For instance, this blog post is an example of me attempting to implement a dynamic mutated dom blog post. Making progress lol!</p>
        `
        blogEntries.prepend(entry);
    }
}

const btnClicky = document.getElementById('btnClicky');
btnClicky.addEventListener('click', ()=> {
//get all dom elements with a class name (an array) and step through each one
 document.querySelectorAll('.secret-fact').forEach(el => {
  el.style.transform ='rotate(13deg)';
    }); 
});

// functions for cookies - source from https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

// Load in JSON data
// source: https://www.w3schools.com/js/js_api_fetch.asp
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// source: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
function loadDataFromServer() {
fetch('https://graysen-W1.github.io/Blog-Data/blog-entries.json')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.devBlogEntries.length; i++) {
        document.getElementById('blog-entries').innerHTML += `
        <div class="blog-entry">
            <h4 class="blog-title"><i class="bi bi-pencil-square"></i>${data.devBlogEntries[i].title}</h4>
            <p>${data.devBlogEntries[i].text}</p>
            <small class="text-muted" style="padding-left: 15px; display: block; margin-top: 10px;">Date: ${data.devBlogEntries[i].date} | Topic: ${data.devBlogEntries[i].topic} | Author: ${data.devBlogEntries[i].author}</small>
        </div>
        `;
    }
});
}
