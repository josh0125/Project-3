// Write a proposal of what you would like to do for Project 3.  It needs to be a React app, either with JavaScript or TypeScript,
// using any additional libraries of your choice.  In your project, demonstrate that you are capable of developing a business-oriented
// single-page application.  There should be some forms for user input along with whatever features your app provides.  It should be clean,
// beautiful, and professional in the design and user experience.  We are focusing on front-end development, so if you need a back-end
// server to store data, be careful and pick something that is easy to configure.  You could mock up the server aspect for the purposes
// of this project if you wish.  For example, you could read your "database" from a JSON file when the app launches and then save any
// updates the user made to that same JSON file when appropriate.  (In essence your "database" is just a JavaScript object cached in memory,
// read from and stored on disk.)

// It's really easy to bite off more than you can chew here.  So you would be wise to lay out a core set of functionality that is required
//  for the app to work at all, and then describe additional layers beyond that core that you would like to implement as time permits.
//  Think about the stages of development: implement the core, then add feature 1, 2, 3, and so forth.  We have about a month left, so
//  the scope should be something that is reasonable to do in that time frame while you're learning more about React.  Describe your core
//  and then the additional elements you will add as time permits.

// If you have no idea of what kind of app to work on, you could consider writing a calendar app (i.e. a personal calendar) or an
// appointment scheduler (an app where others can book appointments with you).

// Upload your proposal as a PDF file to Learning Suite.

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Navbar from "./components/Navbar.js";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <main className="main-content">
                    <Navigation />
                </main>
            </Router>
        </>
    );
}

export default App;
