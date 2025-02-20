import express, { Request, Response} from 'express';
import Routes from "./router/Routes";
import connectDB from './Db/db';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({origin:"*"}));
 connectDB();
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",Routes);
app.get('/test', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to TypeScript Express Server!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
