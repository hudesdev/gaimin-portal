import mongoose from 'mongoose'

export interface Users extends mongoose.Document {
    alias: string,
    name: string,
    email: string,
    walletAddress: string,
    twitterId: string,
    imgSRC: string,
    wager: number,
    currentPoint: number,
    followers: number,
    accountCreated: Date,
    shardAmount: number,
    teleflag: number,
    delflag: number,
    createdAt: Date,
    updatedAt: Date
}

const UserSchema = new mongoose.Schema<Users>({
    alias: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    walletAddress: {
        type: String
    },
    twitterId: {
        type: String,
    },
    imgSRC: {
        type: String,
    },
    followers: {
        type: Number,
        default: 0
    },
    shardAmount: {
        type: Number,
        default: 0
    },
    accountCreated: {
        type: Date
    },
    wager: {
        type: Number,
        default: 1
    },
    delflag: {
        type: Number,
        default: 0
    },
    currentPoint: {
        type: Number,
        default: 0
    },
    teleflag: {
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

let Users;
if (mongoose.models.Users) {
    Users = mongoose.model('Users');
} else {
    Users = mongoose.model('Users', UserSchema);
}

module.exports = Users;