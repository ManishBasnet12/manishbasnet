import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import "../../../src/app/(homepage)/globals.css";

const ContactList = () => {
  return (
    <div className=" flex justify-center items-center  w-[100%] h-[clac(100vh-75px)] rounded-2xl bg-[#051327]">
      <div className="  bg-[#091F3C] w-[calc(100%-250px)] h-[calc(100%-150px)] rounded-2xl">
        <div className="m-5">
          <h1 className="text-2xl text-[#2CA58D] border-b-[1px] border-[#2b3662] pb-2">
            Contact List
          </h1>
          <table className="w-[100%] my-5">
            <thead>
              <tr className="text-[#d7dcec] h-[55px] border-b-[1px] border-[#222b4f] text-[18px]">
                <th>Name</th>
                <th>Email</th>
                <th> Date</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#bdc8f0] font-thin text-[14px] text-center h-[55px] border-b-[1px] border-[#222b4f] hover:bg-[#142741]">
                <td className="font-thin">Manish Basnet</td>
                <td>manish@gmail.com</td>
                <td>2080-2-22</td>
                <td>Need a website for my clothing store </td>
                <td className="">
                  <div className="flex justify-between w-[80px] m-auto  text-[16px]">
                    <FaRegEye />
                    <FaRegEdit />
                    <AiTwotoneDelete />
                  </div>
                </td>
              </tr>
              <tr className="text-[#bdc8f0] font-thin text-[14px] text-center h-[55px] border-b-[1px] border-[#222b4f] hover:bg-[#142741]">
                <td className="font-thin">Manish Basnet</td>
                <td>manish@gmail.com</td>
                <td>2080-2-22</td>
                <td>Need a website for my clothing store </td>
                <td className="">
                  <div className="flex justify-between w-[80px] m-auto  text-[16px]">
                    <FaRegEye />
                    <FaRegEdit />
                    <AiTwotoneDelete />
                  </div>
                </td>
              </tr>
              <tr className="text-[#bdc8f0] font-thin text-[14px] text-center h-[55px] border-b-[1px] border-[#222b4f] hover:bg-[#142741]">
                <td className="font-thin">Manish Basnet</td>
                <td>manish@gmail.com</td>
                <td>2080-2-22</td>
                <td>Need a website for my clothing store </td>
                <td className="">
                  <div className="flex justify-between w-[80px] m-auto  text-[16px]">
                    <FaRegEye />
                    <FaRegEdit />
                    <AiTwotoneDelete />
                  </div>
                </td>
              </tr>
              <tr className="text-[#bdc8f0] font-thin text-[14px] text-center h-[55px] border-b-[1px] border-[#222b4f] hover:bg-[#142741]">
                <td className="font-thin">Manish Basnet</td>
                <td>manish@gmail.com</td>
                <td>2080-2-22</td>
                <td>Need a website for my clothing store </td>
                <td className="">
                  <div className="flex justify-between w-[80px] m-auto  text-[16px]">
                    <FaRegEye />
                    <FaRegEdit />
                    <AiTwotoneDelete />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
