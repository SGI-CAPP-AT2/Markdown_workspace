<script>
    import Icon from "./Icon.svelte";
    export let window,topend;
    let maxUnMaxIcon = "fullscreen";
    let changeIcon = () =>{
      let wind = window.getCurrentWindow();
      if(wind.isMaximized()){
        maxUnMaxIcon="fullscreen_exit";
      }else{
        maxUnMaxIcon="fullscreen";
      }
    }
    window.addEventListener('resize', changeIcon);
    window.addEventListener("keyup",ev=>{
      if(ev.key=="/"&&ev.ctrlKey==true){
        document.querySelector("input#command").focus()
      }
    })
</script>
<nav bind:clientHeight={topend} class="color-bg-default UnderlineNav UnderlineNav--full">
    <div class="UnderlineNav-container">
      <!-- svelte-ignore a11y-missing-attribute -->
      <div class="UnderlineNav-body">
        <div class="brand-icon"></div>
        <a class="UnderlineNav-item"><u>F</u>ile</a>
        <a class="UnderlineNav-item"><u>T</u>ools</a>
        <a class="UnderlineNav-item"><u>V</u>iew</a>
        <a class="UnderlineNav-item"><u>H</u>elp</a>
      </div>
      <div class="title">
        <input id="command" class="form-control tooltipped" aria-label="use commands as a shortcuts" placeholder="command">
      </div>
      <div class="actions">
        <button on:click={window.minimizeWindow()} class="UnderlineNav-item" href="#url"><Icon className="ico" iconName="minimize"/></button>
        <button on:click={window.maxUnmaxWindow()} class="UnderlineNav-item" href="#url"><Icon className="ico" iconName={maxUnMaxIcon}/></button>
        <button on:click={window.closeWindow()} class="UnderlineNav-item danger" href="#url"><Icon className="ico" iconName="close"/></button>
      </div>
    </div>
</nav>
  <style>
    *{
      outline: none;
    }
    .brand-icon{
      width: 30px;
      height: 24px;
      background-image: url(./../assets/logo.512.png);
      background-size: 20px;
      background-position: center;
      background-repeat: no-repeat;
    }
    button.danger:hover{
      background-color: rgba(255, 0, 0, 0.306);
    }
    nav .UnderlineNav-body{
      padding: 0;
    }
    nav .UnderlineNav-body .UnderlineNav-item{
      padding: 0 10px;
    }
    nav *:not(.actions),nav{
        min-height: fit-content;
    }
    .actions{
        display: flex;
        border-radius: 0;
    }
    .actions button{
      width: 47px;
      border-radius: 0;
      font-size:19px;
      display: inline-flex;
    }
    .title{
      width: calc(100% - 20px);
      height: 100%;
      margin: auto;
      display: flex;
      vertical-align: middle;
      padding: 2px;
      padding-right: 5px;
    }
    .title input{
      margin-top: auto;
      padding:2px 5px;
      margin-left: auto;
      width: 25vw;
      text-overflow: ellipsis;
      max-width: 200px;
    }
    nav{
      -webkit-app-region:drag;
      -webkit-user-select:none;
      user-select: none;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }
    nav a,nav button,nav input{
      -webkit-app-region:no-drag;
    }
  </style>