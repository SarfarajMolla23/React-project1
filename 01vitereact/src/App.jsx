import NewFunction from "./new.jsx";

function App() {
  const username = "Sarfaraj";
  return (
    <>
      <NewFunction />
      <h1>Hello {username}</h1> 
      <p>Sarfaraj</p>
    </>
  );
}

export default App;
// {username} This is called evaluated expression