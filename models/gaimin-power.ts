import mongoose, { Schema } from 'mongoose';

export interface Powers extends mongoose.Document {
    tweetId: string,
    tweetTitle: string,
    tweetURI: string,
    seasonId: Schema.Types.ObjectId,
    endflag: number,
    createdAt: Date,
    updatedAt: Date
}

const PowerSchema = new mongoose.Schema<Powers>({
    tweetId: {
        type: String
    },
    tweetTitle: {
        type: String
    },
    tweetURI: {
        type: String
    },
    seasonId: {
        type: Schema.Types.ObjectId
    },
    endflag: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

let Powers;
if (mongoose.models.Powers) {
    Powers = mongoose.model('Powers');
} else {
    Powers = mongoose.model('Powers', PowerSchema);
}

module.exports = Powers;