# Exercise Objective

Let's change the App component like so:

```
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}
```

export default Appcopy
Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following (architectural overview):
```
App
  Course
    Header
    Content
      Part
      Part
      ...
copy
```

Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

The rendered page can, for example, look as follows:
![image](https://github.com/devstackweb3/osa2/assets/118926098/cc590d5e-6a88-4102-855c-f9e0b810f6ac)

You don't need the sum of the exercises yet.

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.

Ensure that the console shows no errors!

# Exercise Process
Struggled with understanding the rule's exercise established with architectural following pathway composition. 
