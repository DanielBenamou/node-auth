require("dotenv").config();
import express from "express";
import { createConnection, getRepository } from "typeorm";
import { routes } from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { User } from "./entity/user.entity";

//Express server , creating the server
const app = express();
//Response the data in json
app.use(express.json());
//This code sets up a piece of middleware in the express application to parse HTTP cookies.
// HTTP cookies are small pieces of data that are stored in a user's web browser
// and sent back to the server with each request. They are commonly used to store information such as session identifiers,
// user preferences, and more.Ω
app.use(cookieParser());

//CORS is a security feature that blocks web browsers from making requests to a server that is hosted on a different domain.
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
    credentials: true,
  })
);


createConnection().then(async () => {
  // Retrieve data from the database
  const userRepository = getRepository("User");
  const users = await userRepository.find();
  // Create an API endpoint to return the data
  app.get("/api/users", (req, res) => {
    res.send(users);
  });
  //  Product Solo: Sales>Sales Managment
  const userRepository2 = getRepository("product_solo");
  const users2 = await userRepository2
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Sales management" }
    )
    .getMany();
  app.get("/api/sales-management", (req, res) => {
    res.send(users2);
  });
  //  Product Solo: Sales>Account Managment
  const userRepository3 = getRepository("product_solo");
  const users3 = await userRepository3
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Account management" }
    )
    .getMany();
  app.get("/api/account-management", (req, res) => {
    res.send(users3);
  });
  //  Product Solo: Sales>Customer Success Manager
  const userRepository4 = getRepository("product_solo");
  const users4 = await userRepository4
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Customer Success Manager" }
    )
    .getMany();
  app.get("/api/customer-success", (req, res) => {
    res.send(users4);
  });

    //  Product Solo: Sales>Sales Enablment
    const userRepository1 = getRepository("product_solo");
    const users1 = await userRepository1
      .createQueryBuilder("product_solo")
      .where(
        "product_solo.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: Sales Enablement" }
      )
      .getMany();
    app.get("/api/Product_Solo_Sales_Sales_Enablement", (req, res) => {
      res.send(users1);
    });

  //  Product Solo: RnD>DevOps
  const userRepository5 = getRepository("product_solo");
  const users5 = await userRepository5
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: DevOps" }
    )
    .getMany();
  app.get("/api/devops", (req, res) => {
    res.send(users5);
  });
  //  Product Solo: RnD>Software Engineer
  const userRepository6 = getRepository("product_solo");
  const users6 = await userRepository6
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Software Engineer" }
    )
    .getMany();
  app.get("/api/software-engineer", (req, res) => {
    res.send(users6);
  });
  //  Product Solo: RnD>FE | FS | BE Developer
  const userRepository7 = getRepository("product_solo");
  const users7 = await userRepository7
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: FE | FS | BE Developer" }
    )
    .getMany();
  app.get("/api/fullstack", (req, res) => {
    res.send(users7);
  });

  //  Product Solo: RnD>QA
  const userRepository8 = getRepository("product_solo");
  const users8 = await userRepository8
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: QA" }
    )
    .getMany();
  app.get("/api/qa", (req, res) => {
    res.send(users8);
  });

  //  Product Solo: RnD>RnD General
  const userRepository9 = getRepository("product_solo");
  const users9 = await userRepository9
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: RnD General" }
    )
    .getMany();
  app.get("/api/rnd-general", (req, res) => {
    res.send(users9);
  });

   //  Product Overview
  const userRepository10 = getRepository("product_overview");
  const users10 = await userRepository10.find()
  app.get("/api/overview", (req, res) => {
    res.send(users10);
  });
 
  //Product Spend: Sales>Sales Managment

  const userRepository11 = getRepository("product_spend");
  const users11 = await userRepository11
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Sales management" }
    )
    .getMany();
  app.get("/api/Product_Spend_Sales_Sales_Managment", (req, res) => {
    res.send(users11);
  });

  //Product Spend: Sales>Account Managment
  const userRepository12 = getRepository("product_spend");
  const users12 = await userRepository12
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Account management" }
    )
    .getMany();
  app.get("/api/Product_Spend_Sales_Account_Managment", (req, res) => {
    res.send(users12);
  });

   //Product Spend: Sales>Customer Success Manager
    const userRepository13 = getRepository("product_spend");
    const users13 = await userRepository13
      .createQueryBuilder("product_spend")
      .where(
        "product_spend.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: Customer Success Manager" }
      )
      .getMany();
    app.get("/api/Product_Spend_Sales_Customer_Success", (req, res) => {
      res.send(users13);
    });
  
  //Product Spend: Sales>Sales Enablement
        const userRepository14 = getRepository("product_spend");
        const users14 = await userRepository14
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Sales Enablement" }
          )
          .getMany();
        app.get("/api/Product_Spend_Sales_Sales_Enabelment", (req, res) => {
          res.send(users14);
        });

  //Product Spend: RnD>DevOps
        const userRepository15 = getRepository("product_spend");
        const users15 = await userRepository15
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: DevOps" }
          )
          .getMany();
        app.get("/api/product_spend_devops", (req, res) => {
          res.send(users15);
        });

  //Product Spend: RnD>Software Engineer
        const userRepository16 = getRepository("product_spend");
        const users16 = await userRepository16
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Software Engineer" }
          )
          .getMany();
        app.get("/api/product_spend_software_engineer", (req, res) => {
          res.send(users16);
        });

  //Product Spend: RnD>FE|FS|BE devaloper
        const userRepository17 = getRepository("product_spend");
        const users17 = await userRepository17
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: FE | FS | BE Developer" }
          )
          .getMany();
        app.get("/api/product_spend_FE_FS_BE_developer", (req, res) => {
          res.send(users17);
        });

   //Product Spend: RnD>QA
        const userRepository18 = getRepository("product_spend");
        const users18 = await userRepository18
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: QA" }
          )
          .getMany();
        app.get("/api/product_spend_QA", (req, res) => {
          res.send(users18);
        });

  //Product Spend: RnD>RnD General
        const userRepository19 = getRepository("product_spend");
        const users19 = await userRepository19
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: RnD General" }
          )
          .getMany();
        app.get("/api/product_spend_RnD_General", (req, res) => {
          res.send(users19);
        });

  //Product Solo: Marketing>Product Marketing Manger
  const userRepository20 = getRepository("product_solo");
  const users20 = await userRepository20
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Product Marketing Manger" }
    )
    .getMany();
  app.get("/api/Product_Solo_Marketing_Product_Marketing_Manger", (req, res) => {
    res.send(users20);
  });

  //Product Solo: Marketing>Field Marketing
  const userRepository21 = getRepository("product_solo");
  const users21 = await userRepository21
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Field | Event Marketing" }
    )
    .getMany();
  app.get("/api/Product_Solo_Marketing_Field_Marketing", (req, res) => {
    res.send(users21);
  });

  //Product Solo: Marketing>SDR_BDR_MIR
  const userRepository22 = getRepository("product_solo");
  const users22 = await userRepository22
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: SDR | BDR | MIR" }
    )
    .getMany();
  app.get("/api/Product_Solo_Marketing_SDR_BDR_MIR", (req, res) => {
    res.send(users22);
  });

  
  //Product Solo: Marketing>User_Acquisition
  const userRepository23 = getRepository("product_solo");
  const users23 = await userRepository23
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: User Acquisition" }
    )
    .getMany();
  app.get("/api/Product_Solo_Marketing_User_Acquisition", (req, res) => {
    res.send(users23);
  });

  //Product Solo: HR>HRBP
  const userRepository24 = getRepository("product_solo");
  const users24 = await userRepository24
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: HRBP" }
    )
    .getMany();
  app.get("/api/Product_Solo_HR_HRBP", (req, res) => {
    res.send(users24);
  });

  //Product Solo: HR>Talent_Acquisition
  const userRepository25 = getRepository("product_solo");
  const users25 = await userRepository25
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Talent Acquisition" }
    )
    .getMany();
  app.get("/api/Product_Solo_HR_Talent_Acquisition", (req, res) => {
    res.send(users25);
  });

    //Product Solo: HR>HR_General
    const userRepository26 = getRepository("product_solo");
    const users26 = await userRepository26
      .createQueryBuilder("product_solo")
      .where(
        "product_solo.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: HR General" }
      )
      .getMany();
    app.get("/api/Product_Solo_HR_HR_General", (req, res) => {
      res.send(users26);
    });

      //Product Solo: HR>HR_Office
  const userRepository27 = getRepository("product_solo");
  const users27 = await userRepository27
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: HR Office" }
    )
    .getMany();
  app.get("/api/Product_Solo_HR_HR_Office", (req, res) => {
    res.send(users27);
  });

      //Product Solo: Finance>Finance and Accounting
      const userRepository28 = getRepository("product_solo");
      const users28 = await userRepository28
        .createQueryBuilder("product_solo")
        .where(
          "product_solo.job_title_classification = :job_title_classification",
          { job_title_classification: "Class: Finance | Accounting" }
        )
        .getMany();
      app.get("/api/Product_Solo_Finance_Finance", (req, res) => {
        res.send(users28);
      });

      //Product Solo: Finance>FP&A
  const userRepository29 = getRepository("product_solo");
  const users29 = await userRepository29
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: FPnA" }
    )
    .getMany();
    app.get("/api/Product_Solo_Finance_FPnA", (req, res) => {
    res.send(users29);
  });

      //Product Solo: Finance>Legal
        const userRepository30 = getRepository("product_solo");
        const users30 = await userRepository30
          .createQueryBuilder("product_solo")
          .where(
            "product_solo.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Legal" }
          )
          .getMany();
        app.get("/api/Product_Solo_Finance_Legal", (req, res) => {
          res.send(users30);
        });

              //Product Solo: Ops>HR Operations
  const userRepository31 = getRepository("product_solo");
  const users31 = await userRepository31
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: HR Operations" }
    )
    .getMany();
  app.get("/api/Product_Solo_Ops_HR_Operations", (req, res) => {
    res.send(users31);
  });

              //Product Solo: Ops>Operations General
        const userRepository32 = getRepository("product_solo");
        const users32 = await userRepository32
          .createQueryBuilder("product_solo")
          .where(
            "product_solo.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Operations General" }
          )
          .getMany();
          app.get("/api/Product_Solo_Ops_Operations_General", (req, res) => {
          res.send(users32);
        });

              //Product Solo: Ops>Product Operations
  const userRepository33 = getRepository("product_solo");
  const users33 = await userRepository33
    .createQueryBuilder("product_solo")
    .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Product Operations" }
    )
    .getMany();
    app.get("/api/Product_Solo_Ops_Product_Operations", (req, res) => {
    res.send(users33);
  });

         //Product Solo: Ops>Project | Program manager
    const userRepository34 = getRepository("product_solo");
    const users34 = await userRepository34
     .createQueryBuilder("product_solo")
       .where(
      "product_solo.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Project | Program manager" }
     )
      .getMany();
      app.get("/api/Product_Solo_Ops_Project_managment", (req, res) => {
     res.send(users34);
   });

    //Product Solo: Ops>Sales Operations
    const userRepository35 = getRepository("product_solo");
    const users35 = await userRepository35
           .createQueryBuilder("product_solo")
           .where(
             "product_solo.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Sales Operations" }
           )
           .getMany();
          app.get("/api/Product_Solo_Ops_Sales_Operations", (req, res) => {
           res.send(users35);
        });

    //Product Solo: Product>Product designer
    const userRepository36 = getRepository("product_solo");
    const users36 = await userRepository36
       .createQueryBuilder("product_solo")
       .where(
         "product_solo.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: Product designer" }
       )
       .getMany();
      app.get("/api/Product_Solo_Product_Product_Design", (req, res) => {
       res.send(users36);
    });

    //Product Solo: Product>Product manager
    const userRepository37 = getRepository("product_solo");
    const users37 = await userRepository37
       .createQueryBuilder("product_solo")
       .where(
         "product_solo.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: Product manager" }
       )
       .getMany();
       app.get("/api/Product_Solo_Product_Product_Manager", (req, res) => {
       res.send(users37);
    });


    //Product Spend: Product>Product designer
    const userRepository38 = getRepository("product_spend");
    const users38 = await userRepository38
       .createQueryBuilder("product_spend")
       .where(
         "product_spend.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: Product designer" }
       )
       .getMany();
      app.get("/api/Product_Spend_Product_Product_Design", (req, res) => {
       res.send(users38);
    });

    //Product Spend: Product>Product manager
    const userRepository39 = getRepository("product_spend");
    const users39 = await userRepository39
       .createQueryBuilder("product_spend")
       .where(
         "product_spend.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: Product manager" }
       )
       .getMany();
       app.get("/api/Product_Spend_Product_Product_Manager", (req, res) => {
       res.send(users39);
    });

  //Product Spend: Marketing>Product Marketing Manger
  const userRepository40 = getRepository("product_spend");
  const users40 = await userRepository40
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Product Marketing Manger" }
    )
    .getMany();
  app.get("/api/Product_Spend_Marketing_Product_Marketing_Manger", (req, res) => {
    res.send(users40);
  });

  //Product Spend: Marketing>Field Marketing
  const userRepository41 = getRepository("product_spend");
  const users41 = await userRepository41
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Field | Event Marketing" }
    )
    .getMany();
  app.get("/api/Product_Spend_Marketing_Field_Marketing", (req, res) => {
    res.send(users41);
  });

  //Product Spend: Marketing>SDR_BDR_MIR
  const userRepository42 = getRepository("product_spend");
  const users42 = await userRepository42
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: SDR | BDR | MIR" }
    )
    .getMany();
  app.get("/api/Product_Spend_Marketing_SDR_BDR_MIR", (req, res) => {
    res.send(users42);
  });

  
  //Product Spend: Marketing>User_Acquisition
  const userRepository43 = getRepository("product_spend");
  const users43 = await userRepository43
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: User Acquisition" }
    )
    .getMany();
  app.get("/api/Product_Spend_Marketing_User_Acquisition", (req, res) => {
    res.send(users43);
  });

  //Product Spend: HR>HRBP
  const userRepository44 = getRepository("product_spend");
  const users44 = await userRepository44
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: HRBP" }
    )
    .getMany();
  app.get("/api/Product_Spend_HR_HRBP", (req, res) => {
    res.send(users44);
  });

  //Product Spend: HR>Talent_Acquisition
  const userRepository45 = getRepository("product_spend");
  const users45 = await userRepository45
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Talent Acquisition" }
    )
    .getMany();
  app.get("/api/Product_Spend_HR_Talent_Acquisition", (req, res) => {
    res.send(users45);
  });

    //Product Spend: HR>HR_General
    const userRepository46 = getRepository("product_spend");
    const users46 = await userRepository46
      .createQueryBuilder("product_spend")
      .where(
        "product_spend.job_title_classification = :job_title_classification",
        { job_title_classification: "Class: HR General" }
      )
      .getMany();
    app.get("/api/Product_Spend_HR_HR_General", (req, res) => {
      res.send(users46);
    });

      //Product Spend: HR>HR_Office
  const userRepository47 = getRepository("product_spend");
  const users47 = await userRepository47
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: HR Office" }
    )
    .getMany();
  app.get("/api/Product_Spend_HR_HR_Office", (req, res) => {
    res.send(users47);
  });

      //Product Spend: Finance>Finance and Accounting
      const userRepository48 = getRepository("product_spend");
      const users48 = await userRepository48
        .createQueryBuilder("product_spend")
        .where(
          "product_spend.job_title_classification = :job_title_classification",
          { job_title_classification: "Class: Finance | Accounting" }
        )
        .getMany();
      app.get("/api/Product_Spend_Finance_Finance", (req, res) => {
        res.send(users48);
      });

      //Product Spend: Finance>FP&A
  const userRepository49 = getRepository("product_spend");
  const users49 = await userRepository49
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: FPnA" }
    )
    .getMany();
    app.get("/api/Product_Spend_Finance_FPnA", (req, res) => {
    res.send(users49);
  });

      //Product Spend: Finance>Legal
        const userRepository50 = getRepository("product_spend");
        const users50 = await userRepository50
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Legal" }
          )
          .getMany();
        app.get("/api/Product_Spend_Finance_Legal", (req, res) => {
          res.send(users50);
        });

      //Product Spend: Ops>HR Operations
  const userRepository51 = getRepository("product_spend");
  const users51 = await userRepository51
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: HR Operations" }
    )
    .getMany();
  app.get("/api/Product_Spend_Ops_HR_Operations", (req, res) => {
    res.send(users51);
  });

        //Product Spend: Ops>Operations General
        const userRepository52 = getRepository("product_spend");
        const users52 = await userRepository52
          .createQueryBuilder("product_spend")
          .where(
            "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Operations General" }
          )
          .getMany();
          app.get("/api/Product_Spend_Ops_Operations_General", (req, res) => {
          res.send(users52);
        });

       //Product Spend: Ops>Product Operations
  const userRepository53 = getRepository("product_spend");
  const users53 = await userRepository53
    .createQueryBuilder("product_spend")
    .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Product Operations" }
    )
    .getMany();
    app.get("/api/Product_Spend_Ops_Product_Operations", (req, res) => {
    res.send(users53);
  });

         //Product Spend: Ops>Project | Program manager
    const userRepository54 = getRepository("product_spend");
    const users54 = await userRepository54
     .createQueryBuilder("product_spend")
       .where(
      "product_spend.job_title_classification = :job_title_classification",
      { job_title_classification: "Class: Project | Program manager" }
     )
      .getMany();
      app.get("/api/Product_Spend_Ops_Project_managment", (req, res) => {
     res.send(users54);
   });

    //Product Spend: Ops>Sales Operations
    const userRepository55 = getRepository("product_spend");
    const users55 = await userRepository55
           .createQueryBuilder("product_spend")
           .where(
             "product_spend.job_title_classification = :job_title_classification",
            { job_title_classification: "Class: Sales Operations" }
           )
           .getMany();
          app.get("/api/Product_Spend_Ops_Sales_Operations", (req, res) => {
           res.send(users55);
        });

});


routes(app);
app.listen(8000, () => {
  console.log("connect to the Localhost server on port 8000");
});
// });
