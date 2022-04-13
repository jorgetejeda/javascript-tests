// Exercise:
// Create a function which it takes a html structure and return the first  missing tag
// Read the test to see what the expected output is.
function htmlStructure(structure) {
    // code
}

// Test your code while you're at it!
// write in the console: node ./exercises/htmlStructure.js
function print(structure) {
    console.log(htmlStructure(structure))
}

const structure = '<div>abc<li><div><p><em><i>test test test</b></em></p>'
print(structure)

module.exports = htmlStructure