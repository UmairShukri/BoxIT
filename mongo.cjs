const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dbUrl = "mongodb+srv://shobi:MERNapp2023@mernapp.clnurpr.mongodb.net/googlesheetsdb?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//array to store the countries
const countriesList = [];
//array to store all export data
const exportDataList = [];

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
    firstKg: {
      type: Number,
      required: true,
    },
    additionalKg: {
      type: Number,
      required: true,
    },
    tenKg: {
      type: Number,
      required: true,
    },
  }
);

const FromSriLankaRecordsModel = mongoose.model("from_srilanka_records", fromSriLankaRecordsSchema);
module.exports = FromSriLankaRecordsModel;

app.get("/read", (req, res) => {
  FromSriLankaRecordsModel.find()
    .then((data) => {
      // Extract the countries from the retrieved data
      const countries = data.map((record) => record.country);
      
      // Update the countriesList array with the extracted countries
      countriesList.push(...countries);

      // Add the retrieved data to the jsonDataList array
      exportDataList.push(...data);

      console.log(exportDataList)
      console.log(countriesList)
      return res.status(200).send(data);
      
    })
    .catch((err) => {
      console.error("Error reading data from MongoDB:", err);
      return res.status(500).send("Internal Server Error");
    });
});

// Export the countriesList array and export data
module.exports = {
  countriesList,
  exportDataList,
};

