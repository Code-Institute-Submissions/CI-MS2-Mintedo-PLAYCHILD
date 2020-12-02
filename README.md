<h1 align="center">Mintendo GameChild</h1>

[View live project here.](https://richardbyrne95.github.io/CI-MS2-Mintedo-PLAYCHILD/)

This web-app is a browser-based single-player endless arcade game, based on the Phaser Game Engine. It simulates the original gameboy, insofar as the game scenes are viewed within an image of a Nintendo GAMEBOY. The game design, sound design and art are also reminiscent of the era in which the GAMEBOY was popular (albeit the original gameboy didn't display colour). This is not intended to emulate any GAMEBOY games, nor to fully replicate any of the GAMEBOY experience. It instead is a proof of concept and a homage to that era of gaming.

Since browser games have [all but been replaced by games downloaded from app stores](https://www.mobilemarketer.com/news/mobile-games-sparked-60-of-2019-global-game-revenue-study-finds/569658/), this web-app was intentionally developed desktop-first and adapted to mobile.

Developer High-score: $11,944


## User Experience (UX)

-   ### User Stories

    -   #### First Time Visitor Goals

        1. As a first time visitor, I want to learn about the purpose of the site and learn more about the web-app.
        2. As a first time visitor, I want to play the game and judge its suitability for my own entertainment purposes.
        3. As a first time visitor, I want to be able to easily understand how to control the game.

-    ### Design

    -   This project was intended to pay homage to era in which the Nintendo GAMEBOY was popular. This was achieved by placing the game scene within a interactive image of a GAMEBOY. 

    -   The interactivity of the GAMEBOY is based around animations of the buttons that produce the effect of the player pressing the buttons of the console when the player presses the relevant button.

    -   In order for the player to understand the controls, a 'Controls' button was added which displays a modal with the game's 'manual'.

-    #### Colour Scheme

        -   The colour scheme of the HTML page is different shades of grey (#aeafa4, #fafafa, #000, #aaa). It was based around the different shades of grey of the original GAMEBOY.

-    #### Typography

        -   The primary font used for the web-app is 'Press Start 2P'. This font emulates a typeface that was common in many games on the original GAMEBOY.

-   #### Imagery

    -    ##### Webpage

            -   An svg of the original GAMEBOY was used to emulate the experience of playing on the console.

    -    ##### Game

            -   The player image was chosen due its pixel-art style and due it being available in a gif (making the animation of player movement possible).

            -   The snake image was chosen for the game's sole enemy as snakes were common foes in early games (possibly linked to counter-culture movements of previous decades).

            -   The background of the game itself was created by the developer. Grass was chosen to represent the ground as this would be a natural habitat for snakes to live in (although I doubt you'd ever find this many of them bunched together in one spot!).

-   #### Wireframes

    ##### Desktop

    -   Game - [View]()

    ##### Tablet

    -   Game - [View]()

    ##### Mobile

    -   Game - [View]()


## Features

-   Responsive elements on all device sizes.
-   Responsive 'controls' button and modal on all device sizes.
-   Animated control buttons that respond to player input


## Accessibility

-   Images: The svg image was given an aria-label to provide content to screen readers.
-   Tags: Semantic element tags, classes and ids, as well as aria-labels, were used in order to improve accessibility, and reduce the footprint of the code.


## Technologies Used

-    ### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

-   ### Frameworks, Libraries & Programs Used

    1. [Google Fonts:](https://fonts.google.com/specimen/Press+Start+2P#standard-styles)
        -   Google fonts were used to import the 'Press Start 2P' font into the style.css file which is used on all pages throughout the project.

    2. [jQuery:](https://jquery.com/)
        - jQuery was used to select elements in the DOM, specifically for the helper.js file which primarily handles animating the console buttons.

    3. [Git](https://git-scm.com/)
        - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

    4. [GitHub:](https://github.com/)
        - GitHub is used to store the projects code after being pushed from Git.

    5. [Balsamiq:](https://balsamiq.com/)
        - Balsamiq was used to create the [wireframes](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/wireframes) during the design process.

    6. [SVG Alteration](https://www.figma.com/)
        -   Figma was used to add text to the console, group components together for animation later on and add id tags to make each element selectable within JavaScript.

    7. [MP3/WAV to OGG Conversion](https://www.online-convert.com/)
        -   MP3s and WAVs were converted to OGGs as Firefox does not support mp3s, and its was deemed best to keep all audio files the same type as each other.

    8. [GIF to Spritesheet Conversion](https://ezgif.com/gif-to-sprite/ezgif-6-80133e6bc143.gif)
        -   The GIFs provided in the player texture pack were converted to spritesheets in order to animate them in Phaser.


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

-   ### Testing User Stories from User Experience (UX) Section

    -   #### First Time Visitor Goals

        1. As a first time visitor, I want to learn about the purpose of the site and learn more about the web-app.

            <h2><img src=""></h2>

            - Upon visiting the web-app, the user is instantly greeted with a an large image of a GAMEBOY, a 'Controls' button and a game scene that starts up after a delay (to simulate the time it takes to turn on a GAMEBOY).

            - The start screen of the game gives instructions straight away as to how the user in to respond to what is showing on screen.

        2. As a first time visitor, I want to play the game and judge its suitability for my own entertainment purposes.

            -   The game begins very quickly allowing the user to promptly gauge their interest in the game.

        3. As a first time visitor, I want to be able to easily understand how to control the game.

            -   The 'Controls' button displays a modal showing the controls of the game. This combined with the simple controls allow the user to quickly gain an understanding of how to interact with the game.

    -   ### Testing Using Cypress.io

        -   This project was tested using Cypress within Visual Studio code using the following steps...

            1. Opened Command Prompt on Windows with Administrator priveliges.
            2. Ran the command 'npm install cypress' to install cypress on my local machine.
            3. Opened a terminal within my VS code project and ran the code 'npx cypress run'.
            4. Created a new file 'gameSpec.js' within the cypress file structure to hold all the tests.
            5. Created Cypress.io account and set up a new organisation and project for this web-app.
            6. Copied project ID and pasted into the cypress.json file within the local project.
            7. Created tests within the gameSpec.js file to test if functionality, usability, interface and performance were as expected. The tests completed were:
                -   A video of the tests being carried out can be viewed [here](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/cypress/videos/gameSpec.js.mp4)
                #### Functionality
                -   Checking page loads correctly
                -   Checking Controls button works as expected
                -   Check if game loads as expected
                #### Usability
                -   Check images display correctly
                -   Check if SVG has aria-label
                #### Interface
                -   Check if game canvas has correct size for current display
            8. After all tests had passed, a recording of the tests being completed was made by copying the record key from the project in the Cypress web app, and running the command 'npx cyress run --record --key "record key here"'.
            9. The tests were then uploaded to GitHub using git (process described in Development Process section).


    -   ### Further Testing

        -   The Website was tested on Google Chrome, Internet Explorer and Microsoft Edge browsers.
        -   The website was viewed on a variety of devices including Desktop, Laptop, iPad, iPad Pro, iPhone 5, iPhone 8, iPhone 8 Plus, iPhone X, Surface Duo & Moto G5.
        -   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
        -   Use lighthouse in Chrome Dev tools to check for common performance, accessibility and SEO issues, as well as for best practices. Accessibility was the only category to not get 100/100, due to the use of 'user-scalable="no"' to stop users from accidentally zooming in on mobile. 
        -   Use Google Structurexd Data Testing Tool - (results)[https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Frichardbyrne95.github.io%2FCI-MS2-Mintedo-PLAYCHILD%2F]

    -   ### Known Bugs

        -   Touch input is not yet available to control the player (e.g. mobile devices). Desktop playability was prioritised but touch support is included in the roadmap.
        -   The spawning system can spawn enemies and coins very close to each other, making the game unplayable from that point onwards.


## Deployment

-   ### Development Process

    This project was developed using Visual Studio Code, Phaser Game Engine, Git and GitHub using the following steps:

    1.  Logged into Github Desktop App
    2.  A new repository called 'CI-MS2-Mintendo-GAMECHILD' was created locally for this project.
    3.  This repsoitory was initalised with a blank README.md file.
    4.  This repository was then published from Github Desktop to the remote Github server using 'Ctrl + P'.
    5.  The project folder was opened in Visual Studio Code where the initial files were created.
    6.  A new terminal in Visual Studio Code (Ctrl + Shift + ') was opened to begin the git commit process.
    7.  Files were added to the local git staging area using 'git add <'filename'>' and 'git add *' where applicable.
    8.  Local commits were made using the 'git commit -m <'message'>' command.
    9.  These local commits were then periodically pushed to the remote Github server using the 'git push' command.
    10. A local server was run throughout the development process using the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to test, in real time, changes made to the game and HTML page.

-   ### GitHub Pages

    The project was deployed to GitHub Pages using the following steps:

    1.  Logged in to GitHub.
    4.  In the Github Pages settings of the project repository <a href="https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD">(https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD)</a>, the main branch was chosen as the source.
    5.  The site was then published to <a href="https://richardbyrne95.github.io/CI-MS2-Mintedo-PLAYCHILD/">this link</a>.

-   ### Roadmap

    -   Touch controls for mobile will be developed next, due to its priority.
    -   Clicking on the start button of the console image to start the game will be implemented.
    -   A realistic shadow system will be developed to make the overall aesthetic more realistic.
    -   A console start screen will be developed to simulate that of the original GAMEBOY.
    -   A weapon will be given to player, which they can use to kill the snakes to increase the chance the player has of getting a higher score.
    -   Animations for player moving up and down will be created.
    -   A leaderboard system will be added so people can compete either with their own high scores, or with others around the world.
    -   A graphic will be added to the start screen of the character's face in black and white.
    -   A graphic of the snakes will be added to the end screen in black and white.
    -   A full screen option will be made available to the player so they can play without the GAMEBOY svg if they wish.

-   ### Project Status

    This project's developemt has paused while the grading for this project is being completed. This status will change once the course has been completed.


## Credits

-   ### Code

    -   [Code Institue - Full Stack Software Development Course](https://codeinstitute.net/): Coding skills learned in this course allowed the developer to create all the pages on this web-app.
    -   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web): Referenced for best practices for lists and images, as well as the smooth scrolling functionality.
    -   [SVG Animation](https://www.youtube.com/watch?v=gWai7fYp9PY)

-   ### Content

    -   All content was written by the developer unless otherwise specified in the code itself or in this README.

-   ### Images

    -   [GAMEBOY SVG Source](https://upload.wikimedia.org/wikipedia/commons/b/bf/Gameboy_green_icon.svg)
    -   [Player Spritesheet Source](https://jesse-m.itch.io/jungle-pack)
    -   [Snake Sprite Source](https://opengameart.org/content/snake-rework)
    -   [Gem Sprite Source](https://opengameart.org/content/snake-rework) The colour was changed to improve contrast accessibility.
    -   Ground Image was created by the developer using [Pixilart.com](https://www.pixilart.com/draw)

-   ### Sound

    -   [GAMEBOY Startup Sound Soure](https://www.youtube.com/watch?v=3bCT3YxZfAY&ab_channel=ModernVintageGamer)
    -   [Start Game Sound Source](https://freesound.org/people/starpause/sounds/3044/)
    -   [Player Death Sound Source](https://freesound.org/people/jeckkech/sounds/391655/)
    -   [Music - 8-bit Loop Source](https://freesound.org/people/dAmbient/sounds/239539/)
    -   [Coin Collecting Sound Source](https://freesound.org/people/bradwesson/sounds/135936/)


## Support

Further information can be gotten by contacting the developer at richardbyrne1995@gmail.com

-   ### Acknowledgements
    
    -   Code Institute for giving me skills to create this project.
    -   My mentor, Spencer Bariball, for continuous helpful feedback and encouragement.
    -   Scott at Tutor support in Code Institute for his support in squashing bugs.