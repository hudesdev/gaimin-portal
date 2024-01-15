import mongoose from 'mongoose'

export interface Powers extends mongoose.Document {
    tweetId: string,
    tweetURI: string,
    seasonId: string,
    endflag: boolean,
    createdAt: Date,
    updatedAt: Date
}

const PowerSchema = new mongoose.Schema<Powers>({
    tweetId: {
        type: String
    },
    tweetURI: {
        type: String
    },
    seasonId: {
        type: String
    },
    endflag: {
        type: Boolean,
        default: false
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