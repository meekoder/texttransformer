import React, {useState, createRef} from 'react';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import './style.css';
library.add(faArrowLeft);

function HistoryList({list}) {
	const listItems = list.map(x => <li>{x}</li>)
	return <ol>{listItems}</ol>
}

function App() {
	const [text, setText] = useState()
	const [history, setHistory] = useState([])

	const transformer = str => {
		if (text.length < 1) return alert('Put some text in the text box!')
		let input;
		if (str === 'upper') {
			input = text.toUpperCase()
		} else if (str === 'lower') {
			input = text.toLowerCase()
		} else if (str === 'title') {
			input = text.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ') 
		} else if (str === 'rev'){
			input = [...text].reverse().join('')
		}
		setText(input)
		setHistory([...history, input])
	}

	const reset = () => {
		setText("") 
	}

	const handleBack = () => {
		setText(history.pop())
		setHistory(history)
	}

	const clearHistory = () => {
		setHistory([])
	}

	return (
		<div className="App">
			<section className="hero is-link is-fullheight">
				<div className="hero-body">
					<div className="main">
						<div className="container">
							<h1 className="title">T3xT tR@n5f0rMeR</h1>
							<div className="back-reset">
								<button className="button is-small" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size="2x"/></button>
								<button className="button is-small" onClick={reset}><strong>Reset Input</strong></button>
							</div>
							<textarea className="textarea is-medium" placeholder="what text do you want to transform?" value={text} onChange={e => setText(e.target.value)}></textarea>
							<div className="buttons">
								<button className="button is-dark" onClick={() => transformer('upper')}>UPPER CASE</button>
								<button className="button is-dark" onClick={() => transformer('lower')}>lower case</button>
								<button className="button is-dark" onClick={() => transformer('title')}>Title Case</button>
								<button className="button is-dark" onClick={() => transformer('rev')}>Reverse</button>
							</div>
						</div>
						<nav className="panel">
							<p className="panel-heading">History</p>
							<div className="panel-block" id="history-list">
								<HistoryList list={history} className="card-content"></HistoryList>
							</div>
							<div className="panel-block">
								<footer className="panel-block">
									<button className="button is-danger is-outlined is-fullwidth" onClick={clearHistory}>Clear History</button>
								</footer>
							</div>
						</nav>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
