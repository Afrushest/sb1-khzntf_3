export type EventType = 'in-person' | 'virtual';
export type EventGenre = 'conference' | 'workshop' | 'training' | 'webinar';

export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  photo: string;
}

export interface EventTopic {
  id: string;
  title: string;
  theme: string;
  time: string;
  type: EventType;
  location?: string;
  description: string;
  agenda: string;
  speaker: Speaker;
}

export interface Event {
  id: string;
  bannerImage: string;
  title: string;
  date: string;
  isMultiTopic: boolean;
  // Single topic event fields
  time?: string;
  type?: EventType;
  location?: string;
  genre?: EventGenre;
  theme?: string;
  description?: string;
  agenda?: string;
  speakers?: Speaker[];
  // Multi topic event fields
  topics?: EventTopic[];
  // Past event fields
  isPast: boolean;
  videoRecap?: string;
  photos?: string[];
  // Analytics
  visitCount: number;
}