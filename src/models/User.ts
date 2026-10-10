import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  image?: string;
  provider: 'credentials' | 'google';
  role: 'customer' | 'admin';
  phone?: string;
  addresses: {
    label: string;
    fullName: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
    isDefault: boolean;
  }[];
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  provider: { type: String, enum: ['credentials', 'google'], default: 'credentials' },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  phone: { type: String },
  addresses: [{
    label: { type: String },
    fullName: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    phone: { type: String },
    isDefault: { type: Boolean, default: false }
  }]
}, {
  timestamps: true
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
