import React, { useState } from "react";
import styles from "./Tab.module.css";

const Tabs = ({ children }) => {
  console.log({ children });

  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map(tab => {
          const label = tab.props.label;
          return (
            <li
              className={label == activeTab ? styles.current : ""}
              key={label}
            >
              <a
                href="#"
                onClick={e => {
                  changeTab(e, label);
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {children.map(one => {
        if (one.props.label == activeTab)
          return (
            <div key={one.props.label} className={styles.content}>
              {one.props.children}
            </div>
          );
      })}
    </div>
  );
};

export default Tabs;
