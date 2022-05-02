import { data } from "./renderer.js"

function getGraphSize() {
    document.getElementById('velicinaGrafa').innerHTML = 'Graf ima ' + data.nodes.length + ' cvorova i ' + data.edges.length + ' veza'
}

window.onload = getGraphSize()