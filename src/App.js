import React, { useState, useEffect } from "react";
import Menu from "antd/lib/menu";
import Layout from "antd/lib/layout";
import Input from "antd/lib/input";
import { SearchOutlined } from "@ant-design/icons";
import { MdNaturePeople, MdBusinessCenter, MdHistory } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { BsPeopleFill, BsFilm } from "react-icons/bs";
import { RiHealthBookFill } from "react-icons/ri";
import "./App.css";
import "antd/dist/antd.css";
import ImagesMasonry from "./containers/ImageMasonry/ImagesMasonry";
import SearchSomething from "./containers/SearchSomething/SearchSomething";
import logo from "./images/logo.png";
import smallLogo from "./images/smallLogo.png";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState("");

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 850) {
      setCollapsed(true);
    } else if (width >= 1000) {
      setCollapsed(false);
    }
  }, [width]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        {collapsed ? (
          <div className="smallLogo">
            <img src={smallLogo} alt="smallLogo" />
          </div>
        ) : (
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        )}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            icon={<MdNaturePeople />}
            onClick={() => setSearch("Nature")}
          >
            Nature
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<MdBusinessCenter />}
            onClick={() => setSearch("Business")}
          >
            Business
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<MdHistory />}
            onClick={() => setSearch("History")}
          >
            History
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<SiProbot />}
            onClick={() => setSearch("Technology")}
          >
            Technology
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<BsPeopleFill />}
            onClick={() => setSearch("People")}
          >
            People
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<BsFilm />}
            onClick={() => setSearch("Movie")}
          >
            Movie
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={<RiHealthBookFill />}
            onClick={() => setSearch("Health")}
          >
            Health
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Header>
        <Content style={{ margin: "16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {search !== "" ? (
              <ImagesMasonry search={search} />
            ) : (
              <SearchSomething />
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "white" }}>
          Intern Unsplash Application
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
