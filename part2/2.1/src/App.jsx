/* eslint-disable react/prop-types */
const Header = ({ title }) => <h1>{title}</h1>

const Part = ({ partName, partEx }) => (
  <p>
    {partName} {partEx}
  </p>
)

const Course = (props) => (
  <>
    <Header title={props.header} />
    <Part
      partName={props.partsList[0].name}
      partEx={props.partsList[0].exercises}
    />
    <Part
      partName={props.partsList[1].name}
      partEx={props.partsList[1].exercises}
    />
    <Part
      partName={props.partsList[2].name}
      partEx={props.partsList[2].exercises}
    />
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
      <Course header={course.name} partsList={course.parts} />
    </div>
  )
}

export default App
