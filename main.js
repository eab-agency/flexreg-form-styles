import './styles/styles.scss'
import appilyLogo from './images/appily-logo-horizontal-black.svg'

document.querySelector('#app').innerHTML = `
<main>
  <div class="container">
    <div class="progress">1 / 12</div>
    <h2>The next step in my educational journey is earning a degree related...</h2>
    <ul class="options">
      <li><label><input type="radio" name="degree"><span> Undergraduate degree</span></label></li>
      <li><label><input type="radio" name="degree"><span> Master's degree</span></label></li>
      <li><label><input type="radio" name="degree"><span> Professional doctorate or PhD</span></label></li>
      <li><label><input type="radio" name="degree"><span> Undergraduate degree, as a transfer student</span></label></li>
      <li><label><input type="radio" name="degree"><span> I want to earn a degree that's not in education</span></label></li>
      <li><label><input type="radio" name="degree"><span> I'm not interested in a degree right now</span></label></li>
    </ul>
    <button class="button btn-primary">
      <div class="btn-content">
        <span class="btn-label">Next</span>
      </div>
    </button>
    <figure class="appily-logo">
      <img src="${ appilyLogo }" alt="Appily Advance logo" />
    </figure>
  </div>
</main>
  <footer class="page-footer">
      <p>Terms and Conditions · Privacy Policy · California Privacy Notice · Do Not Sell or Share My Personal Information · Privacy Preferences</p>
    </footer>
`
