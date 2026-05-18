export interface SearchItem {
  id: string;
  title: string;
  content: string;
  category: 'marketing' | 'solutions' | 'tech' | 'contact';
}

export interface ContactChannel {
  id: string;
  name: string;
  value: string;
  href: string;
  iconName: string;
}
