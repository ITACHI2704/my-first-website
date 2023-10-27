

  let  kkr= gsap.timeline()

 kkr.from(".logo,.button,nav", {
    y:-120,
    delay:.5,
    duration:.5,
    opacity:0,
    stagger:0.5
 })

 kkr.from(".title",{
    
    opacity:0,
    scale:0
 })