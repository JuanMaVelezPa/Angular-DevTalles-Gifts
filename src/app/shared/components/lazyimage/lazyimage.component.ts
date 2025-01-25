import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazyimage.component.html'
})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public title: string = 'No Title';

  public hasLoaded: boolean = false;

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }

  ngOnInit(): void {
    if (!this.url) throw new Error('Url property is required.');
  }

}
