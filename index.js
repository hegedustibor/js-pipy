const pipy = (...args) => (input) => {
    return args.reduce((argument, callback) => {
        return callback(argument)
    }, input)
}

const reversePipy = (...args) => (input) => {
    return args.reverse().reduce((argument, callback) => {
        return callback(argument)
    }, input)
}

module.exports = {pipy, reversePipy};
