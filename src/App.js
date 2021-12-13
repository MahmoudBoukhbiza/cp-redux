import React from 'react';
import './App.css';
import ListTask from './Component/ListTask'
import AddTask from './Component/AddTask'

function App() {


    return (
      < div className="App" >
        <div>
          <div>
            <h1>ToDo App</h1>
            <div>
              <ListTask>

              </ListTask>
              <AddTask>

              </AddTask>
            </div>
          </div>
        </div>

      </div >
    );
  }

  export default App;
