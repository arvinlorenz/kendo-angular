import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  productName = 'Webcam 2021';
  productID = '034805739';
  constructor(private router: Router) {}
  expanded = false;


  public selected = 'Create product';

    public items: Array<DrawerItem> = [
        { text: 'Create product', icon: 'k-i-plus' },
        { text: 'Change Product', icon: 'k-i-cog' },
        { text: 'Edit Product', icon: 'k-i-change-manually'  },

    ];

    public onSelect(ev: DrawerSelectEvent): void {
        console.log(ev);
        this.selected = ev.item.text;
    }

    public onSelectMenu(e: any): void {
      console.log(e);
      this.router.navigateByUrl(e.item.data)
  }
}

