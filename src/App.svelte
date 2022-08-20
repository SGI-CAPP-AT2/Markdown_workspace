<script>
	import NavBar from './components/NavBar.svelte';
	import LeftBar from './components/LeftBar.svelte';
	import AppContainer from './components/AppContainer.svelte';
	export let win , showdown, fsys, AppCore;
	let LeftBarWidth,topend,filesOpened;
	$: if(AppCore.isLocalCache()){
		filesOpened=AppCore.getLocalCache()
	}
</script>
<div data-color-mode="auto" data-light-theme="light" 
data-dark-theme="dark" class="app color-bg-default">
<NavBar window={win} bind:topend={topend}/>
<LeftBar AppCore={AppCore} bind:filesOpened={filesOpened} fs={fsys} window={win} topend={topend} bind:LeftBarWidth={LeftBarWidth}/>
<AppContainer showdown={showdown} left={LeftBarWidth} top={topend} window={win}/>
</div>
<style>
	div.app{
		width: 100vw;
		height: 100vh;
	}
</style>