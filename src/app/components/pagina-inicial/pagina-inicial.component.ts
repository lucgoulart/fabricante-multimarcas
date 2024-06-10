import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  imagesGalleryMale = [
    { src: 'camiseta_masculina.png', description: 'Camiseta básica' },
    { src: 'camiseta_masculina.png', description: 'Kit\'s sortidos' },
    { src: 'camiseta_masculina.png', description: 'Academia' },
    { src: 'camiseta_masculina.png', description: 'Polo' },
    { src: 'camiseta_masculina.png', description: 'DryFit' },
    { src: 'camiseta_masculina.png', description: 'Bermudas' },
    { src: 'camiseta_masculina.png', description: 'Regatas' },
  ];


  imagesGalleryFemale = [
    { src: 'camiseta_masculina.png', description: 'Camiseta básica' },
    { src: 'camiseta_masculina.png', description: 'Kit\'s sortidos' },
    { src: 'camiseta_masculina.png', description: 'Academia' },
    { src: 'camiseta_masculina.png', description: 'Polo' },
    { src: 'camiseta_masculina.png', description: 'Regatas' },
    { src: 'camiseta_masculina.png', description: 'Manga longa' },
    { src: 'camiseta_masculina.png', description: 'Malha fria' },
  ];
  imagesPerPage = 3;
  currentPageMale = 0;
  currentPageFemale = 0;
  paginatedImagesMale: any[][] = [];
  paginatedImagesFemale: any[][] = [];
  paginationDotsMale: number[] = [];
  paginationDotsFemale: number[] = [];
  isMobile: boolean = window.innerWidth < 768;
  currentImagesMale = this.imagesGalleryMale;
  currentImagesFemale = this.imagesGalleryFemale;


  images: string[] = [
    'img-1.png',
    'img-3.png',
    'img-2.png'
  ];

  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.setupPagination();
    this.updateCurrentImages();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 768;
    this.updateCurrentImages();
  }

  setupPagination() {
    const pagesMale = Math.ceil(this.imagesGalleryMale.length / this.imagesPerPage);
    for (let i = 0; i < pagesMale; i++) {
      this.paginationDotsMale.push(i);
      this.paginatedImagesMale.push(this.imagesGalleryMale.slice(i * this.imagesPerPage, (i + 1) * this.imagesPerPage));
    }

    const pagesFemale = Math.ceil(this.imagesGalleryFemale.length / this.imagesPerPage);
    for (let i = 0; i < pagesFemale; i++) {
      this.paginationDotsFemale.push(i);
      this.paginatedImagesFemale.push(this.imagesGalleryFemale.slice(i * this.imagesPerPage, (i + 1) * this.imagesPerPage));
    }
  }

  setCurrentPageMale(page: number) {
    this.currentPageMale = page;
    this.updateCurrentImages();
  }

  setCurrentPageFemale(page: number) {
    this.currentPageFemale = page;
    this.updateCurrentImages();
  }
  updateCurrentImages() {
    if (this.isMobile) {
      this.currentImagesMale = this.paginatedImagesMale[this.currentPageMale];
      this.currentImagesFemale = this.paginatedImagesFemale[this.currentPageFemale];
    } else {
      this.currentImagesMale = this.imagesGalleryMale;
      this.currentImagesFemale = this.imagesGalleryFemale;
    }
  }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
  this.intervalId = setInterval(() => {
  this.nextImage();
  }, 5000);
  }

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}
