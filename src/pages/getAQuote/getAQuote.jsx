import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/wallartlogo.png";
import DefaultLayout from "../../layout/DefaultLayout";
import axios from "axios";
import api from "../../utils/Api";
import Swal from "sweetalert2";
import Pagination from "../../components/pagination/pagination";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
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

const GetAQuote = () => {
        const [loading, setLoading] = useState(true);
    
    const [searchQuery, setSearchQuery] = useState("");
    const [page,setPage]=useState(null)
    const [currentStep, setCurrentStep] = useState(1);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  const [packageData, setPackageData] = useState([]);
  console.log("🚀 ~ GetAQuote ~ packageData:", packageData);
  const [error, setError] = useState("");
  const getAllInquiries = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `https://api.jobyz.ch/api/contact/inquiry?page=${currentStep}&search=${searchQuery}`
      );
      setPackageData(response.data);
      setPage(response.data.totalPages) // Update state with API data
    } catch (err) {
      setError(err.response?.data || "Failed to fetch inquiries");
      console.error(
        "Error fetching inquiries:",
        err.response?.data || err.message
      );
    }finally {
        setLoading(false); // Stop loading after API call completes
      }
  };
  useEffect(() => {
    getAllInquiries();
  }, [currentStep,searchQuery]);
  const deleteInquiry = async (id) => {
    try {
      await api.delete(`https://api.jobyz.ch/api/contact/inquiry/${id}`);
      //   setPackageData((prevData) => prevData?.results?.filter((item) => item.id !== id)); // Remove deleted item
      Swal.fire({
        title: "Delete Successfully",
        text: "Inquiry successfully deleted!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      getAllInquiries();
      //   setSuccessMessage("Inquiry successfully deleted!");
    } catch (err) {
      Swal.fire({
        title: "Error deleting inquiry",
        text: "Failed to delete inquiry",
        icon: "error",
      });
    }
  };
  const handleView = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  return (
    <DefaultLayout>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 mt-8">
        <DialogPanel className="w-full max-w-xl bg-white rounded-lg shadow-xl p-6 space-y-4">
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Inquiry Details
          </DialogTitle>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-16 h-16 bg-slate-300 rounded-full">
              <span className="text-xl font-medium text-black ">
                {selectedItem?.firstname?.[0]}
                {selectedItem?.lastname?.[0]}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {selectedItem?.salutation} {selectedItem?.firstname} {selectedItem?.lastname}
              </h2>
              {/* <p className="text-sm text-gray-500 ">{selectedItem?.email}</p> */}
            </div>
          </div>

          <div className="mt-4 space-y-2">
          <div>
              <p className="text-sm font-semibold text-gray-600">Email:</p>
              <p className="text-gray-800">{selectedItem?.email || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Company:</p>
              <p className="text-gray-800">{selectedItem?.company || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Phone:</p>
              <p className="text-gray-800">{selectedItem?.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Description:</p>
              <p className="text-gray-800">{selectedItem?.description}</p>
            </div>
          
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500"
              onClick={() =>{
                 setOpen(false)
                }}
            >
              Close
            </button>
          </div>
        </DialogPanel>
        </div>
      </div>
    </Dialog>
    <div className="flex justify-between items-center py-4">
        <input
          type="text"
          placeholder="Search inquiries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          className="border px-4 py-2 rounded-md w-1/3 outline-none"
        />
      </div>
      <div className="rounded-sm border border-stroke bg-white  pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark  xl:pb-1">
        <div className="max-w-full overflow-x-auto">
        {loading ? (
        
        <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
      ) :packageData?.totalCount > 0 ? (
            <table className="w-full   table-auto">
              <thead>
                <tr className="bg-slate-200 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Name
                  </th>

                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Email
                  </th>
                  {/* <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Address
                </th> */}
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Phone no.
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {packageData?.results?.map((packageItem, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <p>
                        {packageItem.firstname} {packageItem.lastname}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className=" dark:text-white">
                        <p>{packageItem.email}</p>
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p>{packageItem.phoneNumber}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark space-x-2">
                      <button onClick={() => handleView(packageItem)} className="border px-4 py-1 border-[#1967D2] bg-[#1967D2] text-white rounded-md">
                        View
                      </button>
                      <button
                        onClick={() => deleteInquiry(packageItem._id)}
                        className="border px-4 py-1 border-red-500 bg-red-500 text-white rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center py-20 text-3xl font-semibold">No Result Found</p>
          )}
        </div>
        {packageData?.totalPages>1 ?(
        <div className="py-10">
          <Pagination
            totalPages={page}
            currentPage={currentStep}
            setCurrentPage={setCurrentStep}
          />
        </div>
        ):null}
      </div>
    </DefaultLayout>
  );
};

export default GetAQuote;
