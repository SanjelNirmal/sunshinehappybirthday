/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  quote: string;
  accentColor: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  location: string;
  emoji: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

export interface Reason {
  id: number;
  title: string;
  description: string;
  emoji: string;
  category: string;
}

export interface OpenWhen {
  id: number;
  trigger: string;
  title: string;
  message: string;
  actionText: string;
  emoji: string;
  bgGradient: string;
}

export interface Dream {
  id: number;
  title: string;
  description: string;
  category: "Travel" | "Home" | "Growth";
  emoji: string;
}
