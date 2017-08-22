module.exports = {
    port: process.env.PORT || 3020,
    db: process.env.MONGODB_URI || 'mongodb://localhost/noteapp'
}