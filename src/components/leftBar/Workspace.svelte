<script>
    import Icon from "../Icon.svelte"
    export let files, window, fs, AppCore;
    var openDir =()=>{
        window.openFolder().then(dir=>{
         let fsRes = fs.readdirSync(dir.filePaths[0])
         console.log(dir.filePaths[0])
         files=[]
         for(let file of fsRes){
            files.push({
                fileURL:dir.filePaths[0]+"\\"+file,
                fileName:file,
                dir:fs.lstatSync(dir.filePaths[0]+"\\"+file).isDirectory() ,
            })
         }
         files=files.sort((a,b)=>{
            a = a.dir.toLowerCase();
            b = b.dir.toLowerCase();

            return (a < b) ? -1 : (a > b) ? 1 : 0;
         })
         AppCore.setLocalCache(files);
         console.log(files,files.length);
        });
    }
    
</script>
<div class="head border-bottom">
    Files
</div>
{#if files}
<div class="ulIsChild">
<ul class="files">
    {#each files as file}
        <li class="file border-bottom border-subtle">
            {#if file.dir==false}
            <Icon align="y" iconName="draft"/>
            {:else}
            <Icon align="y" iconName="folder"/>
            {/if}
            <span class="name">
            {file.fileName}</span>
        </li>
    {/each}
</ul></div>
{:else}
<div class="openFolder">
    <span class="color-fg-subtle">
        No folder is opened
    </span>
    <button on:click={openDir} class="btn">
        Open folder
    </button>
</div>
{/if}
<style>
    *::-webkit-scrollbar{
        width: 0;
        height: 0;
        background-color:transparent;
    }
    div.openFolder{
        display: flex;
        flex-direction: column;
        text-align: center;
        vertical-align: middle;
        padding: 10px;
    }
    .btn{
        outline: none;
        margin: auto;
        margin-top: 10px;
    }
    div.ulIsChild{
        overflow-y: scroll;
        overflow-x: hidden;
        height: calc(100% - 20.287px);
    }
    ul.files{
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    ul.files li{
        width: 100%;
        margin: 0;
        font-size: medium;
        font-size: 14px;
        display: flex;
    }
    ul.files li .name{
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    ul.files li:hover{
        background-color: rgba(0, 255, 255, 0.26);
    }
    div.head{
        width: 100%;
        padding-left: 5px;
    }
</style>