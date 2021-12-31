import "./styles.css";
import db from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function App() {
  const ref = collection(db, "todos");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(ref);
      console.log(data);
    };
    getUsers();
  }, []);
  console.log(db);
  return (
    <div className="App">
      <h1>Hello CodeSandbox sadu</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
