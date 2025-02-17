import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dogs: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRandomDogs().subscribe((data) => {
      this.dogs = data.message.map((dogUrl: string) => ({
        image: dogUrl
      }));
    });
  }
}
