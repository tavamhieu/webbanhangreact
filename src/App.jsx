import { useRef, useState } from "react";
import './App.css'


// function App() {
//   const [enterYourName,setEnterYourName]= useState("")
//   const [submitted,setSubmitted]= useState(false)

//   function handleChangeYourName(event){
//     setSubmitted(false)
//     setEnterYourName(event.target.value)

//   }
//   function handleILoveUUU(){
//     setSubmitted(true)
//   }

//   return (
//     <>
//     <section>
//       <h2> chào bạnnnnn {submitted&& enterYourName? enterYourName:" iu em 3k"} </h2>
//       <input type="text" onChange={handleChangeYourName} value={enterYourName} />
//       <button onClick={handleILoveUUU}> nhập tên</button>

//     </section>

//     </>

//   )

// }
function App() {
  const [enterYourName, setEnterYourName] = useState(null)
  const tenEm = useRef();



  function handleILoveUUU() {
    setEnterYourName(tenEm.current.value);
  }

  return (
    <section>
      <h2> chào {enterYourName?? "em"}</h2>
      <input type="text" ref={tenEm} />
      <button onClick={handleILoveUUU}> nhập tên</button>

    </section>



  )

}

export default App
