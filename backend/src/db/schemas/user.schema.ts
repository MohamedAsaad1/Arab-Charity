import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, type: String, minlength: 3, maxlength: 50 })
  FirstName: string;

  @Prop({ required: true, type: String, minlength: 3, maxlength: 50 })
  LastName: string;

  @Prop({ type: Number, required: true, minlength: 3, maxlength: 50 })
  PhoneNumber: string;

  @Prop({ type: String, required: true })
  Country: string;

  @Prop({ type: String, required: true })
  Email: string;

  @Prop({ type: String, required: true })
  Role: string;

  @Prop({ type: String, required: true })
  Password: string;

  @Prop({ type: Date, required: true })
  BirthDate: Date;

  @Prop({ type: Date, default: Date.now })
  CreatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
