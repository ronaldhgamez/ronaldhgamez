import './styles/style.css'
import './styles/icon_style.css'
import './styles/bodyStyles.css'
import './styles/mobileHeader.css'

// Set the HTML content to the desired element

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <div class="container">
      <div class="title"><a>{dev|Ronaldhg}</a></div>
      <div class="webHeaderContent">
        <nav class="navBarMenu">
          <a class="navOption"><span>Home</span></a>
          <a class="navOption"><span>About Me</span></a>
          <a class="navOption"><span>Language</span></a>
          <a class="navOption"><span>Download CV</span></a>
        </nav>

        <div class="hundredpx">
          <div>
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
      </div>


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
              <a class="navOption" href="/"><span>Home</span></a>
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
                <img alt="Linkedin Link" src="/src/svg/linkedin.svg" />
              </a>  
              <!-- Github Icon Link -->
              <a class="contactIcons" href="https://github.com/ronaldhgamez" aria-label="github" target="_blank" rel="noopener">
                <img alt="GitHub Link" src="/src/svg/github.svg" />
              </a>
              
              <a class="color-icon" href="mailto:ronaldhgamez@gmail.com">
                <img src="/src/svg/gmail.svg"/>
              </a>

              <!-- WhatsApp Icon Link -->
              <a class="color-icon" href="https://wa.me/50664178996" aria-label="whatsapp" target="_blank" rel="noopener">
                <img alt="Chat on WhatsApp" src="/src/svg/whatsapp.svg" />
              </a>
            </div> <!-- End Contact Icons -->
          </div> <!-- End Floating menu -->
        </div> <!-- End Hamburger menu -->
      </div>

    </div>
  </header>
  
  <div></div>

`


// https://www.weebly.com/?c=mkt_w_chnl:aff_geo:all_prtnr:sas_subprtnr:2841123_camp:brand_adtype:txtlnk_ag:weebly_lptype:pdsite_var:366125&sscid=b1k7_14dcs8&utm_source=ShareASale