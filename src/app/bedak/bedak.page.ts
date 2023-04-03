import { Component, OnInit } from '@angular/core';
import { BedakService } from './bedak.service';

@Component({
  selector: 'app-bedak',
  templateUrl: './bedak.page.html',
  styleUrls: ['./bedak.page.scss'],
})
export class BedakPage implements OnInit {

  constructor(
    private bedakService: BedakService
  ) { }
  data: Array<any> = [];
  isLoading: boolean = false;

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.isLoading = true;
    this.bedakService.getData().subscribe((response) => {
      this.isLoading = false
      this.data = response.data
    }, (error) => {
      this.isLoading = false
      this.data = []
    })
  }

}
