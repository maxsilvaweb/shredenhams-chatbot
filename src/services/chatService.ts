import { skateShopResponses } from '@/data/responses';
import { SkateShopResponse } from '@/types';

export class ChatService {
  private responses: SkateShopResponse[] = skateShopResponses;

  findResponse(userInput: string): string {
    const input = userInput.toLowerCase();
    
    // Find the best matching response based on keywords
    for (const response of this.responses) {
      const hasMatch = response.keywords.some(keyword => 
        input.includes(keyword.toLowerCase())
      );
      
      if (hasMatch) {
        return response.response;
      }
    }
    
    // Default response if no match found
    return "Hey! I'd love to help you out. You can ask me about our hours, products, location, lessons, repairs, or anything else about our skate shop! What would you like to know?";
  }

  getResponseCategory(userInput: string): string {
    const input = userInput.toLowerCase();
    
    // Find the category of the matching response
    for (const response of this.responses) {
      const hasMatch = response.keywords.some(keyword => 
        input.includes(keyword.toLowerCase())
      );
      
      if (hasMatch) {
        return response.category;
      }
    }
    
    return 'default';
  }

  searchProducts(query: string): string[] {
    const productKeywords = [
      'skateboard', 'deck', 'wheels', 'trucks', 'bearings', 'grip tape',
      'shoes', 'vans', 'nike', 'adidas', 'helmet', 'pads', 'complete',
      'longboard', 'cruiser', 'penny board'
    ];
    
    const matchedProducts = productKeywords.filter(product => 
      query.toLowerCase().includes(product.toLowerCase())
    );
    
    return matchedProducts;
  }
}

export const chatService = new ChatService();