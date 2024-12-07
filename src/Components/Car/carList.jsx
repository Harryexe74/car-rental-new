// import React, { useEffect, useState } from "react";

// function CarDetailsTable() {
//   const [carDetails, setCarDetails] = useState([]);

//   // Set dummy data
//   useEffect(() => {
//     const dummyData = [
//       {
//         id: 1,
//         make: "Toyota",
//         model: "Corolla",
//         variant: "SE",
//         registration_no: "ABC123",
//         insurance_document: "https://example.com/insurance1.pdf",
//         id_card_document: "https://example.com/idcard1.pdf",
//         created_at: "2024-01-01T10:00:00Z",
//       },
//       {
//         id: 2,
//         make: "Honda",
//         model: "Civic",
//         variant: "LX",
//         registration_no: "DEF456",
//         insurance_document: null,
//         id_card_document: "https://example.com/idcard2.pdf",
//         created_at: "2024-02-01T15:30:00Z",
//       },
//       {
//         id: 3,
//         make: "Ford",
//         model: "Focus",
//         variant: "Titanium",
//         registration_no: "GHI789",
//         insurance_document: "https://example.com/insurance3.pdf",
//         id_card_document: null,
//         created_at: "2024-03-01T08:45:00Z",
//       },
//     ];
//     setCarDetails(dummyData);
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100  overflow-hidden">
//       <h1 className="text-2xl font-bold text-gray-700 mb-6">Car Details</h1>
//       <table className=" border-collapse border border-gray-300 ">
//         <thead>
//           <tr className="bg-gray-200 text-left w-96 md:w-full overflow-x-scroll md:overflow-hidden scroll-smooth">
//             <th className="border border-gray-300 px-4 py-2">Car ID</th>
//             <th className="border border-gray-300 px-4 py-2">Make</th>
//             <th className="border border-gray-300 px-4 py-2">Model</th>
//             <th className="border border-gray-300 px-4 py-2">Variant</th>
//             <th className="border border-gray-300 px-4 py-2">Registration No</th>
//             <th className="border border-gray-300 px-4 py-2">Insurance Document</th>
//             <th className="border border-gray-300 px-4 py-2">ID Card</th>
//             <th className="border border-gray-300 px-4 py-2">Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {carDetails.length > 0 ? (
//             carDetails.map((detail, index) => (
//               <tr
//                 key={index}
//                 className={`${
//                   index % 2 === 0 ? "bg-white" : "bg-gray-50"
//                 } hover:bg-gray-100`}
//               >
//                 <td className="border border-gray-300 px-4 py-2">{detail.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.make}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.model}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.variant}</td>
//                 <td className="border border-gray-300 px-4 py-2">{detail.registration_no}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {detail.insurance_document ? (
//                     <a
//                       href={detail.insurance_document}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline"
//                     >
//                       View Insurance
//                     </a>
//                   ) : (
//                     "N/A"
//                   )}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {detail.id_card_document ? (
//                     <a
//                       href={detail.id_card_document}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline"
//                     >
//                       View ID Card
//                     </a>
//                   ) : (
//                     "N/A"
//                   )}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {new Date(detail.created_at).toLocaleString()}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan="8"
//                 className="border border-gray-300 px-4 py-2 text-center text-gray-500"
//               >
//                 No records found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default CarDetailsTable;



import React, { useEffect, useState } from "react";

function CarDetailsTable() {
  const [carDetails, setCarDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set the number of items per page

  // Set dummy data
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        variant: "SE",
        registration_no: "ABC123",
        insurance_document: "https://example.com/insurance1.pdf",
        id_card_document: "https://example.com/idcard1.pdf",
        created_at: "2024-01-01T10:00:00Z",
      },
      {
        id: 2,
        make: "Honda",
        model: "Civic",
        variant: "LX",
        registration_no: "DEF456",
        insurance_document: null,
        id_card_document: "https://example.com/idcard2.pdf",
        created_at: "2024-02-01T15:30:00Z",
      },
      {
        id: 3,
        make: "Ford",
        model: "Focus",
        variant: "Titanium",
        registration_no: "GHI789",
        insurance_document: "https://example.com/insurance3.pdf",
        id_card_document: null,
        created_at: "2024-03-01T08:45:00Z",
      },
      // Add more data for pagination to work properly
      {
        id: 4,
        make: "BMW",
        model: "X5",
        variant: "M Sport",
        registration_no: "JKL012",
        insurance_document: "https://example.com/insurance4.pdf",
        id_card_document: null,
        created_at: "2024-04-01T12:00:00Z",
      },
      {
        id: 5,
        make: "Audi",
        model: "A4",
        variant: "Premium",
        registration_no: "MNO345",
        insurance_document: null,
        id_card_document: "https://example.com/idcard5.pdf",
        created_at: "2024-05-01T10:30:00Z",
      },
    ];
    setCarDetails(dummyData);
  }, []);

  // Calculate current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carDetails.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(carDetails.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-100 overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Car Details</h1>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Car ID</th>
            <th className="border border-gray-300 px-4 py-2">Make</th>
            <th className="border border-gray-300 px-4 py-2">Model</th>
            <th className="border border-gray-300 px-4 py-2">Variant</th>
            <th className="border border-gray-300 px-4 py-2">Registration No</th>
            <th className="border border-gray-300 px-4 py-2">Insurance Document</th>
            <th className="border border-gray-300 px-4 py-2">ID Card</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((detail, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="border border-gray-300 px-4 py-2">{detail.id}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.make}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.model}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.variant}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.registration_no}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {detail.insurance_document ? (
                    <a
                      href={detail.insurance_document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Insurance
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {detail.id_card_document ? (
                    <a
                      href={detail.id_card_document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View ID Card
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(detail.created_at).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="border border-gray-300 px-4 py-2 text-center text-gray-500"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CarDetailsTable;
