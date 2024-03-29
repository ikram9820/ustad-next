import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import OrderStatusFilter from "./OrderStatusFilter";

const OrderActions = () => {
  return (
    <Flex justify="between">
      <OrderStatusFilter />
    </Flex>
  );
};

export default OrderActions;
