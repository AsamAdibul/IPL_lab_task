function c2f(c) {
    let f = (c * 9 / 5) + 32;
    return f;
}


let c = 25;
let f = c2f(c);
document.write(c + "°C is " + f + "°F");
