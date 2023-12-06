import UndergraduateCharts from "./undergraduate_chart";
import CustomPieChart from "./piechart";
import Table from "./table";

const data = [
  { name: 'Computer Science and Engineering', value: 114 },
  { name: 'Electronics and Communication Engineering', value: 108 },
  { name: 'Mechanical Engineering', value: 68 },
  { name: 'Smart Manufacturing', value: 29 },
];
const dualDegreeData = [
    { name: 'B.Tech in Computer Engg. + M.Tech in Computer Engineering', value: 55 },
    { name: 'B.Tech in Electronics Engg. + M.Tech in Signal Processing & Communication System Design', value: 18 },
    { name: 'B.Tech in Electronics Engg. + M.Tech in VLSI & Electronic system Design', value: 29 },
    { name: 'B.Tech in Mechanical Engg. +M.Tech in Product Design', value: 20 },
    { name: 'B.Tech in Mechanical Engg. +M.Tech in Advanced Manufacturing', value: 15 },
  ];
  const postGradMTechData = [
    { name: 'M.Tech. in Computer Science and Engineering with Specialization in Data Science and Artificial Intelligence', value: 7 },
    { name: 'M.Tech. in Electronics and Communication Engineering with Specialization in Communication Systems', value: 5 },
    { name: 'M.Tech. in Electronics and Communication Engineering with Specialization in Microelectronics and VLSI Systems', value: 10 },
    { name: 'M.Tech. in Mechanical Engineering with Specialization in Mechanical Systems Design', value: 1 },
    { name: 'M.Tech. in Mechanical Engineering with Specialization in Smart Manufacturing', value: 2 },
  ];
  const postGradMDesData = [
    { name: 'M. Des in Integrated Product Design', value: 7 },
  ];
  
function Curriculum() {
  return (
    <div className="flex flex-col items-center justify-center p-4">

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl ">Undergraduate Programs -B.Tech - 4 Years </h1>
        <h2 className="text-2xl">(Total: 319 Students)</h2>
        <div className="flex flex-col items-center justify-center">
          <Table data={data} />
          {/* <CustomPieChart data={data} /> */}
        </div>
      </div>
    
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl ">Dual Degree Programs -DD - 5 Years  </h1>
        <h2 className="text-2xl">(Total: 137 Students)</h2>
        <div className="flex flex-col items-center justify-center">
          <Table data={dualDegreeData} />
          {/* <CustomPieChart data={dualDegreeData} /> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl ">Post-Graduation Programs - M.Tech- 2 Years  </h1>
        <h2 className="text-2xl">(Total: 25 Students)</h2>
        <div className="flex flex-col items-center justify-center">
          <Table data={postGradMTechData} />
          {/* <CustomPieChart data={dualDegreeData} /> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl ">Post-Graduation Programs - M Des - 2 Years  </h1>
        <h2 className="text-2xl">(Total: 7 Students)</h2>
        <div className="flex flex-col items-center justify-center">
          <Table data={postGradMDesData} />
          {/* <CustomPieChart data={dualDegreeData} /> */}
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
