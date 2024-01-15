import mongoose from 'mongoose'

export interface Level extends mongoose.Document {
    level: number,
    point: number,
    delflag: boolean,
    createdAt: Date,
    updatedAt: Date
}

const LevelSchema = new mongoose.Schema<Level>({
    level: {
        type: Number
    },
    point: {
        type: Number
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

let Level;
if (mongoose.models.Level) {
    Level = mongoose.model('levels');
} else {
    Level = mongoose.model('levels', LevelSchema);
}

module.exports = Level;