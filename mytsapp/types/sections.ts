export interface Base {
  id: number;
  name: string;
}

export interface Text extends Base {
  url: string;
  alt: string;
  text: string;
}

export interface Image extends Base {
  url: string;
  alt: string;
  imageText: string;
}

export interface ImageAndText extends Image {
  align: string;
  title: string;
  text: string;
}

export interface DoubleImage extends Image {
  url2: string;
  alt_2: string;
  imageText_2: string;
}

export type Section = Base | Image | Text | ImageAndText | DoubleImage;

export type Sections = Array<Section>;
