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
