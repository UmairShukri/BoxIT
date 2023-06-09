const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dbUrl = "mongodb+srv://shobi:MERNapp2023@mernapp.clnurpr.mongodb.net/googlesheetsdb?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, connectionParams)
  .then(() => {
    console.info("connected");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

app.listen(3000, () => {
  console.log("listening");
});

const fromSriLankaRecordsSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      trim: true,
    },
  }
);

const FromSriLankaRecordsModel = mongoose.model("from_srilanka_records", fromSriLankaRecordsSchema);
module.exports = FromSriLankaRecordsModel;

app.get("/read", (req, res) => {
  FromSriLankaRecordsModel.find()
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((err) => {
      console.error("Error reading data from MongoDB:", err);
      return res.status(500).send("Internal Server Error");
    });
});
