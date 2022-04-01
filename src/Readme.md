Step 3:
Input.jsx is a functional component that returns a <form> and within that form include <h1> tag with a short title, <input> tag with the following attributes: type as text and another <input> tag with attribute type as submit. Feel free to set your placeholder attribute to whatever string you feel like. <input type="text" placeholder="Your Zipcode..."/> <input type="submit" />

Step 4:
Head back over to your App.js component and convert it into a class component. Define its inital state: //given in class


weatherData is where we're going to store the response data from our api call and value is where we will keep track of what is being inserted into our input field. This is going to seem super weird at first, so try not to worry about it.

Import fetchData() method we defined in weather.js. import { fetchData } from './services/weather'.

We need to keep track of what's in the input field so that its value can be interpolated into the api call. Because we can't easily send that information back up from a child component we are going to write a function to set it in state.



Define a function handleChange() that takes an event as a parameter. This function will set the State of our state value variable. Here is what it looks like:

const handleChange = (event) => {
  
   });
 }
Define an async arrow handleSubmit() function that takes an event as a parameter. Inside this function:
call preventDefault() on the event passed in
call fetchData() and pass it the whatever is currently set to our state value variable.
setState() the weatherData state variable to the response.
Step 5
Props time!

Your WeatherCard.jsx component should accept props that are passed down from weatherData in state. Render the appropriate data accordingly.

We are going to pass the Input.jsx component our two functions, both handleSubmit and handleChange, in the form of props as well.

Step 5
Input.jsx now has access to the two functions we created in App.js! But how to use them? - add onChange, a special attribute that acts like the event listerners we used in Unit 1, to the text input and assign it the handleChange function we passed as props. Remember to access it like you would any other prop.

onChange passes the event to our function automatically, so we don't need to insert it as an argument. In fact, we don't even need parentheses at all! How strange!

Bonus

Add a five day forecast with their 5 day forecast endpoint
Include the sunrise and sunset times (hint: maybe Moment.js will be helpful!) and some information about humidity, atmospheric pressure, etc.
Use CSS Animation, images, etc. (think weather app)
Leverage flexbox/grid and use media queries to build a mobile version