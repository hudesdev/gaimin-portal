import mongoose from 'mongoose'

export interface Tasks extends mongoose.Document {
    tweeContent: string,
    seasonId: string,
    endflag: boolean,
    createdAt: Date,
    updatedAt: Date
}

const TaskSchema = new mongoose.Schema<Tasks>({
    tweeContent: {
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

let Tasks;
if (mongoose.models.Tasks) {
    Tasks = mongoose.model('Tasks');
} else {
    Tasks = mongoose.model('Tasks', TaskSchema);
}

module.exports = Tasks;