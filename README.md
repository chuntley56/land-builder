# Landing Page Builder Tool
A tool that helps you build a large number of landing pages. Uses JsRender to dynamically pull in JSON data to create html. 

## Demo
https://chuntley56.github.io/land-builder/land-builder/?market=bs&source=index

## Front end instructions
1. Select the market (bs-baltimore, ct-chicago, etc.)
2. Select the referral source (index, email, etc.)
3. Click "Hide Builder Menu" for production view
4. To turn menu back on, delete "&view=prod" from query string

## Dev instructions
* Data comes from JSON files which are divided by market (bs-baltimore, ct-chicago, etc.)
* HTML must be within JsRender script tag: `<script type="text/x-jsrender" id="mainTemplate"></script>`
* Rendered HTML populates the mainContainer div that comes after the JsRender script tag: `<div class="mainContainer"></div>`
* builder-menu.js only controls the menu, this can be removed for production
