import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Category {
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { name: 'All Star Jersey', price: 299, image: './assets/all-star-jersey.jpg', category: 'Sport Jersey', description: 'A stylish all-star jersey perfect for any sports enthusiast.' },
    { name: 'Basketball', price: 499, image: './assets/nike-playground-ball.jpg', category: 'Sports Ball', description: 'Durable basketball designed for playground use.' },
    { name: 'Under Armour Surge 3', price: 899, image: './assets/underarmour.jpg', category: 'Sport Shoes', description: 'Comfortable and supportive running shoes from Under Armour.' },
    { name: 'Nike Zoom', price: 949, image: './assets/nike-zoom.jpg', category: 'Sport Shoes', description: 'High-performance Nike Zoom shoes for athletes.' },
    { name: 'Volleyball', price: 199, image: './assets/mikasa-volleyball.jpg', category: 'Sports Ball', description: 'Official Mikasa volleyball for competitive play.' },
    { name: 'Nike White Socks', price: 399, image: './assets/nike-white-socks.jpg', category: 'Socks', description: 'Breathable and comfortable white socks by Nike.' },
    { name: 'Adidas', price: 999, image: './assets/adidas-white-socks.jpg', category: 'Socks', description: 'Premium Adidas socks for sports and casual wear.' },
    { name: 'Jordan Jersey', price: 499, image: './assets/jordan-jersey.jpg', category: 'Sport Jersey', description: 'Iconic Jordan jersey for basketball fans.' },
    { name: 'White Wings Jersey', price: 299, image: './assets/white-wings-jersey.jpg', category: 'Sport Jersey', description: 'A sleek White Wings jersey for sports lovers.' },
    { name: 'Tarmak-FIBA Basketball', price: 499, image: './assets/tarmak-basketball.jpg', category: 'Sports Ball', description: 'FIBA-approved Tarmak basketball for professional play.' },
    { name: 'Under Armour Curry 4', price: 1899, image: './assets/UA-curry.jpg', category: 'Sport Shoes', description: 'Stephen Curry’s signature Under Armour shoes for top performance.' },
    { name: 'Nike Precision 5', price: 1949, image: './assets/nike-precision.jpg', category: 'Sport Shoes', description: 'Nike Precision 5 shoes designed for quick movements.' },
    { name: 'Kipsta Volleyball', price: 199, image: './assets/kipsta-volleyball.jpg', category: 'Sports Ball', description: 'Kipsta volleyball for recreational and competitive play.' },
    { name: 'UA White Socks', price: 399, image: './assets/ua-socks.jpg', category: 'Socks', description: 'Comfortable white socks from Under Armour.' },
    { name: 'Adidas Select Crew Socks', price: 999, image: './assets/adidas-select-crew-socks.jpg', category: 'Socks', description: 'High-quality Adidas crew socks for sports.' },
    { name: 'Golde State Jersey', price: 499, image: './assets/gs-jersey.jpg', category: 'Sport Jersey', description: 'Golden State Warriors jersey for fans.' },
    { name: 'Lakers Jersey', price: 299, image: './assets/lakers-jersey.jpg', category: 'Sport Jersey', description: 'Official Lakers jersey for basketball enthusiasts.' },
    { name: 'Wilson Basketball', price: 499, image: './assets/wilson-ball.jpg', category: 'Sports Ball', description: 'Wilson basketball for indoor and outdoor play.' },
    { name: 'Jordan 3', price: 899, image: './assets/jordan-shoes.jpg', category: 'Sport Shoes', description: 'Classic Jordan 3 shoes for style and performance.' },
    { name: 'Nike Jordan 4', price: 949, image: './assets/jordan-blue-shoes.jpg', category: 'Sport Shoes', description: 'Nike Jordan 4 in a striking blue colorway.' },
    { name: 'Molten Volleyball', price: 199, image: './assets/molten-ball.jpg', category: 'Sports Ball', description: 'Molten volleyball for professional matches.' },
    { name: 'Nike Blue Socks', price: 399, image: './assets/blue-socks.jpg', category: 'Socks', description: 'Stylish blue socks from Nike.' },
    { name: 'Eagles Socks', price: 999, image: './assets/blue-eagles-socks.jpg', category: 'Socks', description: 'Eagles-themed socks for sports fans.' },
    { name: 'Nuggets Jersey', price: 499, image: './assets/denver-jersey.jpg', category: 'Sport Jersey', description: 'Denver Nuggets jersey for basketball fans.' },
    { name: 'Dallas Jersey', price: 299, image: './assets/dallas-jersey.jpg', category: 'Sport Jersey', description: 'Dallas Mavericks jersey for team supporters.' },
    { name: 'Spalding Basketball', price: 499, image: './assets/spalding basketball.jpg', category: 'Sports Ball', description: 'Spalding basketball for professional games.' },
    { name: 'Nike Lebron 22', price: 899, image: './assets/nike-lebron-22.jpg', category: 'Sport Shoes', description: 'LeBron James’ latest Nike Lebron 22 shoes.' },
    { name: 'Nike Lebron Black Variant', price: 949, image: './assets/nike-lebron.jpg', category: 'Sport Shoes', description: 'Nike Lebron shoes in a sleek black variant.' },
    { name: 'Molten Basketball', price: 199, image: './assets/molten-basketball.jpg', category: 'Sports Ball', description: 'Molten basketball for competitive play.' },
    { name: 'Initiative Socks', price: 399, image: './assets/initiative-socks.jpg', category: 'Socks', description: 'Comfortable Initiative socks for everyday use.' },
    { name: 'Rolo Socks', price: 999, image: './assets/black-red-socks.jpg', category: 'Socks', description: 'Stylish black and red Rolo socks.' },
    { name: 'Boston Celtics Jersey', price: 499, image: './assets/celtics-jersey.jpg', category: 'Sport Jersey', description: 'Boston Celtics jersey for NBA fans.' },
  ];

  getProductByName(name: string): Product | undefined {
    const normalizedName = name.toLowerCase().replace(/-/g, ' ');
    return this.products.find(product => product.name.toLowerCase() === normalizedName);
  }

  getCategories(): Category[] {
    return [
      { name: 'Socks', image: './assets/socks.jpg' },
      { name: 'Sport Shoes', image: './assets/shoes.jpg' },
      { name: 'Sports Ball', image: './assets/ball.jpg' },
      { name: 'Sport Jersey', image: './assets/jersey.jpg' },
    ];
  }
}