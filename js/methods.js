/**
 * Hàm tính tổng các số dương trong mảng
 * @param {*} arr mảng người dùng nhập vào
 * @returns output: kết quả tính tổng các số dương trong mảng
 */
function tongSoDuong(arr) {
    var output = 0;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] >= 0) {
            output += +arr[index];
        }
    }
    return output;
}
/**
 * Hàm đếm số lượng số dương có trong mảng
 * @param {*} arr mảng người dùng nhập vào
 * @returns số lượng số dương
 */
function demSoDuong(arr) {
    var output = 0;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            output++;
        }
    }
    return output;
}

function demSoAm(arr) {
    var output = 0;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            output++;
        }
    }
    return output;
}

function timSoNhoNhat(arr) {
    var output = arr[0];
    for (var index = 1; index < arr.length; index++) {
        if (arr[index] < output) {
            output = arr[index];
        }
    }
    return output;
}
/**
 * Hàm tìm số dương nhỏ nhất trong mảng
 * @param {*} arr mảng người dùng nhập vào
 * @returns hàm trả về giá trị output là số dương nhỏ nhất hoặc "-1" (trường hợp k có số dương)
 */
function soDuongNhoNhat(arr) {
    var output = -1;
    for (var index = 0; index < arr.length; index++) {
        if ((output === -1 || output > arr[index]) && arr[index] > 0) {
            output = arr[index];
        }
    }
    return output;
}
/**
 * Hàm tìm số chẵn cuối cùng trong mảng
 * @param {*} arr mảng người dùng nhập vào
 * @returns hàm trả về giá trị số chẵn cuối cùng hoặc -1(trường hợp không có số chẵn)
 */
function soChanCuoiCung(arr) {
    var output = -1;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            output = arr[index];
        }
    }
    return output;
}
/**
 * Hàm thay đổi vị trí của 2 phần tử trong mảng
 * @param {*} arr mảng người dùng nhập vào
 * @param {*} num1 vị trí thứ 1 cần thay đổi sang vị trí thứ 2
 * @param {*} num2 vị trí thứ 2 cần thay đổi sang vị trí thứ 1
 */
function doiViTri(arr, num1, num2) {
    var output = '';
    var giaTri1 = arr[num1];
    var giaTri2 = arr[num2]
    arr[num1] = giaTri2;
    arr[num2] = giaTri1;
    output = arr;
}
/**
 * Hàm sắp xếp các phần tử của mảng theo thứ tự tăng dần giá trị
 * @param {*} arr mảng người dùng nhập vào
 * @returns trả về mảng đã sắp xếp
 */
function sapXep(arr) {

    for (var index = 0; index < arr.length; index++) {
        for (var index2 = index + 1; index2 < arr.length; index2++) {
            if (arr[index] > arr[index2]) {
                //Hoan doi 2 vi tri arr[index] và arr[index2]
                var trungGian = arr[index];
                arr[index] = arr[index2];
                arr[index2] = trungGian;
            }
        }
    }

    return arr;
}


/**
 * Hàm kiểm tra 1 số có phải là số nguyên tố hay không
 * @param {*} num số cần kiểm tra
 * @returns boolean: true = số nguyên tố, false = không phải số nguyên tố.
 */
function kiemTraSoNguyenTo(num) {

    var output = true;
    var uoc = 2;
    if (num <= 1) {
        output = false;
    } else {
        while (uoc <= Math.sqrt(num)) {
            if (num % uoc === 0) {
                output = false;
                break;
            }
            uoc++;
        }
    }
    return output;
}
