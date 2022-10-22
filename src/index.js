/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は28歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
// return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name : "じゃけぇ",
//   age : 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}際です`;
// console.log(message1);

// const { name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}際です`;
// console.log(message2);

// const myProfile = ['じゃけぇ',28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3);

// 下記の場合、配列の順番通りに出力される
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);
