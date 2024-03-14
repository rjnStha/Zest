import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nep-hood',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <ul>
      @for( item of data | keyvalue; track item )
      {
          {{item.key}}:
          @for( comp of item.value; track comp )
          {
              <ul>
                  {{comp}}
              </ul>
          }
      }
    </ul>
  `,
  styles: ``
})
export class NepHoodComponent implements OnInit{
  
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.httpClient
      .get('http://127.0.0.1:5000/api/company-list')
      .subscribe((data:any) => {
        this.data = data;
      });
  }
}
