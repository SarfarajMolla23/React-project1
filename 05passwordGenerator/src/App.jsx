import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

 // useRef hook
 const passwordRef = useRef(null);

// useCallback() it use to optimize the function method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char);
    }

    setPassword(pass);
    
  }, [length, numberAllowed, charAllowed,setPassword]);
 
 const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101);
 window.navigator.clipboard.writeText(password)
 },[password])
  
 // useEffect() run when the page relods and if any thing
 // happen in dependencises then it will again re-run the
 // code 
useEffect(() => {
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-4 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700  text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 active:bg-blue-800">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterAllowed"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
