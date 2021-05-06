import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') texto: string



  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    
   }
  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });  
    }

  }


  //chamada da diretiva strutural no html
  //<ul >
  //<li *myFor="let n em [1,2,3] usando 'teste'">{{ n }}</li>
//</ul>

}

