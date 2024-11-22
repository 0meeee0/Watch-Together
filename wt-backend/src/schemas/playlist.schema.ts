import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

@Schema()
export class Playlist{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User[]
    @Prop()
    url: string
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist)