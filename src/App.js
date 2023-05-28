import './App.css';

import reactLogo from './resources/react-logo.svg';
import profilePicture from './resources/profile_1.jpg';
import angularLogo from './resources/angular-logo.svg';
import resumePDF from './resources/MakiyamaMay2023.pdf';
import netLogo from './resources/microsoft-net-logo.svg';
import mongoLogo from './resources/mongo-db-logo.svg';
import smileyLogo from './resources/smiley-placeholder.svg';
import azureLogo from './resources/microsoft-azure-logo.svg';
import gcpLogo from './resources/google-cloud-icon.svg';


function App() {
  return (
    <div className="App">
      <header class="wrapper">
        <div class="header">
          <span class="header-text">Welcome to <a href="/">Koji's React web-app&nbsp;</a>
            <img class="react-spin angular-react-logo" src={reactLogo} alt="react-logo"/>!</span>
          <hr />
          <span>My name is Alexander <u>Koji</u> Makiyama and I am a full stack developer 💻.</span>
          <h6>Email: <a href="mailto: alexanderkojimakiyama@gmail.com">alexanderkojimakiyama@gmail.com</a>
          </h6>
          <h6>Special thanks to <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a> for hosting my Angular
            web-app for free on their cloud server!</h6>
        </div>
      </header>

      <div class="mobile-img-container">
        <img class="mobile-picture" src={profilePicture} alt="profile" />
        <br />
      </div>

      <div class="img-container-wrapper">
        <div class="img-container">
          <img class="profile-picture" src={profilePicture} alt="profile" />
        </div>
        <div class="text-container">
          <p>Click <a href="https://koji-makiyama.github.io/">here</a> for the Angular version <img class="angular-react-logo"
            src={angularLogo} alt="angular-logo" /> of this website!</p>
          <p id="span-violet">Click <a href={resumePDF} download>here</a> to download my
            resume (PDF).</p>
          <p id="span-green">Click <a href="https://www.linkedin.com/in/alexander-koji-makiyama-842535224/"
            target="_blank" rel="noreferrer">here
          </a> to visit my LinkedIn profile (new tab)</p>
          <p id="span-grey">Click <a href="https://github.com/Koji-Makiyama" target="_blank" rel="noreferrer">here
          </a> to visit my GitHub profile (new tab)<br /><br /></p>
        </div>
      </div>
      <br />

      <div class="demo-container">
        <div id="div-purple"><br />My Demo's (Github Repositories)</div>
        <hr />
        <a href="https://github.com/Koji-Makiyama/Koji-Makiyama.github.io" target="_blank" rel="noreferrer">
          <img class="angular-react-logo" src={angularLogo} alt="angular-logo" />
          TypeScript & Angular framework demo<br /></a><br />
        <a href="https://github.com/Koji-Makiyama-React/Koji-Makiyama-React.github.io" target="_blank" rel="noreferrer">
          <img class="react-spin angular-react-logo" src={reactLogo} alt="react-logo"/>
          TypeScript & React framework demo<br /></a><br />
        <span>
          <img class="tech-logo" src={netLogo} alt="dot-net-logo"/>
          C & .NET framework demo (WIP)<br /></span><br />
        <a href="https://github.com/Koji-Makiyama/JavaBackendDemo" target="_blank" rel="noreferrer">
          <img class="mongo-azure-logo" src={mongoLogo} alt="mongodb-logo" />
          Java, Spring, and MySQL/NoSQL demo (WIP)<br /></a><br />
        <span>
          <img class="tech-logo" src={smileyLogo} alt="placeholder-logo" />
          AWS (Amazon Web Services) demo (WIP)<br /></span><br />
        <span>
          <img class="mongo-azure-logo" src={azureLogo} alt="azure-logo" />
          Azure Cloud & AKS (Microsoft) demo (WIP)<br /></span><br />
        <span class="last-anchor">
          <img class="tech-logo" src={gcpLogo} alt="gcp-logo" />
          GCP (Google Cloud Platform) demo (WIP)<p></p>
          <hr />
        </span>

      </div>
      <br />
      <br />
      <div class="footer">
        <ul>
          <li>Example Copyright Text 2023</li>
          <li><a href="https://github.com/Koji-Makiyama-React/Koji-Makiyama-React.github.io" target="_blank" rel="noreferrer"><br/>View this app's code
            on my Github page</a></li>
          <li>
            <span id="logo-copyright-text"><br/>Logo copyright notice: I neither own or am affiliated with any of the
              companies
              whose logo's are displayed here. I am simply using logos which are either in
              Creative Commons/Public Domain (
              <a href="https://commons.wikimedia.org/wiki/File:Angular_full_color_logo.svg"
                target="_blank" rel="noreferrer">Angular</a>,
              <a href="https://commons.wikimedia.org/wiki/File:React-icon.svg" target="_blank" rel="noreferrer">React</a>,
              <a href="https://commons.wikimedia.org/wiki/File:Microsoft_.NET_logo.png" target="_blank" rel="noreferrer">.NET</a>,
              <a href="https://commons.wikimedia.org/wiki/File:Microsoft_Azure_Logo.svg" target="_blank" rel="noreferrer">Azure</a>,
              <a href="https://commons.wikimedia.org/wiki/File:Google_Cloud_logo.svg" target="_blank" rel="noreferrer">GCP</a>) or are
              allowed
              with proper attribution (
              <a href="https://commons.wikimedia.org/wiki/File:MongoDB_Logo.svg" target="_blank" rel="noreferrer">MongoDB, Inc.</a>).
              Because AWS has copyrights in place for their logo, I am filling the gap with a creative commons placeholder icon (
              <a href="https://commons.wikimedia.org/wiki/File:010-smiling-face-with-smiling-eyes.svg"
                target="_blank" rel="noreferrer">smiley</a>).
              <span>For reference, WIP means 'work in progress'.</span>
            </span>
          </li>
        </ul>
      </div>


    </div>
  );
}

export default App;
