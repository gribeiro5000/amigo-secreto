
function logError(err) {
    console.error(err)
}

function returnError(error, req, res, next) {
    logError(error)
    res.status(error.statusCode || 500).send(error.message)
}

module.exports = returnError