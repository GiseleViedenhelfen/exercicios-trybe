const sum = (...args) => args.reduce(((c, v) => c + v), 0)
console.log(sum(4, 3, 1, 2));