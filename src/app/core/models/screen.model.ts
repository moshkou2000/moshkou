import { ScreenEnunm } from '../enums/screen.enum';

export class ScreenModel {
  width: number;
  height: number;
  mode: ScreenEnunm = ScreenEnunm.desktop;

  get isSmall(): boolean {
    return this.mode === ScreenEnunm.small;
  }
  get isMobile(): boolean {
    return this.mode === ScreenEnunm.mobile;
  }
  get isTablet(): boolean {
    return this.mode === ScreenEnunm.tablet;
  }
  get isLaptop(): boolean {
    return this.mode === ScreenEnunm.laptop;
  }
  get isDesctop(): boolean {
    return this.mode === ScreenEnunm.desktop;
  }
  get isLarge(): boolean {
    return this.mode === ScreenEnunm.large;
  }

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.setScreenMode();
  }

  setScreenMode() {
    if (this.width < 440) {
      // Very small devices (small mobile, 440px and below)
      this.mode = ScreenEnunm.small;
    } else if (this.width < 576) {
      // Small devices (mobile, 576px and below)
      this.mode = ScreenEnunm.mobile;
    } else if (this.width < 768) {
      // Medium devices (tablets, 768px and below)
      this.mode = ScreenEnunm.tablet;
    } else if (this.width < 992) {
      // Large devices (laptop, 992px and below)
      this.mode = ScreenEnunm.laptop;
    } else if (this.width < 1200) {
      // large devices (desktops, 1200px and below)
      this.mode = ScreenEnunm.desktop;
    } else if (this.width >= 1200) {
      // Extra large devices (larg desktops, 1200px and up)
      this.mode = ScreenEnunm.large;
    }
  }
}
