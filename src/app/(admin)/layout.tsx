import type { Metadata } from 'next'
import {useLayoutEffect} from "react";
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title: 'Admin',
  description: '',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  // useLayoutEffect(() => {
  //
  // }, [])
  return (<div className={'admin-body'}>{children}</div>)
}
