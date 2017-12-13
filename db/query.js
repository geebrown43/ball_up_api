const db = require('./connection')

getAllRecCenters = () => {
    return db('ballcourts')
}



module.exports = {
getAllRecCenters,
}