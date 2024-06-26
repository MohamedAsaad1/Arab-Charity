import { Prop } from '@nestjs/mongoose';
import { Country } from 'types/country';
import { CommonDtoForSingup } from 'types/org-user';

export class SignupSchema implements CommonDtoForSingup {
  @Prop({
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 15,
    min: 0,
    unique: true,
  })
  PhoneNumber: number;

  @Prop({ type: Country, required: true })
  Country: Country;

  @Prop({ type: String, required: true })
  Password: string;

  @Prop({ type: String, required: true })
  Role: string;

  @Prop({ type: Date, default: Date.now })
  CreatedAt: Date;

  @Prop({ type: Date, default: null })
  UpdatedAt: Date;

  @Prop({ type: Date, default: null })
  DeletedAt: Date;

  @Prop({ type: Boolean, default: false })
  Verified: boolean;
}
