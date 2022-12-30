import { Component, Inject, OnInit, Input, OnChanges, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from "./crud.service";

@Component({
    selector: 'app-crud-update',
    styleUrls: ['./crud.component.css'],
    templateUrl: './crud-update.component.html'
})

export class CrudUpdateComponent implements OnInit, OnChanges {
    @Input() objEdit: any;
    @Output() refresh = new EventEmitter<boolean>();

    constructor(
        private dialogRef: MatDialogRef<CrudUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public crud: any,
        private crudService: CrudService
    ) {}

    ngOnChanges(): void {
        if (this.objEdit) {
           this.crud = {
            _id: this.objEdit._id,
            name: this.objEdit.name,
            age: this.objEdit.age,
            colour: this.objEdit.colour,
           }
           this.objEdit = null;
        }
    }

    ngOnInit(): void {
        if (!this.crud) this.crud = {name: '', age:0, colour: ''};
    }

    getData(event: any): void {
        this.crud.name = event;
    }

    getColor(event: any): void {
        this.crud.colour = event;
    }

    getEdad(event: any): void {
        this.crud.age = event;
    }

    save(): void {
        if (this.crud && this.crud._id) {
            this.crudService.putCrud(this.crud, this.crud._id).subscribe(
                res => {
                    console.log(res.status);
                    //this.dialogRef.close(res.status);
                    this.refresh.emit(true);
                }
            );
        } else {
            this.crudService.postCrud(this.crud).subscribe(
                res => {
                    console.log(res.status);
                    //this.dialogRef.close(res.status);
                    this.refresh.emit(true);
                }
            );
        }
    }
    
}