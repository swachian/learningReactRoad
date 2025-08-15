// https://github.com/Asabeneh/30-Days-Of-React/blob/master/03_Day_Setting_Up/03_setting_up.md
// import * as React from 'react';
import './App3.css'
import profile from './images/profile.png'




function App() {
  
  const app = (
    <div class="container">
      <Profile></Profile>
      <Skills></Skills>
      <Foot></Foot>
    </div>
  )
  return app
}

function Profile() {
  return (
    <div class="profile">
      <img src={profile} alt="profile" />
      <div class="name">Asabeneh Yetayeh</div>
      <div class="title">Senior Developer, Finland</div>
    </div>
  )
}

function Skills() {
  const frontendSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Angular',
  'Svelte',
  'Next.js',
  'Nuxt.js',
  'Redux',
  'Vuex',
  'Pinia',
  'Webpack',
  'Vite',
  'Rollup',
  'ES6+',
  'Node.js',
  'Express',
  'RESTful API',
  'GraphQL',
  'WebSocket',
  'Jest',
  'Cypress',
  'Playwright',
  'Git',
  'Responsive Design',
  'CSS-in-JS (Styled-components)',
  'Tailwind CSS',
  'Figma/Adobe XD'
];
  return (
    <div class="skills">
      <p >SKILLS</p>
      <div class="skillbuttons">
        {frontendSkills.map(x => (
          <div key={x} class="skill">
            {x}
          </div>))}
      </div>
    </div>
  )
}

function Foot() {
  return (
    <div class="foot">
      Joined On Aug 30, 2020
    </div>
  )
}


export default App
