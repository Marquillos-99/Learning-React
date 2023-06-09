import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Forms";
import { Sub } from "./type";

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?u/dapelu",
    description: "Dapelu a veces chambea",
  },
  {
    nick: "Sergio Serrano",
    subMonths: 10,
    avatar: "https://i.pravatar.cc/150?u/Sergio_Serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Subs</h1>
      <List subs={subs} />
      <Form></Form>
    </div>
  );
}

export default App;
