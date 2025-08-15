// Dummy data generator for MarketList with 300 items
// Types for reference:
// export type ListItem = {
//   id: string;
//   name: string;
//   qty?: string;
//   note?: string;
//   purchased?: boolean;
//   updatedAt: string;
// };
// export type MarketList = {
//   id: string;
//   title: string;
//   items: ListItem[];
//   ownerId?: string;
//   tags?: string[];
//   createdAt: string;
//   updatedAt: string;
//   version?: number;
// };

// Helper function to generate random ID
const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

// Helper function to generate random date within last 30 days
const getRandomDate = (daysBack = 30) => {
  const now = new Date();
  const randomDays = Math.floor(Math.random() * daysBack);
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  
  const date = new Date(now);
  date.setDate(date.getDate() - randomDays);
  date.setHours(randomHours);
  date.setMinutes(randomMinutes);
  
  return date.toISOString();
};

// Sample grocery items with categories
const groceryItems = [
  // Fruits & Vegetables
  'Apples', 'Bananas', 'Oranges', 'Grapes', 'Strawberries', 'Blueberries', 'Raspberries', 'Blackberries',
  'Pineapple', 'Mango', 'Avocado', 'Kiwi', 'Peaches', 'Pears', 'Plums', 'Cherries', 'Watermelon', 'Cantaloupe',
  'Carrots', 'Broccoli', 'Cauliflower', 'Spinach', 'Lettuce', 'Tomatoes', 'Cucumbers', 'Bell Peppers',
  'Onions', 'Garlic', 'Potatoes', 'Sweet Potatoes', 'Celery', 'Zucchini', 'Eggplant', 'Asparagus',
  
  // Dairy & Eggs
  'Milk', 'Eggs', 'Butter', 'Cheese', 'Yogurt', 'Sour Cream', 'Heavy Cream', 'Cottage Cheese',
  'Mozzarella', 'Cheddar Cheese', 'Parmesan', 'Greek Yogurt', 'Cream Cheese', 'Almond Milk',
  
  // Meat & Seafood
  'Chicken Breast', 'Ground Beef', 'Salmon', 'Shrimp', 'Turkey', 'Bacon', 'Ham', 'Pork Chops',
  'Tuna', 'Cod', 'Ground Turkey', 'Chicken Thighs', 'Beef Steak', 'Lamb', 'Sausages',
  
  // Pantry & Dry Goods
  'Rice', 'Pasta', 'Bread', 'Flour', 'Sugar', 'Salt', 'Black Pepper', 'Olive Oil', 'Vegetable Oil',
  'Honey', 'Oats', 'Quinoa', 'Lentils', 'Black Beans', 'Chickpeas', 'Almonds', 'Walnuts',
  'Peanut Butter', 'Jam', 'Cereal', 'Crackers', 'Cookies', 'Granola Bars',
  
  // Beverages
  'Coffee', 'Tea', 'Orange Juice', 'Apple Juice', 'Soda', 'Sparkling Water', 'Beer', 'Wine',
  'Energy Drinks', 'Sports Drinks', 'Coconut Water', 'Almond Milk', 'Oat Milk',
  
  // Frozen Foods
  'Frozen Pizza', 'Ice Cream', 'Frozen Vegetables', 'Frozen Berries', 'Frozen Chicken', 'TV Dinners',
  'Frozen Waffles', 'Frozen Fish', 'Frozen Fries', 'Frozen Yogurt',
  
  // Household & Personal Care
  'Toilet Paper', 'Paper Towels', 'Dish Soap', 'Laundry Detergent', 'Shampoo', 'Toothpaste',
  'Deodorant', 'Body Wash', 'Hand Soap', 'Tissues', 'Aluminum Foil', 'Plastic Bags',
  
  // Spices & Condiments
  'Ketchup', 'Mustard', 'Mayo', 'Hot Sauce', 'Soy Sauce', 'Vinegar', 'Garlic Powder', 'Paprika',
  'Cumin', 'Oregano', 'Basil', 'Thyme', 'Rosemary', 'Cinnamon', 'Vanilla Extract'
];

// Sample quantities
const quantities = ['1', '2', '3', '4', '5', '1 lb', '2 lbs', '1 kg', '500g', '1 dozen', '2 dozen', '1 bag', '2 bags', '1 box', '2 boxes', '1 bottle', '1 jar', '1 pack', '2 packs'];

// Sample notes
const notes = [
  'Organic if available',
  'On sale',
  'Brand: store brand',
  'Large size',
  'Extra virgin',
  'Low sodium',
  'Whole grain',
  'Free range',
  'Fresh, not frozen',
  'Ripe',
  'Check expiration date',
  'Compare prices',
  'If in stock',
  'Seasonal item'
];

// Sample list titles
const listTitles = [
  'Weekly Grocery Shopping', 'Weekend BBQ Party', 'Birthday Party Prep', 'Healthy Meal Prep', 
  'Quick Dinner Ideas', 'Holiday Cooking', 'Back to School Supplies', 'Office Lunch Prep',
  'Family Breakfast Items', 'Picnic Essentials', 'Game Day Snacks', 'Dinner Party Menu',
  'Kids Lunch Boxes', 'Camping Trip Food', 'Date Night Dinner', 'Brunch Ingredients',
  'Thanksgiving Dinner', 'Christmas Baking', 'Summer Pool Party', 'Baby Shower Prep',
  'Movie Night Snacks', 'Sunday Meal Prep', 'Valentine\'s Dinner', 'Easter Brunch',
  'Mother\'s Day Breakfast', 'Father\'s Day Grill', 'New Year\'s Party', 'Super Bowl Sunday'
];

// Sample tags
const tagOptions = [
  'urgent', 'weekly', 'monthly', 'party', 'healthy', 'budget', 'organic', 'bulk', 'sale',
  'meal-prep', 'breakfast', 'lunch', 'dinner', 'snacks', 'beverages', 'household',
  'personal-care', 'frozen', 'fresh', 'pantry', 'dairy', 'meat', 'produce', 'bakery'
];

// Owner IDs
const ownerIds = [
  'user_123abc', 'user_456def', 'user_789ghi', 'user_321jkl', 'user_654mno',
  'user_987pqr', 'user_147stu', 'user_258vwx', 'user_369yza', 'user_741bcd'
];

// Function to generate random ListItem
const generateListItem = () => {
  const item = groceryItems[Math.floor(Math.random() * groceryItems.length)];
  const includeQty = Math.random() > 0.3; // 70% chance to include quantity
  const includeNote = Math.random() > 0.7; // 30% chance to include note
  const purchased = Math.random() > 0.6; // 40% chance to be purchased
  
  return {
    id: generateId(),
    name: item,
    ...(includeQty && { qty: quantities[Math.floor(Math.random() * quantities.length)] }),
    ...(includeNote && { note: notes[Math.floor(Math.random() * notes.length)] }),
    purchased,
    updatedAt: getRandomDate(7) // Items updated within last 7 days
  };
};

// Function to generate random MarketList
const generateMarketList = (index) => {
  const itemCount = Math.floor(Math.random() * 25) + 5; // Between 5-30 items per list
  const items = Array.from({ length: itemCount }, () => generateListItem());
  
  const tagCount = Math.floor(Math.random() * 4) + 1; // 1-4 tags per list
  const selectedTags = [];
  while (selectedTags.length < tagCount) {
    const tag = tagOptions[Math.floor(Math.random() * tagOptions.length)];
    if (!selectedTags.includes(tag)) {
      selectedTags.push(tag);
    }
  }
  
  const createdDate = getRandomDate(60); // Created within last 60 days
  const updatedDate = new Date(createdDate);
  updatedDate.setDate(updatedDate.getDate() + Math.floor(Math.random() * 30));
  
  return {
    id: generateId(),
    title: listTitles[Math.floor(Math.random() * listTitles.length)] + ` #${index + 1}`,
    items,
    ownerId: ownerIds[Math.floor(Math.random() * ownerIds.length)],
    tags: selectedTags,
    createdAt: createdDate,
    updatedAt: updatedDate.toISOString(),
    version: Math.floor(Math.random() * 10) + 1
  };
};

// Generate 300 MarketList items
const generateDummyData = () => {
  console.log('Generating 300 MarketList items...');
  const marketLists = Array.from({ length: 300 }, (_, index) => generateMarketList(index));
  
  console.log(`Generated ${marketLists.length} market lists`);
  console.log(`Total items across all lists: ${marketLists.reduce((sum, list) => sum + list.items.length, 0)}`);
  
  return marketLists;
};

// Export the data
export const dummyMarketLists = generateDummyData();

// Export individual functions for custom generation
export { generateId, generateListItem, generateMarketList, getRandomDate };

// Default export
export default dummyMarketLists;

// Usage examples:
// import { dummyMarketLists } from './marketListData.js';
// import { generateMarketList, generateListItem } from './marketListData.js';

// Log sample data for verification
// console.log('Sample MarketList:', JSON.stringify(dummyMarketLists[0], null, 2));