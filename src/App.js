import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

//We hardcode a const to  in order to try the Conditionals 
const isLoggedIn = false;
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*How to add comments in JSX

       <MyButton />
       <AboutPage />
        */}
       {/*We create a compact coditional */}
       {/*If we dont need and ELSE 
          <div>
          {isLoggedIn && <AdminPanel />}
          </div>
          */}
      {/*Now they share the Count of clicks */}
      <button onClick={handleClick}>
      Clicked {count} times
    </button>
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
        {/*< MyButtonCount/> */}

        {isLoggedIn ? (
          < Profile/>) : 
          (
          <AboutPage />
          )
        }
        {/*< MyButtonCount/> */}

      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
      <ul className="avatar">
        <li>1 </li>
        <li>2 </li>
        <li>3 </li>

        </ul>
        {/*We can extac componets*/}
        {/*COMPONETS NAME HAVE TO START WITH CAPITAL LETTER*/}

        <MyList/>
    </>
  );
}



const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


//Array itirenation
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function MyList(){
  //We  map our array to turn it in to a <li> list
  const listItems = products.map(product =>
    <li key={product.id} onClick={() => handleClick(product.title)} >
      {product.title }
    </li>
  );
  return(
    <ul>{listItems}</ul>    
  )

}

function handleClick(Name) {
  alert('You clicked me! Im ' + Name);
}

//Each Componet have his ouw counter 
//function MyButtonCount() {
//  const [count, setCount] = useState(0);
//
//  function handleClick() {
//    setCount(count + 1);
//  }
//
//  return (
//    <button onClick={handleClick}>
//      Clicked {count} times
//    </button>
//  );
//}

export default App ;
