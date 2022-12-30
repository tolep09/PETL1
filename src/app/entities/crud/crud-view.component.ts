import { Component, Inject, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from "./crud.service";

@Component({
    selector: 'app-crud-view',
    templateUrl: './crud-view.component.html'
})

export class CrudViewComponent implements OnInit {
    @Input() data: any[] = [];
    @Output() id = new EventEmitter<string>();
    @Output() idEdit = new EventEmitter<string>();

    displayedColumns = ["id", "Nombre", "Edad", "Color", "Accion"];

    constructor(
        private crudService: CrudService,
        @Inject(MAT_DIALOG_DATA) public crud: any
        ) {}

    ngOnInit(): void {
       console.log(this.data);
    }

    borrar(id: string): void {
        this.id.emit(id);
    }

    editar(id: string): void {
        this.idEdit.emit(id);
    }

   
}