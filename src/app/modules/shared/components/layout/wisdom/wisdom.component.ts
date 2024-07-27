import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wisdom',
  templateUrl: './wisdom.component.html',
  styleUrls: ['./wisdom.component.scss'],
})
export class WisdomComponent {
  @Input() wisdom: string = '';
  @Input() teller: string = '';
}
