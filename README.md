<h1 align="center">Mintendo PlayChild</h1>

<h2 align="center"><img src="https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/images/console.PNG?raw=true" width="200" height="350"></h2>

[View live project here.](https://richardbyrne95.github.io/CI-MS2-Mintedo-PLAYCHILD/)

This web-app is a browser-based single-player endless arcade game, based on the Phaser Game Engine. A game was chosen as the focus for this project as it was found that many of my peers were developing very similar apps to each other (Google Maps APIs etc.). I have also had an interest in game development for a number of years now, which made the project choice for this module quite easy.

This webapp simulates the original gameboy, insofar as the game scenes are viewed within an image of a Nintendo GAMEBOY. The game design, sound design and art are also reminiscent of the era in which the GAMEBOY was popular (albeit the original gameboy didn't display colour). This is not intended to emulate any GAMEBOY games, nor to fully replicate any of the GAMEBOY experience. It instead is a proof of concept and a homage to that era of gaming.

Since browser games have [all but been replaced by games downloaded from app stores](https://www.mobilemarketer.com/news/mobile-games-sparked-60-of-2019-global-game-revenue-study-finds/569658/), this web-app was intentionally developed desktop-first and adapted to mobile.

Developer High-score: $11,944

## User Experience (UX)

- ### User Stories

  - #### First Time Visitor Goals

    1. As a first time visitor, I want to learn about the purpose of the site and learn more about the web-app.
    2. As a first time visitor, I want to play the game and judge its suitability for my own entertainment purposes.
    3. As a first time visitor, I want to be able to easily understand how to control the game.

- ### Design

  - This project was intended to pay homage to era in which the Nintendo GAMEBOY was popular. This was achieved by placing the game scene within a interactive image of a GAMEBOY.

  - The interactivity of the GAMEBOY is based around animations of the buttons that produce the effect of the player pressing the buttons of the console when the player presses the relevant button.

  - In order for the player to understand the controls, a 'Controls' button was added which displays a modal with the game's 'manual'.

- #### Colour Scheme

  - The colour scheme of the HTML page is different shades of grey (#aeafa4, #fafafa, #000, #aaa). It was based around the different shades of grey of the original GAMEBOY.

- #### Typography

  - The primary font used for the web-app is 'Press Start 2P'. This font emulates a typeface that was common in many games on the original GAMEBOY.

- #### Imagery

  - ##### Webpage

    - An svg of the original GAMEBOY was used to emulate the experience of playing on the console.

  - ##### Game

    - The player image was chosen due its pixel-art style and due it being available in a gif (making the animation of player movement possible).

    - The snake image was chosen for the game's sole enemy as snakes were common foes in early games (possibly linked to counter-culture movements of previous decades).

    - The background of the game itself was created by the developer. Grass was chosen to represent the ground as this would be a natural habitat for snakes to live in (although I doubt you'd ever find this many of them bunched together in one spot!).

- #### Wireframes

  ##### Desktop

  - Game - [View](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/wireframes/D%20-%20Main.png?raw=true)

  ##### Tablet

  - Game - [View](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/wireframes/M%20-%20Main.png?raw=true)

  ##### Mobile

  - Game - [View](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/wireframes/T%20-%20Main.png?raw=true)

## Features

- Responsive elements on all device sizes.
- Responsive 'controls' button and modal on all device sizes.
- Animated control buttons that respond to player input

## Accessibility

- Images: The svg image was given an aria-label to provide content to screen readers.
- Tags: Semantic element tags, classes and ids, as well as aria-labels, were used in order to improve accessibility, and reduce the footprint of the code.

## Technologies Used

- ### Languages Used

  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- ### Frameworks, Libraries & Programs Used

  1. [Google Fonts:](https://fonts.google.com/specimen/Press+Start+2P#standard-styles)

     - Google fonts were used to import the 'Press Start 2P' font into the style.css file which is used on all pages throughout the project.

  2. [jQuery:](https://jquery.com/)

     - jQuery was used to select elements in the DOM, specifically for the helper.js file which primarily handles animating the console buttons.

  3. [Git](https://git-scm.com/)

     - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

  4. [GitHub:](https://github.com/)

     - GitHub is used to store the projects code after being pushed from Git.

  5. [Balsamiq:](https://balsamiq.com/)

     - Balsamiq was used to create the [wireframes](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/wireframes) during the design process.

  6. [SVG Alteration](https://www.figma.com/)

     - Figma was used to add text to the console, group components together for animation later on and add id tags to make each element selectable within JavaScript.

  7. [MP3/WAV to OGG Conversion](https://www.online-convert.com/)

     - MP3s and WAVs were converted to OGGs as Firefox does not support mp3s, and its was deemed best to keep all audio files the same type as each other.

  8. [GIF to Spritesheet Conversion](https://ezgif.com/gif-to-sprite/ezgif-6-80133e6bc143.gif)
     - The GIFs provided in the player texture pack were converted to spritesheets in order to animate them in Phaser.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

- ### Testing User Stories from User Experience (UX) Section

  - #### First Time Visitor Goals

    1. As a first time visitor, I want to learn about the purpose of the site and learn more about the web-app.

       <h2><img src="https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/images/start-screen.PNG?raw=true" width="400" height="300"></h2>

       - Upon visiting the web-app, the user is instantly greeted with a an large image of a GAMEBOY, a 'Controls' button and a game scene that starts up after a delay (to simulate the time it takes to turn on a GAMEBOY).

       - The start screen of the game gives instructions straight away as to how the user in to respond to what is showing on screen.

    2. As a first time visitor, I want to play the game and judge its suitability for my own entertainment purposes.

       <h2><img src="https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/images/game-screen.PNG?raw=true" width="200" height="200"></h2>

       - The game begins very quickly allowing the user to promptly gauge their interest in the game.

    3. As a first time visitor, I want to be able to easily understand how to control the game.

       <h2><img src="https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/assets/images/control-button.PNG?raw=true" width="100" height="30"></h2>

       - The 'Controls' button displays a modal showing the controls of the game. This combined with the simple controls allow the user to quickly gain an understanding of how to interact with the game.

  - ### Testing Using Cypress.io

    - This project was tested using Cypress within Visual Studio code using the following steps...

      1. Opened Command Prompt on Windows with Administrator priveliges.
      2. Ran the command 'npm install cypress' to install cypress on my local machine.
      3. Opened a terminal within my VS code project and ran the code 'npx cypress run'.
      4. Created a new file 'gameSpec.js' within the cypress file structure to hold all the tests.
      5. Created Cypress.io account and set up a new organisation and project for this web-app.
      6. Copied project ID and pasted into the cypress.json file within the local project.
      7. Created tests within the gameSpec.js file to test if functionality, usability, interface and performance were as expected. The tests completed were:
         - A video of the tests being carried out can be viewed [here](https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD/blob/main/cypress/videos/gameSpec.js.mp4)
         #### Functionality
         - Checking page loads correctly
         - Checking Controls button works as expected
         - Check if game loads as expected
         #### Usability
         - Check images display correctly
         - Check if SVG has aria-label
         #### Interface
         - Check if game canvas has correct size for current display
      8. After all tests had passed, a recording of the tests being completed was made by copying the record key from the project in the Cypress web app, and running the command 'npx cyress run --record --key "record key here"'.
      9. The tests were then uploaded to GitHub using git (process described in Development Process section).

  - ### Further Testing

    - The Website was tested on Google Chrome, Internet Explorer and Microsoft Edge browsers.
    - The website was viewed on a variety of devices including Desktop, Laptop, iPad, iPad Pro, iPhone 5, iPhone 8, iPhone 8 Plus, iPhone X, Surface Duo & Moto G5.
    - Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
    - Use lighthouse in Chrome Dev tools to check for common performance, accessibility and SEO issues, as well as for best practices. Accessibility was the only category to not get 100/100, due to the use of 'user-scalable="no"' to stop users from accidentally zooming in on mobile.
    - Use Google Structurexd Data Testing Tool - (results)[https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Frichardbyrne95.github.io%2FCI-MS2-Mintedo-PLAYCHILD%2F]

  - ### Known Bugs

    - Touch input is not yet available to control the player (e.g. mobile devices). Desktop playability was prioritised but touch support is included in the roadmap.
    - The spawning system can spawn enemies and coins very close to each other, making the game unplayable from that point onwards.
    - It was found during development (through much strife) that the Evernote for Chrome plugin causes issues with player input with Phaser games. It cannot be installed on Chrome if the user wishes to play the game. Using Incognito mode or another brower is a quick workaround.

## Development

- ### Setting Up the Project

  1. A new index.html file was created and boilerplate HTML code was added.
  2. JavaScript files were created for each of the game scenes, as well as for the game initialisation settings, 'game.js'.
  3. A 'helper.js' file was created to handle the animation of the SVG and of the modal.
  4. A custom CSS style sheet was added to the project.
  5. The Phaser and jQuery libraries were imported using links from CDNs.
  6. The relative Google Font stylesheet was imported.
  7. Two divs were added, one for the console image, another for the game scene that Phaser produces.
  8. Within [Figma](https://www.figma.com/), the Gameboy image was imported, and the different parts of the SVG were grouped together for animating later.
  9. The SVG was exported from Figma with all of the created groups as id attributes, and was then imported into the project folder.
  10. The SVG was opened in VS Code and the code was copied and pasted into the console div within the index.html file.
  11. All other assets were imported (see Credits for sources).

- ### Animating the SVG

The intention of animating the SVG was to have the buttons respond to user input.

1. The image was processed in [Figma](https://www.figma.com/) as above and imported into the project.
2. A function was created (checkDownKey()) to check which key was being pressed and call the relevant animation function.
3. A function was created (checkUpKey()) to check which key was being released and call the relevant animation reset function.
4. The D-Pad was animated by ckecking the relevant arrow key, using jQuery to select the relevant axis of the D-Pad, and adding a custom CSS class that translates the the entire D-Pad element in the direction of the arrow key pressed. This gives the illusion of the D-Pad being 3D. When the arrow key is released, the resetDPEAD() function is called to re-center the position of the D-Pad.
5. The A and B buttons were animated by ckecking for either an 'a' or 'b' key press, using jQuery to select the top and side of the relevant button, and adding a custom CSS class that translates the top of button left, covering the side of the button, giving the illusion that the button has been physically pressed.
6. The Start and Select buttons were animated by ckecking for either an 'Enter' or 'Spacebar' key press, using jQuery to select the relevant button, and adding a custom CSS class that scales the button down in size, giving the illusion that the button has been physically pressed.

- ### Developing with Phaser

This project was developed using the [Phaser HTML Game Engine](http://phaser.io/) using the following steps:

- #### Learning Phaser

  - Phaser was learned by referencing the documentation on the official Phaser website.

- #### Initailising the Game

  1. In order to initialise the game scene, a config object was created within 'game.js', which was then passed into the createGame() function.
  2. A timeout was set on the create game function to simulate the time it takes to turn on a GAMEBOY.
  3. A resolution object was created and updated based on the screen size of the user. This allowed the game scenes to adjust to the user's choice of display.
  4. Inside the config object:

  - The type was set to WEBGL.AUTO so that the engine would use the WEBGL render if available by the browser.
  - The parent was set to the id of the 'game-scene' div so that the game screen would be able to be controlled separately from the SVG.
  - The scene was set to a list of all the scenes in the game.

- #### Setting up startScene.js

  1. A new class called StartScene was created which extended the Phaser.Scene boilerplate.
  2. The standard preload() and create() functions were created. update() was not created as no in game asset in this scene needed to be updated on a framr-by-frame basis.
  3. The audio assets were added into the preload() function, for use later on.
  4. A resolution object was again initialised and a positon and size of each element was given based on the screen size of the user.
  5. The GAMEBOY startup sound was called and played when the console 'starts up'.
  6. Text was added to give infomation to the user about the game and to prompt them to start.
  7. A blinking text class was added to the start game prompt.
  8. Lastly a function was created to check for the 'Enter' key to be pressed, upon which the current scene would end, the GameScene would start, and the game would begin.

- #### Setting up gameScene.js

  - ##### General

    1. A new class called GameScene was created which extended the Phaser.Scene boilerplate.
    2. The standard preload(), create(), and update() functions were created within the class.
    3. A score variable was initialised outside of the class to keep track of the user's score.
    4. A moneyMultiplier variable was initialised to keep track of the score multiplier.
    5. A speed variable was declared to keep track of the player's speed multiplier.
    6. A ternary operator statement was used to change the base speed of the player based on the resolution of their display.
    7. A randomCoord variable was declared to hold the coordinates every time random coordinates were created.
    8. A gameState object was created to hold the coordinated of all the game object within the game scene.

  - ##### Preload

    1. Back within the GameScene class, all relevant assets (audio, spritesheets, images) were loaded in via the preload() function.

  - ##### Create

    1. A resolution object was again initialised and a positon and size of each element was given based on the screen size of the user.
    2. The background image was set using 'this.add.image()'.
    3. The setScale() method was used to scale the background image to conver the entire screen.
    4. The setSize() method was used to set the height and width of the background.
    5. The score text was created using 'this.add.text()'.
    6. The player object was created inside the gameState object using 'this.physics.add.sprite()'.
    7. Collision with the player was set using the '.setCollideWorldBounds(true)' and '.body.collideWorldBounds = true' methods.
    8. Animations were created by splitting the original player gif into spritesheets using [EZGif](<(https://ezgif.com/gif-to-sprite/ezgif-6-80133e6bc143.gif)>).
    9. Any paused animations were resumed using 'this.Anims.resume'.
    10. The player idle and movement animations were created using multiple 'this.anims.create' methods.
    11. The player's idle animation was set so that the player shows movement before player input.
    12. Gems were placed in random spots by calling the assignCoords() function, which generates random coordinated that are at least 75px away from the player's current position, and applying the coordinates to a new gem game object.
    13. Upon collecting a gem, a new snake game object is created using the same method to create a gem, but also adds an animation to the snake.
    14. Collision detection was set up so as the player could 'collect' the gems by disabling the body of the gem within the scene and deleting its coordinates from the gameState object.
    15. A sound was when the player 'collects' a gem.
    16. A function to increment the player's score upon collection of a gem was created. It also slowly increases the speed of the player at $1000 intervals and increases the moneyMultiplier.
    17. Music was added to the game using 'this.sound.add()', looped using the '.setLoop' method and played using the '.play' method.

  - ##### Update

    1. Variables were added to hold the pressed status of the arrow keys.
    2. An if statement was used to call player movement functions based on the key that was pressed.
    3. And endGame() function was created that pasues all obeject movement, fades, the camera to black, plays a player death sound, ends the current scene and starts the EndScene.

- #### Creating endscene.js

  1. A new class called EndScene was created which extended the Phaser.Scene boilerplate.
  2. A resolution object was again initialised and a positon and size of each element was given based on the screen size of the user.
  3. The sounds, text, and images were added using the same methods as described above.
  4. The score and multipliers are reset by reassigning the variable values.
  5. The gameState object is reset to avoid any crossover between object placement from the previous game.
  6. The player is prompted to play again by pressing again key.

## Deployment

- ### Source Control Process

  This project was developed using Visual Studio Code, Phaser Game Engine, Git and GitHub using the following steps:

  1.  Logged into Github Desktop App
  2.  A new repository called 'CI-MS2-Mintendo-PLAYCHILD' was created locally for this project.
  3.  This repsoitory was initalised with a blank README.md file.
  4.  This repository was then published from Github Desktop to the remote Github server using 'Ctrl + P'.
  5.  The project folder was opened in Visual Studio Code where the initial files were created.
  6.  A new terminal in Visual Studio Code (Ctrl + Shift + ') was opened to begin the git commit process.
  7.  Files were added to the local git staging area using 'git add <'filename'>' and 'git add \*' where applicable.
  8.  Local commits were made using the 'git commit -m <'message'>' command.
  9.  These local commits were then periodically pushed to the remote Github server using the 'git push' command.
  10. A local server was run throughout the development process using the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to test, in real time, changes made to the game and HTML page.

- ### GitHub Pages

  The project was deployed to GitHub Pages using the following steps:

  1.  Logged in to GitHub.
  2.  In the Github Pages settings of the project repository <a href="https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD">(https://github.com/RichardByrne95/CI-MS2-Mintedo-PLAYCHILD)</a>, the main branch was chosen as the source.
  3.  The site was then published to <a href="https://richardbyrne95.github.io/CI-MS2-Mintedo-PLAYCHILD/">this link</a>.

- ### Roadmap

  - Touch controls for mobile will be developed next, due to its priority.
  - Clicking on the start button of the console image to start the game will be implemented.
  - A realistic shadow system will be developed to make the overall aesthetic more realistic.
  - A console start screen will be developed to simulate that of the original GAMEBOY.
  - A weapon will be given to player, which they can use to kill the snakes to increase the chance the player has of getting a higher score.
  - Animations for player moving up and down will be created.
  - A leaderboard system will be added so people can compete either with their own high scores, or with others around the world.
  - A graphic will be added to the start screen of the character's face in black and white.
  - A graphic of the snakes will be added to the end screen in black and white.
  - A full screen option will be made available to the player so they can play without the GAMEBOY svg if they wish.

- ### Project Status

  This project's developemt has paused while the grading for this project is being completed. This status will change once the course has been completed.

## Credits

- ### Code

  - [Code Institue - Full Stack Software Development Course](https://codeinstitute.net/): Coding skills learned in this course allowed the developer to create all the pages on this web-app.
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web): Referenced for best practices for lists and images, as well as the smooth scrolling functionality.
  - [SVG Animation](https://www.youtube.com/watch?v=gWai7fYp9PY)

- ### Content

  - All content was written by the developer unless otherwise specified in the code itself or in this README.

- ### Images

  - [GAMEBOY SVG Source](https://upload.wikimedia.org/wikipedia/commons/b/bf/Gameboy_green_icon.svg)
  - [Player Spritesheet Source](https://jesse-m.itch.io/jungle-pack)
  - [Snake Sprite Source](https://opengameart.org/content/snake-rework)
  - [Gem Sprite Source](https://opengameart.org/content/snake-rework) The colour was changed to improve contrast accessibility.
  - Ground Image was created by the developer using [Pixilart.com](https://www.pixilart.com/draw)

- ### Sound

  - [GAMEBOY Startup Sound Soure](https://www.youtube.com/watch?v=3bCT3YxZfAY&ab_channel=ModernVintageGamer)
  - [Start Game Sound Source](https://freesound.org/people/starpause/sounds/3044/)
  - [Player Death Sound Source](https://freesound.org/people/jeckkech/sounds/391655/)
  - [Music - 8-bit Loop Source](https://freesound.org/people/dAmbient/sounds/239539/)
  - [Coin Collecting Sound Source](https://freesound.org/people/bradwesson/sounds/135936/)

## Support

Further information can be gotten by contacting the developer at richardbyrne1995@gmail.com

- ### Acknowledgements

  - Code Institute for giving me skills to create this project.
  - My mentor, Spencer Bariball, for continuous helpful feedback and encouragement.
  - Scott at Tutor support in Code Institute for his support in squashing bugs.
