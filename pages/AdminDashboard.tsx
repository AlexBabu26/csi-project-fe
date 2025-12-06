import React from 'react';
import { Card } from '../components/ui/Card';
import { MOCK_STATS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Map, CheckCircle, AlertCircle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const districtData = [
    { name: 'Completed', value: MOCK_STATS.completedDistricts, fill: '#7bb13c' },
    { name: 'Remaining', value: MOCK_STATS.totalDistricts - MOCK_STATS.completedDistricts, fill: '#e84646' },
  ];

  const unitData = [
    { name: 'Completed', value: MOCK_STATS.completedUnits },
    { name: 'Remaining', value: MOCK_STATS.totalUnits - MOCK_STATS.completedUnits },
  ];
  
  const COLORS = ['#007faf', '#ffbc34'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-textDark">Dashboard Overview</h1>
        <span className="text-sm text-textMuted">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card noPadding className="border-l-4 border-l-primary flex items-center p-4 transition-transform hover:-translate-y-1">
          <div className="p-3 bg-blue-50 rounded-full mr-4">
            <Map className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textMuted font-medium">Total Districts</p>
            <h3 className="text-2xl font-bold text-textDark">{MOCK_STATS.totalDistricts}</h3>
          </div>
        </Card>

        <Card noPadding className="border-l-4 border-l-success flex items-center p-4 transition-transform hover:-translate-y-1">
           <div className="p-3 bg-green-50 rounded-full mr-4">
            <CheckCircle className="text-success w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textMuted font-medium">Units Completed</p>
            <h3 className="text-2xl font-bold text-textDark">{MOCK_STATS.completedUnits} <span className="text-sm font-normal text-textMuted">/ {MOCK_STATS.totalUnits}</span></h3>
          </div>
        </Card>

        <Card noPadding className="border-l-4 border-l-info flex items-center p-4 transition-transform hover:-translate-y-1">
           <div className="p-3 bg-blue-50 rounded-full mr-4">
            <Users className="text-info w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textMuted font-medium">Total Members</p>
            <h3 className="text-2xl font-bold text-textDark">{MOCK_STATS.totalMembers}</h3>
          </div>
        </Card>

        <Card noPadding className="border-l-4 border-l-warning flex items-center p-4 transition-transform hover:-translate-y-1">
           <div className="p-3 bg-yellow-50 rounded-full mr-4">
            <AlertCircle className="text-warning w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textMuted font-medium">Pending Units</p>
            <h3 className="text-2xl font-bold text-textDark">{MOCK_STATS.totalUnits - MOCK_STATS.completedUnits}</h3>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="District Registration Status">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={districtData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Unit Completion Rate">
          <div className="h-64 w-full flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={unitData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {unitData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 text-sm text-textMuted mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span> Completed
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-warning"></span> Remaining
            </div>
          </div>
        </Card>
      </div>
      
      {/* Top Performing Unit */}
      <Card title="Highlights">
        <div className="p-4 bg-gradient-to-r from-primary to-blue-500 rounded-lg text-white shadow-lg">
           <h4 className="font-semibold text-lg mb-1">Unit with Highest Members</h4>
           <div className="flex justify-between items-end">
              <span className="text-2xl font-bold">{MOCK_STATS.topUnit.name}</span>
              <span className="text-4xl font-bold opacity-30">{MOCK_STATS.topUnit.count}</span>
           </div>
           <p className="text-blue-100 text-sm mt-2">Members Registered</p>
        </div>
      </Card>
    </div>
  );
};