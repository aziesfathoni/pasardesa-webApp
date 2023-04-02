import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'dashboard', icon: 'stats-chart'},
    /*
    { title: 'Data Induk', url: 'datainduk', icon: 'newspaper'
      subPages: [
      { title: 'Data Toko', url: 'datainduk' },
      { title: 'Registrasi' },
      { title: 'Mutasi' },
      { title: 'Angsuran Sewa' },
      { title: 'Monitoring' }]
  
    },
    */
    {
      title: 'Data Induk', url: 'bedak', icon: 'storefront'
    },
    { title: 'Petugas', url: 'pegawai', icon: 'person'
    /*  subPages: [
      { title: 'Kantor' },
      { title: 'Karcis' }]
    */
    },
    { title: 'Karcis', url: 'karcis', icon: 'create'
    /*  subPages: [
      { title: 'Stok' },
      { title: 'Pengambilan' },
      { title: 'Setoran' }]
      */
    },
    { title: 'Keuangan', url: 'keuangan', icon: 'wallet'
    /*  subPages: [
      { title: 'Jurnal' },
      { title: 'Laporan' }]
    */
    },
    { title: 'User', url: 'user', icon: 'person-circle'
    /*  subPages: [
      { title: 'Data' },
      { title: 'Hak Akses' }]
    */
    },
    { title: 'Referensi', url: 'referensi', icon: 'reorder-three'
    /*  subPages: [
      { title: 'Jabatan' },
      { title: 'Jenis Toko' },
      { title: 'Jenis Karcis' }]
    */
    },
    { title: 'Layout', url: '/folder/Layout', icon: 'earth' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  showSubMenu = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
  constructor() {}
}
