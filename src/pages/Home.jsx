
import React from 'react';
import { ListTodo } from 'lucide-react';

const Home = () => {
  const pendingApprovals = [
    { title: 'Pending Approvals', count: 6 },
    { title: 'Pending Requests', count: 3 },
    { title: 'Pending Expenses', count: 5 },
    { title: 'Pending Invoices', count: 2 },
    { title: 'Pending Reports', count: 4 },
  ];

  return (
    <div className="flex gap-[20px] flex-wrap border-2 bg-[#202020] m-auto rounded-2xl mt-15 p-2">
      {/* Main Card */}
      <div className="grow border-2  bg-[#3F3E3E] h-50 w-95 mt-5 text-[#2AB6A5] ">
        {/* Pending Approvals List */}
        <div className="bg-[#3F3E3E] p-4 rounded-lg">
          {pendingApprovals.map((item, index) => (
            <section key={index} className="flex justify-between items-center p-3 border-b border-gray-600 last:border-none">
              <div className="flex items-center gap-2 text-white">
                <ListTodo className="text-[#2AB6A5]" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-white font-bold">{item.count}</p>
            </section>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
     <div className="grow border-2 bg-[#3F3E3E] h-50 w-95 mt-5">2</div>
  <div className="w-full border-2 bg-[#3F3E3E] h-40">3</div>
  <div className="grow border-2 bg-[#3F3E3E] h-60">4</div>
    </div>
  );
};

export default Home;
