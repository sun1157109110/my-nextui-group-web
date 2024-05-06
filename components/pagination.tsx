"use client";
import React from "react";
import { Pagination, PaginationProps } from "@nextui-org/pagination";
import { useRouter } from "next/navigation";
type ClientPaginationProps = PaginationProps & {
  prefix: string;
};
export default function ClientPagination(props: ClientPaginationProps) {
  const router = useRouter();

  return (
    <Pagination
      {...props}
      onChange={(page) => {
        router.push(`${props.prefix}${page}`);
      }}
    />
  );
}
