import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { EditorDocument } from '../client/webook';
import { NavigationService } from '../navigation/navigation.service';
import { DocumentService } from '../services/document.service';
import { DocumentCreationModel } from './tokens/classes/document-creation-model.class';
import { documentCreationModels } from './tokens/consts/document-creation-models.const';

@Component({
  selector: 'wb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  private subs: Subscription[] = [];
  private maximumCreatDocumenModelSize = 5;
  public isAddContainerOpened = false;
  public createDocumentViewExpanded = false;
  public shouldHaveCreateDocumentViewExpanded = false;
  public myDocuments: EditorDocument[] = [];
  public isLoadingMyDocuments = true;
  public hasSearchFilterActivated: boolean;
  @ViewChild('addDocumentTemplate') private addDocumentTemplate: TemplateRef<any>;

  public get createDocumentModels() {
    if (!this.createDocumentViewExpanded) {
      return documentCreationModels.slice(0, this.maximumCreatDocumenModelSize);
    }
    return documentCreationModels;
  }

  constructor(
    public navigationService: NavigationService,
    private documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shouldHaveCreateDocumentViewExpanded = documentCreationModels.length > this.maximumCreatDocumenModelSize;
    this.getMyDocuments();
  }

  ngAfterViewInit(): void {
    if (this.addDocumentTemplate) {
      this.navigationService.setNavigationActionsTemplate(this.addDocumentTemplate);
      this.navigationService.emitHasSearch(true);

      this.subs.push(this.navigationService.search
        .pipe(debounceTime(300))
        .subscribe(searchQuery => {
          this.getMyDocuments(searchQuery);
        }));
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.navigationService.clearNavigationActionsTemplate();
    this.navigationService.emitHasSearch(false);
  }

  private getMyDocuments(searchQuery?: string) {
    this.hasSearchFilterActivated = Boolean(searchQuery);
    this.subs.push(this.documentService.getMyDocuments(searchQuery).subscribe(res => {
      this.isLoadingMyDocuments = false;
      this.myDocuments = res;
    }, () => this.isLoadingMyDocuments = false));
  }

  public toggleCreateDocumentView(): void {
    this.createDocumentViewExpanded = !this.createDocumentViewExpanded;
  }

  public createDocument(model?: DocumentCreationModel): void {
    if (!model || model.id === 'empty') {
      this.subs.push(this.documentService.createDocument()
        .subscribe(document => {
          this.openDocument(document.id);
        }));
    }
  }

  public openDocument(documentId: string): void {
    this.router.navigateByUrl(`/document/${documentId}`);
  }

  public deleteDocument(documentId: string): void {
    this.subs.push(this.documentService.deleteDocument(documentId)
      .subscribe(() => {
        this.getMyDocuments(this.navigationService.search.value);
      }));
  }
}
