# charactersRemaining
Show characters remaining on an html input with a maxlength

## Example use

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="jquery.charactersRemaining.js"></script>
</head>
<body>
<textarea maxlength="100"></textarea>
<script>
jQuery('textarea').charactersRemaining();
</script>
</body>
</html>
```

## Options

```javascript
$('input').charactersRemaining({
	className:  'remaing'
});
```

Attribute			| Type				| Default		        | Description
---						| ---					| ---				        | ---
`className`		| *string*		| `charRemaining`		| Classname to apply to new element containing chracter count.

