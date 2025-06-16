import "./App.css";
import Clock from "./component/Clock/Clock";
import DataTable from "./component/DataTable/DataTable";
import FileUploader from "./component/FileUploader/FileUploader";
import GreenLight from "./component/GreenLight/GreenLight";
import Otp from "./component/OTP/Otp";
import SelectiveGrid from "./component/SelectiveGrid/SelectiveGrid";
import TrafficSignal from "./component/TrafficSignal/TrafficSignal";
import GymAttendance from "./component/GymAttendance/GymAttendance";

function App() {
  const shape = [
    [true, true, true, true],
    [true, false, false, true],
    [true, false, false, true],
    [true, true, true, true],
  ];
  return (
    <>
      <Clock />
      <GreenLight shapeArray={shape} />
      <DataTable
        columns={["Name", "Age", "City"]}
        data={[
          ["John", 28, "New York"],
          ["Sara", 32, "San Francisco"],
        ]}
      />
      <FileUploader
        accept=".jpg,.png"
        maxSize={5 * 1024 * 1024}
        onUpload={(files) => console.log(files)}
      />
      <Otp length={4} prefilled="1234"/>
      <TrafficSignal/>
      <SelectiveGrid/>
      <GymAttendance/>
    </>
  );
}

export default App;
