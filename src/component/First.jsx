import React, { useEffect } from 'react'

const First = () => {
    let arr = [{ img: "page1.svg", head: "Fashion" }
        , { img: "page2.svg", head: "Health and beauty" }
        , { img: "page3.svg", head: "Home and garden" }
        , { img: "page4.svg", head: "Food and drink" }
        , { img: "page5.svg", head: "Sports and rec" }
        , { img: "page6.svg", head: "Gifts and collectibles" }
        , { img: "page7.svg", head: "Tech" }
        , { img: "page8.svg", head: "Art and photos" }]
        // borderDiv
useEffect(()=>{
document.getElementById("def0").classList.add("borderDiv")
},[])
    const clicked=(data,e)=>{
let parent=e.target.parentNode.parentNode.children
for(let i=0;i<parent.length;i++)
{
   parent[i].classList.remove("borderDiv") 
}
e.target.closest(".xfactor").classList.add("borderDiv")
        }
    return (
        <>
            <div className="col w100 flexAIC scroller" style={{ minHeight: "73.8vh" }}>
                <p className='firsth1'>Choose your business space</p>
                <p className='firsth2'>This helps us create better designs</p>
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

export default First