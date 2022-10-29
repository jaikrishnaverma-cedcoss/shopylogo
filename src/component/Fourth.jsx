import React, { useEffect } from 'react'

const Fourth = () => {
  let data=[{icon:"fa fa-globe",title:"Online Store or website"},
  {icon:"fa fa-share-alt",title:"Social media"},
  {icon:"fa fa-print",title:"Print and swag"},
  {icon:"fa fa-address-card-o",title:"Business Cards"},
  {icon:"fa fa-th-large",title:"Large surfaces"},
  {icon:"fa fa-shopping-bag",title:"Physical stores"},
  {icon:"fa fa-exclamation-circle",title:"None of the above"}
]
  const clicked = (e) => {
    let parent = e.target.closest(".xfactor")

  parent.classList.toggle("borderDiv")
    let checked=parent.children[1].children[0].children[0]
    checked.checked=!checked.checked
    console.log(parent.classList)
  }
  useEffect(()=>{
    document.getElementById("def0").classList.add("borderDiv")
    document.getElementById("def0").children[1].children[0].children[0].checked=true
},[])
  return (
    <>
      <div className="col w100 flexAIC scroller" style={{ minHeight: "73.8vh" }}>
        <p className='firsth1'>Tell us where the logo will be used</p>
        <p className='firsth2'>Choose all that may apply</p>
        <div className="col flexAIC " style={{ boxShadow: "none", width: "70%" }}>
         
        {data.map((x,i)=>  <div onClick={clicked} id={"def"+i} className="xfactor row w100 flexAIC flexSB cardopt" style={{ marginTop: "15px", width: "90%", padding: "auto 2%" }}>
            <div className="row flexAIC  w50">
              <i className={x.icon} aria-hidden="true"></i>
              <p>{x.title}</p>
            </div>
            <div className="container row flexAIC">
              <div className="round  row flexAIC">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox"></label>
              </div>
            </div>
          </div>)}
     

     
        </div>
      </div>
    </>
  )
}

export default Fourth