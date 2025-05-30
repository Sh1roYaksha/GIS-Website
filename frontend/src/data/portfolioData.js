// AMP Geosolutions Portfolio Data
// TO ADD NEW PORTFOLIO ITEMS: Simply add a new object to the portfolioItems array below
// TO EDIT EXISTING ITEMS: Modify the properties of any existing item

export const portfolioItems = [
  {
    title: "Urban Development Mapping",
    description: "Comprehensive aerial mapping for major residential development project spanning 200 acres with precise boundary determination and topographic analysis.",
    image: "https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg",
    category: "Residential",
    location: "Metro Area",
    projectSize: "200 acres",
    completionDate: "2024",
    services: ["Drone Survey", "DGPS Survey", "Topographic Mapping"]
  },
  {
    title: "Infrastructure Survey",
    description: "Precision DGPS survey for highway construction planning including elevation mapping and utility location for 5-mile corridor.",
    image: "https://images.unsplash.com/photo-1536420123832-cd5867531583?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxhZXJpYWwlMjBtYXBwaW5nfGVufDB8fHx8MTc0ODYwNzM3MXww&ixlib=rb-4.1.0&q=85",
    category: "Infrastructure",
    location: "State Highway 45",
    projectSize: "5 miles",
    completionDate: "2023",
    services: ["DGPS Survey", "Utility Mapping", "Construction Layout"]
  },
  {
    title: "Commercial Complex Survey",
    description: "Complete topographic and boundary survey for commercial development including parking layout and drainage analysis.",
    image: "https://images.pexels.com/photos/8333104/pexels-photo-8333104.jpeg",
    category: "Commercial",
    location: "Downtown District",
    projectSize: "15 acres",
    completionDate: "2024",
    services: ["Boundary Survey", "Topographic Mapping", "Drone Survey"]
  }
  
  // TO ADD NEW PORTFOLIO ITEM, COPY THE TEMPLATE BELOW AND FILL IN YOUR DETAILS:
  /*
  {
    title: "Your Project Title",
    description: "Detailed description of the project, services provided, and key achievements.",
    image: "YOUR_IMAGE_URL_HERE", // You can use URLs from Unsplash, Pexels, or your own hosted images
    category: "Residential" | "Commercial" | "Infrastructure" | "Government", // Choose one
    location: "Project Location",
    projectSize: "Size or scope",
    completionDate: "Year",
    services: ["Service 1", "Service 2", "Service 3"] // List of services provided
  },
  */
];

// Available categories for consistency:
export const portfolioCategories = [
  "Residential",
  "Commercial", 
  "Infrastructure",
  "Government",
  "Environmental",
  "Industrial"
];

// Available services for consistency:
export const availableServices = [
  "Drone Survey",
  "DGPS Survey", 
  "Topographic Mapping",
  "Boundary Survey",
  "Construction Layout",
  "Utility Mapping",
  "Environmental Assessment",
  "Site Planning",
  "As-Built Survey"
];