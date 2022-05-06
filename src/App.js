
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [row, setrow] = useState(4)
  const [line, setline] = useState(4)
  const [index, setindex] = useState(Array(row).fill(Array(line).fill(0)))

  const linelist=(rowli) => Array(line).fill(1).map((lineli) => (<div>{index[rowli][lineli] == 0 ? "" : index[rowli][lineli]}</div>))
  const rowlist = Array(row).fill(1).map((rowli) => (<div className="row">{linelist(rowli)}</div>));



  const uprow=() => {
    if (row < 9){
      setrow(row+1)
    }
    setindex(Array(row).fill(Array(line).fill(0)))
  }

  const downrow=() => {
    if (row > 4){
      setrow(row-1)
    }
    setindex(Array(row).fill(Array(line).fill(0)))
  }
  
  const upline=() => {
    if (line < 9){
      setline(line+1)
    }
    setindex(Array(row).fill(Array(line).fill(0)))
  }

  const downline=() => {
    if (line > 4){
      setline(line-1)
    }
    setindex(Array(row).fill(Array(line).fill(0)))
  }
  
  const gamestart=() => {

  }


  return (
    <div className="App">
      <h1>2048</h1>
      <div className="game-settings">
        <p>세로 {row}</p>
        <button onClick={()=>uprow()}>up</button>
        <button onClick={()=>downrow()}>down</button>
        <p>가로 {line}</p>
        <button onClick={()=>upline()}>up</button>
        <button onClick={()=>downline()}>down</button>
      </div>
      <button onClick={()=>gamestart()}>game start</button>

      <div className="tileContainer">
        <div>
          {rowlist}
        </div>
      </div>
    </div>


  );
}

export default App;
