# jquery-full-bg

**jQuery plugin para cambiar el fondo de imágenes en tamaño entero y forma aleatoria.**

#### Installation
```js
npm install --save jquery-full-bg
```

##### You need to load jQuery first
```html
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/jquery-full-bg/src/index.js"></script>
```

Before using the plugin you need register as developer then you must set the **CLIENT_ID** to be able to get photos Unsplash API.

```js
window.fullBg.setup(clientId);
```

#### How it works?
```html
<div id="custom-id"></div>
```
```js
$(document).ready(function(){
    window.fullBg.setup(clientId);
    var options = {
    minHeight:'700px', //by default is 800px
    backgroundSize:'contain', // cover
    backgroundPosition:'top center', // center
    backgroundColor:'red', // black
    backgroundImage:'path/img.jpg', //in case that the endpoint responses with an error
    }
    $('#custom-id').FullBg(options);
});
```
