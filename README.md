# What does this script do?

Runs headless chrome when initiated and with given URL and file name, takes screenshot and saves it locally.

# How to run...

Edit these variables.
```javascript
const url = 'http://yoururl.com'
const name = 'nameOfFile.png'
const runHeadless = true or false //recommended true
const width = 1000 //px values for width of screenshot
const height = 500 //px values for height of screenshot
```
And then run in terminal/cmd.
> node main.js