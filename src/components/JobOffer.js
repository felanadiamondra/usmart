import { Panel, Placeholder, Row, Col, Grid } from 'rsuite';

const JobOffer = () => {
    const joblist = [
        "Web developer",
        "Web designer",
        "Web master",
    ]

    return (
        <Row className="show-grid">
            <Col xs={18}><Card joblist={joblist}/></Col>
            <Col xs={6}><SectionCard style={{height : 600}}/></Col>
        </Row>

    )
}

const JobCard = props => (
    <Panel {...props} bordered header="Web developer">
      <Placeholder.Paragraph />
    </Panel>
);

const SectionCard = props => (
    <Panel {...props} bordered header="Offres qui vous convient">
      <JobCard/>
    </Panel>
);

const Card = props => (

    <Panel {...props} bordered header="Job opportunities">
        {
            // create a list of job cards according to the joblist using map
            props.joblist.map((job, index) => {
                return <JobCard/>
            })
        }  
    </Panel>
);
  


export default JobOffer