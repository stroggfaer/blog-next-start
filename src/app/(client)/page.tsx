import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import {Metadata} from "next";
import {HomeWg} from "@/app/(client)/components/widget/home";
// SSR;
// export const metadata: Metadata = {
//     title: 'Услуги',
//     description: 'Описание услуги',
// }

export default function Home() {
  return (
    <LayoutClient>
        <HomeWg />
    </LayoutClient>
  )
}
