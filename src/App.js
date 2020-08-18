import React, {useState, createRef} from 'react';
import logo from './logo.svg';
import './App.css';
function HistoryList({list}) {
		const listItems = list.map(x => <li>{x}</li>)
		return <ol>{listItems}</ol>
}
function App() {
		const textInput = createRef()
		const [text, setText] = useState()
		const [history, setHistory] = useState([])
		const handleClick = () => {
				setText(textInput.current.value.toUpperCase())
				setHistory([...history, textInput.current.value])
		}
		const handleBack = () => {
				setText(history.pop())
				setHistory(history)
		}
  return (
    <div className="App">
		<button onClick={handleBack}>Back</button>
		<input type="text" ref={textInput}/>
		<input type="submit" onClick={handleClick}/>
		<input type="text" value={text}/>
		<HistoryList list={history}></HistoryList>
    </div>
  );
}

export default App;
