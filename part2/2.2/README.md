# Exercise Objective
Show also the sum of the exercises of the course.
![image](https://github.com/devstackweb3/osa2/assets/118926098/576c27f3-583a-4212-a042-8848c98bd4b9)

[Helsinki University Exercise](https://fullstackopen.com/en/part2/rendering_a_collection_modules#anti-pattern-array-indexes-as-keys)

# Exercise Process
I struggled at first glance to destructure the general sum process. I was firstly oriented around a looping method mentionned [here](https://codinhood.com/nano/js/sum-property-values-object/#:~:text=Another%20interesting%20way%20to%20sum,loop%20to%20the%20total%20variable.) using a compiled method of map iteration and sum method. But struggled to extract the positioning data of **exercises** stated in the object **part**=[0,1,2...] of **parts** array.

```
...some code...
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
...other code...
```

I then decided to start again from scratch another approach splitting the approach, in 2 established models of data extraction. First one by using the map() method with which the back side functionning of new array generation simplifies access of data properties grouped, and in the 2nd approach to sum the values with the [reduce](https://sentry.io/answers/how-to-find-the-sum-of-an-array-of-numbers/#:~:text=Using%20reduce()&text=()%20array%20method%3A-,const%20arr%20%3D%20%5B23%2C%2034%2C%2077%2C%2099%2C,each%20element%20of%20the%20array.) method.
