import React, { useEffect } from 'react'

const Fifth = (props) => {
    let themes = [
        {
            bg: { background: "url('s2.svg')" },
             img: "d1.png",
            imgstyle: { },
             tstyle: {}, pstyle: {},
             text:{title:"Seeker",para:"I am the best"}
        },
        {
            bg: { background: "url('s8.svg')" },
             img: "sphere-stone-g8dccb379e_640.png",
            imgstyle: { },
             tstyle: {color:"blue"}, pstyle: {fontSize:"16px"},
             text:{title:"Seeker",para:"I am the best"}
        },
        {
            bg: { background: "rgb(255, 98, 98)" }, 
            img: "decor-g0bc8a43ecv8_640.png",
            imgstyle: { },
             tstyle: {color:"rgb(252 234 146)"}, pstyle: {color:"white"},
             text:{title:"Seeker",para:"I am the best"}
        },
        {
            bg: { background: "url('abstract-1846962__340.jpg')" },
             img: "decor-g0bc8a43e8_640.png",
            imgstyle: { },
             tstyle: {}, pstyle: {},
             text:{title:"Seeker",para:"I am the best"}
        }, 
         {
            bg: { background: "url('colorful-gaad448b53_640.png')" },
             img: "decor-g0bc8ga43e8_640.png",
            imgstyle: { },
             tstyle: {color:"white"}, pstyle: {},
             text:{title:"Seeker",para:"I am the best"}
        },
        {
            bg: { background: "rgb(252 234 146)" }, 
            img: "s3.svg",
            imgstyle: { },
             tstyle: {}, pstyle: {},
             text:{title:"Seeker",para:"I am the best"}
        },
    
    ]


    const clicked=(data,e)=>{
        let parent=e.target.closest(".xfactor").parentNode.children
        for(let i=0;i<parent.length;i++)
        {
           parent[i].classList.remove("borderDiv") 
        }
        e.target.closest(".xfactor").classList.add("borderDiv")
props.Updater({...props.state,currentlogo:{...data},pageCount:props.state.pageCount+1})
    }
    useEffect(()=>{
        document.getElementById("def0").classList.add("borderDiv")
    },[])
    return (

        <>
            <div className="col w100 flexAIC scroller" style={{ minHeight: "73.8vh" }}>
                <p className='firsth1'>We made these logos for you</p>
                <p className='firsth2'>Choose one to start editing. You can pick a different logo anytime.</p>
                <div className="col flexAIC " style={{ boxShadow: "none", width: "90%" }}>
                    <div className="row wrapbox flexSB wrap w100">
                        {


                            themes.map((x,i) => {
                                return <div className="col card flexAIC xfactor xo" id={"def"+i} onClick={(e)=>clicked(x,e)} style={{ width: "29.5%" }}>
                                    <div className="pic" style={x.bg}>
                                        <img src={x.img} style={x.imgstyle} alt="" />
                                        <div className="col flexAIC flexJCC write">
                                            <h3 style={x.tstyle}>Title</h3>
                                            <p style={x.pstyle}>i am the best</p>
                                        </div>
                                    </div>
                                    <button className='btn editbtn'>Edit Logo</button>
                                </div>
                            })



                        }
                    </div>


                </div>
            </div>
        </>
    )
}

export default Fifth