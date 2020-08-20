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
	const textInput = createRef()
	const [text, setText] = useState()
	const [history, setHistory] = useState([])
	const [defaultValue, setDefaultValue] = useState(text);
	const upperCase = () => {
		const input = textInput.current.value.toUpperCase()
		setText(input)
		setHistory([...history, input])
	}
	const lowerCase = () => {
		const input = textInput.current.value.toLowerCase()
		setText(input)
		setHistory([...history, input])
	}
	const reverse = () => {
		const input = [...textInput.current.value].reverse().join('')
		setText(input)
		setHistory([...history, input])
	}
	const titleCase = () => {
		const input = textInput.current.value.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ') 
		setText(input)
		setHistory([...history, input])
	}

	const reset = () => {
		setDefaultValue("")
		setText(defaultValue) 
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
					<div className="container" id="text">
						<h1 className="title">T3xT tR@n5f0rMeR</h1>
						<div>
							<div>
								<div className="back-reset">
									<button className="button is-small" id="back" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size="2x"/></button>
									<button className="button is-small" onClick={reset}><strong>Reset Input</strong></button>
								</div>
								<textarea className="textarea is-medium" placeholder="what text do you want to transform?" id="textbox" ref={textInput} value={text} onChange={e => setText(e.target.value)}></textarea>
							</div>
							<div className="buttons">
								<button className="button is-dark" onClick={upperCase}>UPPER CASE</button>
								<button className="button is-dark" onClick={lowerCase}>lower case</button>
								<button className="button is-dark" onClick={titleCase}>Title Case</button>
								<button className="button is-dark" onClick={reverse}>Reverse</button>
							</div>
						</div>
						<div>
							<nav className="panel">
								<p className="panel-heading">History</p>
								<div className="panel-block" id="history-list">
									<HistoryList list={history} className="card-content"></HistoryList>
								</div>
								<div className="panel-block" id="foot">
									<footer className="panel-block">
										<button className="button is-danger is-outlined is-fullwidth" onClick={clearHistory}>Clear History</button>
									</footer>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
