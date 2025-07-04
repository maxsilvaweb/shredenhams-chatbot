export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface SkateShopResponse {
  id: string;
  keywords: string[];
  response: string;
  category: string;
}