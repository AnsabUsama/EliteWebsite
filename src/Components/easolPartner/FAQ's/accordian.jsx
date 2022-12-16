import Accordion from 'react-bootstrap/Accordion';

function Accordian() {
  return (
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" >
        <Accordion.Header>What’s your turnaround time?</Accordion.Header>
        <Accordion.Body>
          <p className=''>
            The average turnaround time for starter websites is 10 business days. Timelines will 
            vary depending on the project brief and our availability. we will provide a concrete timeline before the project starts.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do i make payments?</Accordion.Header>
        <Accordion.Body>
          <p>
            Once you’re ready to move forward, you will make a payment to Easol. They will hold your payment and only 
            release it to me when project milestones are completed.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;