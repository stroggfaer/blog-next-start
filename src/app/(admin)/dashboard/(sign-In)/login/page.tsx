import {LoginForm} from "@/app/(admin)/components/widgets/LoginForm";
import style from "./page.module.scss";
import {Metadata} from "next";
import LayoutEmpty from "@/app/(admin)/components/content/Layout/LayoutEmpty";
import { Slot } from "@/common/shared/slot";
import {redirect, useRouter} from "next/navigation";
export const metadata: Metadata = {
  title: 'Login Admin panel',
  description: '',
}
const isAuthenticated = true;

export default function LoginPage() {

    if(isAuthenticated){
       // redirect("/dashboard")
    }
  return (
    <LayoutEmpty>
       {/*<Slot name='content'>345345</Slot>*/}
        <div className={'title'}><h2>Admin panel</h2></div>
        <div className={'center__box'}>
            <LoginForm />
        </div>
    </LayoutEmpty>
  )
}
