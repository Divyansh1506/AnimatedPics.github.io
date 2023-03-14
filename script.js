
gsap.from("nav",{
    y:"-150px",
    delay:1,
    duration:2
})

gsap.from(".first-inner" ,{
    opacity:0,
    scale:1.5,
    duration:2,
    delay:1
})

gsap.from(".inner-txt h1" ,{
    opacity:0,
    scale:-1,
    duration:2,
    delay:3,
})

// const inner_txt = document.querySelector('.inner-txt')
// gsap.from(inner_txt.children ,{
//     opacity:0,
//     duration:1,
//     y:"100px",
//     pin:true,
//     rotate:"5deg",
//     delay:2,
//     stagger:{
//         amount:1
//     }
// })




gsap.to(".third .img1",{
    scrollTrigger:{
        trigger:".third",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "bottom 80%",
        // pin:true,
        scrub:4,
    },
    opacity:1,
    x:500,
    rotate:3,
    y:"-10%"
})


gsap.to(".third .img2",{
    scrollTrigger:{
        trigger:".third",
        scroller:"body",
        // pin:true,
        // markers:true,
        start:"top 70%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
    x:-500,
    rotate:-3,
    y:"-10%",
})


gsap.to(".fourth .img1",{
    scrollTrigger:{
        trigger:".fourth",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "bottom 80%",
        // pin:true,
        scrub:4,
    },
    opacity:1,
    x:500,
    rotate:3,
    y:"-10%"
})


gsap.to(".fourth .img2",{
    scrollTrigger:{
        trigger:".fourth",
        scroller:"body",
        // pin:true,
        // markers:true,
        start:"top 70%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
    x:-500,
    rotate:-3,
    y:"-10%",
})


// 


gsap.to(".third .third-inner p",{
    scrollTrigger:{
        trigger:".third-inner",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
})


gsap.to(".fourth .fourth-inner p",{
    scrollTrigger:{
        trigger:".fourth-inner",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
})

gsap.to(".third .third-inner .p2",{
    scrollTrigger:{
        trigger:".third-inner",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
    y:-300
})


gsap.to(".fourth .fourth-inner .p2",{
    scrollTrigger:{
        trigger:".fourth-inner",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
    y:-300
})

gsap.to(".third .third-inner .p3",{
    scrollTrigger:{
        trigger:".third-inner",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
    y:-150
})


gsap.to(".fourth .fourth-inner .p3",{
    scrollTrigger:{
        trigger:".fourth-inner",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "bottom 80%",
        scrub:4,
    },
    opacity:1,
    y:-150
})

