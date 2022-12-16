import Accordion from 'react-bootstrap/Accordion';

function Accordian() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our mission</Accordion.Header>
        <Accordion.Body>
          <p className=''>
          The Core mission of Elite Techlogix is to make sure that any client they work with are 100% satisfied with the 
          solid combination of Quality & Performance under the guidelines provided by the clients.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our vision</Accordion.Header>
        <Accordion.Body>
          <p>
            Our Vision is to change the BPO industry and make it more reliable for the clients who are seeking such
           services by making sure the work which is done is ethical and upto standards of the clients.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;