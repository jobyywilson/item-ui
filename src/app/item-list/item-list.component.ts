import { Component, OnInit } from '@angular/core';
import { ItemBean } from '@app/_models/item';
import { ItemService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: ItemBean[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {

      this.itemService.getAllItems().pipe(first()).subscribe(users => {
          this.items = users;

    });
  }

}
