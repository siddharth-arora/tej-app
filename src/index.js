// Step 1: import the React and ReactDOM from packages inside the node_modules
import React from 'react';
import ReactDOM from 'react-dom';
// Import the component in the parent component file:
import Header from './components/header';

// Step 2: define an arrow function for a component
const App = () => {
  // return some response to the client
  
  // return <h1>Hello, World.</h1>
  
  // return React.createElement('h1');
  
  // return React.createElement(
  //   'font',
  //   {
  //     face: 'Arial',
  //     size: '6',
  //     color: 'red'
  //   }
  // );

  // return React.createElement(
  //   'h1',
  //   {
  //     className: 'display-1'
  //   },
  //   "Welcome to React"
  // );

  // return React.createElement(
  //   'h1',
  //   {},
  //   "Welcome to React"
  // );

  // return React.createElement(
  //   'h1',
  //   {
  //     style: 
  //     {
  //       color: 'red',
  //       backgroundColor: 'silver',
  //       fontFamily: 'Arial'  
  //     }
  //   },
  //   "Welcome to React"
  // );

  // return (
  //   <div>
  //     <h1>This is a heading 1</h1>
  //     <p>This is a paragraph</p>
  //   </div>
  // )

  // use the component 
  return (
    <div id="parent">
      <Header/>
    </div>
  );
}

// Step 3: run the component on the div id root of the index.html file:
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
