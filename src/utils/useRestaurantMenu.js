import { useEffect, useState } from "react";
import { Menu_Url } from "./constant";


function useRestaurantMenu(resId) {
const [listMenu, setListMenu] = useState(null)

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(Menu_Url + 
          resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setListMenu(json?.data);
      };

  return listMenu
}

export default useRestaurantMenu