<script>
    export let iconName, align;
</script>
{#if align="y"}
<span style="margin: auto 0;" class="material-icons">{iconName}</span>
{:else if align="x"}
<span style="margin: 0 auto;" class="material-icons">{iconName}</span>
{:else}
<span style="margin:auto;" class="material-icons">{iconName}</span>
{/if}
