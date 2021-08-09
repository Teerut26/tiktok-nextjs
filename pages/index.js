import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/trending");
    let data = res.data;
    setData(data);
  };

  if (!Data) {
    return <></>;
  }

  return (
    <div>
      <Head>
        <title>TOP 100 : Tiktok</title>
        <meta name="description" content="TOP 100 : Tiktok" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css" />
      </Head>

      <div className="container mt-5">
        <div className="row">
          {Data.collector.map((item,index) => (
            <div className="col-sm-3 py-3" key={index}>
              <Card obj={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
