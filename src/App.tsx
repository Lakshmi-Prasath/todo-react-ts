import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [name, setName] = useState<string>("");
  const [storingName, setStoringName] = useState<string[]>([]);
  //addFunction

  const addFunc = () => {
    console.log(name)
    setStoringName([...storingName, name])
    setName("")

  }
  const deleteAll = () => {
    setStoringName([])
  }

  const deleteInd = (index: number) => {
    console.log(index)
    const newList = [...storingName];
    newList.splice(index, 1);
    setStoringName(newList);
    console.log(newList)
  }

  return (
    <div>

      <Nav className='navv' >
        <>&nbsp;</>
      </Nav>
      <h2>TODO LIST</h2>
      <div className="container">
        <div className='app'>
          <div className="divOne">

            <div className='brb'>
              <input className="inputField" type="text" placeholder='Add a new task' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className='ml-10'>
              <button className="addBtn" onClick={addFunc}>ADD TODO</button>
            </div>

          </div>
          {/* displaying the added items */}
          {storingName.map((item: string, index: number) => {
            return (
              <div key={index} className="todoList">
                <div className='iList'>
                  <input id='cb' type="checkbox" className='cBox' />
                  <p className='strikethrough'>
                    {item}
                  </p>
                </div>
                <div>
                  <span><button className="deleteBtn" onClick={() => { deleteInd(index) }}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button></span>
                </div>
              </div>
            )
          })}
          <div>
            <button className="deleteAll" onClick={deleteAll}>Delete All</button>
          </div>
        </div>

      </div>

    </div >
  );
}

export default App;
