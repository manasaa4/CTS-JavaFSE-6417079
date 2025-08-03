
import './App.css';
import React from 'react';

// ListofPlayers component
function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, idx) => (
        <li key={idx}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
}

// Scorebelow70 component
function Scorebelow70({ players }) {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return null;
  });
  return (
    <div>
      {players70.map((item, idx) => (
        <li key={idx}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
}

// OddPlayers component using destructuring
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li> First : {first} </li>
      <li> Third : {third} </li>
      <li> Fifth : {fifth}</li>
    </div>
  );
}

// EvenPlayers component using destructuring
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <li> Second : {second} </li>
      <li> Fourth : {fourth} </li>
      <li> Sixth : {sixth}</li>
    </div>
  );
}

// ListofIndianPlayers component
function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((item, idx) => (
        <li key={idx}>Mr. {item}</li>
      ))}
    </div>
  );
}

// Arrays for IndianPlayers
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Main App
function App() {
  // List of 11 players with name and score
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  // IndianTeam for destructuring demo
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

  // Toggle this flag to see both outputs
  var flag = true;

  if (flag === true) {
    return (
      <div>
        <h1> List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1> List of Players having Scores Less than 70 </h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1> Indian Team </h1>
          <h1> Odd Players </h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1> Even Players </h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr />
        <div>
          <h1> List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
