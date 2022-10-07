import React, { useEffect, useState, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// import *.jpg from './assets';



function App() {

  interface Person {
    name: string;
    image: string;
  }



  const [personList, setPersonList] = useState<Array<Person>>();
  const [selectedPerson, setSelectedPerson] = useState<Person>();

  useEffect(() => {
    console.log("Calling use Effect");
    //initiating personlist array
    let personList: Person[] = [
      { name: "Diego", image: "1.jpg" },
      { name: "Ricardo", image: "2.jpg" },
      { name: "Sofia", image: "3.jpg" },
      { name: "Camila", image: "4.jpg" },
      { name: "Fernanda", image: "5.jpg" }];
    setPersonList(personList);

    //this is called when loading the page or when selectedPerson is selected
    //,[selectedPerson]
  },[]);


  const buttonHandler = () => {
    // Generate random number from 0 to array length
    let max = 0; //first position of the array
    let min = personList?.length || 0;
    let randomPos = Math.floor(Math.random() * (max - min)) + min;

    setSelectedPerson(personList?.at(randomPos));
  };

  // useEffect(() => {
  //   if (clickA === 0) {
  //     console.log('Component loaded!')
  //   } else {
  //     console.log('Button A was clicked!');
  //   }
  // }, [clickA]);

  // const Child = ({ name, id, bio = 'Bio empty' }) => {
  //   return (
  //     <div>
  //       <h2>Name: {name}, Id: {id}</h2>
  //       <p>{bio}</p>
  //     </div>
  //   )
  // };




  return (
    <div className="container">
      <div>
        <h3>Quem vai cuidar do José hoje?</h3>
      </div>
      <div>
      {selectedPerson ?
          <img className='image' src={require('./assets/'+selectedPerson.image)} />
          : null}
        
      </div>

      <div>
        {selectedPerson ?
          <h1>
            Parabens {selectedPerson?.name}!
          </h1>
          : null}

      </div>
      <div>
        <button className='button' onClick={buttonHandler} >Generate!</button>
      </div>



    </div>
  );
}

export default App;
