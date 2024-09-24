console.log("Function started");
// Your logic here
console.log("Before async call");
const result = await someAsyncFunction();
console.log("After async call");
res.status(200).json(result);

// Page Home
app.get("/", (req, res) => {
    res.send('SERVER ON')
})

// ZingMp3Router
const ZingMp3Router = require("./src/routes/ZingRouter")
app.use("/api", cors({ origin: '*' }), ZingMp3Router)

// Page Error
app.get("*", (req, res) => {
    res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});
