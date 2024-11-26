import { Grid, GridItem, styled } from "styled-system/jsx";
import BingoBall from "./BingoBall";

export default function PreviousCalls({ balls, callIdx }) {
  return (
    <styled.div>
      <styled.h5 textStyle="h5" w="full" pb="2">
        Previous Calls
      </styled.h5>
      <Grid
        columns={[5, null, null, 2]}
        gap="2"
        alignItems="center"
        justifyItems="center"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => {
          if (callIdx - idx < 0) {
            return null;
          }
          return (
            <GridItem
              colSpan={1}
              key={`previous-ball-${idx}`}
              py="1"
              alignSelf="center"
            >
              <BingoBall ball={balls[callIdx - idx]} ballSize="sm" />
            </GridItem>
          );
        })}
      </Grid>
    </styled.div>
  );
}
