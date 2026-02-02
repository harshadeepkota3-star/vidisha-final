
// Fix: Import React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  id: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
}

export interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  image: string;
  price: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  size: 'small' | 'medium' | 'large';
}