//materialUI
import { Grid, Typography } from "@mui/material";

//hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

//components
import DefaultButton from "../button/Button";

//styles
import "./Header.styles.css";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="main-page-header flex flex-1">
      <Grid container item p={3} pl={width < 900 ? 2 : 7} xs={6} md={9}>
        <div className="bg-image" />
        <nav className="flex">
          <ul className="flex">
            <li>
              <a href="#about" className="semi-bold">
                <Typography fontSize={14}>ABOUT THE EVENT</Typography>
              </a>
            </li>
            <li>
              <a href="#rewards" className="semi-bold">
                <Typography fontSize={14}>REWARDS</Typography>
              </a>
            </li>
            <li>
              <a href="#howToParticipate" className="semi-bold">
                <Typography fontSize={14}>ACCOUNT</Typography>
              </a>
            </li>
          </ul>
        </nav>
      </Grid>
      <Grid
        container
        item
        pr={width < 900 ? 0 : 8}
        alignItems="center"
        justifyContent={width < 900 ? "space-evenly" : "flex-end"}
        xs={6}
        md={3}
      >
        <DefaultButton
          text={width < 900 ? "LOG IN" : "LOGIN TO EARN REWARDS"}
          width={width < 900 ? "50%" : "210px"}
          height={"58px"}
        />
        <div className="globe-image" />
      </Grid>
    </header>
  );
};

export default Header;
