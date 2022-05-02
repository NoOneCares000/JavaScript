// Spisak cvorova i njihovih veza 
export var data = {
    "nodes": [{ "id": "A" }, { "id": "B" }, { "id": "C" }, { "id": "D" }, { "id": "E" }, { "id": "F" }],
    "edges": [{ "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "A", "to": "F" }, { "from": "C", "to": "A" }, { "from": "A", "to": "D" }, { "from": "E", "to": "B" }, { "from": "F", "to": "D" }]
}

var mapData = {}
var chart

// Metoda za iscrtavanje grafa u div-u koji sa id="container"
function renderGraph() {
    document.getElementById("container").innerHTML = "";
    anychart.data.set(data);
    chart = anychart.graph(data);
    chart.title("Primer jednog obicnog grafa");
    chart.container("container").draw();
    anychart.color.darken("#00FF00", 0.5);

    document.getElementById('delEdge').innerHTML = "";
    document.getElementById('from').innerHTML = "";
    document.getElementById('to').innerHTML = "";
    data.edges.forEach(n => {
        let edge = document.createElement('option');
        edge.value = n.from + '-' + n.to;
        edge.innerHTML = n.from + '-' + n.to;
        document.getElementById('delEdge').appendChild(edge);
    })
    data.nodes.forEach(n => {
        let node = document.createElement('option');
        let node2 = document.createElement('option');
        node.value = n.id;
        node2.value = n.id;
        node.innerHTML = n.id;
        node2.innerHTML = n.id;
        document.getElementById('from').appendChild(node)
        document.getElementById('to').appendChild(node2)
    })

    convertDataToMap()
    console.log(mapData)
} 

function addNewNode() {
    let newNodeValue = document.getElementById('addNode').value
    if (!Object.keys(mapData).includes(newNodeValue)) {
        data.nodes.push({id: newNodeValue})
        renderGraph()
    }
}

function addNewEdge() {
    let fromNode = document.getElementById('from').value
    let toNode =  document.getElementById('to').value
    if (!mapData[fromNode].includes(toNode)) {
        data.edges.push({from: fromNode, to: toNode})
        renderGraph()
    }
}

function deleteEdge() {
    let selectedValue = document.getElementById('delEdge').value
    data.edges = data.edges.filter(edge => edge.from + '-' + edge.to != selectedValue)
    renderGraph()
}

function convertDataToMap() {
    data.nodes.forEach(node => mapData[node.id] = [])
    data.edges.forEach(edge => mapData[edge.from].push(edge.to))
}

let visitedNodes = []

function findValue (current, goal, path = '') {
    if (visitedNodes.includes(current))
        return ""

    if (goal == current)
        return path + '->' + current

    visitedNodes.push(current)

    let newPath = ""
    for (let i = 0; i < mapData[current].length; i++) {
        newPath = findValue(mapData[current][i], goal, path + '->' + current)
        if (newPath)
            break
    }

    return newPath 
}

function inicializeFindValue() {
    visitedNodes = []
    console.log(findValue(document.getElementById('start').value, document.getElementById('end').value))
}

function listNodes(current, list = '') {
    if (!list.includes(current))
        list+=current

}

// Poziv metode za ispis
anychart.onDocumentReady(renderGraph);

