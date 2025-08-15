// https://github.com/Asabeneh/30-Days-Of-React/blob/master/03_Day_Setting_Up/03_setting_up.md
// import * as React from 'react';
import './App.css'
import html5Logo from './images/html5-original.svg'
import css3Logo from './images/css3-original.svg'
import javascriptLogo from './images/javascript-original.svg'
import reactLogo from './images/react-original.svg'


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

function App() {
  
  const level2_1 = ( 
    <div className="aa">
      <h1>Front End Technologies</h1>
      <div class="logos">
        <img src={html5Logo} />
        <img src={css3Logo} />
        <img src={javascriptLogo} />
        <img src={reactLogo} />

      </div>
    </div>
  )

  const level2_2 = ( 
    <div className="level2_2">
      <h1>SUBSCRIBE</h1>
      <div class="description">
        <p>Sign up with your email address to receive news and updates.</p>
      </div>
      <form action="/" method="POST">
        <div class="form">
          <div class="name">
            <input type="text" name="firstName" id="firstName" placeholder="First Name" />
            <input type="text" name="lastName" id="firstName" placeholder="Last Name" />
            <input type="email" name="email" id="firstName" placeholder="email"  />
          </div>
          <button type="submit">Submit</button>          

          

        </div>
      </form>
    </div>
  )
  const app = (
    <div>
      {level2_1}
      {level2_2}

    </div>
  )
  return app
}

export default App
