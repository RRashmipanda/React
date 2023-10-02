import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">

        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white
  px-3 py-2 text-bold rounded-3xl">
          <button onClick={()=>setColor("red")}
          className="outine-none px-4 py-2 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "red" }}
          >Red</button>

           <button onClick={()=>setColor("blue")}
           className="outine-none px-4 py-2 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "blue" }}
          >Blue</button>

           <button onClick={()=>setColor("yellow")}
           className="outine-none px-4 py-2 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
           <button onClick={()=>setColor("black")}
           className="outine-none px-4 py-2 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "black" }}
          >Black</button>
           <button onClick={()=>setColor("green")}
            className="outine-none px-4 py-2 rounded-full text-white shadow-2xl "
            style={{ backgroundColor: "green" }}
          >Green</button>


        </div>
      </div>



    </div>
  )
}

export default App
