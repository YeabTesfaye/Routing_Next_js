import { Metadata } from "next";
import { Fragment, ReactNode } from "react";

export const metadata: Metadata = {
  title: "News Detail | NextNews",
  description: "Read the full details of the latest news on NextNews.",
};
interface Props {
  modal: ReactNode;
  children: ReactNode;
}
const NewsDetailLayout = ({ children, modal }: Props) => {
  return (
    <Fragment>
      {modal}
      {children}
    </Fragment>
  );
};

export default NewsDetailLayout;
