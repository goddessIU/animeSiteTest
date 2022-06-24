import React from "react";
import { Col, Layout, Row } from "antd";
import styles from "./Header.module.css";

const { Header: HeaderAntd } = Layout;

export const Header = () => {
  return (
    <>
      <HeaderAntd>
        <Row>
          <Col span={18}>
            <h1 className={styles["header-title"]}>动漫小窝</h1>
          </Col>
          <Col span={6}>
            <h3 className={styles["header-title"]}>我会长大的</h3>
          </Col>
        </Row>
      </HeaderAntd>
    </>
  );
};
