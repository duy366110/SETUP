import { useTranslate } from "react-admin";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NumberRegex } from "@/constants/Regexs";

export const usePathUrl = (skips: Array<string>) => {
  const t = useTranslate();
  const location = useLocation();
  const [paths, setPaths] = useState<Array<any>>([]);

  useEffect(() => {
    let pathname = location.pathname;
    let path = "";

    if (pathname.length) {
      if (pathname.includes("?")) {
        path = pathname.split("?")[0];
      }

      if(skips.length) {
        const regex = new RegExp(skips.join('|'), 'g');
        path = pathname.replace(regex, ' ');
      }
      let result = path? path : pathname;
      let resultList = result.split("/").filter((path: any) => path.trim());

      let resultPath = resultList.map((key: string, index) => {
        const link = "/" + resultList.slice(0, index + 1).join("/");
        const obj: any = {
            link: link,
            name: NumberRegex.test(key) ? key : t(`breadcrumb.${key}`),
            icon: "",
        };
    
        if (index === 0) {
            obj.first = true;
        }
    
        if (index === resultList.length - 1) {
            obj.last = true;
        }
    
        return obj;
    });

      setPaths(resultPath);
    }
  }, [location.pathname]);

  return {
    paths,
  };
};
