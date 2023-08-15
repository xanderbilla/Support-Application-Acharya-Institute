import { useState } from "react";
import styles from "../styles/Content.module.css";
import { tabs } from "../static/tabs";
import TabContent from "./TabContent";
import { api, aws, containers, frontend, git, java, jenkins, mongodb } from "../static/data";

const Contents = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.tab_header}>
        {tabs.map((tab) => (
          <button
            className={activeTab === tab.id ? styles.active : ""}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles["tab-content"]}>
        {activeTab === 1 && <TabContent data={git}/>}
        {activeTab === 2 && <TabContent data={aws}/>}
        {activeTab === 3 && <TabContent data={jenkins}/>}
        {activeTab === 4 && <TabContent data={frontend}/>}
        {activeTab === 5 && <TabContent data={java}/>}
        {activeTab === 6 && <TabContent data={mongodb}/>}
        {activeTab === 7 && <TabContent data={containers}/>}
        {activeTab === 8 && <TabContent data={api}/>}
      </div>
    </div>
  );
};
export default Contents;
