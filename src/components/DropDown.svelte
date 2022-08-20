<script>
    import Icon from "./Icon.svelte";
    export let dropdownItems, show, oordinates;
    let x, y, showClass ;
    $: if (show==true){ 
        showClass='shown';
        x = oordinates.x;
        y = oordinates.y;
       }
    var deleteSelf = (ev) =>{
        showClass="hidden"
    }
</script>
<div style="top:{y}px;left:{x}px" on:mouseout={deleteSelf} class="dropDown {showClass}">
{#each dropdownItems as item}
    <div on:click={item.fun} class="item">
        <div class="left">
            {item.name}
        </div>
        <div class="right">
            {#if item.remark=="tree"}
                <Icon iconName="expand_more"/>
            {:else if item.remark=="have_cmd"}
                <span class="color-fg-subtle">
                    {item.cmd}
                </span>
            {/if}
        </div>
    </div>
{/each}
</div>
<style>
    div.dropDown{
        position: fixed;
    }
</style>