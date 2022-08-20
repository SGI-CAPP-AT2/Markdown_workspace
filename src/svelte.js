import App from './App.svelte';
import showdown from 'showdown';
import { AppCore } from './scripts/core';
const fs = require('fs');

showdown.setFlavor('github');
const app = new App({
	target: document.body,
	props: {
		win:window,
		showdown:showdown,
		fsys:fs,
		AppCore:AppCore
	}
});

export default app;