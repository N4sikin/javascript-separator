//hitung jumlah class html ysng dimaksud untuk menentukan berapa
//outputan yang akan diedit 
var jumlah = document.getElementsByClassName("angka").length;

//lakukan looping sejumlah outputan yang dikehendaki
for(i=1;i<=jumlah;i++){

    //membuat variabel untuk ID yang dinamis
    var a = "rupiah"+i;
    //ambil nilai dari ID yang dimaksud
    var b = document.getElementById(a).innerHTML;
    //Proses separator angka
    var	number_string = b.toString(),
    sisa 	= number_string.length % 3,
    rupiah 	= number_string.substr(0, sisa),
    ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
        
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    //edit output yang dimaksud dengan hasil yang diinginkan
    document.getElementById(a).innerHTML = rupiah;
}
    