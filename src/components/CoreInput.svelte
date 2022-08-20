<script>
    import Icon from "./Icon.svelte";
    export let window,coreStats,showdown,classOfMdPrev,previewShow;
    let code = "",html=code,darkMode,lines,root,target,core_stats, converter = new showdown.Converter(),showdown_html,markdown_to_html,preview_class,loadedMDH;
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    $: lines = code.split("\n").length;
    $: html = hljs.highlight(code, { language: "markdown" }).value;
    var sync_scroll = (ev) =>{
        let lftScroll = ev.target.scrollLeft, tpScroll = ev.target.scrollTop;
        root.querySelector(".numbar").scrollTop=(tpScroll);
        target.scrollLeft=lftScroll;
        target.scrollTop=tpScroll;
    }
    $: showdown_html = converter.makeHtml(code);
    $: core_stats = {
      code:{n_of_l:lines,
      n_of_c:code.length,
      n_of_w:code.split(" ").length},
      
    }
    $: preview_class=classOfMdPrev;
    var sync_mdH = ()=> {loadedMDH=true}
    $: if(loadedMDH==true){
      core_stats.html={n_of_l:markdown_to_html.innerText.split("\n").length,
      n_of_c:markdown_to_html.innerText.length,
      n_of_w:markdown_to_html.innerText.split(" ").length}
      coreStats=core_stats;
    }
    var deletePrev = () =>{
        preview_class="hidden";
        previewShow=false;
    }
    $: if(previewShow==true){
        preview_class="shown"
    }else{
        preview_class="hidden"
    }
</script>
<svelte:head>
    {#if darkMode}
        <link rel="stylesheet" href="./css/hljs/atom-one-dark.css">
    {:else}
        <link rel="stylesheet" href="./css/hljs/atom-one-light.min.css">
    {/if}
</svelte:head>
<div bind:this={root} class="coreinput">
<div class="numbar">
    {#each Array(lines) as _,line }
        <span class="number">{line+1}</span><br>
    {/each}
</div>
<div class="textarea preview-{preview_class}">
    <pre bind:this={target}  class="pre syntax"><code class="code">{@html html}</code></pre>
    <textarea on:keydown={sync_scroll} on:input={sync_scroll} on:input={sync_mdH} on:scroll={sync_scroll} bind:value={code}></textarea>
</div>
<div class="markdown_view border-left {preview_class}">
    <div class="upBar border-bottom color-bg-success">
        <div class="preview_title">
            Preview Document
        </div>
        <button on:click={deletePrev} class="btn">
            <Icon iconName="close"/>
        </button>
    </div>
    <div bind:this={markdown_to_html} class="core">{@html showdown_html}</div>
</div>
</div>
<style>
    *::-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background-color:transparent;
    }
    *::-webkit-scrollbar-thumb{
        background-color: rgba(0, 255, 255, 0.206);
    }
    *::-webkit-scrollbar-corner,*::-webkit-scrollbar-track{
        background-color: transparent;
    }
    *::-webkit-scrollbar-button{
       height: 0;
       width: 0;
    }
    div.coreinput{
        height: 100%;
        background-color: transparent;
        resize: none;
        border-radius: 0;
        width: calc(100% - 2px);
        overflow: hidden;
        display: flex;
    }
    div.numbar{
        padding:0 10px 10px;
    }
    div.textarea{
        position: relative;
        height: 100%;
        width: 50%;
    }
    textarea,.pre.syntax .code,div.numbar{
        font-size: 14px;
        font-family:monospace;
    }
    .pre.syntax,div.numbar{
        padding-bottom: 14px;
    }
    textarea,.pre.syntax,div.numbar,div.markdown_view div.core{
        overflow: scroll;
    }
    div.numbar::-webkit-scrollbar{
        height: 0;
        width: 0;
    }
    textarea,.pre.syntax{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0; 
        word-wrap: break-word;
        white-space: pre;
        overflow-wrap: normal;
    }
    div.textarea textarea{
        background: transparent;
        outline:none ;
        border-radius: 0;
        resize: none;
        border: none;
        caret-color: blueviolet;
        color: rgba(0, 136, 255, 0);
        padding: 0;
    }
    textarea::selection{
        background-color: rgba(0, 255, 255, 0.176);
        color: transparent;
    }
    .markdown_view{
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    div.upBar{
        height: 30px;
        display: flex;
        padding: 5px;
    }
    div.upBar .btn{
        padding: 0 2px;
        margin-left: auto;
        outline: none;
    }
    div.markdown_view div.core{
        padding: 10px;
    }
    .hidden{
        display: none;
        width: 0%;
    }
    div.textarea.preview-hidden{
        width: 100% !important;
    }
    div.markdown_view code{
        font-size: unset;
    }
</style>