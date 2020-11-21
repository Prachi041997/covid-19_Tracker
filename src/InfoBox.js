import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed,caseType, ...props }) {
  console.log(caseType);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox${caseType}`}
    >
      <CardContent>
        <Typography className={`typo${caseType}`} gutterBottom>
          {title}
        </Typography>
        <h2 className={`typoData${caseType}`}>
          {cases}
        </h2>

        <Typography className={`typoTotal${caseType} typototalMargin`} >
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
