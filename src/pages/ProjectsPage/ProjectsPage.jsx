import React from 'react'
import './projectspage.css'


const ProjectsPage = () => {
  return (
    <div>
        <h1>Projects</h1>
        <div>
            <h2>ABC Flash Cards</h2>
            <p>Flash card game for parents and children to help young children identify their alphabet.</p>
            <li>
            •	Utilized HTML, CSS, and JavaScript.
            </li>
            <li>
            •	Created program interface using JavaScript DOM manipulation.
            </li>
            <li>
            •	Deployed application using GitHub.
            </li>

            
        <button><a href='https://chelsaed.github.io/abc_flash_card_game/'>ABC Flash Cards</a></button>
          
           </div>
           <br>




           </br>
        <div>
            <h2>My Daily Affirmations</h2>
            <p>Full-stack CRUD application designed as a platform for users to share their daily affirmations and see their affirmation listed with affirmations from other users. </p>
            <li>
            •	Made RESTful API fetch calls to an Express, Mongoose, EJS, and Node.js backend handling all create, read, update, delete (CRUD) operations, and tested all backend routes during development using Postman.
            </li>
            <li>
            •	Deployment via Heroku.
            </li>
            
            <button><a href='https://my-daily-affirmations.herokuapp.com/affirmations'>My Daily Affirmations</a></button>
            </div> 
            <br>



           
           </br>
        <div>  
        <h2>Comical</h2>  
        <p> Group project created to host users comic book collections and allows user to view other users comic book collection. </p>
            <li>
            •	Utilized React-Router 
            </li>
            <li>
            •	Backend was created using JavaScript, Typescript, MongoDB, Mongoose, Node.js, Express.js.
            </li>
            <li>
            •	Styled and created the visual aspects using HTML and CSS.
            </li>  
            <li>
            •	Wireframed and planned UI design of application using Bootstrap.
            </li>  
            <li>
            •	Tested API routes using Postman to ensure functionality during production. 
            </li>  
            <li>
            •	Utilized Git control during the production of the application with frequent commits until deployment.
            </li>
        <button><a href='https://code-maniacs-comical.herokuapp.com/'>Comical</a></button>
        </div> 
    </div>
  )
}

export default ProjectsPage