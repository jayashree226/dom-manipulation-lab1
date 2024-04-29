let menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  // Declaring variables and changing Attributes
  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
  mainEl.className = "flex-ctr";
  
  // Declaring variables and changing Attributes
  const topMenuEl = document.querySelector("nav");
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.style.height = "100%";
  topMenuEl.className = "flex-around";
  
  // Declaring variables and changing Attributes
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.className = "flex-around";
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  // Looping though the array creating a elements,setting attributes to href and adding text plus apprend child element
  for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement("a");
    a.setAttribute("href", menuLinks[i].href);
    a.textContent = menuLinks[i].text;
    topMenuEl.appendChild(a);
  }
  // Declaring variable and pulling all anchor tags and assigning to the element
  const topMenuLinks = topMenuEl.querySelectorAll("a");
  
  console.log(topMenuEl);
  
  // Create a event listerner to active after clicking on a link to add interaction
  topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() !== "a") {
      return;
    }
    if (e.target.textContent == "about") {
      mainEl.innerHTML = "<h1>About</h1>";
    }
  
    console.log(e.target.textContent);
    // Looping though array
    topMenuLinks.forEach((i) => {
      if (e.target !== i) {
        i.classList.remove("active");
      }
    });
    // Having event obj to target to get a active
    e.target.classList.toggle("active");
    // Declaring and filting though text and linkd
    const menuLinkText = menuLinks.filter(
      (link) => link["text"] == e.target.textContent
    );
    console.log(menuLinkText[0].subLinks);
    //  Testing the event obj to see if is active and making sub menu attributes change
    if (e.target.classList.contains("active")) {
      subMenuEl.style.top = menuLinkText[0].subLinks ? "100%" : "0";
    }
    console.log(menuLinkText[0]);
  
    subMenuEl.innerHTML = "";
    // Looping though the array creating a elements,setting attributes to href and adding text plus apprend child element to sub menu
    if (menuLinkText[0].subLinks) {
      menuLinkText[0].subLinks.forEach((i) => {
        const subMenuText = document.createElement("a");
        subMenuText.textContent = i.text;
        subMenuText.setAttribute("href", i.href);
        subMenuEl.appendChild(subMenuText);
      });
    }
  });
  