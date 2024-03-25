/* eslint-disable react/prop-types */
const Header = ({ title }) => <h1>{title}</h1>

const Part = ({ partsList }) => (
  <div>
    <div>{partsList}</div>
  </div>
)

const Course = (props) => (
  <>
    <Header title={props.header} />
    <Part partsList={props.partsList} />
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
            <>
              {part.name} {part.exercises} <br />
            </>
          )
        })}
      />
    </div>
  )
}

export default App
