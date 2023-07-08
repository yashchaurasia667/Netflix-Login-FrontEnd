let coll = document.getElementsByClassName("collapsible");

console.log(coll.length);
console.log(coll[0]);

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");                    //adds an 'active' class to the tag 
    var content = this.nextElementSibling;              // gets the next element in the same tree level
    if (content.style.maxHeight) {
      content.style.maxHeight = null;                   // hides or shows the content
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}