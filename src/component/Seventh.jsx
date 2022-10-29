
import React from 'react'

const Seventh = (props) => {

  
  let x = props.state.currentlogo;
  const clicked = (e) => {
   
    let parent = e.target.closest(".xfactor")

    parent.classList.toggle("borderDiv")
    let checked = parent.children[1].children[0].children[0]
    checked.checked = !checked.checked
    console.log(parent.classList)
  }
 
  return (
    <>
      <div className="col w100 flexAIC scroller" style={{ minHeight: "73.8vh" }}>
        <p className='firsth1'>Congratulations on your new logo</p>
        <p className='firsth2'>Download your free logos now</p>
        <div className="col flexAIC " style={{ boxShadow: "none", width: "80%" }}>

          <div className="row flexAIC w100 carder" style={{ width: "100%" }}>
            <div className="col card flexAIC xfactor xo" id="jaljeera" onClick={(e) => clicked(x, e)} style={{ width: "25%" }}>
              <div className="pic" style={x.bg}>
                <img src={x.img} style={x.imgstyle} alt="" />
                <div className="col flexAIC flexJCC write">
                  <h3 style={x.tstyle}>{props.state.currentlogo.text.title}</h3>
                  <p style={x.pstyle}>{props.state.currentlogo.text.para}</p>
                </div>
              </div>
            </div>

            <div className="details" style={{ width: "75%", padding: "15px", textAlign: "left" }}>
              <h2>Included in all logo packages</h2>
              <div className="row flexAIC">
                <div className="col w46 ">
                  <p >High resolution logo with unlimited revisions</p>
                  <p>Favicon</p>
                  <p>Facebook profile image</p>
                  <p>Facebook cover photo (two variations)</p>
                  <p>Instagram profile image</p>
                  <p>Twitter profile image</p>
                </div>
                <div className="col w46 ">
                  <p>Twitter banner (two variations)</p>
                  <p>Pinterest profile image</p>
                  <p>Pinterest board photo</p>
                  <p>LinkedIn profile image</p>
                  <p>LinkedIn profile banner (two variations)</p>
                  <p>YouTube profile image</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Seventh