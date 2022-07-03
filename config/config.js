const config = {
    MONGODB_URL: `${process.env.MONGODB_URL} || mongodb://localhost:27017`,
    DATABASE_NAME: 'apimaker'
}

module.exports = config;