import React from 'react';
import Part from './Part';

const Content = props => {
    return (
      <React.Fragment>
        {props.parts.map(part => <Part key={part.id} partName={part.name} numberOfExercises={part.exercises} />)}
      </React.Fragment>
    );
}

export default Content;