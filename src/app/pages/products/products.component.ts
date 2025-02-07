import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-products',
    imports: [CommonModule],
    standalone:true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  dogImages: string[] = []
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._apiService.getRandomDogs().subscribe((data) => {
      this.dogImages = data.message;
    }
    );
  }
}
