import mongoose from 'mongoose'

export interface SeasonUsers extends mongoose.Document {
    userId: string,
    twitterId: string,
    seasonId: string,
    userLevel: number,
    pointAmount: number,
    shardAmount: number,
    p_likePoint: number,
    p_repostPoint: number,
    p_repliesPoint: number,
    p_quotePoint: number,
    t_viewPoint: number,
    t_likePoint: number,
    t_repliesPoint: number,
    t_repostPoint: number,
    t_quotePoint: number,
    t_ids: string[],
    p_ids: string[],
    wager: number,
    endflag: boolean,
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
    pointAmount: {
        type: Number,
        default: 0
    },
    shardAmount: {
        type: Number,
        default: 0
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
    t_viewPoint: {
        type: Number,
        default: 0
    },
    t_likePoint: {
        type: Number,
        default: 0
    },
    t_repliesPoint: {
        type: Number,
        default: 0
    },
    t_repostPoint: {
        type: Number,
        default: 0
    },
    t_quotePoint: {
        type: Number,
        default: 0
    },
    t_ids: {
        type: [String],
        default: [],
    },
    p_ids: {
        type: [String],
        default: [],
    },
    wager: {
        type: Number,
        default: 1
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
})


let SeasonUsers;
if (mongoose.models.SeasonUsers) {
    SeasonUsers = mongoose.model('SeasonUsers');
} else {
    SeasonUsers = mongoose.model('SeasonUsers', SeasonUserSchema);
}

module.exports = SeasonUsers;