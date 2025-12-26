// Navbar HTML
const navbarHTML = `
<header>
  <div class="nav-container">
  <a href="./index.html">
    <h4 class="comfortaa">Iqlima Rojulaini</h4>
    </a>
    <nav>
        <div><a href="index.html">Home</a></div>
        <div><a href="about.html">About</a></div>
        <div><a href="gallery.html">Gallery</a></div>
        <div><a href="education.html">Education</a></div>
        <div><a href="contact.html">Contact</a></div>
    </nav>
  </div>
</header>

`;

// Footer HTML
const footerHTML = `

    <footer>
      <div class="nav-container flex-col gap-1">
        <div class="flex gap-2">
          <div class="flex flex-col flex-1 gap-1">
            <a href="./index.html">
              <h4 class="comfortaa">Iqlima Rojulaini</h4>
            </a>
            <div class="flex flex-col gap-025 flex-1">
              Student Details:
              <pre>Name: Iqlima Binti Rojulaini</pre>
              <pre>Student ID: 2023467144</pre>
              <pre>Class: KCDIM1105B</pre>
              <pre>Project TItle: IMD318 Individual Project</pre>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <div><a href="index.html">Home</a></div>
            <div><a href="about.html">About</a></div>
            <div><a href="gallery.html">Gallery</a></div>
            <div><a href="education.html">Education</a></div>
            <div><a href="contact.html">Contact</a></div>
          </div>

          <div></div>

        </div>
        <div class="border-t py-1">© 2025 – All Rights Reserved</div>
      </div>
    </footer>
    
    `;

// Inject into page
(function () {
  let headerPlaceholder = document.querySelector("#header-placeholder");
  let footerPlaceholder = document.querySelector("#footer-placeholder");

  if (!headerPlaceholder) {
    headerPlaceholder = document.createElement("div");
    headerPlaceholder.id = "header-placeholder";
    document.body.prepend(headerPlaceholder);
  }
  if (!footerPlaceholder) {
    footerPlaceholder = document.createElement("div");
    footerPlaceholder.id = "footer-placeholder";
    document.body.appendChild(footerPlaceholder);
  }

  headerPlaceholder.innerHTML = navbarHTML;
  footerPlaceholder.innerHTML = footerHTML;
})();
