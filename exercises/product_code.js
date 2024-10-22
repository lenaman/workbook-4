function parsePartCode(partCode1) {
  let code = partCode1.split(":");
  let productAndSize = code[1].split("-");

  let supplierCode = code[0].trim();
  let productNumber = productAndSize[0].trim();
  let size = productAndSize[1].trim();

  return {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: size,
  };
}

let partCode1 = "XYZ :1234-L";
let part1 = parsePartCode(partCode1);
console.log(
  "supplier: " + part1.supplierCode + " " + "Product Number: " + part1.productNumber + " " + "Size: " + part1.size
);
