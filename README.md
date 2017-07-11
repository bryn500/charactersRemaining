# jquery.charactersRemaining
Show characters remaining on an html input with a maxlength

## Example use

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<textarea maxlength="100"></textarea>
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="jquery.charactersRemaining.js"></script>
<script>
jQuery('textarea').charactersRemaining();
</script>
</body>
</html>
```

## Options

```javascript
$('input').charactersRemaining({
    className:  'charRemaining',
    singleCharacterText: '## character remaining',
    multipleCharacterText: '## characters remaining'
});
```

Attribute		| Type		| Default		        | Description
---			| ---		| ---				| ---
`className`		| *string*	| `charRemaining`		| Classname to apply to new element containing chracter count.
`singleCharacterText`	| *string*	| `## character remaining`	| Text to display when there is only 1 character left
`multipleCharacterText`	| *string*	| `## characters remaining`	| Text to display when there is not 1 character left

