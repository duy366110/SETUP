import { useEffect } from "react";
import { Layout } from "react-admin";
import { useDispatch } from "react-redux";
import { useMediaQuery, Theme } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import { RootDispatch } from "@/store";
import { verifyScreenSize } from "@/store/slice/sliceMediaQuery";
import { toggleMode } from "@/store/slice/sliceMode";
import { usePathUrl } from "@/hooks/usePathUrl";
import MenuCustom from "./menu/MenuCustom";
import AppBarCustom from "./appBar/AppBarCustom";
import Header from "./header/Header";
import { BreadCrumbs } from "@/components/Breadcrumbs/BreadCrumbs";


const LayoutCustom = (props: any) => {
  const dispatch: any = useDispatch<RootDispatch>();
  const { paths } = usePathUrl([]);
  const theme = useTheme();

  const screenMediaQuery = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );

  useEffect(() => {
    dispatch(verifyScreenSize({ type: "md", value: screenMediaQuery }));
  }, [screenMediaQuery]);

  useEffect(() => {
    dispatch(toggleMode({mode: theme.palette.mode}))
  }, [theme])

  return (
    <Layout {...props} menu={MenuCustom} appBar={AppBarCustom}>
      <div className="overflow-y-auto h-[100vh] pb-16">
        <Header />

        <div className="mt-16 md:mt-0 pl-2 lg:pl-4">
          <BreadCrumbs paths={paths} />
          {props.children}
        </div>
      </div>
    </Layout>
  );
};

export default LayoutCustom;
