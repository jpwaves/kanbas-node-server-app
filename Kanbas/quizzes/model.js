import mongoose from "mongoose";
import quizSchema from "./schema.js";
const quizModel = mongoose.model("QuizzesModel", quizSchema);
export default quizModel;