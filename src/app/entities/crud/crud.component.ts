import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{
  data: any[] = [];
  objToEdit :any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getCrud();
  }

  getCrud(): void {
    this.crudService.queryCrud().subscribe(
        res => {
            this.data = res.body as [];
        }
    );
  }

  borrarId(event: string): void {
    const idBorrar = event;
    this.borrar(idBorrar);
  }

  editarId(event: string): void {
    const idEditar = event;
    
    for (let i = 0; i <this.data.length; i++) {
      if (this.data[i]._id === idEditar) {
        this.objToEdit = this.data[i];
        break;
      }
    }
  }

  borrar(id: string): void {
      this.crudService.deleteCrud(id).subscribe(
          result => {
              console.log(result)
              this.data = this.data.filter(item => item._id != id);
          }, error => {
              console.log(error);
          }
      );
  }

  refreshData(event: boolean): void {
    if (event) {
      this.getCrud();
    }
  }
 
}
