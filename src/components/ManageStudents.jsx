import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
const studentsData = [
    // Example data. Replace with your real data.
    {
        id: 1,
        firstName: "Soroar",
        middleName: "Hosin",
        lastName: "Mia",
        class: "10",
        division: "A",
        rollNumber: "15",
        addressLine1: "Maduptala",
        addressLine2: "Banibaha",
        city: "Rajbari",
        pincode: "10001",
    },
    {
        id: 2,
        firstName: "Deloar",
        middleName: "Hosin",
        lastName: "Mia",
        class: "10",
        division: "A",
        rollNumber: "16",
        addressLine1: "Maduptala",
        addressLine2: "Banibaha",
        city: "Rajbari",
        pincode: "10002",
    },
    {
        id: 3,
        firstName: "Anowerr",
        middleName: "Hosin",
        lastName: "Mia",
        class: "10",
        division: "A",
        rollNumber: "17",
        addressLine1: "Maduptala",
        addressLine2: "Banibaha",
        city: "Rajbari",
        pincode: "10003",
    },
    {
        id: 4,
        firstName: "Fardin",
        middleName: "Hosin",
        lastName: "Mia",
        class: "10",
        division: "A",
        rollNumber: "14",
        addressLine1: "Maduptala",
        addressLine2: "Banibaha",
        city: "Rajbari",
        pincode: "10004",
    },
    // Add more students as needed.
];

const ManageStudents = () => {
    const [students, setStudents] = useState(studentsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleView = (student) => {
        setSelectedStudent(student);
        setIsViewModalOpen(true);
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setIsEditModalOpen(true);
    };

    const handleDelete = (student) => {
        setSelectedStudent(student);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        setStudents(students.filter((s) => s.id !== selectedStudent.id));
        setIsDeleteModalOpen(false);
    };

    const handlePrint = () => {
        window.print();
    };

    const filteredStudents = students.filter((student) =>
        student.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])
    return (
        <div className="pr-6">
            <div className=" mx-auto flex justify-between items-center">
                <h1 className="font-bold text-xl">Manage Students</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search students"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button className="border-solid border-2 border-slate-400 px-4 py-2 rounded-lg shadow-2xl hover:bg-customRed hover:text-white ">Exporl</button>
                <button className="border-solid border-2 border-slate-400 px-4 py-2 rounded-lg shadow-2xl hover:bg-customRed hover:text-white">Filter</button>
                <button onClick={handlePrint} className="border-solid border-2 border-slate-400 px-4 py-2 rounded-lg shadow-2xl hover:bg-customRed hover:text-white">Pint</button>
                <h1 className=" text-xl">{time.toLocaleTimeString()}</h1>
            </div>

            {/* Students Table */}
            
            <div className=" mx-auto mt-10">
                <table className="min-w-full bg-white border border-gray-300 text-xl">
                    <thead>
                        <tr className="bg-customRed text-white">
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Class</th>
                            <th className="py-2 px-4 border">Roll</th>
                            <th className="py-2 px-4 border">View / Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border">{student.firstName}</td>
                                <td className="py-2 px-4 border">{student.class}</td>
                                <td className="py-2 px-4 border">{student.rollNumber}</td>
                                <td className="py-2 px-4 border text-center">
                                    <button
                                        className="text-2xl text-customRed px-4 py-1 rounded mr-2"
                                        onClick={() => handleView(student)}
                                    >
                                        <GrView />
                                    </button>
                                    <button
                                        className="text-2xl text-customRed px-4 py-1 rounded mr-2"
                                        onClick={() => handleEdit(student)}
                                    >
                                        <CiEdit />
                                    </button>
                                    <button
                                        className="text-2xl text-customRed px-4 py-1 rounded"
                                        onClick={() => handleDelete(student)}
                                    >
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {/* View Modal */}


                {isViewModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-16 text-xl rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Student Details</h2>
                            <p>Name : {selectedStudent.firstName}</p>
                            <p>middleName: {selectedStudent.middleName}</p>
                            <p>lastName:: {selectedStudent.lastName}</p>
                            <p>Class : {selectedStudent.class}</p>
                            <p>Roll : {selectedStudent.rollNumber}</p>
                            <p>division:{selectedStudent.division}</p>
                            <p>addressLine1: {selectedStudent.addressLine1}</p>
                            <p> city: {selectedStudent.city}</p>
                            <button
                                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
                                onClick={() => setIsViewModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}


                {/* Edit Modal */}


                {isEditModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-14 text-xl rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
                            <input
                                type="text"
                                value={selectedStudent.firstName}
                                onChange={(e) =>
                                    setSelectedStudent({ ...selectedStudent, firstName: e.target.value })
                                }
                                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => setIsEditModalOpen(false)}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                )}


                {/* Delete Modal */}


                {isDeleteModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 text-xl rounded-lg shadow-lg">
                            <p>Are you sure you want to delete this student?</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={confirmDelete}
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                    onClick={() => setIsDeleteModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ManageStudents;