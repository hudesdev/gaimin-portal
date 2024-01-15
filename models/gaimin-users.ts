import mongoose from 'mongoose'

export interface Users extends mongoose.Document {
    alias: string,
    name: string,
    email: string,
    walletAddress: string,
    twitterId: string,
    imgSRC: string,
    followers: number,
    accountCreated: Date,
    shardAmount: number,
    delflag: boolean,
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
    },
    shardAmount: {
        type: Number,
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
})


let Users;
if (mongoose.models.Users) {
    Users = mongoose.model('Users');
} else {
    Users = mongoose.model('Users', UserSchema);
}

module.exports = Users;