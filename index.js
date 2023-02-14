const request = require('postman-request');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=23c24b156e579a815c402493301b9c65'

request({url:url, json:true}, (error, response)=>{
  if(error){
    console.log('Unable to connect to weather service!')
  }
})


const geocodeUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Indore&limit=1&appid=23c24b156e579a815c402493301b9c65'

request({url:geocodeUrl,json:true},(error, response)=>{
  const latitude = response.body[0].lat
  const longitude = response.body[0].lon
  console.log(latitude,longitude)
})