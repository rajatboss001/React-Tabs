import { useState } from "react"
import Swal from "sweetalert2"

const FormPractice = () => {
    const [data , setData] = useState({name:"" , email:""})
    const [ err , setErr] = useState(false)
    function handelSubmit(e){
e.preventDefault()
setErr(true)
console.log(data)
if(data.name !== "" && data.email !== ""){
    setErr(false)
    Swal.fire({
  title: "Good job!",
  text: "You form is submited",
  icon: "success"
});
    setData({
        name :"",
        email:""
    })
}
    }

  return (
    <div className="my-20">
       <form onSubmit={handelSubmit} action="" className="max-w-100 mx-auto flex flex-col gap-4">
        <input value={data.name} onChange={(e) => setData({...data ,name : e.target.value })} type="text" placeholder="name" className="border p-2 rounded-sm" />
        {err && ( <p className="text-red-500">Please enter your name.</p> )}
        <input value={data.email} onChange={(e) => setData({...data ,email : e.target.value })} type="email" placeholder="email" className="border p-2 rounded-sm" />
         {err && ( <p className="text-red-500">Please enter your email.</p> )}
        <button className="bg-black min-w-50 min-h-12.5 cursor-pointer rounded-sm text-white" type="submit">submit</button>
       </form>
    </div>
  )
}

export default FormPractice
