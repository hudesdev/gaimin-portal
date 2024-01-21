import mongoose from 'mongoose'

export interface SeasonUsers extends mongoose.Document {
    userId: string,
    twitterId: string,
    seasonId: string,
    userLevel: number,
    p_likePoint: number,
    p_repostPoint: number,
    p_repliesPoint: number,
    p_quotePoint: number,
    p_repost_ids: string[],
    p_replies_ids: string[],
    p_like_ids: string[],
    p_quote_ids: string[],
    wager: number,
    endflag: number,
    createdAt: Date,
    updatedAt: Date
}

const SeasonUserSchema = new mongoose.Schema<SeasonUsers>({
    userId: {
        type: String,
    },
    twitterId: {
        type: String
    },
    seasonId: {
        type: String
    },
    userLevel: {
        type: Number,
        default: 1
    },
    p_likePoint: {
        type: Number,
        default: 0
    },
    p_repostPoint: {
        type: Number,
        default: 0
    },
    p_repliesPoint: {
        type: Number,
        default: 0
    },
    p_quotePoint: {
        type: Number,
        default: 0
    },
    p_repost_ids: {
        type: [String],
        default: [],
    },
    p_replies_ids: {
        type: [String],
        default: [],
    },
    p_like_ids: {
        type: [String],
        default: [],
    },
    p_quote_ids: {
        type: [String],
        default: [],
    },
    wager: {
        type: Number,
        default: 1
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
})


let SeasonUsers;
if (mongoose.models.SeasonUsers) {
    SeasonUsers = mongoose.model('SeasonUsers');
} else {
    SeasonUsers = mongoose.model('SeasonUsers', SeasonUserSchema);
}

module.exports = SeasonUsers;