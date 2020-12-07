import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Popup from "../components/Popup";

const cardGridStyle = {
  paddingTop: "64px",
  paddingBottom: "64px",
};

const cardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const cardMediaStyle = {
  paddingTop: "100%", // 16:9
};

const Store = (props) => {
  const [open, setopen] = useState(false);
  const [store, setstore] = useState({});

  const onImgClick = (obj) => {
    setopen(true);
    setstore(obj);
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <div>
      <Layout>
        <Container maxWidth="sm">
          <div className="font">
            <h1>store</h1>
          </div>
        </Container>
        <Container style={cardGridStyle} maxWidth="md">
          <Grid container spacing={4}>
            {props.stores.map((card, index) => (
              <Grid item key={index} xs={6} sm={4} md={3}>
                <Card style={cardStyle} onClick={() => onImgClick(card)}>
                  <CardMedia
                    style={cardMediaStyle}
                    image={card.thumb}
                    title={card.name}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Modal open={open}>
          <Popup onClose={handleClose} store={store} />
        </Modal>

        <style jsx>{`
          .font {
            font-family: "Bebas Neue", cursive;
            text-align: center;
            font-size: 2rem;
          }
        `}</style>
      </Layout>
    </div>
  );
};

Store.getInitialProps = async function () {
  const response = await axios.get("http://localhost:9000/stores");
  return {
    stores: response.data,
  };
};

export default Store;
