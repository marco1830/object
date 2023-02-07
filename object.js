let jualMobil = {
    iklan:function(){
        document.write(`BU <br> saya ${this.nama} <br> jual ${this.merek} <br> tahun ${this.tahun} <br>bekas <hr>` )
    }
}

let JualMobil = Object.create(jualMobil);
JualMobil.nama = 'Marco Alexander';
JualMobil.merek = 'ferrari';
JualMobil.tahun = '2020';
JualMobil.iklan();
// console.log(jualMobil);


let jualHP = {
    nama: 'MarcoAlexander',
    jual: 'HandPhone',
    merek: 'vivo',
    type: 'y21',
    tahun: 2020,
    bekas: 'President',
    ads: function(){
        document.write(`<br><br>haloo Bro... <br>saya ${this.nama}<br>jenis ${this.jual}<br> merek ${this.merek}<br>series ${this.type}<br> years ${this.tahun}<br> bekas ${this.bekas}<hr>`)
    } 
}
    jualHP.ads();


let dataSantri = {
    name: 'Marco Alexander',
    umur: 22,
    asal: 'Tangerang Selatan',
    date: function(){
        document.write(` <br> <br>Hy Semua..., <br> saya: ${this.name}, <br> old: ${this.umur}, <br> address: ${this.asal}<hr>`)
    }
}   
    dataSantri.date();


let kegitanaSantri ={
    pagi: 'kajian Shubuh',
    siang: 'makan siang',
    sore: 'halaqoh',
    malam: 'setoran hafalan',
    aktivitas: function(){
        document.write(`<br> <br> kegiatan Santri, <br> morning ${this.pagi}, <br> afternon ${this.siang}, <br> evening ${this.sore}, night ${this.malam} <hr>`)
    }
}
 kegitanaSantri.aktivitas();

 let siswa = {
    keluar: false,
    izin: function(){
        document.write(`<br><br> nama ${this.Name}<br> apakah tadi kamu keluar ? <br> ${this.keluar} <hr> `)
    }
 }
    let siswaBaru = Object.create(siswa);
    siswaBaru.Name = 'Marco Alexander';
    siswaBaru.keluar = 'benar';
    siswaBaru.izin();