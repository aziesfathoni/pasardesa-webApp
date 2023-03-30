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
  data: any;

  ngOnInit() {
    this.bedakService.getData().subscribe((x) => {
      this.data = x.data
    })
  }

}
