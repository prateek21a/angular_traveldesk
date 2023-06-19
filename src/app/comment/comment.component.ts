import { Component , NgModule, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from 'src/model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class  CommentComponent implements OnInit {
  constructor(private _commentService :CommentService) {
  }

  comments : Comment[]=[];
comment=new Comment();
  ngOnInit(): void {
     this._commentService.GetComments().subscribe(res=>
       {
       console.log(res);
      this.comments = res;
     });
    }
    select(comment: any)
    {
console.log(comment)
    }
}

