import { Component, inject } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private _fb = inject(FormBuilder);

  public searchForm = this._fb.nonNullable.group({
    value: this._fb.nonNullable.control<string>(''),
    date: this._fb.nonNullable.control<string>('')
  })

  public search(): void {
    this.searchForm.controls.date.patchValue(Date.now().toString())
  }
}
