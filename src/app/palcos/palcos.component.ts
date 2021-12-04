import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palcos',
  templateUrl: './palcos.component.html',
  styleUrls: ['./palcos.component.css']
})
export class PalcosComponent implements OnInit {

  palcosA:Array<any>=[];
  palcosB:Array<any>=[];
  i:any;
  numero=21;

  constructor() { 
    for(this.i=1;this.i<27;this.i++){
      this.palcosA.push(this.i);
    }
    for(this.i=27;this.i<51;this.i++){
      this.palcosB.push(this.i);
    }
  }

  ngOnInit(): void {
  }

}
