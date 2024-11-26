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
      <styled.h4>{value}</styled.h4>
    </styled.div>
  );
}
