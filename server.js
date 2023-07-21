const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();

//the should be two links for the export and in=mport shipping data 

const dbUrl = "mongodb+srv://shobi:MERNapp2023@mernapp.clnurpr.mongodb.net/googlesheetsdb?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Enable CORS
app.use(cors());

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
  }
);


const fromSriLankaRecordsSchema = mongoose.Schema(
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

const importRecordsSchema = mongoose.Schema(
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



const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log("'Server is running on port:'",port);
});




const FromSriLankaRecordsModel = mongoose.model("from_srilanka_records", fromSriLankaRecordsSchema);
//module.exports = FromSriLankaRecordsModel;


app.get("/read", (req, res) => {
  FromSriLankaRecordsModel.find()
    .then((data) => {
      // Extract the countries from the retrieved data
      const countries = data.map((record) => record.country);
      
      // Update the countriesList array with the extracted countries
      countriesList.push(...countries);

      // Add the retrieved data to the jsonDataList array
      exportDataList.push(...data);

      //console.log(exportDataList)
      //console.log(countriesList)
      return res.status(200).send(data);
      
    })
    .catch((err) => {
      console.error("Error reading data from MongoDB:", err);
      return res.status(500).send("Internal Server Error");
    });
  //console.log(exportDataList)
  //console.log(countriesList)
});




//array to store the countries
const importcountriesList = [];

//array to store all export data
const importDataList = [];

const ImportRecordsModel = mongoose.model("import_records", importRecordsSchema);
//module.exports = FromSriLankaRecordsModel;


app.get("/imports", (req, res) => {
  ImportRecordsModel.find()
    .then((data) => {
      // Extract the countries from the retrieved data
      const countries1 = data.map((record) => record.country);
      
      // Update the countriesList array with the extracted countries
      importcountriesList.push(...countries1);

      // Add the retrieved data to the jsonDataList array
      importDataList.push(...data);

      //console.log(exportDataList)
      //console.log(countriesList)
      return res.status(200).send(data);
      
    })
    .catch((err) => {
      console.error("Error reading data from MongoDB:", err);
      return res.status(500).send("Internal Server Error");
    });
  //console.log(importDataList)
  //console.log(importcountriesList)
});


module.exports = {
  countriesList,
  exportDataList,
  FromSriLankaRecordsModel,
  importcountriesList,
  importDataList,
  importRecordsSchema
};

