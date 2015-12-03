import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// create global "browser" environment
const documentObject = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
const windowObject = documentObject.defaultView;

// const windowObject = jsdom.jsdom().createWindow('<!DOCTYPE html><html><body></body></html>');
// const documentObject = windowObject.document;

global.window = windowObject;
global.document = documentObject;

Object.keys(window).forEach(function (key) {
	if (!(key in global)) {
		global[key] = window[key];
	}
});


// helper for chai
chai.use(chaiImmutable);

// ignore css
function noop() {
	return null;
}

require.extensions['.css'] = noop;
