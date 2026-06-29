import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroller = document.querySelector(".overflow-y-auto");
    if (scroller) scroller.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
