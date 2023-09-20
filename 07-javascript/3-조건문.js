//조건문

//if문
// if (조건) {
//   실행문;
// }

// if-else문
// is(조건) {
//     실행문
// } else {
//     실행문
// }

// //if-else if문
// if (조건) {
//   실행문;
// } else if (조건) {
//   실행문;
// } else {
//   실행문;
// }

//예시
function isPositive(num) {
  if (num > 0) {
    return "양수입니다.";
  } else if (num < 0) {
    return "음수입니다.";
  } else {
    return "0입니다.";
  }
}

console.log(isPositive(1)); //양수입니다.
console.log(isPositive(-1)); //음수입니다.
console.log(isPositive(0)); //0입니다.

//switch문
// switch(조건) {
//     case 값1:
//         실행문; //조건과 값1이 일치하면 실행
//         break;
//     case 값2:
//         실행문; // 조건과 값2가 일치히면 실행
//         break;
//     default:
//         실행문;//조건과 일치하는 값이 없을 때 실행
//

//예시
function getSound(animal) {
  switch (animal) {
    case "도라에몽":
      return "대나무 헬리콥터!";

    case "뽀로로":
      return "노는 게 제일 좋아";

    case "짱구":
      return "천방지축 어리둥절";

    case "흰둥이":
      return "뫙?";

    case "피카츄":
      return "피카 피카";

    case "냐옹이":
      return "냐옹이다옹";
  }
  return sound;
}

console.log(getSound("도라에몽"));
console.log(getSound("뽀로로"));
console.log(getSound("짱구"));
console.log(getSound("흰둥이"));
console.log(getSound("피카츄"));
console.log(getSound("냐옹이"));

//if문으로 변환=
function getSound2(animal) {
  if (animal === "도라에몽") return "대나무 헬리콥터!";
  if (animal === "뽀로로") return "노는 게 제일 좋아";
  if (animal === "짱구") return "천방지축 어리둥절";
  if (animal === "흰둥이") return "뫙?";
  if (animal === "피카츄") return "피카 피카";
  if (animal === "냐옹이") return "냐옹이다옹";
  return "...?";
}

console.log(getSound2("도라에몽")); //앙앙앙

//반복문
//for문

//for(초기화; 조건; 종료식) {
//실행문;
//}

for (let i = 0; i < 10; i = i + 1) {
  console.log(i); //0부터9까지 출력
}

//감소하는 for문
for (let i = 9; i >= -1; i--) {
  if (i < 4) {
    break;
  }
  console.log(i);
}

//continue
for (let i = 9; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); //97531
}
