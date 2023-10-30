import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.searchForm = this.formBuilder.group({
      searchText: [''] // Initial value for searchText
    });
  }

  search() {
    if (this.searchForm) {
      const searchText = this.searchForm?.get('searchText')?.value;
      this.taskService.filterValue.next(searchText)
    }
  }
}
