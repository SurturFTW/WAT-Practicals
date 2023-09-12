function CalculateArea(radius){
    return Math.PI * Math.pow(radius, 2);
}

function calculatePerimeter(radius){
    return 2 * Math.PI * radius;
}

module.exports = {
    CalculateArea,
    calculatePerimeter,
};