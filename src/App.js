import "./App.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Timer from "./Components/Timer";
import Stopwatch from "./Components/Stopwatch";

function App() {
  return (
    <div className="App">
      <Tabs isFitted variant="enclosed" className="main">
        <TabList mb="1em" >
          <Tab className="timer">Timer</Tab>
          <Tab className="stopwatch">Stopwatch</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
                      <Timer/>
          </TabPanel>
          <TabPanel>
                      <Stopwatch/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
