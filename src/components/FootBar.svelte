<script>
    import Icon from "./Icon.svelte";
    export let stats,previewShow;
    let code_stat_mode="";
    var changeCodeStatMode = () =>{
        if(code_stat_mode=="char"){code_stat_mode="line"}
        else if(code_stat_mode=="line"){ code_stat_mode = "word"}
        else{code_stat_mode="char"}
        console.log(code_stat_mode)
    }
    var togPreviewShow = () =>{
        if(previewShow==true){ previewShow=false}
        else {previewShow=true}
    }
</script>
<div class="color-bg-severe footbar border-top">
    <div class="left">
    <div class="grp left">
    <button on:click={changeCodeStatMode} class="ft-btn btn btn-1">
        <Icon iconName="data_usage" className="ico"/>
    </button>
    {#if stats}
    {#if stats.html}
    {#if (code_stat_mode=="char")}
    <button class="ft-btn btn btn-2">{stats.html.n_of_c} char(s)</button>
    {:else if (code_stat_mode=="line")}
    <button class="ft-btn btn btn-2">{stats.html.n_of_l} line(s)</button>
    {:else}
    <button class="ft-btn btn btn-2">{stats.html.n_of_w} word(s)</button>
    {/if}
    {/if}
    {/if}</div>
    <div class="grp left">
        <button on:click={changeCodeStatMode} class="ft-btn btn btn-1">
            <Icon iconName="code" className="ico"/>
        </button>
        {#if stats}
        {#if (code_stat_mode=="char")}
        <button class="ft-btn btn btn-2">{stats.code.n_of_c} char(s)</button>
        {:else if (code_stat_mode=="line")}
        <button class="ft-btn btn btn-2">{stats.code.n_of_l} line(s)</button>
        {:else}
        <button class="ft-btn btn btn-2">{stats.code.n_of_w} word(s)</button>
        {/if}
        {/if}
    </div></div>
    <div class="right">
    <div class="grp">
        <button class="ft-btn btn btn-1">
            <Icon iconName="notifications_off" className="ico"/>
        </button>
        <button class="ft-btn btn btn-2">1</button>
    </div>
    <div class="grp">
        <button on:click={togPreviewShow} class="ft-btn btn btn-1">
            {#if previewShow==true}
            <Icon iconName="visibility_off" className="ico"/>
            {:else}
            <Icon iconName="visibility" className="ico"/>
            {/if}
        </button>
    </div></div>
</div>
<style>
    .footbar{
        height: 25px;
        display: flex;
        width: 100%;
        margin-top: auto;
    }
    button.ft-btn{
        border-radius: 0;
        outline: none;
        background: transparent;
        display: inline-flex;
        vertical-align: middle;
        text-align: center;
        padding: 0 2px 0 2px;
        font-size: 80%;
        border: 0;
    }
    div.left,div.right{
        display: flex;
    }
    div.left{
        margin-right: 0;
    }
    div.right{
        margin-left: auto;
        margin-right: 1px;
    }
    div.grp{
        display: flex;
    }
    div.grp:hover{
        background-color: rgba(0, 73, 136, 0.577);
    }
</style>