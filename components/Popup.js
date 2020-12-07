import {
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const paperStyle = {
  padding: "16px",
  marginTop: "100px",
};

const cardStyle = {
  marginBottom: "48px",
};

const CardMediaStyle = {
  paddingTop: "100%",
};

const Popup = (props) => {
  const {store} = props;
    return (
    <Container maxWidth="md">
      <Paper style={paperStyle}>
        <div style={{ float: "right" }}>
          <IconButton onClick={props.onClose}>
            <Close />
          </IconButton>
        </div>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6}>
            <Card style={cardStyle}>
              <CardMedia
                style={CardMediaStyle}
                image={store.image}
                title={store.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>{store.name}</h1>
            <span style={{ whiteSpace: "pre-line" }}>{store.description}</span>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Popup;
