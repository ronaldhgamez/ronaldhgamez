import './styles/style.css'
import './styles/icon_style.css'
import './styles/bodyStyles.css'
import './styles/header.css'

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
        <div class="navBarHamburger">
          <input type="checkbox" id="toggleCheckbox">
          <label for="toggleCheckbox" class="navBarHamburger">
            <i class="menuIcon material-icons">menu</i>
          </label>
          <!-- <i class="closeIcon material-icons">close</i> -->
        </div>
        <!-- Floating menu -->
        <div id="mobileNavMenu">
            <nav class="mobileNavOptions">
              <a class="navOption"><span>Home</span></a>
              <a class="navOption"><span>About Me</span></a>
              <a class="navOption"><span>Language</span></a>
              <a class="navOption"><span>Theme</span></a>
              <a class="navOption"><span>Download CV</span></a>
            </nav>
          </div>
      </div>

    </div>
  </header>
  
  <div></div>

`


// https://www.weebly.com/?c=mkt_w_chnl:aff_geo:all_prtnr:sas_subprtnr:2841123_camp:brand_adtype:txtlnk_ag:weebly_lptype:pdsite_var:366125&sscid=b1k7_14dcs8&utm_source=ShareASale