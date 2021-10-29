import React from 'react';
import Header from './components/header'

function App() {
  const name = 'Surya'
  return (
    <div className="container">
      <Header title='Hello' />
    </div>
  );
}


// class App extends React.Component {
//   render() {
//     return <h1>Hello From a Class.</h1>
//   }
// }

export default App;
