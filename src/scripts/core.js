function setLocalCache(files){
    localStorage.savedCache="true"
    localStorage.nfiles = files.length;
    for(let file of files){
        localStorage["file"+files.indexOf(file)]=JSON.stringify(file);
    }
}
function getLocalCache(){
    let l = parseInt(localStorage.nfiles),files=[];
    for(let i=0;i<l;i++){
        files.push(JSON.parse(localStorage["file"+i]));
    }
    return files;
}
function isLocalCache(){
    if(localStorage.savedCache=="true"){
        return true;
    }else{
        return false;
    }
}
const AppCore = {
    setLocalCache:setLocalCache,
    getLocalCache:getLocalCache,
    isLocalCache:isLocalCache
}
module.exports = {
    AppCore
}