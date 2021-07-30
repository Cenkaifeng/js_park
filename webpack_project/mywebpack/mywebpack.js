const fs = require('fs');
const babylon = require('babylon')
const traverse = require('babel-traverse').default;
const { create } = require('lodash');


let ID = 0;
function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8');

    const ast = babylon.parse(content, {
        sourceType: "module"
    })

    const dependencies = [];
    traverse(ast, {
        ImportDeclaration: ({node}) => {
            // console.log(node)
            dependencies.push(node.source.value)
        }
    })

    const id = ID++;

    return {
        id,
        filename,
        dependencies
    }
}

function createGraph(entry) {
    const mainAsset = createAsset(entry);

    return mainAsset;
}

const graph = createGraph('./source/entry.js');

console.log(graph)