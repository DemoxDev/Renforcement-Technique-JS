export class Slider {
    constructor(images, index, sliderIndex) {
      this.images = images;
      this.index = index;
      this.sliderIndex = sliderIndex;
    }
  
    updateImage() {
      const img = document.getElementById(`image${this.sliderIndex}`);
      if (img) {
        img.src = this.images[this.index];
      }
    }
  
    moveSlide(n) {
      this.index += n;
      if (this.index >= this.images.length) {
        this.index = 0;
      }
      if (this.index < 0) {
        this.index = this.images.length - 1;
      }
      this.updateImage();
    }

    currentSlide(n) {
      this.index = n;
      this.updateImage();
    }
  }