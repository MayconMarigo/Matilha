//MaterialUI
import { Grid, Typography } from "@mui/material";
//imports
import PrizeBox1 from "../../assets/images/prize-box-1.png";
import PrizeBox2 from "../../assets/images/prize-box-2.png";
import Divider from "../../assets/images/event-rewards-divider.png";
import PubgLogo from "../../assets/images/event-rewards-PUBG-logo.png";

//custom hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

const EventRewards = () => {
  const { width } = useWindowDimensions();

  return (
    <section>
      <Grid
        container
        bgcolor="black"
        p={width < 900 ? 2 : 8}
        pt={width < 900 ? 12 : 15}
        pb={width < 900 ? 6 : 0}
        mt={width < 900 ? -3 : 0}
      >
        <Grid item md={12} px={width < 900 ? 0 : 10} id="rewards">
          <Typography color="#F2A900" fontSize={24} fontFamily="League Gothic">
            VIKENDI WONDERLAND GIVEAWAY
          </Typography>
          <Typography
            mt={-2}
            color="#FFFFFF"
            fontSize={width < 900 ? 50 : 57}
            fontFamily="League Gothic"
          >
            THE EVENT REWARDS
          </Typography>
          <Grid item lg={5} md={7} mt={width < 900 ? 1 : 0}>
            <Typography color="#FFFFFF">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ipsum,
              cursus habitasse eu a, ac aliquet habitant eu. Maecenas tincidunt
              duis scelerisque varius vel elementum.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={12}
          mt={width < 900 ? 3 : -14}
          px={width < 900 ? 0 : 10}
          id="prize"
        >
          {width > 900 ? (
            <Grid
              container
              item
              xs={10.8}
              className="bg"
              position="absolute"
              minHeight={280}
              mt={9}
              sx={{
                backgroundImage: `url(${PubgLogo})`,
                backgroundSize: "32%",
                backgroundPosition: "right",
              }}
            />
          ) : null}
          <Grid
            item
            xs={12}
            md={6}
            className="bg"
            ml={width < 900 ? -1 : 0}
            minHeight={width < 900 ? width : width / 2}
            sx={{
              backgroundImage: `url(${PrizeBox1})`,
              backgroundSize: width < 900 ? "110%" : "100%",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            md={6}
            className="bg"
            zIndex={2}
            ml={width < 900 ? -1 : 0}
            minHeight={width < 900 ? width : width / 2}
            mt={width < 900 ? -2 : 20}
            sx={{
              backgroundImage: `url(${PrizeBox2})`,
              backgroundSize: width < 900 ? "110%" : "100%",
              backgroundPosition: "center",
            }}
          />
          {width < 900 ? (
            <Grid
              container
              item
              xs={12}
              md={6}
              className="bg"
              minHeight={120}
              mt={-7}
              sx={{
                backgroundImage: `url(${PubgLogo})`,
                backgroundSize: "60%",
                backgroundPosition: "right center",
              }}
            />
          ) : null}
        </Grid>
        <Grid
          item
          md={12}
          mt={-(width / 90)}
          className="bg"
          minHeight={100}
          sx={{
            backgroundImage: `url(${Divider})`,
          }}
        />
      </Grid>
    </section>
  );
};

export default EventRewards;
