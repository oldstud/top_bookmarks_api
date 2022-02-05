const cityConfig = require('./city.json');

module.exports = class Config {
    static getConfig({ filter }) {
        const firstLetter = filter[0].toUpperCase()
        const filterWord = filter.length > 1 ? firstLetter + (filter.slice(1).toLowerCase()) : firstLetter
        const config = {};
        const cityFiltered = cityConfig.map(item => item.city).filter(cityName => cityName.includes(filterWord))
        config.city = cityFiltered;
        return config;
    }
}