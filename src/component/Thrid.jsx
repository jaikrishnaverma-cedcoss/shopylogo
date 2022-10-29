import React from 'react'

const Thrid = () => {
  return (
<>
<div className="col w100 flexAIC scroller" style={{ minHeight: "73.8vh" }}>
                <p className='firsth1'>Add your business name</p>
                <p className='firsth2'>You can change this information after your designs have been created</p>
                <div className="col w22 flexAIC " style={{boxShadow:"none",width:"50%"}}>
          <div className="col w100 flexAIC" style={{ marginTop: "25px" }}>
            <label htmlFor="" >Business name (optional)</label>
            <input type="text" defaultValue="Seeker" className="headInput" style={{width:"85%"}} />
          </div>

          <div className="col w100 flexAIC" style={{ marginTop: "25px" }}>
            <label htmlFor="" >Slogan (optional)</label>
            <input type="text" className="headInput" defaultValue="I am the best"  style={{width:"85%"}} />
          </div>
        </div>
</div>
</>
  )
}

export default Thrid