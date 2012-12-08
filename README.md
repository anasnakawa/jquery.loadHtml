## jQuery.loadHtml
just a simple tool to help splitting a large html document into small files and load them using html5 `data-attributes`.. nothing more..nothing less

## Why
it could be useful to speed up the prototyping by making your html markup more reusabale.

## When I SHOULD NOT use it ?
on a live production app/website, since each separate html component will be requested by an `HTTP` request

## How to use it
in your html document/component, just reference the html component using `data-component-url` attribute
```html
<div data-component-url="components/header.html"></div>
<div data-component-url="components/side-bar.html"></div>
<div data-component-url="components/content.html"></div>
<div data-component-url="components/footer.html"></div>
```

## Installing via Bower
```
bower install jquery.loadHtml
```

## Installing via Yeoman
```
yeoman install jquery.loadHtml
```

## Reference
```js
$('body').loadHtml({
	attr: 'data-component-url'		// default data attribute for component url
	, extension: 'html'						// components file extension, if provided, no need to append it in the component-url attribute
	, componentsFolder: ''				// root folder where all the components can be found, if provided, no need to put prepend it in the component-url attribute
});
```

## Credits
created by Anas Nakawa [github](//github.com/anasnakawa), [twitter](//twitter.com/anasnakawa),  
special thanks for by Victor Zamfir [github](//github.com/fschaefer)

## License
Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)