import mongoose from 'mongoose'

export interface RefreshCycles extends mongoose.Document {
    startTime: Date,
    endTime: Date
}

const RefreshCycleSchema = new mongoose.Schema<RefreshCycles>({
    startTime: {
        type: Date
    },
    endTime: {
        type: Date,
        default: Date.now
    }
})


let RefreshCycles;
if (mongoose.models.RefreshCycles) {
    RefreshCycles = mongoose.model('RefreshCycles');
} else {
    RefreshCycles = mongoose.model('RefreshCycles', RefreshCycleSchema);
}

module.exports = RefreshCycles;