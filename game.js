AFREAME.registerComponent("collider", {
    schema:{
        elementId: {type: "string", default: "#coin1"}
    },
    isCollider: function(eid){
        const element = document.querySelector(eid)
        element.addEventlistener("collide", (e)=>{
            if(eid.includes("#coin")){
                console.log(eid)
            }
        })
    },
    update: function(){
        this.isCollider(this.data.elementId)
    },
    init: function(){
        var duration = 120
        const timer1 = document.querySelector("#timer")
        this.startTimer(duration, timer1)
    },
    startTimer: function(duration, timer1){
        var minutes, seconds
        setInterval(()=>{
            if(duration >= 0){
               minutes = parseInt(duration/60)
               seconds = parseInt(duration % 60)
               if(minutes < 10){
                  minutes = "0" + minutes
               }
               if(seconds < 10){
                minutes = "0" + seconds
             }
               timer1.setAttribute("text", {value: minutes + ":" + seconds})
               duration = duration - 1
            }
        }, 1000)
    }
})
})
