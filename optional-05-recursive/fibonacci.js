function fibonacci(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  const deretSebelumnya = fibonacci(n - 1);
  const angkaSebelumnya = deretSebelumnya[n - 1] + deretSebelumnya[n - 2];
  return [...deretSebelumnya, angkaSebelumnya];
}
export default fibonacci;