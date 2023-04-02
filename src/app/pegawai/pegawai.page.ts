import { Component, OnInit } from '@angular/core';
import { PegawaiService } from './pegawai.service';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.page.html',
  styleUrls: ['./pegawai.page.scss'],
})
export class PegawaiPage implements OnInit {

  constructor(
    private pegawaiService: PegawaiService
  ) { }
  data: any;

  ngOnInit() {
    this.pegawaiService.getData().subscribe((x) => {
      this.data = x.data
    })
  }

}