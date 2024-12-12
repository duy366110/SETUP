import { useEffect } from "react";
import { Layout } from "react-admin";
import { useDispatch } from "react-redux";
import { useMediaQuery, Theme } from "@mui/material";

import { RootDispatch } from "@/store";
import { verifyScreenSize } from "@/store/slice/sliceMediaQuery";
import { usePathUrl } from "@/hooks/usePathUrl";
import MenuCustom from "./menu/MenuCustom";
import AppBarCustom from "./appBar/AppBarCustom";
import Header from "./header/Header";
import { BreadCrumbs } from "@/components/breadcrumbs/BreadCrumbs";

const LayoutCustom = (props: any) => {
  const dispatch = useDispatch<RootDispatch>();
  const { paths } = usePathUrl([]);

  const screenMediaQuery = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );

  useEffect(() => {
    dispatch(verifyScreenSize({ type: "md", value: screenMediaQuery }));
  }, [screenMediaQuery]);

  return (
    <Layout {...props} menu={MenuCustom} appBar={AppBarCustom}>
      <div className="overflow-y-auto h-[100vh] pb-16">
        <Header />

        <div className="mt-16 md:mt-0">
          <BreadCrumbs paths={paths} />
          {props.children}
        </div>
      </div>
    </Layout>
  );
};

export default LayoutCustom;
