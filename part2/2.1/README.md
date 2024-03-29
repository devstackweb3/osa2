# Exercise Objective

Let's finish the code for rendering course contents from exercises 1.1 - 1.5. You can start with the code from the model answers. The model answers for part 1 can be found by going to the submission system, clicking on my submissions at the top, and in the row corresponding to part 1 under the solutions column clicking on show. To see the solution to the course info exercise, click on index.js under kurssitiedot ("kurssitiedot" means "course info").

Note that if you copy a project from one place to another, you might have to delete the node_modules directory and install the dependencies again with the command npm install before you can start the application.

Generally, it's not recommended that you copy a project's whole contents and/or add the node_modules directory to the version control system.

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

[Helsinki University Exercise](https://fullstackopen.com/en/part2/rendering_a_collection_modules#anti-pattern-array-indexes-as-keys)

# Exercise Process
Struggled with understanding the rule's exercise established with architectural following pathway composition. 
