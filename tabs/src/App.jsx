import Tabs from "./components/tabs/Tabs.jsx";


const App = () => {

    const myTabs = [
        {tabNo: "Tab 1", tabText: "Tab 1 content is showing here."},
        {tabNo: "Tab 2", tabText: "Tab 2 content is showing here."},
        {tabNo: "Tab 3", tabText: "Tab 3 content is showing here."}
    ]

    return (
        <div>
            <Tabs tabs={myTabs} />
        </div>
    )
}

export default App;