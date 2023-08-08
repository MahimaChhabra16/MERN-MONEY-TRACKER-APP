
import './App.css';
import {useState} from "react";

function App() {
    const[name,setName]=useState('');
    const[datetime,setdatetime]=useState('');
    const[description,setdescription]=useState('');
    function addNewTransaction(){

    }
  return (
    <main>
      <h1>₹30000<span>.00</span></h1>
        <form onSubmit={addNewTransaction}>
            <div className="basic">
                <input type="text"
                       value={name}
                       onChange={ev =>setName(ev.target.value)}
                       placeholder={'New TV'}/>
                <input
                    type="datetime-local"
                    value={datetime}
                    onChange={ev =>setdatetime(ev.target.value)}/>
            </div>
            <div className="description">
                <input type="text"
                       value={description}
                       onChange={ev =>setdescription(ev.target.value)}
                       placeholder={'description'}/>
            </div>
            <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
            <div className="transaction">
                <div className="left">
                    <div className="name">One</div>
                    <div className="description">One</div>
                </div>
                <div className="right">
                    <div className="price red">-₹40000</div>
                    <div className="datetime">2023-08-08 12:12</div>
                </div>
            </div>
            <div className="transaction">
                <div className="left">
                    <div className="name">Two</div>
                    <div className="description">Two</div>
                </div>
                <div className="right">
                    <div className="price green">+₹40000</div>
                    <div className="datetime">2023-08-08 12:12</div>
                </div>
            </div>
            <div className="transaction">
                <div className="left">
                    <div className="name">Three</div>
                    <div className="description">Three</div>
                </div>
                <div className="right">
                    <div className="price red">-₹72000</div>
                    <div className="datetime">2023-08-08 12:12</div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default App;
