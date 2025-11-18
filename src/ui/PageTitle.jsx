import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const map = {
      "/dashboard": "The Wild Oasis | Dashboard",
      "/bookings": "The Wild Oasis | Bookings",
      "/cabins": "The Wild Oasis | Cabins",
      "/users": "The Wild Oasis | Users",
      "/settings": "The Wild Oasis | Settings",
    };

    document.title = map[pathname] || "The Wild Oasis";
  }, [pathname]);

  return null;
}

export default PageTitle;
