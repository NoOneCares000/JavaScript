class Node {
    constructor(value) {
        this.value = value
        this.links = []
    }

    addLink(link) {
        this.link.push(link)
    }

    removeLink(link) {
        this.link = this.link.filter(element => link !== element)
    }

    removeLinkByIndex(index) {
        this.link.splice(index, 1)
    }
}

class Link {
    constructor(to, from, value = 0) {
        this.value = value
        this.to = to
        this.from = from
    }
}

class Graph {
    constructor() {
        this.nodeList = []
    }

    addNode(node) {
        this.nodeList.push(node)
    }

    addLink(firstNode, secondNode, value = 0) {
        let link = new Link(firstNode, secondNode, value)
        firstNode.links.push(link)
        secondNode.links.push(link)
    }

    addDirectionalLink(firstNode, secondNode, value = 0) {
        let link = new Link(firstNode, secondNode, value)
        firstNode.links.push(link)
    }
}