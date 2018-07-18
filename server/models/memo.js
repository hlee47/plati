import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Memo = new Schema({
  writer: String,
  contents: String,
  is_edited: { type: Boolean, default: false },
  date: {
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now }
  },
  starred: [String],
});

export default mongoose.model('memo', Memo);
