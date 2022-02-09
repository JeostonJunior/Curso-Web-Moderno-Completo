const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(() => {
    console.log(i);
  });
}

funcs[0]();
funcs[3]();
