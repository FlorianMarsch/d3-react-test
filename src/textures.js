import textures from 'textures';


let colors = [
    textures.paths()
        .d("hexagons")
        .size(8)
        .strokeWidth(2)
        .stroke("darkorange"),
    textures.paths()
        .d("crosses")
        .lighter()
        .thicker(),
    textures.paths()
        .d("caps")
        .lighter()
        .thicker()
        .stroke("darkorange"),
    textures.circles()
        .size(10)
        .radius(2)
        .fill("firebrick")
        .background("darkorange"),
    textures.lines()
        .orientation("diagonal")
        .size(40)
        .strokeWidth(26)
        .stroke("darkorange")
        .background("firebrick"),
    textures.lines()
        .orientation("3/8", "7/8")
        .stroke("darkorange")]

console.log(textures)

colors = [
    textures.circles().fill("#b71c1c").background("#b71c1c"),
    //textures.circles().background("#c62828"),
    textures.circles().fill("#d32f2f").background("#d32f2f"),
    //textures.circles().background("#e53935"),
    textures.circles().fill("#f44336").background("#f44336"),
    //textures.circles().background("#ef5350"),
    textures.circles().fill("#e57373").background("#e57373"),
    //textures.circles().background("#ef9a9a")
    textures.circles().fill("#ffcdd2").background("#ffcdd2")

]


const generator = { index: 0, textures: colors }
generator.next = (svg) => {
    let texture = generator.textures[generator.index]
    generator.index += 1
    svg.call(texture)
    return texture.url()
}


export default generator;