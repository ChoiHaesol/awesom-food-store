import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const Index = () => {
  // branch test
  return (
    <Layout>
      <div className="font">
        <h1>Awesome food Store</h1>
      </div>
      <Container maxWidth="sm">
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6}>
            <Link href="/about">
              <Button variant="outlined" color="primary" fullWidth>
                ABOUT
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="/store">
              <Button variant="contained" color="primary" fullWidth>
                STORE
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>

      <style jsx>{`
        .font {
          font-family: "Bebas Neue", cursive;
          text-align: center;
          font-size: 3rem;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
