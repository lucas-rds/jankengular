import { Pipe, PipeTransform } from '@angular/core';

const translationMap = {
  'rock': 'Pedra',
  'paper': 'Papel',
  'scissor': 'Tesoura'
};

@Pipe({
  name: 'choice'
})
export class ChoicePipe implements PipeTransform {

  transform(value: any): any {
    return translationMap[value];
  }

}
