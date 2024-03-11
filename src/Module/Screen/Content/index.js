import React from 'react'
import './index.css';

 function Content() {
  return (
    <div className=''>
        <section className=" mx-auto px-6 p-10 " style={{backgroundColor:'#f4fbf3'}}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Services</h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Home Elevator</h4>
              <h5 className='text-2xl text-gray-800 font-bold mb-3'>₹ 2 L - ₹ 32 L / Pc</h5>
              <p className="text-gray-600 mb-8">Our home elevators are designed for customer needs and to meet the highest standards of quality.We offer models to fit any budget with wide range of styles. It delivers a smooth ride that improves your home accessibility. This type of elevators is easy for moving large objects from floor to floor</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src={require('../../../images/ibea2.jpeg')} alt="Vortex" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src={require('../../../images/header2.png')} alt="use the force" />
            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">MRL Elevator</h4>
              <h5 className='text-2xl text-gray-800 font-bold mb-3'>₹ 80,000 - ₹ 8 L / Pc</h5>
              <p className="text-gray-600 mb-8">Our machine-room-less elevator provides technological advances that deliver a world-class ride, exceptional reliability with an average of less than one callback per elevator per year, and maximum MRL life cycle.</p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Hydraulic Elevator</h4>
              <h5 className='text-2xl text-gray-800 font-bold mb-3'>₹ 3.20 L - ₹ 24 L / Pc</h5>
              <p className="text-gray-600 mb-8">These lifts are extensively used for operations that involve hoisting and lifting. We are engaged in offering the finest quality services in installation of hydraulic lifts to all our clients. To meet the requirements of our clients, our professionals make use of top quality tools, jacks and innovative technology when executing the undertaken project to ensure a smooth lifting as per the exact needs</p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src={require('../../../images/ibea9.png')} alt="Syncing" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src={require('../../../images/ibea1.jpeg')} alt="use the force" />
            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Passenger Elevator</h4>
              <h5 className='text-2xl text-gray-800 font-bold mb-3'>₹ 2.40 L - ₹ 40 L / Pc</h5>
              <p className="text-gray-600 mb-8">Our passenger elevator is a kind of high quality elevator. Good choice for the places such as Apartments, Commercial building, Hotels etc.These are manufactured in standard size, we have stability to provide custom designs to satisfy customer requirements. We can provide an elevator package for any application.</p>
            </div>
          </div>
        </section>
    </div>
  )
}export {Content}
