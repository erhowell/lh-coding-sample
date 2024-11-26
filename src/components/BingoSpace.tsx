"use client";

import { useEffect } from "react";
import { styled } from "styled-system/jsx";

export default function BingoSpace({
  value,
  marked,
}: {
  value: string | number;
  marked: boolean;
}) {
  return (
    <styled.div
      w="full"
      bg={marked ? "red.200" : "transparent"}
      textAlign="center"
    >
      <styled.h3 py="0.5" textStyle="h4">
        {value}
      </styled.h3>
    </styled.div>
  );
}
