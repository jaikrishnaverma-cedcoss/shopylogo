import React from 'react'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
const Foot = (props) => {
  const incer = () => {
    if (props.state.pageCount >= 7)
    {
      htmlToImage.toJpeg(document.getElementById('jaljeera'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
      return ""}
    if(props.state.pageCount==5)
    props.state.currentlogo=(props.state.currentlogo)?props.state.currentlogo:{
      bg: { background: "url('s2.svg')" },
       img: "d1.png",
      imgstyle: { },
       tstyle: {}, pstyle: {},

       text:{title:"Seeker",para:"I am the best"}
  }
    props.state.pageCount = props.state.pageCount + 1

    props.Updater({ ...props.state })
  }
  
  return (
    <>
      <div className="row flexAIC flexJCC w95 hp2 footer" style={{ borderTop: "1px solid #d9d4d4" }}>
        <button className="btn " style={{ color: "white" }} onClick={incer}>{(props.state.pageCount >= 6) ? "DOWNLOAD" : "NEXT"}</button>
      </div>
    </>
  )
}

export default Foot