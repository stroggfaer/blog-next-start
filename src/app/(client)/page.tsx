import {Metadata} from "next";
import dynamic from "next/dynamic";
import {HomeWg} from "@/app/(client)/components/widget/home";
import {SpinContent} from "@/app/(client)/components/ui/SpinContent";
const LayoutClient = dynamic(() => import('@/app/(client)/components/content/Layout/LayoutClient'), {
    loading: () => SpinContent(),
}) // Lazy Loading

// SSR;
// export const metadata: Metadata = {
//     title: 'Услуги',
//     description: 'Описание услуги',
// }
//     Create new scratch file from selection
const HomePage = () => {
  return (
    <LayoutClient>
        <HomeWg />
    </LayoutClient>
  )
}

export default HomePage;
