import React from "react";
import Logo from "../../assets/images/wallartlogo.png";
import DefaultLayout from "../../layout/DefaultLayout";

const packageData = [
  {
    name: "Usama Bhatti",
    price: 0.0,
    invoiceDate: `1080p`,
    status: "1200",
    image: Logo,
    email: "hello298@gmail.com",
    address: "Al-hafeez exuctives 434",
    date: "21-09-2024",
    phone: "009893847",
  },
  {
    name: "Usama Bhatti",
    price: 59.0,
    invoiceDate: `1080p`,
    status: "1200",
    image: Logo,
    email: "hello298@gmail.com",
    address: "Al-hafeez exuctives 434",
    date: "21-09-2024",
    phone: "009893847",
  },
  {
    name: "Usama Bhatti",
    price: 99.0,
    invoiceDate: `1080p`,
    status: "1500",
    image: Logo,
    email: "hello298@gmail.com",
    address: "Al-hafeez exuctives 434",
    date: "21-09-2024",
    phone: "009893847",
  },
  {
    name: "Usama Bhatti",
    price: 59.0,
    invoiceDate: `1080p`,
    status: "200",
    image: Logo,
    email: "hello298@gmail.com",
    address: "Al-hafeez exuctives 434",
    date: "21-09-2024",
    phone: "009893847",
  },
];

const Customers = () => {
  return (
    <DefaultLayout>
     <h1 className="text-black text-center pt-60 font-semibold text-6xl">In Progress</h1>    
      {/* <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Name
                </th>

                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Email
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Address
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Phone no.
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <p>{packageItem.name}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      <p>{packageItem.email}</p>
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                 
                    >
                      <p>{packageItem.address}</p>
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                   
                    <p>{packageItem.phone}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </DefaultLayout>
  );
};

export default Customers;
