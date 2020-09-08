import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '@app/_services';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemId: string;
  myArray = ['TEXT', 'DROP'];
  tiles = [];
  data = {};
  sampleData = ['DATA 1','DATA 2']
  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) {


  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      this.loadItemDetails(Number(this.itemId));

    });
  }

  loadItemDetails(itemId) {
    for (var i = 1; i <= itemId; i++) {
      this.data['field' + i] = '';
      this.tiles.push({ text: 'Field ' + i, cols: 2, rows: 1, fieldName: 'field' + i, type: this.myArray[Math.floor(Math.random() * this.myArray.length)] });
    }


  }
  submit() {
    console.log(this.data);
    window.alert(JSON.stringify(this.data));
  }
  reset() {
    for (var i = 1; i <= Number(this.itemId); i++) {
      this.data['field' + i] = '';
    }
  }
}
