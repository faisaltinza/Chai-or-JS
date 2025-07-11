//******** same data type*****************
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(5 != 5); // not equal to 5 // false
console.log(5 == 5); // equal to 5 // true
console.log(2 >= 1); // greater than or equal to 1 // true

//******** different data type *****************
console.log(1 == "1"); // true (loose equality, type coercion) js converts string "1" to number 1
console.log("01" > 5); // false (string comparison, "01" is coerced to number 1, which is less than 5)

console.log(null == 0 ); // false (null is not equal to 0) js not convert null to 0 in loose comparison
console.log(null > 0); // false (null is not greater than 0) js converts null to 0 in loose comparison
console.log(null < 0); // false (null is not less than 0)
console.log(null >= 0); // true (null is considered equal to 0 in loose comparison) js converts null to 0 in loose comparison

console.log(undefined == 0); // false (undefined is not equal to 0) js not convert undefined to 0 in loose comparison
console.log(undefined > 0); // false (undefined is not greater than 0) js converts undefined to NaN in loose comparison
console.log(undefined < 0); // false (undefined is not less than 0)
console.log(undefined >= 0); // false (undefined is not greater than or equal to 0) js converts undefined to NaN in loose comparison

console.log(undefined == null); // true (loose equality, both are considered equal in loose comparison) js treats undefined and null as equal in loose comparison
console.log(undefined > null); // false (undefined is not greater than null)

// ****************strict comparison**********************
console.log(1 === "1"); // false (strict equality, no type coercion) js does not convert string "1" to number 1
console.log(1 !== "1"); // true (strict inequality, no type coercion) js does not convert string "1" to number 1
console.log(null === undefined); // false (strict equality, different types) js does not treat null and undefined as equal in strict comparison









