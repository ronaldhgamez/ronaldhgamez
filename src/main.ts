import './styles/style.css'
import './styles/icon_style.css'
import './styles/bodyStyles.css'

// Set the HTML content to the desired element

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <div class="container">
      <div class="title"><a>{dev|Ronaldhg}</a></div>
      <div class="content">
        <nav class="navBarMenu">
          <a class="link"><span>About</span></a>
          <a class="link"><span>Config</span></a>
          <a class="link"><span>Plugin</span></a>
          <a class="link"><span>Resources</span></a>
        </nav>

        <div class="hundredpx">
          <div>
            <input type="checkbox" id="switch" />
            <div class="switch-btn">
              <label for="switch">
                <div class="icons">
                  <img src="https://raw.githubusercontent.com/ronaldhgamez/portafolio/main/src/moon-icon.png" alt="moon icon" />
                  <img src="https://raw.githubusercontent.com/ronaldhgamez/portafolio/main/src/sun-icon.png" alt="sun icon" />
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="navBarExtra">
          <!--button id="toggle">...</!--button-->
          <div class="menu"></div>
        </div>
        
      </div>
    </div>
  </header>
  
  <div></div>

`


// https://www.weebly.com/?c=mkt_w_chnl:aff_geo:all_prtnr:sas_subprtnr:2841123_camp:brand_adtype:txtlnk_ag:weebly_lptype:pdsite_var:366125&sscid=b1k7_14dcs8&utm_source=ShareASale