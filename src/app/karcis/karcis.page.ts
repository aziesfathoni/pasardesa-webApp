import { Component, OnInit } from '@angular/core';
import { KarcisService } from './karcis.service';

@Component({
  selector: 'app-karcis',
  templateUrl: './karcis.page.html',
  styleUrls: ['./karcis.page.scss'],
})
export class KarcisPage implements OnInit {

  constructor(
    private karcisService: KarcisService
  ) { }
  data: any;

  ngOnInit() {
    this.karcisService.getData().subscribe((x) => {
      this.data = x.data
    })
  }

}
