# Tech Blog
[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
This is an original full-stack application for a tech blog/forum. This application utilizes Sequelize, Express, bcrypt as well as the Handlebars template engine to access the MySQL database and present the user with a rich, fun experience while visiting the blog. 

The deployed application can be located at: https://answer42blog.herokuapp.com/

### Features
* The site is responsive and the navbar menu condenses to a hamburger-style menu on medium and smaller size displays
* A custom favicon of the legendary Babelfish is displayed in the browser tab
* Posts are displayed on the home page, most recent at the top, and post details can be accessed by clicking the title of the post
* Individual post details are displayed with associated comments. If logged in, the user can post a new comment. If not logged in, they're instructed to log in to be able to comment
* New posts can be made by users with an active session by clicking on the floating New Post button that appears in the bottom right of every screen. 
    * If a user is not logged in, they're prompted to log in or sign up before posting. 
* User Login/Signup is provided in a simple fashion
* Once logged in, the user can also view posts that they've made in the Dashboard, and have the option to Edit or Delete them
    * When deleting, the user is prompted with a message asking them to confirm that they would like to delete the post forever
* New posts and edited posts feature a character counter to let the user know how many more characters they can type within the given field
* Once edited, a post displays an *(edited)* tag next to the title
* When logging out, the user is presented with an attractive "Goodbye" message that also displays a typewriter effect saying "Logging off..."
* Sessions are set to end after 45 minutes


## Installation Instructions
To install this application, please follow the below instructions:  
1.  Clone or download .zip file from Github to your local computer
2.  In Git Bash or Terminal, type `npm install` to install the necessary modules
3.  Copy the content from `schema.sql` and paste into your favorite SQL GUI or MySQL CLI shell to create the database
4.  Update the information in `.env.EXAMPLE` with your username (root is default) and password and rename the file as `.env`
5.  Type `npm run seed` in your terminal to seed the database
6.  When ready, type `npm start` in your terminal to launch `server.js`
7.  Navigate to `localhost:3001` or, if a different port is specified in your `.env` file, use that port

## Usage
Use this to have a personalized blog site with functionality for contributors

## License 
This project is licensed under the MIT License. Click the link below to learn more about how you can use this project.  
License: [MIT License](https://opensource.org/licenses/MIT)

## Contributors
Many thanks to those that contributed to this project:
* Mim Armand
* Stephen Simone
* Jay Yousef
* And last, but not least - *Grogu*  
![Image of Grogu](./assets/images/grogu.png)

## Questions
### Questions or issues?  
Questions or issues should be raised either by emailing the developer at the links below or creating an Issue within Github using the Issues button at the top of the repository
### To contact me:
* Github: [cbmartinez42](https://github.com/cbmartinez42)  
* Email: [cbmartinez42@gmail.com](mailto:cbmartinez42@gmail.com)