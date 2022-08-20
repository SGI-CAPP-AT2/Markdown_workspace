<script>
    import Icon from "./Icon.svelte";
    import Workspace from "./leftBar/Workspace.svelte";
    export let LeftBarWidth, topend, window, fs, filesOpened, AppCore;
    let moving = false,countedWidth=140,maxWidth,movingClass="resize",left,minWidth=140;
    function mousedown(){
        movingClass="resize";
        if(countedWidth!=0){
            moving=true;
        }else{
            countedWidth=140;
        }
    }
    function mousemove(e){
        if(moving==true){
        let width = e.clientX - left;
        if(e.clientX<(maxWidth-7)&&width>minWidth){
            countedWidth=width;
            movingClass="moving"
        }else if(width<minWidth-100&&width>0){
            moving=false;
            countedWidth=0;
            movingClass="click"
            return
        }
        }
    }
    function mouseup(){
        movingClass="resize"
        moving=false;
        movingClass="first"
    }
    left = countedWidth;

</script>
<div style="top:{topend}px;height: calc(100vh - {topend}px);" bind:clientWidth={LeftBarWidth} class="color-bg-default left-bar border-right">
    <div bind:clientWidth={left} class="icns color-bg-accent ">
        <div class="top">
            <button class="btn btn-outline" type="button">
                <Icon iconName="folder"/>
            </button>
            <button class="btn " type="button">
                <Icon iconName="gif"/>
            </button>
            <button class="btn " type="button">
                <Icon iconName="text_format"/>
            </button>
        </div>
        <div class="base">
            <button class="btn " type="button">
                <Icon iconName="cloud_upload"/>
            </button>
            <button class="btn " type="button">
                <Icon iconName="preview"/>
            </button>
        </div>
    </div>
    <div class="toolsAndData">
        <div bind:clientWidth={countedWidth} style="width:{countedWidth+"px"}" class="main_containt">
        <Workspace AppCore={AppCore} bind:files={filesOpened} fs={fs} window={window}/>

        </div>
        <div on:mousedown={mousedown} class="resizer border-left hover-bg-change {movingClass}"></div>
    </div>
</div>
<svelte:window bind:innerWidth={maxWidth} on:mousemove={mousemove} on:mouseup={mouseup}></svelte:window>
<style>
    div.left-bar{
        user-select: none;
        -webkit-user-select: none;
    }
    div.icns,div.left-bar,div.icns div.top,div.icns div.base,div.toolsAndData{
        display: flex;
    }
    div.icns, div.icns div.top,div.icns div.base{
        flex-direction: column;
    }
    div.icns{
        padding: 4px;
    }
    div.left-bar{
        position: fixed;
        left: 0;
    }
    button:focus{
        outline: none;
    }
    div.icns button{
        outline: none;
        display: inline-flex;
        vertical-align: middle;
        margin-bottom: 5px;
        font-size: x-large;
        padding: 2px;
    }
    div.icns div.top{
        margin-top: 0;
    }
    div.icns div.base{
        margin-top: auto;
    }
    .main_containt{
        width: 140px;
    }
    div.resizer{
        width: 2.5px;
        margin-left: auto;
    }
    .resize{
        cursor: e-resize;
    }
    .moving{
        background-color: rgba(210, 105, 30, 0.447);
        cursor: e-resize;
    }
    .click{
        cursor:  pointer;
    }
</style>