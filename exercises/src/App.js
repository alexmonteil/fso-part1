import React from 'react';

const Header = props => <h1>{props.courseName}</h1>;
const Part = props => <p>{props.partName}: {props.numberOfExercises} exercises</p>;
const Content = props => {
  return (
    <React.Fragment>
      {props.parts.map(part => <Part partName={part.name} numberOfExercises={part.exercises} />)}
    </React.Fragment>
  );
}

const Total = props => <p>Total number of exercises: {props.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)}</p>;

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
    
      {
        name: 'Using props to pass data',
        exercises: 7
      },
    
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
