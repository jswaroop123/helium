import {Hono} from "hono"
import { serve } from "@hono/node-server";

const app = new Hono();
// const rand:number[]=[];
// app.get("/generate",(c)=>{
// const rn = Math.random();
// rand.push(rn);
// return c.json({random:rn},200);
// });

// const time=new Date();
// app.get("/time", (c) => {
//     return c.json({ time },200);
//   });

// const environment:string[]= [];
// app.get("/environment", (c) => {   
//     const platform = process.platform; 
//     const environment=process.version
//     return c.json({environment,platform}, 200); 
// }
// );

// const pup:string[]=[];
// app.get("/puppet",(C)=>{
//   const name = C.req.query();
//   return C.json(`puppet name ${name}`,200);
// });
 const randomNumber : number[] = [];
// app.post("/storenumber", async(c) => {
//     const body=await c.req.json();
//     const number = body.number;   
//     randomNumber.push(number);
//     return c.json({number}, 200); 
// }
// );





app.post("/storenumber", async (c) => {
  const body = await c.req.json();
  const number = body.number;

  if (typeof number !== "number") {
    return c.json({ error: "Invalid number" }, 400);
  }

  randomNumber.push(number);
  
  return c.json({ lastEnteredNumber: number });
});

app.get("/storenumber", (c) => {
  return c.json({ allNumbers: randomNumber });
});


serve(app);
