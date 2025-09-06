// src/types/splide.d.ts
declare module "splide-nextjs/react-splide" {
  import * as React from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    hasTrack?: boolean;
    [key: string]: any;
  }

  export interface SplideSlideProps {
    [key: string]: any;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}

