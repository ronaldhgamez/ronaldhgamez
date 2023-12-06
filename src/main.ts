import './styles/style.css'
import './styles/appereanceButtom.css'
import './styles/bodyStyles.css'
import './styles/mobileHeader.css'
import './styles/languageMenu.css'

// Set the HTML content to the desired element

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <div class="container">
    <!-- My title and logo -->
    <div class="title">
      <img width="50" height="50" src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/SourceCodeIcon.png"/>
      <a><span>{</span>Ronaldhg<span>}</span></a>
    </div>
    <!-- [Header displayed for web users] -->
    <div class="webHeaderContent">
      <nav class="navBarMenu">
        <a class="navOption"><span>Home</span></a>
        <a class="navOption"><span>About Me</span></a>
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
            <a class="navOption" href="/ronaldhgamez/"><span>Home</span></a>
            <a class="navOption"><span>About Me</span></a>
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

document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
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
    <div class="projectElement">
      <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png" />
      <article class="projectArticle">
        <h1>Titulo del proyecto</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt. Fusce euismod, velit id bibendum cursus.</p>
      </article>
    </div>
    <div class="projectElement">
      <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png" />
      <article class="projectArticle">
        <h1>Titulo del proyecto</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at dapibus commodo. Vivamus quis nisl id justo ultrices tincidunt. Fusce euismod, velit id bibendum cursus.</p>
      </article>
    </div>
  </section>
`
// <img src="https://raw.githubusercontent.com/ronaldhgamez/files-and-images/main/portafolio/WebProject.png" />
// https://www.weebly.com/?c=mkt_w_chnl:aff_geo:all_prtnr:sas_subprtnr:2841123_camp:brand_adtype:txtlnk_ag:weebly_lptype:pdsite_var:366125&sscid=b1k7_14dcs8&utm_source=ShareASale