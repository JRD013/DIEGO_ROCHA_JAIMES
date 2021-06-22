import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@Services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  headers = ["Id", "Name", "Age", "Gender", "Country"]
  rows:any = [];

  
  constructor( private userService: UserService) {
    this.fill();
  }

  ngOnInit(): void {
  }

  fill(): void{
    this.userService.getUsers().subscribe(
      data => {
        this.rows = data;
        console.log(data);

      }
    );
  }


}
