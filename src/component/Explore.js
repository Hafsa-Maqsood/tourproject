import React from 'react';
import '../styles/Explore.css'; // Correct path to CSS file

export default function Explore() {

  const sections = [
    {
      // You can replace this with actual icons or images
      title: 'Our Motto',
      text: `“We’re Here To Get You There” You pick a dream destination, and we will figure out the best way to fulfill your dream. 
      Whether it be a business trip or a pleasure tour, Pakistan Travel Places has always been providing hassle-free services to its clients.`
    },
    {
    
      title: 'Why Choose Us',
      text: `Choose Pakistan Travel Places because we use our experience to create yours. We can help you explore Pakistan's most amazing places, people, and landscapes. 
      We consistently seek new ways to exceed our clients' expectations.`
    },
    {
    
      title: 'Objectives',
      text: `We as a Pakistan tourism company are in full swing to highlight the emerging face of Pakistan. 
      Our objective is to expose the peaceful and welcoming aspect of Pakistan at a national and international level. 
      We work hard to make it possible with our best efforts.`
    }
  ];

  return (

    <>

    {/* =============================  ABOUT INFO SECTION START ============================= */}
   {/* <div className="Explore">
        <div className="Explore-image">

        </div>
        <div className="Explore-text">
          <h1 style={{ color: 'black' , fontSize: '40px',fontStyle: 'italic', marginTop: '20px'  }}>
            Travel Around The World With Us
            </h1>

            <p>
              Pakistan Travel Places is one of the best and reliable tourism company in Pakistan.
              To get into the traveling expedition, you've just got the right option. We take you higher
              to explore the surprising beauty of Pakistan. As a Pakistan tourism company, we introduced the
              best opportunities to travel with enticing and super-comfy services.
              So, get ready for a journey that you've never seen before!
            </p>

            <p>
              Do not worry if you're confused to find the trustworthy Travel agency in Lahore, Pakistan.
              You can see our client's review, we are completely different from other traveling firms.
              People trust on our services blindly and spreading our tour company to others.
            </p>

            <p>
              We arrange a fully entertaining and exploratory journey to your desired destinations.
              Whether you look forward to getting around all the tourist spots of booked place or even want to
              focus its highlights to make the tour brief and rejoicing, every client with multiple travel
              priorities is welcomed at Pakistan Travel Places.
            </p>

            <p>
              Our team of friendly travel experts is here to help you plan your perfect trip.
              We listen to what you want and create a travel plan just for you. Whether you’re looking
              for adventure in the mountains, a look at the rich history and culture, or just a relaxing time
              by beautiful lakes,
              we make sure every part of your trip is well-planned. Your happiness is our main goal!
            </p>

            <p>
              We understand that planning a trip can be overwhelming.
              That’s why our friendly customer service team is available 24/7 to help you
              with any questions or concerns before,
              during, and after your trip. Your peace of mind is important to us,
              and we’re here to make sure everything goes smoothly.
            </p>

            <p>
              Experience the magic of Pakistan with us! Let us help you create memories that will last a lifetime.
              Whether it’s your first visit or you’re returning to explore more,
              Pakistan Travel Places is your best partner for travel.
              Pakistan Travel Places is one of the best and reliable tourism company in Pakistan.
              Whether you look forward to getting around all the tourist spots of booked place or even want to
              focus its highlights to make the tour brief and rejoicing.
            </p>

          
        </div>
      </div>*/}
{/* =============================  ABOUT INFO SECTION END ============================= */}





{/* =============================  Service SECTION START ============================= */}

      <div className="Services">
        <div className="Services-image">

        </div>
        <div className="Services-text">
          <h2 style={{ color: 'darkred' , fontSize: '50px',fontStyle: 'italic', marginTop: '20px'  }}>
            Services
            </h2>
            <p>


              We offer professional and customer-oriented consultation for hassle-free travel experiences.With convenient email capabilities, they ensure prompt booking and information for their clients.
              Their creative and persistent approach allows them to find the most suitable travel arrangements
              at the best value.Their friendly and experienced travel consultants cater to both seasoned
              and new travelers, providing exceptional service.With a strong focus on customer satisfaction, 
              they enjoy a high percentage of repeat bookings and benefit from positive word-of-mouth recommendations. 
              Pakistan Travel & Tours is dedicated to ensuring a seamless and enjoyable travel journey for their clients. 
            </p>

  {/* Dynamic sections */}
  <div className="Dynamic-sections">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <div className="icon">{section.icon}</div>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
          
        </div>
      </div>

      {/* =============================  Service SECTION END ============================= */}
    </>
  );
}