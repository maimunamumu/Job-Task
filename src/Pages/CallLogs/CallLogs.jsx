import React from 'react';
import callIcon from '../../assets/Container (9).png'
import icon1 from '../../assets/Icon (1).png'
import icon2 from '../../assets/Icon (2).png'
import { BiPlayCircle } from 'react-icons/bi';
import fileIcon from '../../assets/Icon (5).png'

const CallLogs = () => {
    const data = [
  {
    status: "AI Resolved",
    color: "bg-green-500/20",
    border: "border border-green-500",
    tag: "Screen",
  },
  {
    status: "Warm Transfer",
    color: "bg-amber-500/20",
    border: "border border-amber-500",
    tag: "Software",
  },
  {
    status: "Appointment",
    color: "bg-blue-500/20",
    border: "border border-blue-500",
    tag: "Battery",
  },
  {
    status: "Dropped",
    color: "bg-rose-500/20",
    border: "border border-rose-500",
    tag: "Unknown",
  },
  {
    status: "AI Resolved",
    color: "bg-emerald-500/20",
    border: "border border-emerald-500",
    tag: "Screen",
  },
];

    return (
    
    <div className="min-h-screen bg-[#060C2C] text-white px-4 sm:px-6 py-5">

      {/* ================= TOP BAR ================= */}
      <div className="flex flex-col lg:flex-row gap-3 mb-5">
        <input
          placeholder="Search by phone number, issue type..."
          className="w-full h-[44px] rounded-lg bg-[#0B1438] border border-[#1E2D6B] px-4 text-sm placeholder:text-[#7C88B5] focus:outline-none focus:ring-1 focus:ring-blue-600"
        />

        <div className="flex gap-3">
          {["All Type", "All Issues", "Today"].map((item) => (
            <button
              key={item}
              className="h-[44px] px-4 rounded-lg bg-[#0B1438] border border-[#1E2D6B] text-sm text-[#C7D2FE] whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid lg:grid-cols-9 grid-cols-1 bg-[#0B1438]">

        {/* ================= CALL LIST ================= */}
        <div className="bg-[#0B1438] rounded-xl p-4 col-span-4">
          <p className="text-lg font-medium mb-4">Call List</p>

          <div className="space-y-3">
          {data.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-[#0E1A4A] border border-[#1A2A6C] rounded-lg p-3"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-xs">
                 <img className='' src={callIcon} alt="" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    +1 (555) 345-6789
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    2025-12-16 • 09:42 AM
                  </p>

                  <div className="flex items-center gap-4 whitespace-nowrap mt-1">
  <p className="flex items-center gap-1 text-xs text-[#94A3B8]">
    <img className="w-4 h-4" src={icon1} alt="" />
    <span>5:23</span>
  </p>

  <p className="flex items-center gap-1 text-xs text-[#94A3B8]">
    <img className="w-4 h-4" src={icon2} alt="" />
    <span>Quote Provided</span>
  </p>

  <span className="text-[11px] px-2 py-0.5 rounded bg-[#13276A] text-[#51A2FF] hidden lg:block">
    {item.tag}
  </span>
</div>
                </div>

              <span
  className={`text-[11px] h-fit px-2.5 py-0.5 rounded-full ${item.color} ${item.border}`}
>
  {item.status}
</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CALL DETAILS ================= */}
      <div className=" rounded-2xl  p-5 text-white shadow-lg col-span-5">

      {/* header */}
      <h2 className="text-lg font-semibold mb-4">Call Details</h2>

      {/* grid */}
      <div className="grid grid-cols-2 gap-y-4 text-white/80 gap-x-6 text-sm mb-5">
        <div>
          <p className="text-white/50 mb-1">Phone Number</p>
          <p className="font-medium text-sm">+1 (555) 123-4567</p>
        </div>

        <div>
          <p className="text-white/50 mb-1 ">Duration</p>
          <p className="font-medium text-sm">4:32</p>
        </div>

        <div>
          <p className="text-white/50 mb-1">Date & Time</p>
          <p className="font-medium text-sm">2025-12-16 10:45 AM</p>
        </div>

        <div>
          <p className="text-white/50 mb-1">Issue Type</p>
          <p className="font-medium text-lg">Screen</p>
        </div>

        <div className="flex flex-col gap-5">
            <div>
          <p className="text-white/50 mb-1">Call Type</p>
          <span className="inline-block rounded-full bg-green-500/20 px-3 py-1 text-[11px] text-green-400 border border-green-400/80">
            AI Resolved
          </span>
        </div>

        <div>
          <p className="text-white/50 mb-1">Outcome</p>
          <p className="font-medium">Quote provided</p>
        </div>
        </div>
      </div>

      {/* button */}
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#AD46FF50] to-[#F6339A50] py-3 text-xs font-medium text-[#C27AFF]  mb-5 ">
        <BiPlayCircle size={14} />
        Play Audio Recording
      </button>

      {/* transcript */}
      <div>
        <p className="text-lg font-semibold mb-3 flex items-center gap-2"><span><img src={fileIcon} className="w-5" alt="File Icon" /></span>Conversation Transcript</p>

        <div className="space-y-3 text-sm bg-[#1D293D80] p-5">
          <p>
            <span className="text-emerald-400 font-medium">AI Assistant:</span>{" "}
            Thank you for calling UBreakiFix! How can I help you today?
          </p>

          <p>
            <span className="text-blue-400 font-medium">Customer:</span>{" "}
            Hi, my iPhone 13 screen is cracked. How much would it cost to repair?
          </p>

          <p>
            <span className="text-emerald-400 font-medium">AI Assistant:</span>{" "}
            I can help with that! For an iPhone 13 screen repair, our price is
            $199. This includes parts, labor, and comes with a 90-day warranty.
            Would you like to book an appointment?
          </p>

          <p>
            <span className="text-blue-400 font-medium">Customer:</span>{" "}
            Yes, please! When are you available?
          </p>

          <p>
            <span className="text-emerald-400 font-medium">AI Assistant:</span>{" "}
            Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM.
            Which works better for you?
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
    );
};

export default CallLogs;