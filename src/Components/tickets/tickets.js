import { Layout, Menu } from "antd";
import { Routes, Route } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import Logo1 from "../../Images/overview.svg";
import Logo2 from "../../Images/tickets.svg";
import Logo3 from "../../Images/ideas.svg";
import Logo4 from "../../Images/contacts.svg";
import Logo5 from "../../Images/agents.svg";
import Logo6 from "../../Images/articles.svg";
import Logo7 from "../../Images/settings.svg";
import Logo8 from "../../Images/subscription.svg";
import OverviewLink from "../../Overview/Overview";
import AllTickets from "../AllTickets/AllTickets";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Sider>
        <Menu defaultSelectedKeys={["dashboard"]} mode="inline" className="py-[20px] bg-[#363740] min-h-[100%]">
          <Menu.Item key="dashboard">
            <Link to="/">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Dashboard Kit
              </h2>
            </div>
            </Link>
          </Menu.Item>
          <div className="mb-[30px]"></div>
          <Menu.Item key="Overview">
            <Link to="/Overview">
              <div className="flex items-center gap-1">
                <img src={Logo1} alt="logo" />
                <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                  Overview
                </h2>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="Tickets">
            <Link to="/Tickets" className="flex items-center gap-6">
              <img src={Logo2} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Tickets
              </h2>
            </Link>
          </Menu.Item>
          <Menu.Item key="Ideas">
            <Link to="/Ideas" className="flex items-center gap-6">
              <img src={Logo3} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Ideas
              </h2>
            </Link>
          </Menu.Item>
          <Menu.Item key="Contacts">
            <Link to="/Contacts" className="flex items-center gap-6">
              <img src={Logo4} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Contacts
              </h2>
            </Link>
          </Menu.Item>
          <Menu.Item key="Agents">
            <Link to="/Agents" className="flex items-center gap-6">
              <img src={Logo5} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Agents
              </h2>
            </Link>
          </Menu.Item>
          <Menu.Item key="Articles">
            <Link to="/Articles" className="flex items-center gap-6">
              <img src={Logo6} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Articles
              </h2>
            </Link>
          </Menu.Item>
          <hr className="mt-[34px] mb-[34px]" />
          <Menu.Item key="Settings">
            <Link to="/Settings" className="flex items-center gap-6">
              <img src={Logo7} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Settings
              </h2>
            </Link>
          </Menu.Item>
          <Menu.Item key="Subscription">
            <Link to="/Subscription" className="flex items-center gap-6">
              <img src={Logo8} alt="logo" />
              <h2 className="text-[#A4A6B3] text-[15px] opacity-70 tracking-[0.4px]">
                Subscription
              </h2>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content className="p-[20px]">
          <Routes>
            <Route path="/"/>
            <Route path="/Overview" element={<OverviewLink />} />
            <Route path="/Tickets" element={<AllTickets />} />
            <Route path="/Ideas"/>
            <Route path="/Contacts"/>
            <Route path="/Agents"/>
            <Route path="/Articles"/>
            <Route path="/Settings"/>
            <Route path="/Subscription"/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
