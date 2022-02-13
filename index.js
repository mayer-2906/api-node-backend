const axios=require("axios");
const express = require('express')
const app = express()

const baseUrl="https://swapi.dev/api/people/";

const consultPeople = async () => {
  try {
    const query = await axios({method:'get', url:baseUrl})
    const data = query.data.results;
    const peoples = data.map((person)=>({'name':person.name,'height':person.height})).filter((personaje)=>Number.parseInt(personaje.height)>=100);
    // we show the characters on the console
    console.log("Characters de Star Wars: ",peoples);
    return peoples;
  } catch(error){
    return error.message;
  }
}

app.get('/', function (req, res) {
  ///res.send('Hello World')
  const data = async () =>{
    const resol = await consultPeople();
    const peoples = JSON.stringify(resol);
    res.send(peoples)
  }
  data()
})

app.listen(3030)
