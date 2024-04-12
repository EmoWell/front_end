import React from 'react';

const Profile = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-full text-white bg-main-color">
                {/* Navbar */}
                <div
                    className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    {/* Navbar content */}
                </div>
            </div>
            {/* End of Navbar */}

            {/* Main Content */}
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            {/* Profile content */}
                        </div>
                        {/* End of profile card */}
                        {/* Friends card */}
                        <div className="bg-white p-3 hover:shadow">
                            {/* Friends content */}
                        </div>
                        {/* End of friends card */}
                    </div>
                    {/* End of Left Side */}

                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* Profile tab */}
                        {/* About Section */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            {/* About content */}
                        </div>
                        {/* End of about section */}
                        {/* Experience and education */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            {/* Experience and education content */}
                        </div>
                        {/* End of Experience and education */}
                    </div>
                    {/* End of Right Side */}
                </div>
            </div>
            {/* End of Main Content */}
        </div>
    );
}

export default Profile;
