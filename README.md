
# See the final code in action

1. Go into the folder Step 7
2. Open the file game7.html in Chrome browser
3. Start playing.
4. To play again, just refresh the page in the browser and start again.

# Develop the code step by step in 7 steps

## Step 1

-  Using simple HTML, create a starter Tic Tac Toe grid with some dummy data and basic styling. 
-  HTML Concepts :  html head, html body, table, row, column, header h1, div, span (label) 
-  CSS Concepts :  height, width, table / cell's border & color, font-size, text alignment (center, left justified etc)   
-  End Result: Open the file Step 1/game1.html in Chrome browser
-  See image: [images/step1.png](images/step1.png)

## Step 2

-  Let us include 2 new items into the html file:  jQuery javascript library, bootstrap CSS libary
-  Quick overview of DOM 
-  Quick overview of CSS selectors by class, element, attributes 
-  Quick overview of jQuery : manipulating DOM using jQuery Javascript library 
-  End Result: Open the file Step 2/game2.html in Chrome browser
-  See image: [images/step2.png](images/step2.png)

## Step 3

-  HTML + JS : Set the starting player as 'X'
-  CSS: Style the buttons with different colors. Light Blue (X) and Light Green (O) backgrounds. 
-  JS + DOM + CSS: To indicate which player is playing next, add a yellow highlight around the button for 'X' and unhighlight the button for 'O' 
-  End Result: Open the file Step 3/game3.html in Chrome browser
-  See image: [images/step3.png](images/step3.png) 

## Step 4

-  HTML : Clear the tictactoe grid, so it's empty to start with. Let's give a name to each row and column (row name: 0, 1, 2, column name: 0, 1, 2)
-  JS + DOM + CSS: 
-  When a player clicks on a tictactoe cell, put a X or O in the cell, based on the current player.
-  In preparation for the next move, change the current player to the other player (i.e., X -> O, O -> X), and highlight/unhighlight the players' buttons accordingly. 
-  Update the next player's name in the "Next move by: " section. 
-  End Result: Open the file Step 4/game4.html in Chrome browser
-  See image: [images/step4.png](images/step4.png)

## Step 5

-  HTML : Add html to show a message when a player make a winning move
-  CSS: For the html that shows the message that the game is over, add a green background.
-  HTML + CSS: Put a game container div in html and style it with margins in css
-  JS: Only show the newly added html to display "Game Over" information when the game is actually over! Hide it until that point.
-  JS: Write the logic to check if the game is over. For now, check only the horizantal rows and vertical columns. (We will deal with diagonals later.)  
-  End Result: Open the file Step 5/game5.html in Chrome browser
-  See image: [images/step5.png](images/step5.png)

## Step 6

-  JS: Add logic to figure out if the game is over because there are 3 X's or O's in the diagonals
-  End Result: Open the file Step 6/game6.html in Chrome browser
-  See image: [images/step6.png](images/step6.png)

## Step 7 (Final step!)

-  JS : If a cell is already occupied with an X or O, do not let the player change it!
-  JS : Once the game is over, players can not continue to play and change the grid any longer
-  JS : Once the game is over, hide the line that says "Next move by: "
-  End Result: Open the file Step 7/game7.html in Chrome browser
-  See image: [images/step7.png](images/step7.png)

## Next steps

- Now that you got the basic tic-tac-toe running, it's your time to shine even brighter by improving the code with better logic, and by following better JavaScript coding patterns e.g. removing global variables, using `let` instead of `var` etc. (The code in the above Steps 1-7 is written in a quick-n-dirty fashion to keep things moving fast, and also to give you this exercise :p )
- Practice more HTML / CSS / JavaScript / jQuery
- [Drop us a line](https://automationschool.com/apply-now/) if you need any help. We would love to hear from you. 
- Also, we have a quick-n-dirty Object-oriented design (OOD) course coming up, so once again feel free to [Drop us a line](https://automationschool.com/apply-now/) for a sneak peek.
