import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  headers = ["Id", "Name", "Age", "Gender", "Country"]
  rows:any = [];

  // rows:any = [
  //   {
  //     "ID" : "1",
  //     "Name" : "Rahul",
  //     "Age" : "21",
  //     "Gender" : "Male",
  //     "Country" : "India"
  //     },
  //     {
  //     "ID" : "2",
  //     "Name" : "Juan",
  //     "Age" : "32",
  //     "Gender" : "Male",
  //     "Country" : "Bolivia"
  //     }
  // ];
  
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
