import "./styles.css";
import db from "./Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodo] = useState([]);
  const ref = collection(db, "todos");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(ref);
      setTodo(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  var add = "";
  function getTodo(value) {
    add = value.target.value;
  }
  const addtodo = async () => {
    await addDoc(ref, { todo: add });
    window.location.reload();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox sadu</h1>
      <h2>Start editing to see some magic happeuserInputn!</h2>
      <input onChange={getTodo} />
      <button onClick={addtodo}> Click me </button>
      <ul className="todoList">
        {todos.map((todo) => (
          <li> {todo.todo} </li>
        ))}
        ;
      </ul>
    </div>
  );
}
