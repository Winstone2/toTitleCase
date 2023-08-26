function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}
const inputString = "hello world, this is an example.";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString);
// Output: "Hello World, This Is An Example."
