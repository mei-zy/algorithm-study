const a = new Map();

a.set("e", 0);
a.set("t", 1);
a.set("c", 3);
a.set("a", 5);
a.set("z", 1);
a.set("b", 2);

const sort = new Map([...a.entries()].sort((a, b) => a[1] - b[1]));
console.log(sort);
