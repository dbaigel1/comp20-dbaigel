function parse() {

	var request = new XMLHttpRequest(); //creates request
	request.open("get", "data.json", true); // opens the data

	/* callback function */
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			printData(request.responseText);
		}
	};
	request.send();

}


function printData(array) {
		elem = document.getElementById("messages");
		array = JSON.parse(array);
		for (count = 0; count < array.length; count++) {
			elem.innerHTML +=  array[count]["content"] + " " + array[count]["username"] + "</p>";
		}

}
