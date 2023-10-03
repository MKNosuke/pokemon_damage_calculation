'use strict';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon-species/';

document.addEventListener("DOMContentLoaded", () => {
  //"フシギダネ"をコンソールに出力する
  fetch(POKEAPI_URL + '1')
  .then((response) => {
    response = response.json();
    return response;
  })
  .then((pokemon) => {
    const name = pokemon.names[0].name;
    document.getElementById("test").textContent = name;
  })
}, false);

//動作の流れ
//１．名前に入力されたポケモンの名前を取得し、pokeAPIから対応するデータを取得する
//...日本語版"name"と"index"のjson.jsが必要？