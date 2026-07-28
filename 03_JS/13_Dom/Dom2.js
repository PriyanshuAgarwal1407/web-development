/*
// Creating a New Element: document.createElement()
let newElement = document.createElement("h2");
console.log(newElement);  // <h2></h2>

newElement.textContent = "New Heading";
newElement.id = "newHeading";
console.log(newElement);  // <h2 id="newHeading">New Heading</h2>

newElement.className = "fruit-heading";
console.log(newElement);  // <h2 id="newHeading" class="fruit-heading">New Heading</h2>


// Selecting the existing element
const parentElement = document.getElementById("parent");

// Insert the new element after #parent
parentElement.after(newElement);
// parentElement.before(newElement);



const newElement2 = document.createElement("h3");
newElement2.textContent = "New Subheading";
newElement2.id = "newSubheading";

// newElement2.className = "fruit-subheading";
// newElement2.className += " fruit-subheading2";

newElement2.classList.add("fruit-subheading");
newElement2.classList.add("fruit-subheading2");

console.log(newElement2);   // <h3 id="newSubheading" class="fruit-subheading">New Subheading</h3>


// Css
// newElement2.style.color = "blue";
// newElement2.style.fontSize = "20px";
// newElement2.style.fontFamily = "Arial, sans-serif";
// newElement2.style.textAlign = "center";
newElement2.setAttribute("style", "color: blue; font-size: 20px; font-family: Arial, sans-serif; text-align: center;");

newElement.after(newElement2);  // <h3 id="newSubheading" class="fruit-subheading fruit-subheading2" style="color: blue; font-size: 20px; font-family: Arial, sans-serif; text-align: center;">New Subheading</h3>


console.log(newElement2.getAttribute("class")); // fruit-subheading fruit-subheading2
console.log(newElement2.getAttribute("style")); // color: blue; font-size: 20px; font-family: Arial, sans-serif; text-align: center;
*/


// const listing = document.getElementById("listing");

// const list = document.createElement("li");
// list.textContent = "Milk";
// listing.append(list);  // <ul id="listing"><li>Milk</li></ul>

// const list2 = document.createElement("li");
// list2.textContent = "Eggs";
// listing.append(list2);  // <ul id="listing"><li>Milk</li><li>Eggs</li></ul>

// const list3 = document.createElement("li");
// list3.textContent = "Bread";
// listing.prepend(list3);  // <ul id="listing"><li>Bread</li><li>Milk</li><li>Eggs</li></ul>

// const list4 = document.createElement("li");
// list4.textContent = "Butter";
// listing.insertBefore(list4, list2);  // <ul id="listing"><li>Bread</li><li>Milk</li><li>Butter</li><li>Eggs</li></ul>

// const list5 = document.createElement("li");
// list5.textContent = "Cheese";
// listing.replaceChild(list5, list4);  // <ul id="listing"><li>Bread</li><li>Milk</li><li>Cheese</li><li>Eggs</li></ul>


// listing.children[1].after(list4);  // <ul id="listing"><li>Bread</li><li>Milk</li><li>Butter</li><li>Cheese</li><li>Eggs</li></ul>




const arr = ["Milk", "Eggs", "Bread", "Butter", "Cheese"];
const listing = document.getElementById("listing");

// for(let food of arr){
//     // console.log(food);
//     const list = document.createElement("li");
//     list.textContent = food;
//     listing.append(list);
// }


// Using Document Fragment - It is a lightweight container that can hold multiple nodes. It is not part of the main DOM tree, so appending elements to it does not trigger reflows or repaints in the browser. Once all elements are added to the fragment, it can be appended to the DOM in a single operation, which is more efficient than appending each element individually.
const fragment = document.createDocumentFragment();
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

listing.append(fragment); 



const head = document.getElementById("heading");
head.remove();  // <h1 id="heading">This is the heading.</h1> will be removed from the DOM




// innerHtml is not recommended to use because it can lead to security vulnerabilities (like XSS attacks) if you're inserting user-generated content. It also can be less efficient than creating elements and appending them, especially for larger DOM manipulations. However, it is still widely used for its simplicity and ease of use in many scenarios.
