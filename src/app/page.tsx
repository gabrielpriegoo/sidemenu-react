"use client";
import { useState } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCircle } from "react-icons/md";
import { TbClockHour2 } from "react-icons/tb";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

interface SideMenuProps {
  image?: string;
  collapsed?: boolean;
  toggled?: boolean;
  handleToggleSidebar?: () => void;
  handleCollapsedChange?: () => void;
}

const Items = [
  {
    title: "Administrador",
    to: "/",
    icon: <FaTachometerAlt />,
  },
];

const Home = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
}: SideMenuProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid grid-cols-[auto,1fr] min-h-screen">
      <header className="col-span-2 bg-[#E5E5E5] p-4 h-[70px]">Header</header>
      <aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`h-screen w-[260px] bg-[#E5E5E5] transition-all duration-300 user-select-none ${
          expanded ? "w-[260px]" : "w-[90px]"
        }`}
      >
        <Sidebar
          image={image}
          collapsed={collapsed || !expanded}
          toggled={toggled}
          onToggle={handleToggleSidebar}
          breakPoint="md"
          className="user-select-none"
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                if (level === 0)
                  return {
                    color: disabled ? "#000" : "#000",
                    backgroundColor: active ? "#3866E5" : undefined,
                  };
              },
            }}
          >
            <MenuItem icon={<TbClockHour2 />}>Apontamentos de Horas</MenuItem>
            <SubMenu label={"Configurações"} icon={<IoSettingsOutline />}>
              <SubMenu label={Items[0].title} icon={<MdOutlineCircle />}>
                <MenuItem icon={<MdOutlineCircle />}>Grupos</MenuItem>
                <MenuItem icon={<MdOutlineCircle />}>Usuários</MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sidebar>
      </aside>
      <main className="max-h-screen flex justify-center items-center bg-gray-100">
        <h1>content</h1>
      </main>
    </div>
  );
};

export default Home;
