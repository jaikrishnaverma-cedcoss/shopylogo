import React, { useEffect } from 'react'

const Second = () => {
    let arr = [
     { img: "s1.svg", head: "Bold" }
    , { img: "s2.svg", head: "Calm" }
    , { img: "s3.svg", head: "Reliable" }
    , { img: "s4.svg", head: "Classic" }
    , { img: "s5.svg", head: "Conservative" }
    , { img: "s6.svg", head: "Creative" }
    , { img: "s7.avif", head: "Elegant" }
    , { img: "s8.svg", head: "Energetic" }]

    const clicked=(data,e)=>{
        let parent=e.target.parentNode.parentNode.children
        for(let i=0;i<parent.length;i++)
        {
           parent[i].classList.remove("borderDiv") 
        }
        e.target.closest(".xfactor").classList.add("borderDiv")
                }

                useEffect(()=>{
                    document.getElementById("def0").classList.add("borderDiv")
                    },[])         
  return (
    <>
    <div className="col w100 flexAIC scroller" style={{ minHeight: "73.8vh" }}>
                <p className='firsth1'>Choose your visual style</p>
                <div className="row wrapbox flexSB wrap">
                    { arr.map((x,i) => {
                            return <div className="col card xfactor" id={"def"+i} onClick={(e)=>clicked(x,e)}>
                                <img src={x.img} alt="" />
                                <div className="name row flexJCC flexAIC w100">
                                    <p>{x.head}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default Second