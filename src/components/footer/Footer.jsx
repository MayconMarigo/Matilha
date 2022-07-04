import { Grid, Typography } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <footer>
      <Grid
        container
        bgcolor="#161720"
        justifyContent="space-between"
        py={3}
        direction={width < 900 ? "column" : "row"}
        textAlign={width < 900 ? "center" : null}
      >
        <Grid
          container
          item
          xs={12}
          md={"auto"}
          ml={width < 900 ? 0 : 5}
          direction="column"
        >
          <Typography fontWeight={700} fontSize={22} color="#A2A2A6">
            KRAFTON
          </Typography>
          <Typography fontWeight={700} fontSize={12} color="#71746C">
            © 2021 KRAFTON, Inc. All rights reserved
          </Typography>
        </Grid>
        <Grid container item md={7}>
          <nav className="flex flex-1">
            <ul
              className="flex flex-1"
              style={{ flexDirection: width < 900 ? "column" : "row" }}
            >
              <li>
                <a href="#privacyPolicy" target="_blank" rel="noreferrer">
                  <Typography fontSize={14} fontWeight={700} color="#71746C">
                    Privacy Policy
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#terms" target="_blank" rel="noreferrer">
                  <Typography fontSize={14} fontWeight={700} color="#71746C">
                    Terms of Service
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#rules" target="_blank" rel="noreferrer">
                  <Typography fontSize={14} fontWeight={700} color="#71746C">
                    Rules of conduct
                  </Typography>
                </a>
              </li>
              <li className="flex-1">
                <a href="#privacyNotice" target="_blank" rel="noreferrer">
                  <Typography fontSize={14} fontWeight={700} color="#71746C">
                    Privacy Notice for California Residents
                  </Typography>
                </a>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
