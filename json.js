var data  = {
    name: "Ashish Rai",
    age: 39,
    hobby: ["reading", "painting", "hiking"]
}

console.log(JSON.stringify(data));

var data2  = '{"name": "Ashish Rai", "age": 39, "hobby": ["reading", "painting", "hiking"]}';
console.log(JSON.parse(data2));