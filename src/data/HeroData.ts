import { binance, tether} from "@/components/icons";

import { FC } from 'react';


interface Icons {
    icon: FC; 
    href: string;
  }

  interface HeroData {
    Icons: Icons[];
  }
const HeroData: HeroData = {

    Icons: [
        { icon: binance, href: "#" },
        { icon: tether, href: "#" },
    ]

}  


export default HeroData