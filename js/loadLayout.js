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

// Background Music Setup
function setupBackgroundMusic() {
  // Check if audio element already exists
  let bgMusic = document.getElementById("bg-music");
  
  if (!bgMusic) {
    // Create audio element
    bgMusic = document.createElement("audio");
    bgMusic.id = "bg-music";
    bgMusic.src = "../assets/bg_song.mp3";
    bgMusic.loop = true;
    bgMusic.volume = 0.5; // Set volume to 50%
    bgMusic.preload = "auto";
    
    // Hide the audio element (optional, for cleaner DOM)
    bgMusic.style.display = "none";
    
    // Append to body
    document.body.appendChild(bgMusic);
    
    // Restore playback position from localStorage
    const savedTime = localStorage.getItem("bgMusicTime");
    if (savedTime) {
      bgMusic.currentTime = parseFloat(savedTime);
    }
    
    // Try to play automatically
    bgMusic.play().catch(error => {
      // Autoplay was prevented - this is normal in modern browsers
      // Music will start when user interacts with the page
      console.log("Autoplay prevented. Music will start on user interaction.");
    });
    
    // Save playback position periodically
    setInterval(() => {
      if (!bgMusic.paused) {
        localStorage.setItem("bgMusicTime", bgMusic.currentTime.toString());
      }
    }, 1000); // Save every second
    
    // Save position before page unload
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("bgMusicTime", bgMusic.currentTime.toString());
      localStorage.setItem("bgMusicPlaying", !bgMusic.paused);
    });
    
    // Restore playing state if it was playing
    const wasPlaying = localStorage.getItem("bgMusicPlaying") === "true";
    if (wasPlaying) {
      bgMusic.play().catch(() => {
        // If autoplay fails, try again on first user interaction
        const playOnInteraction = () => {
          bgMusic.play().catch(() => {});
          document.removeEventListener("click", playOnInteraction);
          document.removeEventListener("touchstart", playOnInteraction);
        };
        document.addEventListener("click", playOnInteraction);
        document.addEventListener("touchstart", playOnInteraction);
      });
    }
    
    // Try to resume on any user interaction if it was playing
    if (wasPlaying) {
      const resumeOnInteraction = () => {
        if (bgMusic.paused) {
          bgMusic.play().catch(() => {});
        }
        document.removeEventListener("click", resumeOnInteraction);
        document.removeEventListener("touchstart", resumeOnInteraction);
        document.removeEventListener("keydown", resumeOnInteraction);
      };
      document.addEventListener("click", resumeOnInteraction);
      document.addEventListener("touchstart", resumeOnInteraction);
      document.addEventListener("keydown", resumeOnInteraction);
    }
  } else {
    // If audio element already exists, just try to play it
    const savedTime = localStorage.getItem("bgMusicTime");
    if (savedTime) {
      bgMusic.currentTime = parseFloat(savedTime);
    }
    
    const wasPlaying = localStorage.getItem("bgMusicPlaying") === "true";
    if (wasPlaying && bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  }
}

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
  
  // Setup background music
  setupBackgroundMusic();
})();
