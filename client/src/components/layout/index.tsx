import { Layout as AntLayout } from "antd";
import { Header } from "../header";
import style from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={style.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};
