import React, { useState } from 'react'

const Body = (props) => {
  let [x,setX]=useState(props.state.currentlogo)
  
  return (
    <>
      <div className="row w100" style={{ minHeight: "73.8vh" }}>
        <div className="col w5 flexAIC " >
          <div className="navbox col">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <span>fds</span>
          </div>
          <div className="navbox col">
            <i class="fa fa-font" aria-hidden="true"></i>
            <span>fds</span>
          </div>
          <div className="navbox col">
            <i class="fa fa-google-wallet" aria-hidden="true"></i>
            <span>fds</span>
          </div>

        </div>
        <div className="col w22 flexAIC ">
          <div className="col w100 flexAIC" style={{ marginTop: "25px" }}>
            <label htmlFor="" >Business name (optional)</label>
            <input type="text" className="headInput" value={props.state.currentlogo.text.title} onChange={(e)=>props.Updater({...props.state,currentlogo:{...props.state.currentlogo,text:{title:e.target.value,para:props.state.currentlogo.text.para}}})}/>
          </div>

          <div className="col w100 flexAIC" style={{ marginTop: "25px" }}>
            <label htmlFor="" >Slogan (optional)</label>
            <input type="text" className="headInput" value={props.state.currentlogo.text.para} onChange={(e)=>props.Updater({...props.state,currentlogo:{...props.state.currentlogo,text:{...props.state.currentlogo.text,para:e.target.value}}})}/>
          </div>
        </div>
        <div className="col w73 flexAIC flexJCC">
          <div className="pic" style={x.bg}>
            <img src={x.img} alt="" style={{...x.imgstyle,height:"70%",width: "90%"}} />
            <div className="col flexAIC flexJCC write">
             <h3 style={x.tstyle}>{props.state.currentlogo.text.title}</h3>
             <p style={x.pstyle}>{props.state.currentlogo.text.para}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body