// 배열 실습 1 : 배열 고차함수 사용금지

// 1
// 배열에서 귤이 존재하면 '귤이 있습니다' 존재하지 않으면 '귤이 없습니다' 출력
let fruits = ["사과", "배", "귤", "감"];
let input = "귤";
console.log(fruits.includes(input) ? '귤이 있습니다' : '귤이 없습니다');

// 2
// 배열에서 '노랑'을 제거한 배열을 출력
let colors = ["빨강", "파랑", "노랑", "초록"];
let target = "노랑";
colors.splice(colors.indexOf(target), 1);
console.log(colors);

// 3
// reverse메서드를 사용하지 말고 배열 뒤집어 출력
let nums = [1, 2, 3, 4, 5];
let reversed = [];
for (let i=nums.length-1; i>=0; i--) {
    reversed.push(nums[i]);
}
console.log(reversed);

// 4
// 배열에서 최대값 구해서 출력
let arr1 = [7, 3, 9, 12, 5];
let max = arr1[0];
for (let i=0; i<arr1.length; i++) {
    if (arr1[i]>max) max = arr1[i];
}
console.log(max);

// 5
// 배열의 인덱스 2에 'C'를 삽입하고 배열을 출력
let alphabet = ["A", "B", "D", "E"];
alphabet.splice(2, 0, 'C');
console.log(alphabet);

// 6
// 중복된 요소가 제거된 배열을 출력
let origin = [1, 3, 3, 5, 1, 7, 9, 9];
let unique = [];
for (let i=0; i<origin.length; i++) {
    if (unique.indexOf(origin[i]) == -1) {
        unique.push(origin[i]);
    }
}
console.log(unique);

// 7
// 3행 3열 배열을 만들고 1부터 9까지 채워서 출력
let matrix = [];
let count = 1;
for (let i=0; i<3; i++) {
    let row = [];
    for (let j=0; j<3; j++) {
        row.push(count);
        count++;
    }
    matrix.push(row);
}
console.log(matrix);

// 8
// 배열에서 인덱스 1과 인덱스 3의 요소를 바꾼 배열을 출력
let arr2 = ["가", "나", "다", "라", "마"];
let temp = arr2[1];
arr2[1] = arr2[3];
arr2[3] = temp;
console.log(arr2);

// 9
// 배열에서 짝수만 모은 배열을 출력
let numbers = [10, 13, 22, 37, 40, 55];
let even = [];
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]%2==0) even.push(numbers[i]);
}
console.log(even);

// 10
// 배열을 오른쪽으로 한칸씩 회전하기
// ex) [1,2,3,4] => [4,1,2,3]
let arr3 = [1, 2, 3, 4];
arr3.unshift(arr3.pop());
console.log(arr3);






























