const express = require('express');
const app = express();
const port = 8080;

// app.use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.get('/notecards', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json([
      {
        title: "React notes",
        questionText: "How does useState work?",
        answerText: "Allows you to set a value on a views state.  When that value is updated the view is rerendered."
      },
    ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})