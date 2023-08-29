import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ManageArticleInterface} from "../../../../shared/models/manage-article.interface";
import {BackendErrorsInterface} from "../../../../shared/models/backendErrors.interface";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() initialValues: ManageArticleInterface | null;
  @Input() isSubmitting: boolean;
  @Input() backendErrors: BackendErrorsInterface | null;

  @Output() articleSubmitEvent: EventEmitter<ManageArticleInterface> = new EventEmitter<ManageArticleInterface>();

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.initialValues?.title ?? '', [Validators.required]),
      description: new FormControl(this.initialValues?.description ?? '', [Validators.required]),
      body: new FormControl(this.initialValues?.body ?? '', [Validators.required]),
      tagList: new FormControl(this.initialValues?.tagList?.join(' ') ?? ''),
    })
  }

  public onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }

}
