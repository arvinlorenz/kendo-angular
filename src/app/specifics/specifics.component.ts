import { Observable } from "rxjs";
import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

import { GridDataResult } from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";

import { Product } from "./product.model";
import { EditService } from "./edit.service";

import { map } from "rxjs/operators";

@Component({
  selector: 'app-specifics',
  templateUrl: './specifics.component.html',
  styleUrls: ['./specifics.component.scss']
})
export class SpecificsComponent implements OnInit {

    public view: Observable<any> = new Observable<any>();
    public gridState: any = {
        sort: [],
        skip: 0,
        take: 10
    };

    public changes: any = {};

    constructor(private formBuilder: FormBuilder, public editService: EditService) {
    }

    public ngOnInit(): void {
        this.view = this.editService.pipe(map((data: any) => process(data, this.gridState)));
        console.log(this.gridState)
        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
    }

    public cellClickHandler({ sender, rowIndex, columnIndex, dataItem, isEdited }: any) {
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    }

    public cellCloseHandler(args: any) {
        const { formGroup, dataItem } = args;

        if (!formGroup.valid) {
             // prevent closing the edited cell if there are invalid values.
            args.preventDefault();
        } else if (formGroup.dirty) {
            this.editService.assignValues(dataItem, formGroup.value);
            this.editService.update(dataItem);
        }
    }

    public addHandler({ sender }: any): any {
        sender.addRow(this.createFormGroup(new Product()));
    }

    public cancelHandler({ sender, rowIndex }: any) {
        sender.closeRow(rowIndex);
    }

    public saveHandler({ sender, formGroup, rowIndex }: any) {
        if (formGroup.valid) {
            this.editService.create(formGroup.value);
            sender.closeRow(rowIndex);
        }
    }

    public removeHandler({ sender, dataItem }: any) {
        this.editService.remove(dataItem);

        sender.cancelCell();
    }

    public saveChanges(grid: any): void {
        grid.closeCell();
        grid.cancelCell();

        this.editService.saveChanges();
    }

    public cancelChanges(grid: any): void {
        grid.cancelCell();

        this.editService.cancelChanges();
    }

    public createFormGroup(dataItem: any): FormGroup {
        return this.formBuilder.group({
            'ProductID': dataItem.ProductID,
            'ProductName': [dataItem.ProductName, Validators.required],
            'UnitPrice': dataItem.UnitPrice,
            'UnitsInStock': [dataItem.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            'Discontinued': dataItem.Discontinued
        });
    }
}
