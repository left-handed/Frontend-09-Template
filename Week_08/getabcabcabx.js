function match(str) {
  let start = start;
  for (const c of str) {
    start(c);
  }
  start === end;
}

function start(c) {
  if(c === 'a') {
    return foundA;
  } else {
    return start(c);
  }
}

function end(c) {
  return end;
}

function foundA(c) {
  if (c === 'a') {
    return foundB;
  } else {
    return start(c);
  }
}

function founB(c) {
  if (c === 'c') {
    return foundC;
  } else {
    return start(c)
  }
}

function foundC(c) {
  if (c === 'a') {
    return foundA2;
  } else {
    return start(c);
  }
}

function foundA2(c) {
  if (c === 'a') {
    return foundB2;
  } else {
    return start(c);
  }
}

function foundB2(c) {
  if (c === 'x') {
    return end;
  } else {
    return foundB(c);
  }
}
console.log(match('abcabcabx'));