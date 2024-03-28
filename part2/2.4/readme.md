# Exercise Objective
Let's extend our application to allow for an arbitrary number of courses:
```
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      // ...
    </div>
  )
}
```
The application can, for example, look like this:
![image](https://github.com/devstackweb3/osa2/assets/118926098/a96aada2-c37e-4578-aeb0-6baf505f2f20)

# Exercise Process

## Issue 1 | Displaying all titles & exercices once
### ALL THE EXERCISES ARE GROUPED TOGETHER IN A LIST WITHOUT ANY ASSIGNMENT DISTINCTIONS:
I manage to display all the exercises without being able to assign separation distinctions between title and list of assigned exercises.  

```
<Course
        header={courses.map(function (course) {
          return <div key={course.id}>{course.name}</div>
        })}
        partsList={courses.map(function (course) {
          let exercises = course.parts.map(function (part) {
            return (
              <div key={part.id}>
                {part.name} {part.exercises}
              </div>
            )
          })
          return exercises
        })}
        /*exercises={courses.parts.map(function (part) {
          return part.exercises
        })}*/
      />
```
PROBLEM IDENTIFICATION: This is because the **title id key** *is not linked to* the **object** representing the **exercise list**.

## Issue 2 | Destructuring overview of results
The id course connexion has well been corrected with the following code: 

```
const App = () => {
...some code ...
return
<div>
<Course
        header={courses.map(function (course) {
          return <div key={course.id}>{course.name}</div>
        })}
        partsList={courses.map(function (course) {
          let exercises = course.parts.map(function (part) {
            return (
              <div key={part.id}>
                {part.name} {part.exercises}
              </div>
            )
          })
          return (
            <div key={course.id}>
              <h1>{course.name}</h1> <br /> {exercises}
            </div>
          )
        })}
      />
}
</div>
...some code...
```
However this version shows all data grouped in same property named:"partsList". The aim is to stay in the same architectural components organisation with a header, part and course components taking properties from same data array source.
The issue is:
How can I link local components id's from **header** to **part** within the parent component called course?
```
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
    //Here the issue is detected. The header property is not linked to the mapping made on partsList exercises. 
  </>
)

const App = () => {

...some code...

}
export default App
```
### Possible solution | useRef & createRef differences
**useRef:** used in functionnal components since 16.8 REACT Version

**createRef:** used in class components

The objective is to use useRef to refer to id main title of exercises list.

