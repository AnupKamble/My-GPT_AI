import './App.css'

function App() {


  return (
    <>
       <div className='grid grid-cols-5 h-screen text-center'>
        <div className='col-span-1 bg-zinc-800 h-screen'></div>
        <div className='col-span-4'>

           <div className="container h-110">
                 
           </div>

            <div className='bg-zinc-800 w-1/2 text-white flex m-auto rounded-2xl border border-zinc-500'>
                  <input type="text" className='w-full h-full p-3 m-auto outline-none'  placeholder='ask anything' />
                  <button className='p-3'>ask</button>
            </div>
        </div>
       </div>
      
    </>
  )
}

export default App
