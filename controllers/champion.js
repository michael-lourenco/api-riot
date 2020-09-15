const fetch = require("node-fetch");
const env = require("../env");
const packageJSon = require("../package.json");
const { reponseErrorJson, responseJson } = require("../utils/controller");
const { REGION_URL } = require("../env");

function toJson(data) {
  return data.json();
}

function myMap(funcao) {
  return function (array) {
    return array.map(funcao);
  };
}

function extractAllSummonerInfo(item) {
  return item;
}

function extractSummonerNameAndLeaguePoints(item) {
  const summonerNameAndLeaguePoints = {
    leaguePoints: item.leaguePoints,
    summonerName: item.summonerName,
  };
  return item;
}


async function getChampions() {
    return fetch(`http://ddragon.leagueoflegends.com/cdn/10.18.1/data/${env.languages[0]}/champion.json`)
    .then(res=>res.json())
}



const get = async (req, res) => {
  const payload = await getChampions();
  //const payload =  await getRank;
  console.log(payload);
  res.send(payload);
};



module.exports = {
  get,
};
