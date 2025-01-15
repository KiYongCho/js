/* ex1.productmanager.js
 [자바스크립트 실습 : 상품관리 - function 버젼]

 - 기능 : 상품목록, 상품등록, 상품상세, 상품수정, 상품삭제
 - 상품정보 : 상품번호, 제조사명, 상품명, 상품수량, 상품가격
 - TODO
   1. 상품정보 객체화 (또는 배열)
   2. 기능 함수화
   3. 기능 테스트
*/

// 상품리스트 배열
let productList = [];

// 생성자 함수
function Product(pno, pcompany, pname, pamount, pprice) {
    this.pno = pno;
    this.pcompany = pcompany;
    this.pname = pname;
    this.pamount = pamount;
    this.pprice = pprice;
}

// 생성자 함수
function ProductManager() {
    this.listProduct = function() {
        productList.forEach(
            product => {this.detailProduct(product);}
        );
    },
    this.registProduct = function(product) {
        productList.push(product);
    },
    this.detailProduct = function(product) {
        console.log(
            '상품번호:'+product.pno,
            '제조사명:'+product.pcompany,
            '상품명:'+product.pname,
            '상품수량:'+product.pamount,
            '상품가격:'+product.pprice
        );
    },
    this.modifyProduct = function(product) {
        productList = productList.map(
            prod => {
                if (prod.pno==product.pno) {
                    return product;
                } else {
                    return prod;
                }
            }
        );
    },
    this.deleteProduct = function(pno) {
        productList = productList.filter(
            product => { return product.pno!=pno; }
        );
    }
}

const productManager = new ProductManager();

productManager.registProduct(new Product(1, 'bmw', '520d', 10, 10000));
productManager.registProduct(new Product(2, 'bentz', 'e500', 5, 20000));
productManager.registProduct(new Product(3, 'bentz', 'cls500', 3, 30000));

//productManager.listProduct();

productManager.deleteProduct(2);

productManager.listProduct();

productManager.modifyProduct(new Product(3, 'mod-bentz', 'mod-cls500', 1, 10000));

productManager.listProduct();







