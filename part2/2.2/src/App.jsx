/* eslint-disable react/prop-types */
const Header = ({ title }) => <h1>{title}</h1>

const Part = ({ partsList }) => (
  <div>
    <div>{partsList}</div>
  </div>
)

const SumExercises = ({ exercises }) => {
  let totalEx = exercises.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  return <div>total of {totalEx} exercises</div>
}

const Course = (props) => (
  <>
    <Header title={props.header} />
    <Part partsList={props.partsList} />
    <SumExercises exercises={props.exercises} />
  </>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }
  //console.log(course.parts[0])
  return (
    <div>
      <Course
        header={course.name}
        partsList={course.parts.map(function (part) {
          return (
            <div key={part.id}>
              {part.name} {part.exercises} <br />
            </div>
          )
        })}
        exercises={course.parts.map(function (part) {
          return part.exercises
        })}
      />
    </div>
  )
}

export default App
