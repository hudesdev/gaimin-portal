import mongoose from 'mongoose'

export interface Histories extends mongoose.Document {
    userId: string,
    tweetId: string,
    givePoint: number,
    seasonId: string,
    taskId: string,
    postId: string,
    delflag: boolean,
    createdAt: Date,
    updatedAt: Date
}

const HistorySchema = new mongoose.Schema<Histories>({
    userId: {
        type: String
    },
    tweetId: {
        type: String
    },
    seasonId: {
        type: String
    },
    taskId: {
        type: String
    },
    postId: {
        type: String
    },
    delflag: {
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

let Histories;
if (mongoose.models.Histories) {
    Histories = mongoose.model('Histories');
} else {
    Histories = mongoose.model('Histories', HistorySchema);
}

module.exports = Histories;