const Question = props => {

  const { text, topic, answers } = props.question;

  return (
    <div className="Question">
      <h3>{text}</h3>
      {answers.map((answer,idx) => (
        <div key={idx}>
          <label>{answer.text}</label>
          <input type="radio" />
          <br />
        </div>
      ))}
      <h4>Tema: {topic}</h4>
    </div>
  );
};

export default Question;
