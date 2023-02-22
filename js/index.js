//NHẬP SỐ TẠO MẢNG
var arrNum = [];
document.getElementById('btn-tao-mang').onclick = function () {
    var num = document.getElementById('num').value;
    if (num === '') {
        num = 0;
    }
    arrNum.push(Number(num));
    // Number(arrNum)
    document.getElementById('hien-thi-mang').innerHTML = '[ ' + arrNum + ' ]';

}

//Bài tập 1: Tổng các số dương trong mảng
document.getElementById('btn-bai-1').onclick = function () {
    //input: arrNum, 

    //output : ketQua(number);
    var ketQua = 0;
    //process:
    ketQua = tongSoDuong(arrNum);
    document.getElementById('ket-qua-bai-1').innerHTML = 'Tổng số dương là: ' + ketQua;
}

//Bài tập 2: Đếm số dương trong mảng
document.getElementById('btn-bai-2').onclick = function () {
    //input: arrNum
    //output: ketQua(number)
    var ketQua = 0;
    //process:
    ketQua = demSoDuong(arrNum);
    document.getElementById('ket-qua-bai-2').innerHTML = 'Số lượng số Dương trong mảng là: ' + ketQua;
}

//Bài tập 3: Tìm số nhỏ nhất trong mảng
document.getElementById('btn-bai-3').onclick = function () {
    //input: arrNum
    //output: ketQua (number)
    var ketQua = '';
    //process
    ketQua = timSoNhoNhat(arrNum);
    
    document.getElementById('ket-qua-bai-3').innerHTML = 'Số nhỏ nhất của mảng là: ' + ketQua;   
    
}

//Bài tập 4: tìm số dương nhỏ nhất trong mảng
document.getElementById('btn-bai-4').onclick = function(){
    //input: arrNum
    //output: ketQua
    var ketQua = '';
    //process:
    ketQua = soDuongNhoNhat(arrNum);
    if (ketQua===-1){
        document.getElementById('ket-qua-bai-4').innerHTML = 'Mảng không có số dương!';
    } else {
        document.getElementById('ket-qua-bai-4').innerHTML = 'Số dương nhỏ nhất của mảng là: ' + ketQua;
    }
}

//Bài tập 5: Tìm số chẵn cuối cùng
document.getElementById('btn-bai-5').onclick = function(){
    //input: arrNum
    //output: ketQua
    var ketQua = '';
    //process:
    ketQua = soChanCuoiCung (arrNum);
    if (ketQua===-1){
        document.getElementById('ket-qua-bai-5').innerHTML = ketQua;
    } else {
        document.getElementById('ket-qua-bai-5').innerHTML = 'Số chẵn cuối cùng của mảng là: ' + ketQua;
    }
}

//Bài tập 6: Đổi chỗ 2 vị trí trong mảng
document.getElementById('btn-bai-6').onclick = function(){
    //input: arrNum, viTri1(number), viTri2(number)
    var viTri1 = document.getElementById('vi-tri-1').value;
    var viTri2 = document.getElementById('vi-tri-2').value;
    //output: ketQua
    
    //process:
    if (viTri1===''||viTri2===''){
        document.getElementById('ket-qua-bai-6').innerHTML ='Vui lòng nhập vị trí cần đổi!'
    } else if (viTri1>=arrNum.length||viTri2>=arrNum.length){
        document.getElementById('ket-qua-bai-6').innerHTML = 'Vị trí không khả dụng! Mảng hiện tại là: ' + '[ ' + arrNum + ' ]';
    } else {
        doiViTri(arrNum,viTri1,viTri2);
        document.getElementById('ket-qua-bai-6').innerHTML = '[ ' + arrNum + ' ]';
    }
    
}
