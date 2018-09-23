import { Pipe, PipeTransform } from '@angular/core';

const translationMap = {
  'Winner': 'Você VENCEU!!',
  'Loser': 'Você PERDEU!',
  'Draw': 'Empate!'
};

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: any): any {
    return translationMap[value];
  }

}
