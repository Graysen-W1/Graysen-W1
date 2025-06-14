document.addEventListener("DOMContentLoaded", () => {
    // Document is ready
    console.log("hello console!");
    addExampleBlogEntry();
    setStandardCookie();
    displayUserProfile();
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