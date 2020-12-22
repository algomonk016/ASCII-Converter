# ASCII-Converter

World's simplest ASCII Converter. Just type your text in the form given and get ASCII values or vice-versa. <br> 
Developed using HTML, CSS and Javascript.

Functions Used: <br>
⦁	***convert()*** : <br>
		- this function is called on 'keyup' event used in input field <br>
		- it checks whether we want to convert ASCII to Text or vice-versa and call functions for same. <br>

⦁	***convertToText()*** : <br>
		- this function is called when we have to convert ASCII code to plain text. <br>
		- it stores the provided ASCII values <br>
		- convert each of them into their respective character <br>
		- store those characters in a variable ( at the end, we'll get the required string ) <br>
		- print the final string in the page <br>
	
⦁	***convertToASCII()*** : <br>
		- this function is called when we have to convert plain text to ASCII code . <br>
		- it stores the provided plain text <br>
		- iterate through it and convert each character into it's respective ASCII code <br>
		- store those ASCII codes in a variable with proper spacing <br>
		- print the final string in the page <br>
