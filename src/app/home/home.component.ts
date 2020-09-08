import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { ItemService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

    constructor(private itemService: ItemService) { }

    ngOnInit() {

    }
}