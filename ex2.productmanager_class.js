/* ex2.productmanager.js
 [자바스크립트 실습 : 상품관리 - class 버젼]

 - 기능 : 상품목록, 상품등록, 상품상세, 상품수정, 상품삭제
 - 상품정보 : 상품번호, 제조사명, 상품명, 상품수량, 상품가격
 - TODO
   1. 상품정보 객체화 (또는 배열)
   2. 기능 함수화
   3. 기능 테스트
*/

// Map
let productMap = new Map([]);

// 클래스
class Product {
    constructor(pno, pcompany, pname, pamount, pprice) {
        this._pno = pno;
        this._pcompany = pcompany;
        this._pname = pname;
        this._pamount = pamount;
        this._pprice = pprice;
    }
    get pno() { return this._pno; }
    set pno(pno) { this._pno = pno }
    get pcompany() { return this._pcompany; }
    set pcompany(pcompany) { this._pcompany = pcompany }
    get pname() { return this._pname; }
    set pname(pname) { this._pname = pname }
    get pamount() { return this._pamount; }
    set pamount(pamount) { this._pamount = pamount }
    get pprice() { return this._pprice; }
    set pprice(pprice) { this._pprice = pprice }
}

// 클래스
class ProductManager {
    listProduct() {
        productMap.keys().forEach(
            pno => {
                this.detailProduct(pno);
            }
        );
    }
    registProduct(product) {
        productMap.set(product.pno, product);
    }
    detailProduct(pno) {
        const product = productMap.get(pno);
        console.log(
            '상품번호:'+product.pno,
            '제조사명:'+product.pcompany,
            '상품명:'+product.pname,
            '상품수량:'+product.pamount,
            '상품가격:'+product.pprice
        );
    }
    modifyProduct(product) {
        this.deleteProduct(product.pno);
        productMap.set(product.pno, product);
    }
    deleteProduct(pno) {
        productMap.delete(pno);
    }
}

const productManager = new ProductManager();

productManager.registProduct(new Product(1, 'bmw', '520d', 10, 10000));
productManager.registProduct(new Product(2, 'bentz', 'e500', 5, 20000));
productManager.registProduct(new Product(3, 'bentz', 'cls500', 3, 30000));

productManager.listProduct();

productManager.deleteProduct(2);

productManager.listProduct();

productManager.modifyProduct(new Product(3, 'mod-bentz', 'mod-cls500', 1, 10000));

productManager.listProduct();






