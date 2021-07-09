import ChuyenXe from "./ChuyenXe.js";

class ChuyenXeNgoaiThanh extends ChuyenXe {
    //extends: kế thừa lại phương thức, thuộc tính của lớp cha
    constructor(_chuyenXe, _tenTaiXe, _maSoChuyen, _soTuyen){
        // super: là gọi constructor của lớp parent(ChuyenXe)
        super(_chuyenXe, _tenTaiXe, _maSoChuyen);
        this.soTuyen = _soTuyen;
    }
    //Ghi đè phương thức của lớp cha (tính đa hình)
    tinhDoanhThu(){
        console.log('tinh doanh thu cua chuyen xe ngoai thanh')
    }

    timSoTuyenGanNhat(){
        console.log('Tim so tuyen gan nhat');
    }
}