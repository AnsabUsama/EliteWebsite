import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css'

function FeedBackSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <Carousel.Caption>
          <p className='text text-dark italic pb-4'> <b> “I’m really happy with the work done by Shahid. I had very specific requirements about the leads 
            (for example, no generic email addresses, first and last names mandatory) and he delivered. What especially stands out for me 
            is that Shahid went to the extent of proving that he was committed to delivering my requirements even before the contract was 
            rewarded. I highly Shahid recommend for any leadgen work!”</b>
          </p>
          <h4 className='small_titles Blue_Span'>John Lewis</h4>
          <p className='text-dark'>Rate Save UK</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <p className='text text-dark italic'>“Shahid and his team fully understood the requirements of the job, and went above and beyond to complete
             it in time and with accurate information. We will be using him for other projects and would highly recommend him if you want your job
             to be finished in a timely fashion with the highest regards to accuracy”
          </p>
          <h4 className='small_titles Blue_Span'>Jeev Trika</h4>
          <p className='text-dark'>Crowd Reviews, LLC</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <p className='text text-dark italic'>“I’m really happy with the work done by Shahid. I had very specific requirements about the leads 
            (for example, no generic email addresses, first and last names mandatory) and he delivered. What especially stands out for me 
            is that Shahid went to the extent of proving that he was committed to delivering my requirements even before the contract was 
            rewarded. I highly Shahid recommend for any leadgen work!”
          </p>
          <h4 className='small_titles Blue_Span'>Methias Ssenebulya</h4>
          <p className='text-dark'>Dextrous Consulting Inc.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <p className='text text-dark italic'>“Shahid's team communicated clearly, set the right expectations, and adhered to deadlines. Will work 
            with them in the future again.”
          </p>
          <h4 className='small_titles Blue_Span'>Zack John</h4>
          <p className='text-dark'>Rowd LLC</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <p className='text text-dark italic'>“Amazing working with Sheraz for over a year. He is family now. The whole company is such a great to
            work with from Abdullah the manager to the owner of the company. I highly recommend these guys!”
          </p>
          <h4 className='small_titles Blue_Span'>Azhar Siddiqui</h4>
          <p className='text-dark'>RepStack</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <p className='text text-dark italic'>“The best guy we have ever worked with. First class work and service, no fuss, no hassle, simply delivered
            above and beyond what we expected. Seriously, we have never worked with someone who is so dedicated to getting the outcome wanted and who 
            is so easy to work with. 100% recommended and will be working with Abdullah again. First class!”
          </p>
          <h4 className='small_titles Blue_Span'>Jock Beckett</h4>
          <p className='text-dark'>Skinny Goat Media</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default FeedBackSlider ;