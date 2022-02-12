![js-pipy-social](https://banners.beyondco.de/%40htibor%2Fjs-pipy.png?theme=dark&packageManager=npm+install&packageName=%40htibor%2Fjs-pipy&pattern=autumn&style=style_2&description=Make+your+code+to+prettier+with+pipeline.&md=1&showWatermark=0&fontSize=100px&images=puzzle)

# js-pipy
Use pipeline to prettier code.

# Installation guide
- clone this repo locally
- `npm i @htibor/js-pipy --save`

# Usage
```js
const {pipy} = require('@htibor/js-pipy');

// example functions 
const capitalize = str => str.toUpperCase()
const exclaim = str => `${str}!!!`

pipy(capitalize, exclaim)('youareawesome');

// result: YOUAREAWESOME!!!
```
