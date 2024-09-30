import { useEffect, useState } from "react";

const AddStudent = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])



    const [student, setStudent] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        class: "1",
        division: "A",
        rollNumber: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        pincode: "",
        profilePicture: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (API call, etc.)
        console.log(student);
    };

    return (
        <div className="pr-6">
            <div className=" mx-auto flex justify-between items-center">
                <h1 className="font-bold text-xl">Add Student</h1>
                <h1 className=" text-xl">{time.toLocaleTimeString()}</h1>
            </div>

            <div className=" mx-auto mt-10">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid grid-cols-3 gap-4">
                        {/* First Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="First name"
                                name="firstName"
                                value={student.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        {/* Middle Name */}
                        <div>
                            <input
                                type="text"
                                name="middleName"
                                placeholder="Middle Name"
                                value={student.middleName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={student.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        {/* Class */}
                        <div>
                            <select
                                name="class"
                                placeholder="Select Class"
                                value={student.class}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                {[...Array(12)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Division */}
                        <div>
                            <select
                                name="division"
                                placeholder="Select Division"
                                value={student.division}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                {["A", "B", "C", "D", "E"].map((division) => (
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Roll Number */}
                        <div>
                            <input
                                type="number"
                                placeholder="Enter Roll Number in Digits"
                                name="rollNumber"
                                value={student.rollNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                min="1"
                                max="99"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {/* Address Line 1 */}
                        <div>
                            <textarea
                                name="addressLine1"
                                placeholder="Address Line 1"
                                value={student.addressLine1}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            ></textarea>
                        </div>

                        {/* Address Line 2 */}
                        <div>
                            <textarea
                                name="addressLine2"
                                placeholder="Address Line 2"
                                value={student.addressLine2}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {/* Landmark */}
                        <div>
                            <input
                                type="text"
                                placeholder="Landmark"
                                name="landmark"
                                value={student.landmark}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                value={student.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        {/* Pincode */}
                        <div>
                            <input
                                type="number"
                                placeholder="Pincode"
                                name="pincode"
                                value={student.pincode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                min="1000"
                                max="999999"
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="mt-3">
                            <button
                                type="submit"
                                className="w-full bg-customRed py-3 text-white  rounded-md"
                            >
                                Add Student
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;