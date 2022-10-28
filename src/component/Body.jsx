import React from 'react'

const Body = () => {
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
            <input type="text" className="headInput" />
          </div>

          <div className="col w100 flexAIC" style={{ marginTop: "25px" }}>
            <label htmlFor="" >Slogan (optional)</label>
            <input type="text" className="headInput" />
          </div>
        </div>
        <div className="col w73 flexAIC flexJCC">
          <div className="pic">
            <img src="sphere-stone-g8dccb379e_640.png" alt="" />
            <div className="col flexAIC flexJCC write">
             <h3>Seeker</h3>
             <p>i am the best</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body