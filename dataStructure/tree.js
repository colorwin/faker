class Node {
    constructor (key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

function insertNode (parent, node) {
    if (node.key < parent.key) {
        if (parent.left === null) {
            parent.left = node
            return true
        } else {
            insertNode(parent.left, node)
        }
    } else if (node.key > parent.key) {
        if (parent.right === null) {
            parent.right = node
            return true
        } else {
            insertNode(parent.right, node)
        }
    } else {
        return false
    }
}

function getMinNode (node) {
    if (node.left === null) {
        return node
    } else {
        return getMinNode(node.left)
    }
}

function getMaxNode (node) {
    if (node.right === null) {
        return node
    } else {
        return getMaxNode(node.right)
    }
}

function findKey (node, key) {
    if (key < node.key) {
        if (node.left === null) {
            return false
        } else {
            return findKey (node.left, key)
        }
    } else if (key > node.key) {
        if (node.right === null) {
            return false
        } else {
            return findKey(node.right, key)
        }
    } else {
        return true
    }
}

function minOrderSearch (node, cb) {
    if (node.left) {
        minOrderSearch(node.left, cb)
    }
    cb(node.key)
    if (node.right) {
        minOrderSearch(node.right, cb)
    }
}

function removeNode (node, key) {
    if (node === null) {
        return null
    }
    if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
    } else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
    } else {
        if (node.left === null && key.right === null) {
            node.key = null
            return node
        } else if (node.left === null) {
            node = node.right
            return node
        } else if (node.right === null) {
            node = node.left
            return node
        } else {
            const min = getMinNode(node.right)
            node.key = min.key
            node.right = removeNode(node.right, min.key)
            return node
        }
    }
}

class BinararyTree {
    constructor (key) {
        this.root = null
    }
    
    search (key) {
        if (this.root === null) {
            return null
        } else {
            return findKey(this.root, key)
        }
    }

    min () {
        if (this.root === null) {
            return null
        } else {
            return getMinNode(this.root)
        }
    }

    max () {
        if (this.root === null) {
            return null
        } else {
            return getMaxNode(this.root)
        }
    }

    removeNode (key) {
        if (this.root !== null) {
            removeNode(this.root, key)
        }
    }
    
    insertNode (key) {
        const node = new Node(key)
        if (this.root === null) {
            this.root = node
        } else {
            insertNode(this.root, node)
        }
    }

    midOrderSearch (cb) {
        if (this.root !== null) {
            minOrderSearch(this.root, cb)
        }
    }

    preOrderSearch () {

    }

    postOrderSearch () {

    }
}


const binararyTree = new BinararyTree(1)
binararyTree.insertNode(11)
binararyTree.insertNode(7)
binararyTree.insertNode(15)
binararyTree.insertNode(5)
binararyTree.insertNode(3)
binararyTree.insertNode(9)
binararyTree.insertNode(8)
binararyTree.insertNode(10)
binararyTree.insertNode(13)
binararyTree.insertNode(12)
binararyTree.insertNode(14)
binararyTree.insertNode(20)
binararyTree.insertNode(18)
binararyTree.insertNode(25)

console.log(binararyTree.min())
console.log(binararyTree.max())
console.log(binararyTree.search(3))
binararyTree.midOrderSearch((key) => {
    console.log(key)
})
console.log(binararyTree.root)
console.log(binararyTree.removeNode(7))
console.log(binararyTree.root)