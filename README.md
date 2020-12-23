# [ASCII-Converter](https://algomonk016.github.io/ASCII-Converter/ "ASCII Converter")

World's simplest ASCII Converter. Just type your text in the form given and get ASCII values or vice-versa. <br> 
Developed using HTML, CSS and Javascript.

Follow the link for project : [ASCII-Converter](https://algomonk016.github.io/ASCII-Converter/ "ASCII Converter")

#### ASCII To Plain Text Conversion
![ASCII_TO_TEXT](https://user-images.githubusercontent.com/55861951/102896417-59f0de00-448c-11eb-82c0-9a0e560bf133.gif)
<br>

#### Plain Text to ASCII Code
![Text_To_ASCII](https://user-images.githubusercontent.com/55861951/102896489-7d1b8d80-448c-11eb-9cf3-e71ada141ca2.gif)

### Functions Used : 
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
