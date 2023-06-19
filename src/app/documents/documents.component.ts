import { Component,NgModule,OnInit } from '@angular/core';
import { DocumentsService } from '../../services/documents.service';
import { Document } from 'src/model/Document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  constructor(private _DocumentsService:DocumentsService) {
   
 
   
  }
  documents :Document[]=[];
  document  = new Document();
  ngOnInit(): void {
     this._DocumentsService.GetComments().subscribe(res=>
       {
       console.log(res)
       this.documents= res;
       console.log(this.documents)
     });
    }

    select(document: any)
    {
console.log(document)
    }
}

