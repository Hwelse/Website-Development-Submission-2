//Write the function showMessage()
function showMessage() {
	//Get the entered name
	//Then display the message: hello + entered name
	
	//Step 1: Find the HTML element that store entered name
	let enteredName = document.getElementById("enterSearch").value;
	
	//Step 2: Write the welcome message to the <p>
	document.getElementById("searchMessage").innerHTML = "Now directing you to " + enteredName + "...";	
}
