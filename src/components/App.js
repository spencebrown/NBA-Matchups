import React from 'react';
import './App.css';
// import $ from 'jquery';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';


const App = () => {
  

  d3.csv(importedCsvData).then(function(data) {
    data.forEach(function(d) {
      d.Rk = + d.Rk;
      d.TRB = +d.TRB;
      d.AST = +d.AST;
      d.STL = +d.STL;
      d.BLK = +d.BLK;
      d.TOV = +d.TOV;
      d.PTS = +d.PTS;
      d.TSP = +d.TSP;

    }) 
    
      for (var i = 0; i < data.length; i++) {
        for (var y = 0; y < Images.length; y++) {
          if (data[i].Rk === Images[y].id) {
            Object.assign(Images[y], data[i]); //merges 2nd param into first
          }
        }
      }  
    
  });

  const handleBasketballButton =  () => {
    console.log('sup');
  }
  
  
  
  return (
    <div> 

      <div className="basketball-container"> 
      <img className="basketball" src={BasketballButton} onClick={handleBasketballButton} alt="click this basketball button get new matchup"/>
      </div>
      
    
      <div className="cards-container">
        
        
        <PlayerCard testClick = {handleBasketballButton} >
        
          </PlayerCard>

        <PlayerCard >
        
         
        </PlayerCard>
        
        
        </div>

    </div>
    
  )
}

export default App;


