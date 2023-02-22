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
    for (var index = 0; index < arr.length; index++){
        if (arr[index]%2===0){
            output = arr[index];
        }
    }
    return output;
}

function doiViTri(arr,num1,num2){
    var output='';
    var giaTri1 = arr[num1];
    var giaTri2 = arr[num2]
    arr[num1]=giaTri2;
    arr[num2]=giaTri1;
    output = arr;
}