import React ,{useState} from "react";
import "./App.css";
import UserList from "./components/UserList";
import { UserContext } from "./contexts/UserContext";

const data = [
  {
    id: 1,
    name: "Yılmaz",
    email: "ylmz@gmail.com",
    age:27,
    color: "lightcyan",
  },
  {
    id: 2,
    name: "metin",
    email: "metin@gmail.com",
    age:21,
    color: "blue",
  },
  {
    id: 3,
    name: "emre",
    email: "emre@gmail.com",
    age:31,
    color: "yellow",
  },
];

function App() {

  const [users,setUsers] = useState(data);
  const changeColor = (id,color) => {
    setUsers(
      users.map(user => (user.id === id ? {...user,color:color}:user))
    )
  }
  return (
    <UserContext.Provider value ={{users,changeColor}}>
      <div className="App">
        <header>
          <h3>Welcome</h3>
          <UserList />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
