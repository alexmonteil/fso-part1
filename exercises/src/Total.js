const Total = props => <p>Total of {props.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)} exercises</p>;

export default Total;