function setSceneTv() {
    document.getElementById('sceneTv').setAttribute('visible', 'true')
    document.getElementById('sceneMain').setAttribute('visible', 'false')
    document.getElementById('sceneControl').setAttribute('visible', 'false')
    document.getElementById('sceneEditing').setAttribute('visible', 'false')
    document.getElementById('sceneStudio').setAttribute('visible', 'false')
    document.getElementById('sceneMakeup').setAttribute('visible', 'false')
}
function setSceneMain() {
    document.getElementById('sceneTv').setAttribute('visible', 'false')
    document.getElementById('sceneMain').setAttribute('visible', 'true')
    document.getElementById('sceneControl').setAttribute('visible', 'false')
    document.getElementById('sceneEditing').setAttribute('visible', 'false')
    document.getElementById('sceneStudio').setAttribute('visible', 'false')
    document.getElementById('sceneMakeup').setAttribute('visible', 'false')
}

function setSceneControl() {
    document.getElementById('sceneTv').setAttribute('visible', 'false')
    document.getElementById('sceneMain').setAttribute('visible', 'false')
    document.getElementById('sceneControl').setAttribute('visible', 'true')
    document.getElementById('sceneEditing').setAttribute('visible', 'false')
    document.getElementById('sceneStudio').setAttribute('visible', 'false')
    document.getElementById('sceneMakeup').setAttribute('visible', 'false')
}

function setSceneEditing() {
    document.getElementById('sceneTv').setAttribute('visible', 'false')
    document.getElementById('sceneMain').setAttribute('visible', 'false')
    document.getElementById('sceneControl').setAttribute('visible', 'false')
    document.getElementById('sceneEditing').setAttribute('visible', 'true')
    document.getElementById('sceneStudio').setAttribute('visible', 'false')
    document.getElementById('sceneMakeup').setAttribute('visible', 'false')
}

function setSceneStudio() {
    document.getElementById('sceneTv').setAttribute('visible', 'false')
    document.getElementById('sceneMain').setAttribute('visible', 'false')
    document.getElementById('sceneControl').setAttribute('visible', 'false')
    document.getElementById('sceneEditing').setAttribute('visible', 'false')
    document.getElementById('sceneStudio').setAttribute('visible', 'true')
    document.getElementById('sceneMakeup').setAttribute('visible', 'false')
}

function setSceneMakeup() {
    document.getElementById('sceneTv').setAttribute('visible', 'false')
    document.getElementById('sceneMain').setAttribute('visible', 'false')
    document.getElementById('sceneControl').setAttribute('visible', 'false')
    document.getElementById('sceneEditing').setAttribute('visible', 'false')
    document.getElementById('sceneStudio').setAttribute('visible', 'false')
    document.getElementById('sceneMakeup').setAttribute('visible', 'true')
}