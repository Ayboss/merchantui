import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.static('dist'));

// app.use('/assets',express.static(path.join(__dirname, "./dist","assets"), {extensions: ["js"]}));
console.log(__dirname);


// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});