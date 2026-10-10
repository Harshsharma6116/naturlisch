import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: mongoose.Types.ObjectId;
  gender: 'male' | 'female' | 'unisex';
  skinType?: ('oily' | 'dry' | 'combination' | 'sensitive' | 'normal')[];
  ingredients: string[];
  volume: string;
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
  ratings: {
    average: number;
    count: number;
  };
  tags: string[];
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
  compareAtPrice: { type: Number },
  images: [{ type: String }],
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  gender: { type: String, enum: ['male', 'female', 'unisex'], required: true },
  skinType: [{ type: String, enum: ['oily', 'dry', 'combination', 'sensitive', 'normal'] }],
  ingredients: [{ type: String }],
  volume: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  tags: [{ type: String }]
}, {
  timestamps: true
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
