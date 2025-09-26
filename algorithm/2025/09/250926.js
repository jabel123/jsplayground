// 8kyu. Take the Derivative

const derive = (coefficient,exponent) => (coefficient * exponent) +'x^'+ (exponent - 1);

// best solution
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}