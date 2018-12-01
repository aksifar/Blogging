import { Injectable } from '@angular/core';
import { BlogPost } from '../model/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData() : BlogPost[][]
  {
    return [
      [
        {"title" : "Paris1", "summary" : "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré." },
        {"title" : "Shimla1", "summary": "When it comes to hotels in Shimla on Mall Road, you’ll be spoilt for choice as there are several options available. Boasting of an old-world charm, Clarkes Hotel and Hotel Landmark impress with their golden history and beautiful location and superior services. Hotel Marina and Hotel Willow Banks on the Mall Road are perfect for those looking for a stay in Shimla closer to prominent tourist attractions. For those looking for an easy-on-pocket yet good accommodation option Hotel Hilltop in Shimla is a perfect pick for them. To make the task convenient for you, we have collated a list of top hotels in Shimla on Mall Road. Check them here."},
        {"title" : "Amsterdam1", "summary": "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths."}
      ],
      [
        {"title" : "Paris2", "summary" : "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré." },
        {"title" : "Shimla2", "summary": "When it comes to hotels in Shimla on Mall Road, you’ll be spoilt for choice as there are several options available. Boasting of an old-world charm, Clarkes Hotel and Hotel Landmark impress with their golden history and beautiful location and superior services. Hotel Marina and Hotel Willow Banks on the Mall Road are perfect for those looking for a stay in Shimla closer to prominent tourist attractions. For those looking for an easy-on-pocket yet good accommodation option Hotel Hilltop in Shimla is a perfect pick for them. To make the task convenient for you, we have collated a list of top hotels in Shimla on Mall Road. Check them here."},
        {"title" : "Amsterdam2", "summary": "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths."}
      ],
      [
        {"title" : "Paris3", "summary" : "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré." },
        {"title" : "Shimla3", "summary": "When it comes to hotels in Shimla on Mall Road, you’ll be spoilt for choice as there are several options available. Boasting of an old-world charm, Clarkes Hotel and Hotel Landmark impress with their golden history and beautiful location and superior services. Hotel Marina and Hotel Willow Banks on the Mall Road are perfect for those looking for a stay in Shimla closer to prominent tourist attractions. For those looking for an easy-on-pocket yet good accommodation option Hotel Hilltop in Shimla is a perfect pick for them. To make the task convenient for you, we have collated a list of top hotels in Shimla on Mall Road. Check them here."},
        {"title" : "Amsterdam3", "summary": "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths."}
      ]
  ];
  }
}
