const htmlStructure = require('../exercises/htmlStructure')

describe('Create a function which it takes a html structure and return the first  missing tag', () => {
    test('it should return an empty string', () => {
        const expected = ''
        const result = htmlStructure('myName')
        expect(expected).toBe(result)
    })
    test('it should return tag i', () => {
        const expected = 'li'
        const result = htmlStructure("<div>abc<li><div><p><em><i>test test test</b></em></p>")
        expect(expected).toBe(result)
    })
    test('it should return null', () => {
        const result = htmlStructure("<div>it Working</div>")
        expect(result).toBeNull();
    })
})