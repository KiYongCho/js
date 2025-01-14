/*
    상속 : extends 키워드 사용
    동적상속 : extends (조건 ? 클래스1 : 클래스2) 
             => 조건이 참이면 클래스1 상속, 조건이 거짓이면 클래스2 상속
                (내부적으로는 프로토타입 교체가 일어남)
    super : 상위클래스의 객체참조
    오버라이딩(overriding) : 상위클래스의 메소드를 하위클래스에 재정의
*/

class Bird {
    constructor(name, sound) {
        this._name = name;
        this._sound = sound;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get sound() {
        return this._sound;
    }
    set sound(sound) {
        this._sound = sound;
    }
    cry() {
        console.log(this._name + "은 " + this._sound + " 소리를 냅니다!");
    }
}

class Eagle extends Bird {
    constructor(name, sound) {
        // 하위클래스 생성자의 첫라인은 상위클래스 생성자 호출
        super(name, sound);
        this._name = name;
        this._sound = sound;
    }
}

const eagle = new Eagle('독수리', '꽤꽤');
eagle.cry();

class Chicken extends Bird {
    constructor(name, sound) {
        super(name, sound);
        this._name = name;
        this._sound = sound;
    }    
}

const chicken = new Chicken('닭', '꼬끼오');
chicken.cry();

// 동적상속 / 오버라이딩
const birdName = '오골계';

class AnyBird extends (birdName=='오골계' ? Chicken : Eagle) {
    constructor(name, sound) {
        super(name, sound);
        this._name = name;
        this._sound = sound;
    }
    // Bird의 cry를 오버라이딩
    cry() {
        console.log(this._name + "은 " 
            + this._sound + " 울음소리를 낸다!");
    }
}

const ogolgye = new AnyBird('오골계', '오골오골');
ogolgye.cry();





















