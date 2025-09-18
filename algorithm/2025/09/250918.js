// 8kyu. Surface Area and Volume of a Box

const getSize = (width, height, depth)  => [ 2 * (width * height + width * depth + height * depth) , width * height * depth]


/**
 * best solution
 * 
 * 
 * const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];
 */