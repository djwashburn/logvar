const logvar = (varObject) => {
  const varName = Object.getOwnPropertyNames(varObject)[0];
  console.log(`${varName}: `);
  console.log(varObject[varName]);
};

exports.logvar = logvar;

