var assert = require('assert');
const {pipy, reversePipy} = require('../index.js');

const capitalize = str => str.toUpperCase()
const exclaim = str => `${str}!!!`

describe("Function", () => {
    it ("should run pipy()", () => {
        let result = pipy(capitalize, exclaim)('testpipe')

        assert.equal(result, 'TESTPIPE!!!')
    })

    it ("should run reversePipy()", () => {
        let result = reversePipy(capitalize, exclaim)('testcompile')

        assert.equal(result, 'TESTCOMPILE!!!')
    })
})
