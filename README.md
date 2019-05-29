# NBDialog
Non blocking dialogs for JavaScript.

# Usage
```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>NBDialogs</title>
</head>

<body>
	<!-- Import NBDialog library -->
	<script src="https://samuelnovaes.github.io/nbdialog/nbdialog.js"></script>
	<script>
		_prompt('What is your name?').then(name => {
			_alert(`Hello ${name}`)
		})
	</script>
</body>

</html>
```

# Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

## Syntax
```javascript
_alert(message)
```
- **message: string** - Display message (Default to "")

### Example
```javascript
_alert("I am an alert box!");
```

# Confirm Box
A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the promise resolves true. If the user clicks "Cancel", the promise resolves false.

## Syntax
```javascript
_confirm(message)
```
- **message: string** - Display message (Default to "")

## Example
```javascript
_confirm("Press a button!").then(ok => {
	if(ok){
		txt = "You pressed OK!";
	}
	else {
		txt = "You pressed Cancel!";
	}
});
```

# Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the promise resolves the input value. If the user clicks "Cancel" the promise resolves null.

## Syntax
```javascript
_confirm(message, defaultText, type)
```
- **message: string** - Display message (Default to "")
- **defaultText: string** - Default value of input (Default to "")
- **type: string** - Type of input (Default to "text")

## Example
```javascript
_prompt("Please enter your name", "Harry Potter").then(person => {
	if (person == null || person == "") {
		txt = "User cancelled the prompt.";
	}
	else {
		txt = "Hello " + person + "! How are you today?";
	}
})
```

# Line Breaks
To display line breaks inside a popup box, use a back-slash followed by the character n.

## Example
```javascript
_alert("Hello\nHow are you?");
```
