import mongoose from 'mongoose'

export interface PointSet extends mongoose.Document {
    p_likePoint: number,
    p_repostPoint: number,
    p_repliesPoint: number,
    p_quotePoint: number,
    t_viewPoint: number,
    t_likePoint: number,
    t_repliesPoint: number,
    t_repostPoint: number,
    t_quotePoint: number,
    wager: number,
    createdAt: Date,
    updatedAt: Date
}

const PointSetSchema = new mongoose.Schema<PointSet>({
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
    wager: {
        type: Number,
        default: 30
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


let PointSet;
if (mongoose.models.PointSet) {
    PointSet = mongoose.model('pointsets');
} else {
    PointSet = mongoose.model('pointsets', PointSetSchema);
}

module.exports = PointSet;