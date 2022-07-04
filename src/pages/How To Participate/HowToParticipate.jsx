import { Grid, Typography } from "@mui/material";

import UserSymbol from "../../assets/images/user-symbol.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import IceQueen from "../../assets/images/ice-queen.png";

import ScreenDivider from "../../assets/images/event-screen-divider.png";
import HowToParticipateDivider from "../../assets/images/how-to-participate-divider.png";

import "./HowToParticipate.styles.css";
import DefaultButton from "../../components/button/Button";

const HowToParticipate = () => {
  const { width } = useWindowDimensions();

  const steps = [
    {
      content: "Login to your PUBG Account",
      button: true,
    },
    {
      content: "Link your gaming Account",
      button: false,
    },
    {
      content: "Enter Sweepstakes",
      button: false,
    },
  ];

  return (
    <section id="howToParticipate">
      <Grid container pb={width < 900 ? 8 : 23}>
        <Grid
          item
          container
          md={12}
          className="bg"
          minHeight={14}
          sx={{
            backgroundImage: `url(${ScreenDivider})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 3,
          }}
        />
        <Grid
          className="bg"
          position={"absolute"}
          sx={{
            backgroundImage: `url(${UserSymbol})`,
          }}
          height={300}
          width={width < 900 ? 200 : 300}
          zIndex={0}
        />
        <Grid
          item
          zIndex={3}
          pl={width < 900 ? 5 : 18}
          pt={width < 900 ? 3 : 8}
        >
          <Typography color="#F2A900" fontSize={24} fontFamily="League Gothic">
            VIKENDI WONDERLAND GIVEAWAY
          </Typography>
          <Typography
            mt={-2}
            fontSize={width < 900 ? 50 : 57}
            fontFamily="League Gothic"
          >
            HOW TO PARTICIPATE
          </Typography>
        </Grid>

        <Grid
          container
          item
          sm={12}
          px={width < 900 ? 5 : 18}
          zIndex={3}
          mt={width < 900 ? 7 : 8}
        >
          {steps.map((step, index) => {
            return (
              <Grid
                item
                container
                alignItems="center"
                sm={12}
                md={10}
                pl={width < 900 ? 0 : 5}
                key={index}
                pb={3}
                pt={step.button ? 0 : width < 900 ? 3 : 4}
                borderBottom="2px solid #878787"
              >
                <Grid
                  container
                  item
                  md={7}
                  direction={width < 900 ? "column" : "row"}
                  alignItems={width < 900 ? "left" : "center"}
                >
                  <Typography
                    color="#F2A900"
                    fontSize={20}
                    fontFamily="League Gothic"
                  >
                    {`STEP ${index + 1}`}
                  </Typography>
                  <Typography ml={width < 900 ? 0 : 5} fontWeight={700}>
                    {step.content}
                  </Typography>
                </Grid>
                {step.button ? (
                  <Grid
                    container
                    item
                    md={5}
                    mt={width < 900 ? 2 : 0}
                    justifyContent={width < 900 ? "flex-start" : "flex-end"}
                  >
                    <DefaultButton width={"176px"} height="48px" text="LOGIN" />
                  </Grid>
                ) : null}
              </Grid>
            );
          })}
          {width < 900 ? null : (
            <img
              src={IceQueen}
              style={{
                position: "absolute",
                right: "10%",
                marginTop: "-28px",
                height: "45%",
              }}
              alt=""
            />
          )}
        </Grid>
      </Grid>
      <Grid
        className="bg"
        item
        md={12}
        height={31}
        sx={{
          backgroundImage: `url(${HowToParticipateDivider})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default HowToParticipate;
