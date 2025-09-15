// 8kyu Count of positives / sum of negatives

// my solution
function countPositivesSumNegatives(input) {
  let pos = 0;
  let neg = 0;  
  
  if (input === null || input.length === 0) {
    return [];
  }
  
  for (let i = 0; i < input.length; i++) {    
    (input[i] > 0) ? pos++ : neg += input[i];    
  }
  
  const res = [];
  res.push(pos);
  res.push(neg);  
    
  return res;
}


// best solution
/**
 * function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
 */