//MaterialUI
import { Grid, Typography } from "@mui/material";
//imports
import AboutCharacters from "../../assets/images/about-characters.png";
import EventDivider from "../../assets/images/event-divider.png";
import DefaultButton from "../../components/button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
//styles
import "./AboutEvent.styles.css";
const AboutEvent = () => {
  const { width } = useWindowDimensions();

  return (
    <section id="about">
      <Grid
        bgcolor="black"
        container
        item
        md={12}
        mt={width < 900 ? -7 : -3}
        pt={10}
        direction={width < 900 ? "column-reverse" : "row"}
      >
        <Grid
          container
          item
          ml={width < 900 ? -4 : 0}
          md={6}
          mt={width < 900 ? 4 : 0}
          className="bg"
          minHeight={width < 900 ? width : ""}
          sx={{
            backgroundImage: `url(${AboutCharacters})`,
            backgroundSize: width < 900 ? "" : "100%",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid xs={12} item md={6} p={width < 900 ? 2 : 7}>
          <Grid pt={width < 900 ? 0 : 5}>
            <Typography
              color="#F2A900"
              fontSize={width < 900 ? 21 : 24}
              fontFamily="League Gothic"
            >
              VIKENDI WONDERLAND GIVEAWAY
            </Typography>
            <Typography
              color="#FFFFFF"
              fontSize={width < 900 ? 48 : 57}
              fontFamily="League Gothic"
            >
              ABOUT THE EVENT
            </Typography>
          </Grid>
          <Grid>
            <img src={EventDivider} width={width < 900 ? "80%" : ""} alt="" />
          </Grid>
          <Grid mt={3} item md={10}>
            <main
              className="main-content"
              style={{ fontSize: width < 900 ? 14 : "" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ipsum,
              cursus habitasse eu a, ac aliquet habitant eu. Maecenas tincidunt
              duis scelerisque varius vel elementum nascetur aliquet. Nibh risus
              leo non onvallis dolor quis gravida pretium, consequat. Sit sed et
              erat dui. Feugiat tellus ipsum amet nisl elit suspendisse cras
              mattis.
              <br />
              <br /> Pellentesque nisl bibendum feugiat adipiscing quisque velit
              mauris. Amet pellentesque amet eleifend pulvinar tincidunt.
              Convallis neque consectetur massa ipsum.
            </main>
          </Grid>
          <Grid mt={3}>
            <Typography className="rules-text">
              <a href="rules">SEE THE OFICIAL RULES</a>
            </Typography>
          </Grid>
          <Grid mt={4}>
            <DefaultButton
              height={"48px"}
              text="LOGIN OR CREATE ACCOUNT"
              padding="0 15px"
            />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutEvent;
