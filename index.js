//===========Part 1: Getting Started ====================

// 1. Select and cache the <main> element in a variable named mainEl.
// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
      // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this;
      //pick whichever one that you think works best in this situation.
// 4. Add a class of flex-ctr to mainEl.
      // Hint: Use the Element.classList API.

document.title = 'DOM Manipulation';
const mainEl = document.querySelector('main');
//const topMenuEl = document.getElementById('top-menu');
mainEl.style.backgroundColor = 'var(--main-bg)';

const h1 = document.createElement('h1');
h1.textContent = "DOM Manipulation";
mainEl.appendChild(h1); // in main add child h1
mainEl.classList.add('flex-ctr');

console.log(mainEl);


//=============Part 2: Creating a Menu Bar ==================

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// 2. Set the height of the topMenuEl element to be 100%.
// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// 4. Add a class of flex-around to topMenuEl.

const topMenuEl = document.querySelector('nav');
topMenuEl.style.height ='100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around')

console.log(topMenuEl);

//===========Part 3: Adding Menu Buttons =================

// 1. Iterate over the entire menuLinks array and for each "link" object:
// 2. Create an <a> element.
// 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
// 4. Set the new element's content to the value of the text property of the "link" object.
// 5. Append the new element to the topMenuEl element.

const menuLinks = [
      {text: 'about', href: '/about'},
      
      {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
      ]},
      {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
      ]},
      {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
      ]},
    ];

  for(i=0 ; i< menuLinks.length ; i++){
    const a = document.createElement('a'); // anchor tag link
    a.setAttribute('href' , menuLinks[i].href );
    a.textContent = menuLinks[i].text;

    topMenuEl.appendChild(a);
   

  }

//=========================== DOM Manipulation (Part Two)=======================================

//==============Part 3: Creating the Submenu=========================

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
// 2. Set the height subMenuEl element to be "100%".
// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
// 4. Add the class of flex-around to the subMenuEl element.

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height ='100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

console.log(subMenuEl);

// Now, change the position of the submenu to temporarily hide it. 
// Later, we will make the submenu appear dynamically based on user interaction:

// 1. Set the CSS position property of subMenuEl to the value of absolute.
// 2.Set the CSS top property of subMenuEl to the value of 0.

// subMenuEl.style.position = "absolute";
// subMenuEl.style.top = "0";

console.log(subMenuEl);

//==================Part 4: Adding Menu Interaction============================================

// In order to add interaction:
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
// Log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener("click" , (el) =>{
  el.target.classList.toggle("active")
  el.preventDefault()
})


for(i=0 ; i< topMenuEl.length ; i++){
  const a = document.createElement('a'); // anchor tag link
  a.setAttribute('href' , topMenuEl[i].href );
  a.textContent = topMenuEl[i].text;

  subMenuEl = document.addEventListener(click, topMenuEl)
   subMenuElMenuEl.appendChild(a);

}
