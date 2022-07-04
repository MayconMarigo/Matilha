//MaterialUI
import { Grid } from "@mui/material";

//imports
import HeroBackground from "../../assets/images/hero-background.png";
import HeroBackgroundMobile from "../../assets/images/hero-background-mobile.png";
import DefaultButton from "../../components/button/Button";
//hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

//styles
import "./VikendiWonderland.styles.css";

const VikendiWonderland = () => {
  const { width } = useWindowDimensions();

  return (
    <section id="hero" style={{ marginBottom: width < 900 ? 0 : 13 }}>
      {width < 900 ? null : (
        <Grid container item xs={12} position="absolute" mt="31%" pl={"13%"}>
          <DefaultButton
            width="16%"
            height="5vh"
            fontSize="0.8vw"
            text="LOGIN OR CREATE ACCOUNT"
          />
        </Grid>
      )}
      <img
        src={width < 900 ? HeroBackgroundMobile : HeroBackground}
        width="100%"
        alt=""
      />
      {width < 900 ? (
        <Grid container item xs={12} mt={-13} mb={7} justifyContent="center">
          <DefaultButton
            width="60%"
            height={width < 900 ? "50px" : "5vh"}
            fontSize="12px"
            text="LOGIN OR CREATE ACCOUNT"
          />
        </Grid>
      ) : null}
    </section>
  );
};

export default VikendiWonderland;
