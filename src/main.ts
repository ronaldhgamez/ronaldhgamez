import './styles/style.css'
import './styles/appereanceButtom.css'
import './styles/bodyStyles.css'
import './styles/mobileHeader.css'
import './styles/languageMenu.css'
import './styles/aboutme.css'


document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <div class="container">
    <!-- My title and logo -->
    <div class="title">
      <img width="40" height="40" src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/SourceCodeIcon.png"/>
      <a><span>{</span>Ronaldhg<span>}</span></a>
    </div>
    <!-- [Header displayed for web users] -->
    <div class="webHeaderContent">
      <nav class="navBarMenu">
        <a id="homeTab" class="navOption"><span>Home</span></a>
        <a id="aboutMeTab" class="navOption"><span>About Me</span></a>
        <a class="navOption"><span>Download CV</span></a>
      </nav>
      
      <!-- Language Selection --> 
      <div class="navBarTranslations">
        <button type="button" class="button" aria-haspopup="true" aria-expanded="false" aria-label="Change language">
          <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/svg/translate.svg" alt="translate svg" width="20" height="20">
          <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/svg/downArrow.svg" alt="down arrow svg" width="20" height="20">
        </button>
        <!-- Hiddend Menu Language -->
        <div class="menuLanguages floatingMenu">
          <div class="menuItems">
              <p class="selectedLanguage">English</p>
              <div class="language">
                <a class="link" href="" target="_blank" rel="noreferrer">Español</a>
              </div>
              <div class="language">
                <a class="link" href="" target="_blank" rel="noreferrer">Portugues</a>
              </div>
              <div class="language">
                <a class="link" href="" target="_blank" rel="noreferrer">English</a>
              </div>
          </div>
        </div>
      </div>

      <!-- Theme Mode Selection --> 
      <div class="navBarAppereance">
        <input type="checkbox" id="switch" />
        <div class="switch-btn">
          <label for="switch">
            <div class="icons">
              <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/moon-icon.png" alt="moon icon" />
              <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/sun-icon.png" alt="sun icon" />
            </div>
          </label>
        </div>
      </div>
      
    </div>

    <!-- [Header displayed for mobile] -->
    <div class="mobileHeaderContent">
      <!-- Hamburger menu -->
      <div class="navBarHamburger">

        <input type="checkbox" id="hamburgerCheckbox">
        <label class="checkboxICons" for="hamburgerCheckbox">
          <i class="menuIcon material-icons">menu</i> 
          <i class="closeIcon material-icons">close</i>
        </label>
        
        <!-- Floating menu -->
        <div class="mobileNavMenu">
          <nav class="mobileNavOptions">
            <a id="homeTab" class="navOption"><span>Home</span></a>
            <a id="aboutMeTab" class="navOption"><span>About Me</span></a>
            <a class="navOption"><span>Language</span></a>
            <a class="navOption"><span>Download CV</span></a>
          </nav>

          <div id="appereanceDiv">
            <span class="navOption">Theme</span>
          </div>

          <!-- Contact Icons -->
          <div class="iconContainer">
            <!-- Linkedin Icon Link -->
            <a class="contactIcons" href="https://www.linkedin.com/in/ronaldhgamez/" aria-label="linkedin" target="_blank" rel="noopener">
              <img 
                alt="Linkedin Link" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/c634ec3e23d28e41ffe0a060bcfdd32855894947/svg/linkedin.svg"
              />
            </a>  
            <!-- Github Icon Link -->
            <a class="contactIcons" href="https://github.com/ronaldhgamez" aria-label="github" target="_blank" rel="noopener">
              <img 
                alt="GitHub Link" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/c634ec3e23d28e41ffe0a060bcfdd32855894947/svg/github.svg"
              />
            </a>
            
            <a class="color-icon" href="mailto:ronaldhgamez@gmail.com">
              <img
                alt="Gmail icon contact" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/9db667a770ed44caed4542851cf3c46d9851f4cc/svg/gmail.svg"
              />
            </a>

            <!-- WhatsApp Icon Link -->
            <a class="color-icon" href="https://wa.me/50664178996" aria-label="whatsapp" target="_blank" rel="noopener">
              <img 
                alt="Chat on WhatsApp" 
                src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/c634ec3e23d28e41ffe0a060bcfdd32855894947/svg/whatsapp.svg"
              />
            </a>
          </div> <!-- End Contact Icons -->
        </div> <!-- End Floating menu -->
      </div> <!-- End Hamburger menu -->
    </div>
  </div>
`

function selectTab(tabSelected: string) {
  document.querySelector<HTMLDivElement>('#main')!.innerHTML = tabSelected;
}

const homeTab: string = `
  <section class="projectsContainer">
    <div class="projectElement">
      <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/ConnectFour.png"/>
      <article class="projectArticle">
        <h1>Connect Four Game</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt. </p>
      </article>
    </div>
    <div class="projectElement">
      <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png" />
      <article class="projectArticle">
        <h1>Titulo del proyecto</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt. </p>
      </article>
    </div>
    <div class="projectElement">
      <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png" />
      <article class="projectArticle">
        <h1>Titulo del proyecto</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. </p>
      </article>
    </div>
  </section>
`

const aboutMeTab: string = `
  <div id="aboutContainer">
    <h1 class="aboutTitle">About Me</h1>
    <div class="aboutContent">
      <main class="contentMain">
        <p class="paragraph">
          Computing engineer passionate about building full-stack applications with strong skills in UI/UX, ensuring that applications are functional and intuitive. Additionally, I specialize in building server-side applications using Node.js or Python.
        </p>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </main>
      <aside class="contentAside">
        <div class="asideContainer">
          <img src="https://avatars.githubusercontent.com/u/66141333?v=4" alt="" width="200">
        </div>
        <div class="asideContainer">
          <div class="asideInfo">
            <h2>Ronald Herrera Gámez</h2>
            <p>
              <svg fill="orange" width="10px" height="10px" viewBox="0 0 395.71 395.71">
                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
              </svg>
              Alajuela, Costa Rica
            </p>
            <p></p>
          </div>
        </div>
      </aside>
    </div>
  </div>
`

selectTab(homeTab);

// Attach click event listeners
document.getElementById("homeTab")!.addEventListener("click", () => selectTab(homeTab));

document.getElementById("aboutMeTab")!.addEventListener("click", () => selectTab(aboutMeTab));
