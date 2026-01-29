import React from 'react';
import icon from "../../assets/notifications_none.png" 
import profile from "../../assets/Avatar Style 6.png"
import cll from '../../assets/Container (5).png'
import tv from '../../assets/Container (8).png'
import arrow from '../../assets/Container (1).png'
import booked from '../../assets/Container (2).png'
import cross from '../../assets/Container (3).png'
import time from '../../assets/Container (4).png'
import Recahat from './ReChart';

 const Dashboard = () => {
 
    return (
        <div>
          
      {/* outlet */}
      <div className='bg-[#101B43] min-h-screen'>
        {/* card section */}
          <div className='px-5 py-5 grid lg:grid-cols-3 grid-cols-1 gap-3'>
         
          {/* card-1 */}

          <div className=' bg-[#111B3C] border border-gray-500 rounded-lg '>
            <div className='flex justify-between px-4 '>
                  <div className=' flex flex-col justify-center py-6'>
             <p className='text-[14px] text-[#90A1B9]'>Total Calls Today</p>
             <h5 className='text-[30px] text-white'>127</h5>
             <p className='text-[14px] text-[#05DF72]'>+12%</p>
          </div>
          <div className='pt-7'>
            <img src={cll} alt="" />
          </div>
            </div>
        
          </div>
          {/* card-2 */}

          <div className=' bg-[#111B3C] border border-gray-500 rounded-lg '>
            <div className='flex justify-between px-4 '>
                  <div className=' flex flex-col justify-center py-6'>
             <p className='text-[14px] text-[#90A1B9]'>AI-Handled Calls</p>
             <h5 className='text-[30px] text-white'>98</h5>
             <p className='text-[14px] text-[#05DF72]'>+77%</p>
          </div>
          <div className='pt-7'>
            <img src={tv} alt="" />
          </div>
            </div>
        
          </div>
          {/* card-3 */}

          <div className=' bg-[#111B3C] border border-gray-500 rounded-lg '>
            <div className='flex justify-between px-4 '>
                  <div className=' flex flex-col justify-center py-6'>
             <p className='text-[14px] text-[#90A1B9]'>Warm Transfer</p>
             <h5 className='text-[30px] text-white'>23</h5>
             <p className='text-[14px] text-[#05DF72]'>+18%</p>
          </div>
          <div className='pt-7'>
            <img src={arrow} alt="" />
          </div>
            </div>
        
          </div>
          {/* card-4 */}

          <div className=' bg-[#111B3C] border border-gray-500 rounded-lg '>
            <div className='flex justify-between px-4 '>
                  <div className=' flex flex-col justify-center py-6'>
             <p className='text-[14px] text-[#90A1B9]'>Appointments Booked</p>
             <h5 className='text-[30px] text-white'>34</h5>
             <p className='text-[14px] text-[#05DF72]'>+8%</p>
          </div>
          <div className='pt-7'>
            <img src={booked} alt="" />
          </div>
            </div>
        
          </div>
          {/* card-5 */}

          <div className=' bg-[#111B3C] border border-gray-500 rounded-lg '>
            <div className='flex justify-between px-4 '>
                  <div className=' flex flex-col justify-center py-6'>
             <p className='text-[14px] text-[#90A1B9]'>Missed/Failed Calls</p>
             <h5 className='text-[30px] text-white'>6</h5>
             <p className='text-[14px] text-red-600'>-3%</p>
          </div>
          <div className='pt-7'>
            <img src={cross} alt="" />
          </div>
            </div>
        
          </div>
          {/* card-6 */}

          <div className=' bg-[#111B3C] border border-gray-500 rounded-lg '>
            <div className='flex justify-between px-4 '>
                  <div className=' flex flex-col justify-center py-6'>
             <p className='text-[14px] text-[#90A1B9]'>Avg Call Duration</p>
             <h5 className='text-[30px] text-white'>3:42</h5>
             <p className='text-[14px] text-[#05DF72]'>+15%</p>
          </div>
          <div className='pt-7'>
            <img src={time} alt="" />
          </div>
            </div>
        
          </div>
          </div>

          {/* 2nd part */}
        <div className="space-y-6 px-5">
      {/* ================= CHART ================= */}
    <Recahat></Recahat>

      {/* ================= BOTTOM ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        <div className="bg-[#0E1A3A] rounded-2xl p-6 text-white">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <div className="space-y-4 text-[14px]">
            <div className="flex gap-3 items-center px-2 py-2 bg-[#1D293D80] rounded-lg">
              <p className="text-green-400 text-2xl mb-5">
                ● 
              </p>
              <div>
                <p className='text-[14px]'>AI booked appointment for iPhone 13 screen repair</p>
                 <span className="text-xs text-gray-400">2 min ago</span>
              </div>
             
            </div>
            <div className="flex gap-3 items-center px-2 py-2 bg-[#1D293D80] rounded-lg">
              <p className="text-[#FF8904] text-2xl mb-5">
                ● 
              </p>
              <div>
                <p className='text-[14px]'>Warm transfer to technician - Software issue</p>
                 <span className="text-xs text-gray-400">5 min ago</span>
              </div>
             
            </div>
            <div className="flex gap-3 items-center px-2 py-2 bg-[#1D293D80] rounded-lg">
              <p className="text-green-400 text-2xl mb-5">
                ● 
              </p>
              <div>
                <p className='text-[14px]'>AQuote provided for iPad battery replacement</p>
                 <span className="text-xs text-gray-400">8 min ago</span>
              </div>
             
            </div>
            <div className="flex gap-3 items-center px-2 py-2 bg-[#1D293D80] rounded-lg">
              <p className="text-[#FF6467] text-2xl mb-5">
                ● 
              </p>
              <div>
                <p className='text-[14px]'>Call dropped after 12 seconds</p>
                 <span className="text-xs text-gray-400">15 min ago</span>
              </div>
             
            </div>

          
          </div>
        </div>
        <div className="bg-[#0E1A3A] rounded-2xl p-6 text-white">
          <h3 className="font-medium mb-4 text-[20px]">Top Repair Requests</h3>

          <div className="space-y-4 text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span>Screen Repair</span>
                <span className=" text-xs">
                  156 requests
                </span>
              </div>
              <div className="h-2 bg-[#1C2A6B] rounded-full">
                <div className="h-2 w-[85%] bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Battery Replacement</span>
                <span className="text-gray-400">89 requests</span>
              </div>
              <div className="h-2 bg-[#1C2A6B] rounded-full">
                <div className="h-2 w-[55%] bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Back Glass Repair</span>
                <span className="text-gray-400">67 requests</span>
              </div>
              <div className="h-2 bg-[#1C2A6B] rounded-full">
                <div className="h-2 w-[40%] bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Software Issues</span>
                <span className="text-gray-400">45 requests</span>
              </div>
              <div className="h-2 bg-[#1C2A6B] rounded-full">
                <div className="h-2 w-[28%] bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
        </div>
      
    );
};

export default Dashboard;