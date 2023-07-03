/**
 *      1. SPA - Single-Page Application (kiến trúc bên dưới là single-page)
 * = CSR (Client side rendering)
 *      - Hiện đại hơn
 *      - Không yêu cầu tải lại trang trong quá trình sdung
 * 
 *      - Nhanh hơn
 *      - Có phần FE riêng biệt
 *      - UX tốt
 *      - Dễ tái sử dụng code
 *      - Phụ thuộc hoàn toàn vào Javascript
 *      - Nhiều người sử dụng được
 * 
 *      - UX tốt, phát triển, chi phí cao hơn
 * 
 *      2. MPA - Multi-Page Application
 * = SSR (Server side rendering)
 *      - Cổ điển hơn
 *      - Tải lại trang trong quá trình sdung
 * 
 *      - Chậm hơn
 *      - FE BE phụ thuộc nhau nhiều hơn
 *      - Có thể ko cần javascript
 *      - Đơn giản, ko phát triển web -> dùng MPA
 */


// ---------------------------------------------------------------------------------------
/**
 * -------------------------------- ECMAScript 6 (ES6) ---------------------------------
 *      1. Let, const
 *      2. Template Literals
 *      3. Multi-line String
 *      4. Arrow function
 *      5. Classes
 *      6. Default parameter values
 *      7. Destructuring
 *      8. Rest parameters
 *      9. Spread
 *      10. Enhanced object literals
 *      11. Tagged template literal
 *      12. Modules
 * 
 * -- Là quy chuẩn / tiêu chuẩn viết code
 */

/**
 * --------------- 1. Var / Let, const ----------------
 * 
 *  Khác nhau: - Scope (phạm vi truy cập), Hosting (đưa lên trên)
 *             - Assignment
 */
// Scope
{
    var course = 'Javascript basic!'
}

console.log(course)  // Scope: truy cập được bên ngoài ni (var)
                    // Không truy cập được bên ngoài (let, const)

// Hosting
// var có hỗ trợ hosting
var a 
a = 1
console.log(a)

// Assignment
var a = 1    
a = 100
console.log(a)    // const ko sử dụng toán tử gán tới lần thứ 2

// Ví dụ
const abc = {
    name: 'Javascript'
}
abc.name = 'PHP'        // cái này thì được, còn nếu a = 'PHP' thì KHÔNG ĐƯỢC nha
console.log(a.name)
// Code thuần: var
// Babel (thưc viện): const, let
// Khi định nghãi biến và không gàn lại biến đó: const
// Khi cần gán lại giá trị cho biến: let



/**
 *  --------------- 2. Template Literals ---------------
 */
// Toán tử cộng để nối chuỗi
const courseName = 'Javascript'
const description = 'Course name: ' + courseName
console.log(description)

// Dùng Template Literals (viết biến vào cặp nháy ``)
const courseName2 = 'Javascript'
const courseName3 = 'PHP'

const description2 = `Course name: ${courseName2} ${courseName3}`
console.log(description2)


/**
 *  --------------- 3. Multi-line String ---------------
 */
//-- Cách thông thường
const lines = 'Line 1\nLine 2'
console.log(lines)

const liness = 'Line 1\n'
    + 'Line 2\n'
    + 'Line 3\n'
    + 'Line 4\n'
    + 'Line 5\n'
console.log(liness)

//-- Template string
const line_1 = `Line 1
Line 2
Line 3`
console.log(line_1)

/**
 *  --------------- 4. Arrow function ---------------
 *  Hàm mũi tên
 */
// Function bình thường
const logger = function(log) {
    console.log(log)
}
logger('Message...')
// BỎ function bên đi, thêm arrow là =>
const logger_ = (log) => {
    console.log(log)
}
logger_('Message...')

// Vi du khác
const sum = (a, b) => {
    return a + b
}
console.log(sum(2, 2))       // Bỏ return đi,
// ------------- 
const sum_ = (a, b) => a + b
console.log(sum_(2, 2)) 

// -------------
const sum_1 = (a, b) => ({ a: a, b: b})
console.log(sum_1(2, 2))    // Trả về Onject, 2 số a: 2 và b: 2


/**
 *  --------------- 5. Classes ---------------
 *  Cách viết khác của Constructor function
 */

// Cách thông thường
function Course(name, price) {
    this.name = name
    this.price = price           // Thuộc thính

    this.getName = function() {
        return this.name        // Phương thức
    }

    const isSuccess = false     // Biến
    // Nhìn ngang cấp nhau, nhiều cái, lộn xộn
}

// Dùng classes
class Course2 {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    getName() {                        //--------
        return this.name
    }
    getPrice() {                       //--------
        return this.price
    }
    run() {                            //--------
        const isSuccess = false
    }
    
}

const phpCourse = new Course('PHP', 1000)
const jsCourse = new Course('Javascript', 1500)

console.log(phpCourse)
console.log(jsCourse)

/**
 *  --------------- 6. Default parameter values ---------------
 *  Định nghĩa giá trị mặc định cho tham số
 *  Với giá trị không bắt buộc truyền vào
 */
function logger2(log = 'In ra gia tri mac dinh nhu the nay!') {
    console.log(log)
}
logger2()



/**
 *  --------------- 10. Enhanced object literals ---------------
 *  Định nghĩa key value cho Obj
 *  Định nghĩa method cho Obj
 *  Định nghĩa key cho Obj dưới dạng biến
 *      -> Viết ngắn gọn hơn
 */
// ---- Định ngĩa key vlue cho Obj
var name2 = 'Javascript'
var price2 = 1000

var course = {
    name2,
    price2
}
console.log(course)       // Output: Obj name: Javascript, price: 1000

// ---- Định nghĩa method cho Obj
var course = {
    name2,
    price2,
    getName: function() {         
        return name2
    }
}
console.log(course)

// Qua Enhance ----------- bỏ : function
var course = {
    name2,
    price2,
    getName() {         
        return name2
    }
}
console.log(course)

// ---- Định nghĩa key cho Obj dưới dạng biến
var fieldName = 'name'
var fieldPrice = 'price'

const course3 = {
    name: 'Javascript',            // CÁCH BÌNH THƯỜNG - CỨ LÀM CÁCH BTH ĐI :)))
    [fieldName]: 'Javascript',     // Cách viết [bỏ cái biến vào trong đây]
    [fieldPrice]: 1000             // Để lấy ra key cho Obj 
}                                  // Output (name: Javascript, price: 1000)
console.log(course3)

// BÀI TẬP: viết hàm arrToObj để chuyển array thành object.
function arrToObj(arr) { 
    return Object.fromEntries(arr) 
 }
const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
])
 // Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }




/**
 *  --------------- 7. Destructuring ---------------
 *  Phân rã (Obj + Array) - lấy ra
 */

// ---- Array - lấy ra 3 phần tử trong mảng
// Thông thường
var array = ['Java', 'PHP', 'Ruby']
var a = array[0]
var b = array[1]
var c = array[2]

console.log(a, b, c)

// Với Destructuring
var array = ['Java', 'PHP', 'Ruby']
var [a, b, c] = array        // Nếu lấy a và c thôi [a, , c] -> console.log(a, c)
 
console.log(a, b, c)

// ---- Object
var course = {
    name4: 'Java',
    price: 1000,
    image: 'image-address'
}
var { name4, price, price2} = course

console.log(name4, price)      // Output: Java 1000 (vì chỉ lấy ra name4 + price thôi)



/**
 *  --------------- 8. Rest parameters ---------------
 * 
 *  REST sẽ sử dụng KHI KẾT HỢP VỚI Destructuring
 *  HOẶC có thể dùng với thuộc tính của function (định nghĩa ra tham sô - vd2)
 *  Lấy ra những phần còn lại
 */

// ---- Array
var array = ['Java', 'PHP', 'Ruby']
var [a, ...rest] = array        // Ví dụ lấy a ra rồi. G muốn lấy nốt những th còn lại (trừ th a)
 
console.log(a)                 // Lấy ra cái a
console.log(rest)              // Lấy ra [Array] 2 phần tử còn lại

// ---- Object
var course5 = {
    name5: 'Java',
    price: 1000,
    image: 'image-address'
}
var { name5, ...rest} = course5
var { name5, description5 = 'default description'} = course5    // khi ko có description

console.log(name5)      // Output: Java (vì lấy ra name5)
console.log(rest)       // Lấy ra {Object} gồm (price: 1000, image: "image-address")
                        // Xóa một cái key mà ko cần delete
console.log(description5)    // Ko có lấy ra default, có thì lấy giá trị

// VD2 - định nghĩa ra tham sô (Những trg hợp khác là Spread)
function logger_vd2(...params) {      // rest: lấy ra còn lại (ở đây phía trc ko có nên nó lấy tất cả)
                                      // Vd: (a ...params) -> lấy ra a=1, rest = [2, 3, 4]
    console.log(params)    // Trả về mảng []
}

console.log(logger_vd2(1,2,3,4,5,6,7,8))  // Trả về mảng

//---- Một ví dụ khác về Object {}
function logger({ name, price, ...rest}) {
    console.log(name)
    console.log(price)
    console.log(rest)
}
logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
})

//---- Một ví dụ khác về Array []
function logger([a, b, ...rest]) {
    console.log(a)
    console.log(a)
    console.log(rest)
}
logger([2, 6, 12, 3, 5, 7, 15])



// ----------------- NHỚ ĐƯỢC THUẬT NGỮ + CÁCH SỬ DỤNG ------------------------


/**
 *  -------------------------- 9. Spread (...) ----------------------------
 *      Toán tử rải
 *      Bỏ đi []
 */

// ----- Trường hợp NỐI MẢNG
// BÀI TẬP: Cho 2 Array, tạo Array 3 nối 2 Array đã cho lại với nhau
var array1 = ['Javascript', 'Ruby', 'PHP']
var array2 = ['ReactJS', 'Dart']
var array3 = [...array2, ...array1]     // In ra array 2 nằm trước array 1

console.log(array3)

// ----- Trường hợp HỢP NHẤT 2 OBJECT lại với nhau
var object1 = {
    name: 'Javascript'
}
var object2 = {
    price: 1000
}

var object3 = {
    ...object1,
    ...object2         // Tóm lại thì Spread lại bỏ [] và {} (dùng...)
}

// ----- Trường hợp sử dụng Spread để TRUYỀN THAM SỐ cho hàm
// ----- Lấy hết tất cả các giá trị trong MẢNG
var array = ['Javascript', 'PHP', 'Ruby']

function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}

logger(...array)        // Output: Javascript PHP  Ruby (XH|)

//      rest: định nghĩa ra tham số
//      spread: gọi đến hàm (truyền đối số) - xem lại vs trên




/**
 *  ------------------------- 12. Modules ---------------------------
 *  Bóc tách
 *  import / export
 */
import logger, { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './logger7.js'

// console.log(typeof logger)   // function -> cái func bên logger.js

// logger('Text message...', 'warn')
logger('Text message...', TYPE_WARN)  // Như cái trên


