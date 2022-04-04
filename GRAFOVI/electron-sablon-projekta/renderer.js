// Spisak cvorova i njihovih veza 
var data = {
    "nodes": [{ "id": "A" }, { "id": "B" }, {"id" : "C"},{"id":"D"}, { "id": "E" }, { "id": "F" }, {"id" : "G"},{"id":"H"}, { "id": "I" }, { "id": "J" }, {"id" : "K"}],
    "edges": [{ "from": "A", "to": "B" },{"from":"C", "to":"D"},{"from":"A","to":"D"}, { "from": "K", "to": "G" },{"from":"A", "to":"J"},{"from":"E","to":"F"}, { "from": "K", "to": "H" },{"from":"C", "to":"H"},{"from":"E","to":"J"}, { "from": "H", "to": "B" },{"from":"J", "to":"D"},{"from":"E","to":"D"}, { "from": "C", "to": "B" },{"from":"C", "to":"F"},{"from":"K","to":"C"},{"from":"A","to":"I"}]
}


// Metoda za iscrtavanje grafa u div-u koji sa id="container"
function renderGraph() {
    document.getElementById("container").innerHTML = "";
    anychart.data.set(data);
    chart = anychart.graph(data);
    chart.title("Primer jednog obicnog grafa");
    chart.container("container").draw();
    anychart.color.darken("#00FF00", 0.5);

} 
// Poziv metode za ispis
anychart.onDocumentReady(renderGraph);

