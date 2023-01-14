import 'dotenv/config';

import { connect } from "mongoose";

const MONGO_URI = process.env.MONGO_DB as string;

const connection = connect(MONGO_URI);

export default connection;