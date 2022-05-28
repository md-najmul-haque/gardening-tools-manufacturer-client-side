import React from 'react';

const Portfolio = () => {
    return (
        <div className='m-16 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-center uppercase my-16'>Welcome to developer portfolio</h1>
            <div className='flex flex-col md:flex-row justify-between mb-5'>
                <div>
                    <h2 className='font-bold text-xl'>Md. Najmul Haque</h2>
                    <p>MERN Stack Developer</p>
                    <p>cell: +8801717888789</p>
                    <p>Email: najmul0612@gmail.com</p>
                </div>
                <div>
                    <p className='font-bold'>Social links:</p>

                    <p><span>LinkedIn Link:<a className='ml-5 text-green-600' href="https://www.linkedin.com/in/md-najmul-haque/">https://www.linkedin.com/in/md-najmul-haque/</a></span></p>
                    <p><span>GitHub Link:<a className='ml-5 text-green-600' href="https://github.com/md-najmul-haque">https://github.com/md-najmul-haque</a></span></p>
                </div>

            </div>

            <div className='mb-5' >
                <h2 className='font-bold'>Technology I have skilled:</h2>
                <ul className='ml-10'>
                    <li className="list-disc">JavaScript</li>
                    <li className="list-disc">React</li>
                    <li className="list-disc">Node.js</li>
                    <li className="list-disc">Express.js</li>
                    <li className="list-disc">MongoDB</li>
                    <li className="list-disc">HTML5</li>
                    <li className="list-disc">CSS3</li>
                    <li className="list-disc">Bootstrap</li>
                    <li className="list-disc">Tailwind CSS</li>
                </ul>
            </div>

            <div className='mb-5'>
                <h2 className='font-bold'>Educational Background:</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>Exam Title</th>
                                    <th>Major</th>
                                    <th>Institute</th>
                                    <th>Result</th>
                                    <th>Passing Year</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>Master of Science (MSc)  </th>
                                    <td>Statistics</td>
                                    <td>Rajshahi University</td>
                                    <td>First Class</td>
                                    <td>2009</td>
                                </tr>

                                <tr>
                                    <th>Bachelor of Science (BSc)</th>
                                    <td>Statistics</td>
                                    <td>Rajshahi University</td>
                                    <td>First Class</td>
                                    <td>2009</td>
                                </tr>

                                <tr>
                                    <th>HSC</th>
                                    <td>Science</td>
                                    <td>Police Lines School and College, Kushtia</td>
                                    <td>CGPA:3.9 out of 5</td>
                                    <td>2004</td>
                                </tr>
                                <tr>
                                    <th>SSC</th>
                                    <td>Science</td>
                                    <td>Refaitpur High School</td>
                                    <td>CGPA:3.38 out of 5</td>
                                    <td>2002</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
            <div className='mb-5'>
                <h2 className='font-bold'>Last three websites link excluding this project:</h2>
                <a className='ml-5 text-green-600' href="https://gardening-tools-manufacturer.web.app/">Gardening Plus: https://gardening-tools-manufacturer.web.app/</a><br />
                <a className='ml-5 text-green-600' href="https://bicycle-warehouse-manage-1a130.web.app/">NextGen Bike: https://bicycle-warehouse-manage-1a130.web.app/</a><br />
                <a className='ml-5 text-green-600' href="https://health-plus-20321.web.app/">Health Plus: https://health-plus-20321.web.app/</a><br />

            </div>

        </div>
    );
};

export default Portfolio;