// 1. 문자열에서 모든 숫자를 찾아 배열로 반환하세요.
// 결과 : ['2025','1','15']
const str1 = "오늘은 2025년 1월 15일입니다.";
console.log(str1.match(/\d+/g));

// 2. 주어진 문자열에서 모든 공백을 제거하세요.
// 결과 : HelloWorld!
const str2 = "Hello   World!";
console.log(str2.replace(/\s+/g, ''));

// 3. 문자열에 'JavaScript'라는 단어가 포함되어 있는지 확인하세요.
// 결과 : true
const sentence = "I am learning JavaScript and it's fun!";
console.log(/JavaScript/.test(sentence));

// 4. 주어진 문자열이 올바른 전화번호 형식인지 확인하세요. (예: 010-1234-5678)
// 결과 : true
const phone = "010-1234-5678";
console.log(/^\d{3}-\d{4}-\d{4}$/.test(phone));

// 5. 문자열에서 모든 URL을 추출하세요.
// 결과 : ['https://google.com', 'http://example.com']
const text1 = "Visit https://google.com and http://example.com!";
console.log(text1.match(/https?:\/\/[^\s]+/g));

// 6. 주어진 문자열에서 숫자와 알파벳만 남기세요.
// 결과 : 'Hello123World456'
const str3 = "Hello123!@#World456";
console.log(str3.replace(/[^a-zA-Z0-9]/g, ''));

// 7. 문자열에서 소수점 두 자리까지의 실수를 모두 추출하세요.
// 결과 : ['12.50', '100.99']
const text2 = "The prices are 12.50, 100.99, and 3.5 dollars.";
console.log(text2.match(/\d+\.\d{2}/g));
