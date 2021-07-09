import ChuyenXe from "./ChuyenXe.js";

class ChuyenXeNoiThanh extends ChuyenXe{
    constructor(_chuyenXe, _tenTaiXe, _maSoChuyen, _noiDen){
        super(_chuyenXe, _maSoChuyen, _tenTaiXe);
        this.noiDen = _noiDen;
    }

    tinhDoanhThu(){
        console.log('tinh doanh thu chuyen xe noi thanh');
    }

    tinhSoNgayDiDuoc(){
        console.log('tinh so ngay di duoc');
    }
}