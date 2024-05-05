'use client'
import React from "react";
import {Pagination,PaginationProps} from "@nextui-org/pagination";
import { useRouter } from 'next/navigation'

export default function ClientPagination(props:PaginationProps) {
  const router = useRouter()
  
  return (
    <Pagination {...props} onChange={(page) => {router.push(`/publish/list/${page}`)}}   />
  );
}
