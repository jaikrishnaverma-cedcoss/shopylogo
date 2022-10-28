import React from 'react'

const Foot = (props) => {
    const incer=()=>{
        if(props.state.pageCount>=7)
        return ""
        props.state.pageCount=props.state.pageCount+1

props.Updater({...props.state})
    }
  return (
    <>
    <div className="row flexAIC flexJCC w95 hp2 footer" style={{borderTop:"1px solid #d9d4d4"}}>
        <button className="btn " style={{color:"white"}} onClick={incer}>NEXT</button>
    </div>
    </>
  )
}

export default Foot