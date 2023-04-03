import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
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
  data: Array<any> = [];
  isLoading: boolean = false;
  isNextPage: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 25;

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.isLoading = true;
    this.pegawaiService.getData({pageNumber: this.pageNumber, pageSize: this.pageSize}).subscribe((response) => {
      console.log("response",response)
      this.isLoading = false
      response.data.forEach((element: any) => {
        this.data.push(element)
      });
      this.isNextPage = response.next
      this.pageNumber = response.pageNumber
    }, (error) => {
      this.isLoading = false
      this.data = []
    })
  }

  onIonInfinite(ev: any) {
    console.log("scroll")
    this.pageNumber = this.pageNumber + 1
    this.getData()
  }
}