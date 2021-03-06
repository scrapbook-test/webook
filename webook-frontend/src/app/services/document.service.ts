import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DocumentServiceProxy, DocumentsServiceProxy, EditorDocument, EditorDocumentAllowedAccess } from '../client/webook';

@Injectable()
export class DocumentService {
  constructor(
    private documentServiceProxy: DocumentServiceProxy,
    private documentsServiceProxy: DocumentsServiceProxy,
  ) { }

  public createDocument(title?: string, description?: string, allowedAccess?: EditorDocumentAllowedAccess, id?: string)
    : Observable<EditorDocument> {
    return this.documentServiceProxy.documentPost(title, id, description, allowedAccess);
  }

  public getMyDocuments(searchQuery?: string): Observable<EditorDocument[]> {
    return this.documentsServiceProxy.documentsMyUserGet(searchQuery);
  }

  public getUserDocuments(userId: string): Observable<EditorDocument[]> {
    return this.documentsServiceProxy.documentsUserUserIdGet(userId);
  }

  public getDocument(id: string): Observable<EditorDocument> {
    return this.documentServiceProxy.documentIdGet(id);
  }

  public deleteDocument(id: string) {
    return this.documentServiceProxy.documentIdDelete(id);
  }

  public updateTitle(id: string, title: string): Observable<string> {
    return this.documentServiceProxy.documentIdTitlePost(title, id);
  }
}
