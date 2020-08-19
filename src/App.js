import React, {useState, createRef} from 'react';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import './style.css';
library.add(faArrowRight, faArrowLeft);

function HistoryList({list}) {
	const listItems = list.map(x => <li>{x}</li>)
	return <ol>{listItems}</ol>
}

function App() {
	const textInput = createRef()
	const [text, setText] = useState()
	const [history, setHistory] = useState([])
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
	const handleBack = () => {
		setText(history.pop())
		setHistory(history)
	}
	return (
		<section className="hero is-warning is-bold is-fullheight">
			<div className="hero-body">
				<div class="container">
					<h1 className="title">Text Transformer</h1>
					<div className="App">
						<button className="button is-dark is-small" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size="2x"/></button>
						<div className="box">
								<div className="field is-horizontal" id="textboxes">
									<textarea placeholder="what text do you want to transform?" ref={textInput}></textarea>
									<FontAwesomeIcon icon={faArrowRight} size="5x"/>
									<textarea value={text} readonly></textarea>
							</div>
						</div>
						<div className="buttons">
							<button className="button is-dark" onClick={upperCase}>UPPER CASE</button>
							<button className="button is-dark" onClick={lowerCase}>lower case</button>
							<button className="button is-dark" onClick={titleCase}>Title Case</button>
							<button className="button is-dark" onClick={reverse}>Reverse</button>
						</div>
						<div className="card">
							<header className="card-header">
								<p className="card-header-title">History</p>
							</header>
							<div className="card-content">
								<div className="content">
									<HistoryList list={history}></HistoryList>
								</div>
								<footer className="card-footer">
									<button className="card-footer-item">Clear History</button>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
