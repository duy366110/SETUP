import { useEffect } from "react";
import { Layout } from "react-admin";
import { useDispatch } from "react-redux";
import { useMediaQuery, Theme } from "@mui/material";

import { RootDispatch } from "@/store";
import { verifyScreenSize } from "@/store/slice/sliceMediaQuery"
import MenuCustom from "./menu/MenuCustom";
import AppBarCustom from "./appBar/AppBarCustom";
import Header from "./header/Header";

const LayoutCustom = (props: any) => {
  const dispatch = useDispatch<RootDispatch>();

  const screenMediaQuery = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );

  useEffect(() => {
    dispatch(verifyScreenSize({type: "md", value: screenMediaQuery}));
  }, [screenMediaQuery])

  return (
    <Layout {...props} menu={MenuCustom} appBar={AppBarCustom}>
      <div className="overflow-y-auto h-[100vh] pb-16">
        <Header />
        {props.children}
      </div>
    </Layout>
  );
};

export default LayoutCustom;
