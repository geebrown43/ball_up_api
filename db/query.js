const db = require('./connection')

getAllRecCenters = () => {
    return db.select('*').from('ballcourts')
}



module.exports = {
getAllRecCenters,
}