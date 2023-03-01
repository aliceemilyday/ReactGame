# <p align=center>Hangman Game with React.js</p>

## Contents

**1. Project Description / Game Rules** <br/>
**2. Installation Guide** <br/>
**3. Usage Guide** <br/>
**4. Credits**


### Project Description / Game Rules

The aim of this project was to create a simple game application, utilising the skills we have developed in **React**, **JSX** and **JavaScript** so far. <br/>
I have created a Hangman game application using **React Redux** and Create React App. The application takes a randomly generated word and stores it, hiding it from the UI. The user then guesses a letter from the alphabet and if correct, they will be shown the letter in the word.<br/>
If they guess incorrectly, a piece of the hangman will be drawn. ***The aim of the game is to guess the word before the entire hangman is drawn.***

### Installation Guide

To install my project localling, download all files in the repository. Once downloaded, open your terminal or command prompt and enter **'cd [file-location-here]'** to locate the project. 
Next enter **'npm install'** to download node_modules and enter **'npm start'** once complete. This will open the application in your browser.

### Usage Guide

<p align=center><img width="940" alt="image" src="https://user-images.githubusercontent.com/108631501/221591677-b3bb83c3-aca8-44c7-b343-c74a6138244a.png">
</p>

Once you have opened the application in your browser, you will see the above UI. From here, you have the option to start playing the game or click the *'HELP'* button to read the game rules.<br/>
By pressing *'HELP'* you will see the UI pictured below. The button functionality is created using the **useState** method. When the button is clicked, a function is called that changes the state, which
 then shows the Help function component to the user and changes the text in the button to 'CLOSE'. I've created the 'pop-up' effect using **CSS** and setting the position to absolute and z-index to 2. 
To exit the game rules, click the *'CLOSE'* button. 
 
<sub>*To edit the components described above, open Header.js for the header component and Help.js for the help/game rules component. To edit the styling, open Header.css or Help.css.*</sub><br/>

<p align=center><img width="914" alt="image" src="https://user-images.githubusercontent.com/108631501/221597671-a27e2c8b-6bd6-425f-96f0-118ed31e8573.png"></p>

When the application is opened in the browser, a random word is automatically generated and stored in state using a **reducer**. To generate the word, I've created an array *(Words.js)* of all 7 letter words in the dictionary, 
and used **Math.random** to generate a random number to select an index from the array. To see the formula i've used for this, see *App.js*<br/>
The word is generated and stored in state in the parent component *(App)* as it is the very first piece of code that needs to run before any other components can work.<br/>
To create the word element shown in the UI, I've used the **useSelector** method to retrieve the random word from state and used **control statements** to identify if the letter has been "found" or 
not. If it has, the letter from the random word is pushed into an array, which is then converted into an element using the **map** method.

<sub>*To edit the component described above, open WordGenerator.js. To edit the styling, open WordGenerator.css. To see the slices of state / reducers, open hangmanGame.js in the store folder.*</sub><br/>

<p align=center><img width="926" alt="image" src="https://user-images.githubusercontent.com/108631501/221599753-b06eb7f7-570d-423d-a10d-f39ac041a491.png"></p>

To start playing the game, simply click on one of the alphabet letter buttons. If you've guessed correctly, you will see the letter appear in the word. If you've guessed incorrectly, a piece of the hangman will be drawn and 
incorrectly guessed letter will appear in a list at the bottom of the screen (see screenshot above). Each letter button is disabled once it has been clicked on.<br/>
To create the letter buttons, I simply created an array with the letters of the alphabet and used the **map** method to create button elements from the array.<br/>
Once a button has been clicked on, a function is called that sends the value of the button to state using a **reducer**. The value is then compared against the letters in the randomly generated word and if it matches, 
the letter attribute *'found'* is updated to true. This in turn updates the word element and reveals the correct letters to the user. 

<sub>*To edit the component described above, open Letters.js for the letter buttons component. To edit the styling, open Letters.css.*</sub><br/>

<p align=center><img width="921" alt="image" src="https://user-images.githubusercontent.com/108631501/221606219-f69e5a3a-a24c-4ae2-9728-58340d46c753.png">
</p>

If you guess all 7 letters correctly, you will see the *'Winner'* component appear (screenshot above). This is created in a similar way to the *'HELP'* component, using **CSS** to give it a 'pop-up' effect on the screen. <br/>
I've used **control statements** to identify how many correctly guessed letters there are. If there are 7, the Winner component is returned. To see this functionality, see *WordGenerator.js*. <br/>
On the Winner component, you then have the option to restart the game. Clicking the restart button refreshes the **browser router** and resets the game to play again. 

<sub>*To edit the component described above, open Winner.js for the component. To edit the styling, open Winner.css.*</sub><br/>

<p align=center><img width="914" alt="image" src="https://user-images.githubusercontent.com/108631501/221607776-b74102e3-aa30-4acf-87d9-90573d82e659.png">

</p>

If you guess incorrectly 10 times, the entire hangman will be drawn and the game is over (screenshot above). With each incorrectly guessed letter, you will see the letter appear at the bottom of the 
screen in a list. This is created by storing the incorrect letter in an array in state, and then accessing this using **useSelector** and converting the array into elements using the **map** method. <br/>
To create the hangman drawing functionality, i've using the same array from state and with each incorrect guess, i've used a **control statement** to decide which piece of the hangman should be drawn.<br/>
Once you have guessed incorrectly 10 times, the 'game over' component is shown and you have the option to restart the game.

<sub>*To edit the components described above, open GameOver.js for the game over component, Hangman.js for the hangman image component or IncorrectGuesses.js for the incorrect letters component. To edit the styling, open GameOver.css or IncorrectGuesses.js.*</sub><br/>

### Credits
**Author:** *Alice Day* </p>
