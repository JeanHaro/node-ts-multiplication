console.log(process.argv);

// tsnode, src/app.ts, arg1 = -b, arg2 = -l
const [tsnode, app, ...args] = process.argv;
console.log(args);
