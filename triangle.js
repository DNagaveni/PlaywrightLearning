let oneside = 5, secondside = 15, thirdside = 25;
if (oneside == secondside && secondside == thirdside) {
    console.log("Equilateral triangle");
} else if (oneside == secondside || secondside == thirdside || thirdside == oneside) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}