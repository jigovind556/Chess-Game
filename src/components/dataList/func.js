function initializeMatrix() {
  const rows = 8;
  const cols = 8;
  const matrix = [];
  matrix.push(["h1-1", "g1-1", "u1-1", "m1-1", "r1-1", "u2-1", "g2-1", "h2-1"]);
  matrix.push(["s1-1", "s2-1", "s3-1", "s4-1", "s5-1", "s6-1", "s7-1", "s8-1"]);

  for (let i = 2; i < rows-2; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("");
    }
    matrix.push(row);
  }
  matrix.push(["s1-2", "s2-2", "s3-2", "s4-2", "s5-2", "s6-2", "s7-2", "s8-2"]);
  matrix.push(["h1-2", "g1-2", "u1-2", "m1-2", "r1-2", "u2-2", "g2-2", "h2-2"]);

  return matrix;
}

export default initializeMatrix;
