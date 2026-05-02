import mongoose from "mongoose";
import dns from 'dns'


dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
const connectDB = async (url) => {
    if (!url) {
        console.error('URL is missing or undefined')
    }
    try {
        await mongoose.connect(url)
        console.log('Connected to the DB')
    } catch (err) {
        console.error(err)
    }
}


export default connectDB;