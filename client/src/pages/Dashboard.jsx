import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie, 
  PieChart,
} from 'recharts';
const fakeChartData = [
  { month: 'Jan', movement: 120 },
  { month: 'Feb', movement: 200 },
  { month: 'Mar', movement: 150 },
  { month: 'Apr', movement: 300 },
  { month: 'May', movement: 260 },
  { month: 'Jun', movement: 180 },
];
const fakePieData = [
  { name: 'Weapons', value: 1200 },
  { name: 'Vehicles', value: 500 },
  { name: 'Ammunition', value: 650 },
  { name: 'Assigned', value: 1200 },
  { name: 'Unassigned', value: 150 },
  { name: 'Damaged', value: 700 },
  { name: 'Under Maintenance', value: 450 },
];
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Military Asset Dashboard</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-blue-600 text-2xl font-semibold">Opening Balance</p>
          <h2 className="text-2xl text-gray-700 font-semibold">2,350</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className=" text-2xl font-semibold text-blue-600">Closing Balance</p>
          <h2 className="text-2xl font-semibold text-gray-700">2,410</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-blue-600 text-2xl font-semibold">Net Movement</p>
          <h2 className="text-2xl text-gray-700 font-semibold">+60</h2> {/*no event listener yet*/}
        </div>
      </div>

      {/* ReChartjs */}
      <div className="bg-gray-800 rounded-xl p-1 mb-8">
        <h3 className="text-lg font-semibold mb-2">Movement Overview</h3>
        <div className="h-64 bg-black rounded-md p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={fakeChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="movement" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* car vehicle etc*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-xl p-2">
          <h4 className="text-md font-semibold mb-2 text-left">Total Assets Breakdown</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
                <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={fakePieData.slice(0, 3)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#2563eb"
                    stroke="#1f2937"
                    strokeWidth={3}
                    label
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>               
            </div>
          <ul className="text-sm text-gray-300 space-y-1 text-left font-semibold">
            <li>Weapons: 1,200</li>
            <li>Vehicles: 500</li>
            <li>Ammunition: 650</li>
        </ul>
        </div>
         </div>
         <div className="bg-gray-800 rounded-xl p-2">
          <h4 className="text-md text-left font-semibold mb-2">Assignment Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
                <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={fakePieData.slice(3)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#2563eb"
                    stroke="#1f2937"
                    strokeWidth={3}
                    label
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="text-sm text-gray-300 space-y-1 text-left font-semibold ">
                <li>Assigned: 1,200</li>
                <li>Unassigned: 150</li>
                <li>Damaged: 700</li>
                <li>Under Maintainance: 450</li>
            </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;