import React from 'react'

function Image({images,deleteImage}) {
  return (
    <div style={{display:'grid',gridAutoColumns:'repeat(3,1fr)',gap:"10px"}}>
        <h2>ceci le images</h2>
    {images.map((image) => (
        <div style={{border:'1px solid black'}} key={image.id} className=''>
        <img alt={image.title} width={200} src={image.image}/>
        <h4>{image.title}</h4>
        <h5>{image.description}</h5>
        <button style={{background:'red',color:'white'}} onClick={() => deleteImage(image.id)}>delete</button>
        </div>
    ))}
    </div>
  )
}

export default Image