import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Tab1 } from "./comp/tab1"
import Tab2 from "./comp/tab2"

export default function App() {
  return (
    <div>
      <Tabs variant='soft-rounded' colorScheme='blue' style={{ margin: '10px' }}>
        <TabList>
          <Tab>헬로</Tab>
          <Tab>쇼핑</Tab>
          <Tab>3번탭</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Tab1 />
          </TabPanel>
          <TabPanel>
            <Tab2 />
          </TabPanel>
          <TabPanel>
            <div>뭐해보지?</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}