import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styles: [
  ]
})
export class SearchinputComponent implements OnInit {
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject;
  searchForm:FormGroup = this.fb.group({
    query: ['',]
  })

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if(value.trim() != ""){ 
          this.onDebounce.emit(value)
        }
      })
  }

  handleKey(event: any){
    const value = event.target.value;
    this.debouncer.next(value)
  }

}
