import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
  transform(value: any, character: string): any {
    return value.replace(character, ' ');
  }

}
