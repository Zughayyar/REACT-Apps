import React from "react";

const Tabs = (props) => {
    const [displayText, setDisplayText] = React.useState('')
    const handleTabClick = (tabText) => {
        setDisplayText(tabText);
    }

    return (
        <div>
            <h1>My Tabs</h1>
            <div style={{ display: "flex", borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
                {
                    props.tabs.map((tab, i) => (
                        <button onClick={() => handleTabClick(tab.tabText)}
                                key={i}
                                style={{
                                    padding: "10px 20px",
                                    border: "none",
                                    borderBottom: displayText === tab.tabText ? "3px solid black" : "none",
                                    backgroundColor: displayText === tab.tabText ? "black" : "white",
                                    color: displayText === tab.tabText ? "white" : "black",
                                    cursor: "pointer",
                                }}>
                            {tab.tabNo}
                        </button>
                    ))
                }
            </div>
            <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}>
                {displayText}
            </div>
        </div>
    )
}

export default Tabs;