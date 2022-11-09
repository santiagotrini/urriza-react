import { useState } from 'react';
import db from './db.json';
import Question from './Question.js';

const App = () => {

  // console.log(db);

  const [questions, setQuestions] = useState(db.data)
  const [search, setSearch] = useState('')

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

  return (
    <div className="App">
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
