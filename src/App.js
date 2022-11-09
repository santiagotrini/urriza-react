import { useState } from 'react';
import db from './db.json';
import Question from './Question.js';

const App = () => {

  // console.log(db);

  const [questions, setQuestions] = useState(db.data)
  const [search, setSearch] = useState('')
  const [hidden, setHidden] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // console.log(questions);



  const handleClick = e => {
    // console.log(search);
    if (!search) {
      setQuestions(db.data);
      return;
    }
    const filteredQuestions = db.data.filter(question =>
      question.topic === search
    );
    setQuestions(filteredQuestions);
  };

  // setTimeout(cb, delay)

  const unhide = e => {
    setTimeout(() => setHidden(prev => !prev), 1000);
  };

  const toggleModal = e => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="App">

      <h1>Lombardi React</h1>
      <button onClick={toggleModal}>Show Modal</button>
      <div hidden={!showModal} className="Modal">
        <button onClick={toggleModal} className="btn-close" >
          <i className="fa fa-close"></i>
        </button>
        <p>Soy un modal</p>
      </div>

      <h1>Piputto React</h1>
      <button onClick={unhide}>Clickeame</button>
      <h2 hidden={hidden}>Estoy escondido</h2>
      <h1>Urriza React</h1>
      <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Filtrar por tema..." />
      <button onClick={handleClick}>Buscar</button>
      <div>
        {questions.map((question,idx) => (
          <Question key={idx} question={question} />
        ))}
      </div>
    </div>
  );
};

export default App;
