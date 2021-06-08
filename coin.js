AFRAME.registerComponent("coins", {
    init: function(){
        for(var i = 1; i<= 10; i++){
            const id  = `coin${i}`
            const posx = Math.random() * 100 + -50
            const posy = Math.random() * 5 + 5
            const posz = Math.random() *60 + -40
            const position = {x: posx, y: posy, z: posz};
            this.createCoins(id, position)
        }
    },
    createCoins: function(){
        const tresureEntity = document.querySelector("#tresureCoins")
        coin1.setAttribute("id", id)
        coin1.setAttribute("position", position)
        coin1.setAttribute("material", "color", "#ff9100")
        coin1.setAttribute("geometry", {primitive: "circle", radius: 1})
        coin1.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        coin1.setAttribute("collider", {elementId: `#${id}`}) 
        tresureEntity.appendChild(coin1)
    }
})