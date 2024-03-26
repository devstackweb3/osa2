# Exercise Objective 
If you haven't done so already, calculate the sum of exercises with the array method reduce.

Pro tip: when your code looks as follows:
```
const total = 
  parts.reduce((s, p) => someMagicHere)
```
and does not work, it's worth it to use console.log, which requires the arrow function to be written in its longer form:
```
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere 
})
```
Not working? : Use your search engine to look up how reduce is used in an Object Array.

[Helsinki University Exercise](https://fullstackopen.com/en/part2/rendering_a_collection_modules#anti-pattern-array-indexes-as-keys)
