import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// const config = {
//   channelAccessToken: "datydprMce3GFcaXHklpcHwq8c3BmmMz4iaFQxltt/pa+xA2wp4CSWIkOFI0JHzhP8r9qdNkNxDXLnKBZ/wdt64w5E5IloYY7hbjlHrTFQFMm1tl1PKYHrZ/2miuUyn1AbbQ0LgBm4+8fRg25Ypt1QdB04t89/1O/w1cDnyilFU=",
//   channelSecret: "223994e10575dc0425850d87de0b9227"
// };

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

app.post('/webhook', (req, res) => {
  const { body } = req;
  console.log(JSON.stringify(body, null, 2));
  res.status(200).send({ status: 'ok', body });
});

// Version the api
// app.use('/api/v1', api);
