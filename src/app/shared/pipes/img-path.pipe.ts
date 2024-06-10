import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPath',
})
export class ImgPathPipe implements PipeTransform {
  transform(image: string): unknown {
    return `assets/images/${image}`;
  }
}
