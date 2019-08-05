const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/31d78f97e4a2ffad2bb8608a7ffa24f5/' + latitude + ',' + longitude

    request({url, json:true}, (error, {body}) => {
    if (error) {
        callback("unable to connect to weather services", undefined)
    } else if (body.error) {
        callback("Unable to find location", undefined)
    } else {
        const temp = (body.currently.temperature)
        const rainChance = (body.currently.precipProbability)
        const temp1HourFromNow = (body.hourly.data[0].temperature)
        const temp2HourFromNow = (body.hourly.data[1].temperature)
        const rain
        callback(undefined, body.daily.data[0].summary + " It is currently " + temp + " degrees out. \n " + "next hour: " + temp1HourFromNow )

    }
})}



module.exports = forecast