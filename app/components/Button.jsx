"use client";
export default function Button() {
  return (
    <div>
      <button className='bg-green-500 px-4 py-2' onClick={()=>console.log("Button has clicked")}>Click Me</button>
    </div>
  )
}
