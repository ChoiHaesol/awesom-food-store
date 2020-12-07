import Layout from "../components/Layout";
import Router from "next/router";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const contentStyle = {
  padding: "64px 0 48px",
};

const Custom404 = () => {
  useEffect(() => {
    setTimeout(function () {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <Layout>
      <Container maxWidth="md" style={contentStyle}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          페이지를 찾을 수 없습니다.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          paragraph
        >
          5초후 메인페이지로 이동합니다...
        </Typography>
      </Container>
    </Layout>
  );
};

export default Custom404;
