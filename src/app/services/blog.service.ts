import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private spreadsheetId = '1VO7Q9mCmhUnsjU4jCHIqtmrYCQrBRE_AGlAICLmqQVw';
  private apiKey = 'AIzaSyBoMVCuysJDMISA17jrfBpfl9qMNy5Y3L4';
  private range = 'P%C3%A1gina1!A2:I1000';

  constructor(private http: HttpClient) {}

  getBlogPostList() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${this.range}?key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map((res) =>
        res.values.map((row: string[]) => ({
          title: row[0],
          urlPath: row[1],
          imgUrl: row[2],
          textPreview: row[3],
          content: row[4],
          date: row[5],
          author: row[6],
          tags: row[7],
          visible: row[8],
        }))
      )
    );
  }
}
