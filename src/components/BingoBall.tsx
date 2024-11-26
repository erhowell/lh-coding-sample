import { cva, RecipeVariantProps, sva } from "styled-system/css";
import { Box, Flex, styled } from "styled-system/jsx";

const bingoBallTheme = sva({
  slots: ["root", "inner", "column", "value"],
  base: {
    root: { w: "fit-content", p: [4, 6], borderRadius: "full" },
    inner: {
      bg: "white",
      borderRadius: "full",
    },
  },
  variants: {
    column: {
      B: {
        root: { bg: "bingo.blue" },
      },
      I: {
        root: { bg: "bingo.red" },
      },
      N: {
        root: { bg: "bingo.white" },
      },
      G: {
        root: { bg: "bingo.green" },
      },
      O: {
        root: { bg: "bingo.yellow" },
      },
    },
    size: {
      sm: {
        root: { p: "3" },
        inner: {
          width: "10",
          height: "10",
        },
        column: { textStyle: "h6" },
        value: { textStyle: "h5" },
      },
      lg: {
        root: { p: "6" },
        inner: {
          width: "20",
          height: "20",
        },
        column: { textStyle: "h4" },
        value: { textStyle: "h3" },
      },
    },
  },
});
export type BallVariants = RecipeVariantProps<typeof bingoBallTheme>;

export default function BingoBall({
  ball,
  ballSize,
}: {
  ball: BingoBall;
  ballSize?: "sm" | "lg";
}) {
  const classes = bingoBallTheme({ column: ball.column, size: ballSize });
  return (
    <styled.div className={classes.root}>
      <Flex
        className={classes.inner}
        align="center"
        justify="center"
        flexDir="column"
      >
        <Box textAlign="center">
          <styled.h4 className={classes.column}>{ball.column}</styled.h4>
          <styled.h3 className={classes.value}>{ball.value}</styled.h3>
        </Box>
      </Flex>
    </styled.div>
  );
}
