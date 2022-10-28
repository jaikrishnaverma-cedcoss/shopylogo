import React from 'react'

const Nav = (props) => {
  const decr=()=>{
    if(props.state.pageCount<=1)
    return ""
    props.state.pageCount=props.state.pageCount-1

props.Updater({...props.state})
}
  return (
    <>
    <div className="row flexAIC flexSB w95 hp2 nav">
        <span className="spanbtn row flexAIC" onClick={decr}>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            &nbsp;
            &nbsp;
            BACK
</span>
        <img src="840babff8c7009ac167142cb459dfe8d.svg" alt="" className="logo" />
       <div className="row flexAIC" style={{width:"15%"}}>
        <button className="btn">LOGIN</button>
        <button className="btn outline c1">SIGN UP</button>
       </div>
    </div>
    </>
  )
}

export default Nav