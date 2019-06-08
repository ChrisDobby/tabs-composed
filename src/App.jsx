import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TabSpecialized from "./TabSpecialized";
import Tab from "./Tab";
import TabContentSpecialized from "./TabContentSpecialized";
import TabContent from "./TabContent";

export default () => {
    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
    return (
        <div className="App container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link${selectedTabIndex === 0 ? " active" : ""}`}
                        onClick={() => setSelectedTabIndex(0)}
                    >
                        Tab 1
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link${selectedTabIndex === 1 ? " active" : ""}`}
                        onClick={() => setSelectedTabIndex(1)}
                    >
                        Tab 2
                    </button>
                </li>
                <TabSpecialized
                    text="Tab 3"
                    selected={selectedTabIndex === 2}
                    onSelect={() => setSelectedTabIndex(2)}
                />
                <Tab text="Tab 4" selected={selectedTabIndex === 3} onSelect={() => setSelectedTabIndex(3)}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Tab>
            </ul>

            <div className="tab-content">
                {selectedTabIndex === 0 && (
                    <>
                        <h2>Tab 1</h2>
                        <p>Some content for the first tab</p>
                    </>
                )}
                {selectedTabIndex === 1 && (
                    <>
                        <h2>Tab 2</h2>
                        <p>Some content for the second tab</p>
                    </>
                )}
                {selectedTabIndex === 2 && (
                    <TabContentSpecialized header="Tab 3" paragraph="Some content for the third tab" />
                )}
                {selectedTabIndex === 3 && (
                    <TabContent header="Tab 4" className="tab4-content">
                        <div className="tab4-content">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>This tab can contain anything.</p>
                        </div>
                    </TabContent>
                )}
            </div>
        </div>
    );
};
