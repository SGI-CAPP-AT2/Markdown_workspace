<script>
    import FootBar from "./FootBar.svelte";
    import FileSwitch from "./FileSwitch.svelte";
    import CoreInput from "./CoreInput.svelte";
    export let left, top, window, showdown;
    let windowWidth,windowHeight,inputStats,previewShow=true;
</script>
<div style="top:{top}px;left:{left+1}px;width:{windowWidth-left}px;height:{windowHeight-top}px;" class="app-container">
    <FileSwitch/>
    <CoreInput bind:previewShow={previewShow} classOfMdPrev="shown" showdown={showdown} window={window} bind:coreStats={inputStats}/>
    <FootBar bind:previewShow={previewShow} stats={inputStats}/>
</div>
<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}></svelte:window>
<style>
    div.app-container{
        position: fixed;
        display: flex;
        flex-direction: column;
    }
</style>