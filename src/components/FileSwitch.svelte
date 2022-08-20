<script>
    import Icon from "./Icon.svelte";
    let windowWidth ;
    var openFile = (e) =>{
      e.target.setAttribute("area-current","page")
    }
</script>
<div class="tabnav color-bg-subtle">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <div on:click={openFile} class="tabnav-tab icon-contain" href="#url" aria-current="page" data-id="url"><span class="name">Index.md</span><button class="btn hidden"><Icon iconName="close"/></button></div>
    <div on:click={openFile} class="tabnav-tab icon-contain" href="#url"><span class="name">markdown.config.json</span> <button class="btn hidden"><Icon iconName="close"/></button></div>
  </nav>
</div>
<svelte:window bind:innerWidth={windowWidth}></svelte:window>
<style>
*{
  outline: none;
  user-select: none;
}
*::-webkit-scrollbar{
  height: 3px;
  background-color: transparent;
}
div[aria-current=page]{
  border-top-color: rgb(255, 141, 141);
}
.tabnav{
  padding:0;
  margin: 0;
}
.tabnav .tabnav-tab{
  display: inline-flex;
  text-align: center;
  vertical-align: middle;
  padding: 2px 8px;
  border-radius: 0%;
}
.tabnav .tabnav-tab button{
  padding: 5px;
  display: inline-flex;
  margin-left: 5px;
  background-color: transparent;
  border: 0;
}

</style>