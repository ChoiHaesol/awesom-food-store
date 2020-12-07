import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const About = () => {
  const txt =
    "200개의 컨테이너로 구성된 국내 최대 컨테이너 팝업 쇼핑몰 커먼그라운드에서는\n색다른 쇼핑의 재미와 다양한 미식 브랜드들을 만나보실 수 있습니다.\n젊고 유니크한 CULTURE를 향유하는 YOUTH를 위한 복합문화공간,\n커먼그라운드에서 기존의 쇼핑몰에서 느낄 수 없었던 다채로운 즐거움을 경험해보세요.";

  return (
    <Layout>
      <Container>
        <div className="font">
          <h1>about</h1>
        </div>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          paragraph
        >
          <span style={{ whiteSpace: "pre-line" }}>{txt}</span>
        </Typography>
      </Container>

      <style jsx>{`
        .font {
          font-family: "Bebas Neue", cursive;
          text-align: center;
          font-size: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default About;
