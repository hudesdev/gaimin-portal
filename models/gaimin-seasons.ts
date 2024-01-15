import mongoose from 'mongoose'

export interface Seasons extends mongoose.Document {
    startTime: Date,
    endTime: Date,
    endflag: boolean,
    createdAt: Date,
    updatedAt: Date
}

const SeasonSchema = new mongoose.Schema<Seasons>({
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
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


let Seasons;
if (mongoose.models.Seasons) {
    Seasons = mongoose.model('Seasons');
} else {
    Seasons = mongoose.model('Seasons', SeasonSchema);
}

module.exports = Seasons;