import React, { Component } from "react";
import $ from 'jquery';
import "./App.css";

  let dataPC;
  let dataPS4;
  let dataXBOX;
  let dataSWITCH;

    $.getJSON('https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json', function (data) {
        dataPC = data;
        console.log(dataPC);
    });

    $.getJSON('https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPS4.json', function (data) {
        dataPS4 = data;
        console.log(dataPS4);
    });

    $.getJSON('https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensXB1.json', function (data) {
        dataXBOX = data;
        console.log(dataXBOX);
    });

    $.getJSON('https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensSWI.json', function (data) {
        dataSWITCH = data;
        console.log(dataSWITCH);
    });

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'PC'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleWeaponChange = this.handleWeaponChange.bind(this);
    this.handleWeaponSubmit = this.handleWeaponSubmit.bind(this);
  }

  handleWeaponChange(event) {
    this.setState({value: event.target.value});
    document.getElementById("gunSelector").style.display = "block";
    document.getElementById("rivenSelector").style.display = "none";
  }

  handleWeaponSubmit(event) {
    console.log(this.state.value + " selected.");
    event.preventDefault();
  };

  handleChange(event) {
    this.setState({value: event.target.value});
    document.getElementById("gunSelector").style.display = "none";
    document.getElementById("rivenSelector").style.display = "block";
  }

  handleSubmit(event) {
    console.log('System: ' + this.state.value);
    document.getElementById("gunSelect").style.display = "block";
    document.getElementById("gunSelector").style.display = "block";
    document.getElementById("rivenSelector").style.display = "none";
    document.getElementById("Rivens").innerHTML = "";
  switch(this.state.value) {
   case "PC":
    console.log(dataPC);
    let i = 0;
    for(i = 0; i < dataPC.length; i++){
      let divTag = document.createElement("div");
      if (dataPC[i].rerolled === false){
        divTag.className = "unrolled";
       }
       else if (dataPC[i].rerolled === true){
        divTag.className = "rolled";
       };
      
      if (dataPC[i].compatibility === null){
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + "Veiled" + "<br/>" + " Item Type: " + dataPC[i].itemType + "<br/>" + " Rerolled: " + dataPC[i].rerolled + "<br/>" +  " Average Price: " + dataPC[i].avg + "<br/>" + " Standard Deviation: " + dataPC[i].stddev + "<br/>" + "<br/>";
        divTag.id = "Veiled " + dataPC[i].itemType;
        divTag.className = "veiled";
        document.getElementById("Rivens").appendChild(divTag);
      }
      else {
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + dataPC[i].compatibility + "<br/>" + " Item Type: " + dataPC[i].itemType + "<br/>" + " Rerolled: " + dataPC[i].rerolled + "<br/>" +  " Average Price: " + dataPC[i].avg + "<br/>" + " Standard Deviation: " + dataPC[i].stddev + "<br/>" + "<br/>";
          if (dataPC[i].compatibility.split(' ')[0] === "<ARCHWING>"){
            divTag.id = dataPC[i].compatibility.split(' ')[1] + " " + i;
            document.getElementById("Rivens").appendChild(divTag);
          }
          else{
            divTag.id = dataPC[i].compatibility + " " + i;
            document.getElementById("Rivens").appendChild(divTag);
          };
      };
    };

    break;
   case "PS4":
    console.log(dataPS4);
    let j = 0;
    for(j = 0; j < dataPS4.length; j++){
      let divTag = document.createElement("div");
      if (dataPS4[j].rerolled === false){
        divTag.className = "unrolled";
       }
       else if (dataPS4[j].rerolled === true){
        divTag.className = "rolled";
       };
      
      if (dataPS4[j].compatibility === null){
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + "Veiled" + "<br/>" + " Item Type: " + dataPS4[j].itemType + "<br/>" + " Rerolled: " + dataPS4[j].rerolled + "<br/>" +  " Average Price: " + dataPS4[j].avg + "<br/>" + " Standard Deviation: " + dataPS4[j].stddev + "<br/>" + "<br/>";
        divTag.id = "Veiled " + dataPS4[j].itemType;
        divTag.className = "veiled";
        document.getElementById("Rivens").appendChild(divTag);
      }
      else {
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + dataPS4[j].compatibility + "<br/>" + " Item Type: " + dataPS4[j].itemType + "<br/>" + " Rerolled: " + dataPS4[j].rerolled + "<br/>" +  " Average Price: " + dataPS4[j].avg + "<br/>" + " Standard Deviation: " + dataPS4[j].stddev + "<br/>" + "<br/>";
          if (dataPS4[j].compatibility.split(' ')[0] === "<ARCHWING>"){
            divTag.id = dataPS4[j].compatibility.split(' ')[1] + " " + j;
            document.getElementById("Rivens").appendChild(divTag);
          }
          else{
            divTag.id = dataPS4[j].compatibility + " " + j;
            document.getElementById("Rivens").appendChild(divTag);
          };
      };
    };

    break;
   case "XBOX":
    console.log(dataXBOX);
    let k = 0;
    for(k = 0; k < dataXBOX.length; k++){
      let divTag = document.createElement("div");
      if (dataXBOX[k].rerolled === false){
        divTag.className = "unrolled";
       }
       else if (dataXBOX[k].rerolled === true){
        divTag.className = "rolled";
       };
      
      if (dataXBOX[k].compatibility === null){
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + "Veiled" + "<br/>" + " Item Type: " + dataXBOX[k].itemType + "<br/>" + " Rerolled: " + dataXBOX[k].rerolled + "<br/>" +  " Average Price: " + dataXBOX[k].avg + "<br/>" + " Standard Deviation: " + dataXBOX[k].stddev + "<br/>" + "<br/>";
        divTag.id = "Veiled " + dataXBOX[k].itemType;
        divTag.className = "veiled";
        document.getElementById("Rivens").appendChild(divTag);
      }
      else {
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + dataXBOX[k].compatibility + "<br/>" + " Item Type: " + dataXBOX[k].itemType + "<br/>" + " Rerolled: " + dataXBOX[k].rerolled + "<br/>" +  " Average Price: " + dataXBOX[k].avg + "<br/>" + " Standard Deviation: " + dataXBOX[k].stddev + "<br/>" + "<br/>";
          if (dataXBOX[k].compatibility.split(' ')[0] === "<ARCHWING>"){
            divTag.id = dataXBOX[k].compatibility.split(' ')[1] + " " + k;
            document.getElementById("Rivens").appendChild(divTag);
          }
          else{
            divTag.id = dataXBOX[k].compatibility + " " + k;
            document.getElementById("Rivens").appendChild(divTag);
          };
      };
    };

    break;
   case "SWITCH":
    console.log(dataSWITCH);
    let l = 0;
    for(l = 0; l < dataSWITCH.length; l++){
      let divTag = document.createElement("div");
      if (dataSWITCH[l].rerolled === false){
        divTag.className = "unrolled";
       }
       else if (dataSWITCH[l].rerolled === true){
        divTag.className = "rolled";
       };
      
      if (dataSWITCH[l].compatibility === null){
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + "Veiled" + "<br/>" + " Item Type: " + dataSWITCH[l].itemType + "<br/>" + " Rerolled: " + dataSWITCH[l].rerolled + "<br/>" +  " Average Price: " + dataSWITCH[l].avg + "<br/>" + " Standard Deviation: " + dataSWITCH[l].stddev + "<br/>" + "<br/>";
        divTag.id = "Veiled " + dataSWITCH[l].itemType;
        divTag.className = "veiled";
        document.getElementById("Rivens").appendChild(divTag);
      }
      else {
        // eslint-disable-next-line
        divTag.innerHTML = "Weapon: " + dataSWITCH[l].compatibility + "<br/>" + " Item Type: " + dataSWITCH[l].itemType + "<br/>" + " Rerolled: " + dataSWITCH[l].rerolled + "<br/>" +  " Average Price: " + dataSWITCH[l].avg + "<br/>" + " Standard Deviation: " + dataSWITCH[l].stddev + "<br/>" + "<br/>";
          if (dataSWITCH[l].compatibility.split(' ')[0] === "<ARCHWING>"){
            divTag.id = dataSWITCH[l].compatibility.split(' ')[1] + " " + l;
            document.getElementById("Rivens").appendChild(divTag);
          }
          else{
            divTag.id = dataSWITCH[l].compatibility + " " + l;
            document.getElementById("Rivens").appendChild(divTag);
          };
      };
    };

    break;
  default:
    console.log("None Selected");
};
this.state.value = "Acceltra";
    event.preventDefault();
  };

//Button Commands------------------------------------------------------------------------------------------------------
    handleUnrolledClick() {
      let unrolled = document.querySelectorAll(".unrolled");
      let rolled = document.querySelectorAll(".rolled");
      let veiled = document.querySelectorAll(".veiled");
      let z;
      for ( z = 0; z < unrolled.length; z++) {
        unrolled[z].style.display = "none";
      };
      for ( z = 0; z < rolled.length; z++) {
        rolled[z].style.display = "block";
      };
      for ( z = 0; z < veiled.length; z++) {
        veiled[z].style.display = "none";
      };
    };

    handleRolledClick() {
      let unrolled = document.querySelectorAll(".unrolled");
      let rolled = document.querySelectorAll(".rolled");
      let veiled = document.querySelectorAll(".veiled");
      let z;
      for ( z = 0; z < unrolled.length; z++) {
        unrolled[z].style.display = "block";
      };
      for ( z = 0; z < rolled.length; z++) {
        rolled[z].style.display = "none";
      };
      for ( z = 0; z < veiled.length; z++) {
        veiled[z].style.display = "none";
      };
    };
  
    handleVeiledClick() {
      let unrolled = document.querySelectorAll(".unrolled");
      let rolled = document.querySelectorAll(".rolled");
      let veiled = document.querySelectorAll(".veiled");
      let z;
      for ( z = 0; z < unrolled.length; z++) {
        unrolled[z].style.display = "none";
      };
      for ( z = 0; z < rolled.length; z++) {
        rolled[z].style.display = "none";
      };
      for ( z = 0; z < veiled.length; z++) {
        veiled[z].style.display = "block";
      };
    };

    handleAllClick() {
      let unrolled = document.querySelectorAll(".unrolled");
      let rolled = document.querySelectorAll(".rolled");
      let veiled = document.querySelectorAll(".veiled");
      let z;
      for ( z = 0; z < unrolled.length; z++) {
        unrolled[z].style.display = "block";
      };
      for ( z = 0; z < rolled.length; z++) {
        rolled[z].style.display = "block";
      };
      for ( z = 0; z < veiled.length; z++) {
        veiled[z].style.display = "block";
      };
    };




  render() {
    return (
      
      <div id="container">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>   
     
      {/* <Riven/> */}

      {/* <Trader/> */}

      <form onSubmit={this.handleSubmit}>
        <label>
          Select your system:
          <select id="systemSelect" value={this.state.value} onChange={this.handleChange}>
            <option value="PC">PC</option>
            <option value="PS4">PS4</option>
            <option value="XBOX">XBOX</option>
            <option value="SWITCH">SWITCH</option>
          </select>
        </label>
        <input id="rivenSelector" type="submit" value="Submit" />
      </form>

      <br/>

      <div id="buttonContainer">
      <button onClick={() => this.handleUnrolledClick()}>View Unrolled Riven Data</button>
      <button onClick={() => this.handleRolledClick()}>View Rerolled Riven Data</button>
      <button onClick={() => this.handleVeiledClick()}>View Veiled Riven Data</button>
      <button onClick={() => this.handleAllClick()}>View All Riven Data</button>
      </div>

      <br/>

      <form id="gunSelect" onSubmit={this.handleWeaponSubmit}>
        <label>
          Select your Weapon:
          <select id="gunSelectList" value={this.state.value} onChange={this.handleWeaponChange}>
{/* Beginning of weapons list */}
            <option value="Acceltra">Acceltra</option>
            <option value="Ack & Brunt">Ack & Brunt</option>
            <option value="Gun3">Acrid</option>
            <option value="Gun4">Afuris</option>
            <option value="Gun1">Agkuza</option>
            <option value="Gun2">Akarius</option>
            <option value="Gun3">Akbolto</option>
            <option value="Gun4">Akbronco</option>
            <option value="Gun1">Akjagara</option>
            <option value="Gun2">Aklato</option>
            <option value="Gun3">Aklex</option>
            <option value="Gun4">Akmagnus</option>
            <option value="Gun1">Aksomati</option>
            <option value="Gun2">Akstiletto</option>
            <option value="Gun3">Akvasto</option>
            <option value="Gun4">Akzani</option>
            <option value="Gun1">Amphis</option>
            <option value="Gun2">Amprex</option>
            <option value="Gun3">Angstrum</option>
            <option value="Gun4">Anku</option>
            <option value="Gun1">Ankyros</option>
            <option value="Gun2">Arca Plasmor</option>
            <option value="Gun3">Arca Scisco</option>
            <option value="Gun4">Arca Titron</option>
            <option value="Gun1">Argonak</option>
            <option value="Gun2">Artax</option>
            <option value="Gun3">Astilla</option>
            <option value="Gun4">Atomos</option>
            <option value="Gun1">Atterax</option>
            <option value="Gun2">Attica</option>
            <option value="Gun3">Azima</option>
            <option value="Gun4">Ballistica</option>
            <option value="Gun1">Basmu</option>
            <option value="Gun2">Battacor</option>
            <option value="Gun3">Baza</option>
            <option value="Gun4">Bo</option>
            <option value="Gun1">Boar</option>
            <option value="Gun2">Boltace</option>
            <option value="Gun3">Bolto</option>
            <option value="Gun4">Boltor</option>
            <option value="Gun1">Brakk</option>
            <option value="Gun2">Braton</option>
            <option value="Gun3">Broken Scepter</option>
            <option value="Gun4">Broken War</option>
            <option value="Gun1">Bronco</option>
            <option value="Gun2">Burst Laser</option>
            <option value="Gun3">Burston</option>
            <option value="Gun4">Buzlok</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
            <option value="Gun1">Gun1</option>
            <option value="Gun2">Gun2</option>
            <option value="Gun3">Gun3</option>
            <option value="Gun4">Gun4</option>
{/* End of all weapons. Oof. */}


          </select>
        </label>
        <input id="gunSelector" type="submit" value="Submit" />
      </form>


<div id="Rivens"></div>
      </div>
    );
  }
};

export default App;