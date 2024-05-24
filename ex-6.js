let height = undefined;
let result = function (param) {
  return param ?? "Height is not defined";
};

console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
