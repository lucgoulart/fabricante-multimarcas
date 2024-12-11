import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  imagesGalleryMale = [
    { src: 'basica.png', description: 'Camiseta básica' },
    { src: 'kit.png', description: 'Kit\'s sortidos' },
    { src: 'camiseta_masculina.png', description: 'Academia' },
    { src: 'camiseta_masculina.png', description: 'DryFit' },
    { src: 'regata.png', description: 'Regatas' },
  ];


  imagesGalleryFemale = [
    { src: 'basica-fem.png', description: 'Camiseta básica' },
    { src: 'camiseta_masculina.png', description: 'Kit\'s sortidos' },
    { src: 'camiseta_masculina.png', description: 'Academia' },
    { src: 'camiseta_masculina.png', description: 'Regatas' },
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


  images: { src: string; rota: string }[] = [
    { src: 'moda-fitness.png', rota: '/rota-1' },
    { src: 'monte-kit.png', rota: '/rota-2' },
    { src: 'personalize3.png', rota: '/personalizacao' }
  ];


  currentIndex: number = 0;
  intervalId: any;
  transitionStyle: string = 'transform 0.5s ease-in-out';

  ngOnInit() {
    this.setupPagination();
    this.updateCurrentImages();
    this.startAutoSlide();
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

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Cicla para a próxima imagem
    this.resetAutoSlide(); // Reinicia o temporizador
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; // Cicla para a imagem anterior
    this.resetAutoSlide(); // Reinicia o temporizador
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // Troca de imagem a cada 5 segundos
  }

  resetAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Para o intervalo atual
    }
    this.startAutoSlide(); // Reinicia o intervalo
  }
}
