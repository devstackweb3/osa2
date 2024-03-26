# Exercise Objective
Show also the sum of the exercises of the course.
![image](https://github.com/devstackweb3/osa2/assets/118926098/576c27f3-583a-4212-a042-8848c98bd4b9)


# Exercise Process
I struggled at first glance to destructure the general sum process. I was firstly oriented around a looping method mentionned [here](https://codinhood.com/nano/js/sum-property-values-object/#:~:text=Another%20interesting%20way%20to%20sum,loop%20to%20the%20total%20variable.) using a compiled method of map iteration and sum method. But struggled to extract the positioning data of **exercises** stated in the object **part**=[0,1,2...] of **parts** array.

I then decided to start again from scratch another approach splitting the approach, in 2 established models of data extraction. First one by using the map() method with which the back side functionning of new array generation simplifies access of data properties grouped, and in the 2nd approach to sum the values with the reduce method.
