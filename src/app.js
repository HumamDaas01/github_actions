function hello(name) {
  return `Hello ${name}`;
}

module.exports = hello;

if (require.main === module) {
  console.log(hello('World'));
}
