{/* inline css in normal react */}
<div style={{display:"flex", justifyContent:"space-around"}}>  
<div style={{backgroundColor:"red"}}> hiiiii</div>
<div style={{backgroundColor:"green"}}> hiiiii </div>
<div style={{backgroundColor:"yellow"}}> hiiii </div>
</div>

{/* the inline css in tailwind */}
<div className='flex justify-center'>
  <div className='bg-red-500 m-10 p-5'>tailwind configuration</div>
  <div className='bg-yellow-500 m-10 p-5'>tailwind configuration</div>
</div>

{/* tailwind grids (standard use) */}
<div className='grid grid-cols-10'>
<div className='bg-pink-200 col-span-4'>tailwind grid1</div>
<div className='bg-green-200 col-span-4'>tailwind grid2</div>
<div className='bg-orange-400 col-span-2'>tailwind grid3</div>
</div>

{/* tailwind flex */}
<div className='flex m-10'>
<div className='bg-pink-200 w-[40%]'>tailwind grid1</div>
<div className='bg-green-200 w-[40%]'>tailwind grid2</div>
<div className='bg-orange-400 w-[20%]'>tailwind grid3</div>
</div>