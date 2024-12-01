import { Layout } from "react-admin";
import MenuCustom from "./menu/MenuCustom";
import AppBarCustom from "./appBar/AppBarCustom";
import Header from "./header/Heaer";

const LayoutCustom = (props: any) => {
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
