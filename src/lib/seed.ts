import mongoose from 'mongoose';
import Category from '../models/Category';
import Product from '../models/Product';
import User from '../models/User';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Clear existing
  await Category.deleteMany({});
  await Product.deleteMany({});
  await User.deleteMany({});

  // Categories
  const mensCat = await Category.create({ name: "Men's Skincare", slug: 'mens-skincare' });
  const womensCat = await Category.create({ name: "Women's Skincare", slug: 'womens-skincare' });
  console.log('Created Categories');

  // Products
  const products = [
    {
      name: 'Hydrating Face Wash',
      slug: 'hydrating-face-wash',
      description: 'A gentle face wash that cleanses without stripping moisture.',
      shortDescription: 'Gentle everyday cleanser',
      price: 499,
      images: ['/images/logo.png'],
      category: mensCat._id,
      gender: 'male',
      skinType: ['normal', 'dry'],
      ingredients: ['Aloe Vera', 'Vitamin E'],
      volume: '100ml',
      stock: 50,
      isFeatured: true
    },
    {
      name: 'Revitalizing Serum',
      slug: 'revitalizing-serum',
      description: 'Powerful serum to reduce fine lines and brighten skin.',
      shortDescription: 'Anti-aging daily serum',
      price: 1299,
      compareAtPrice: 1499,
      images: ['/images/logo.png'],
      category: womensCat._id,
      gender: 'female',
      skinType: ['all'],
      ingredients: ['Hyaluronic Acid', 'Vitamin C'],
      volume: '30ml',
      stock: 20,
      isFeatured: true
    }
  ];

  await Product.insertMany(products);
  console.log('Created Products');

  // Admin User
  if (process.env.ADMIN_EMAIL) {
    await User.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL,
      provider: 'credentials',
      role: 'admin'
    });
    console.log('Created Admin User');
  }

  await mongoose.disconnect();
  console.log('Done!');
}

seed().catch(console.error);
