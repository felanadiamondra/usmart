import { Panel, Placeholder, Row, Col, Grid } from 'rsuite';

const JobOffer = () => {
    const joblist = [
        {id: 1, name : "Web developer", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eu tincidunt lacinia, nisl nisl aliquam mauris, eu aliquet nisl nunc vel mauris. Sed euismod, nunc eu tincidunt lacinia, nisl nisl aliquam mauris, eu aliquet nisl nunc vel mauris."},
        {id: 2, name : "Web master", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eu tincidunt lacinia, nisl nisl aliquam mauris, eu aliquet nisl nunc vel mauris. Sed euismod, nunc eu tincidunt lacinia, nisl nisl aliquam mauris, eu aliquet nisl nunc vel mauris."},
        {id : 3, name : "Web designer", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eu tincidunt lacinia, nisl nisl aliquam mauris, eu aliquet nisl nunc vel mauris. Sed euismod, nunc eu tincidunt lacinia, nisl nisl aliquam mauris, eu aliquet nisl nunc vel mauris."},
    ]

    return (
        <Row className="show-grid">
            <Col xs={18}><Card joblist={joblist}/></Col>
            <Col xs={6}><SectionCard style={{height : 600}}/></Col>
        </Row>

    )
}

const JobCard = props => (
    <Panel {...props} bordered header={props.name}>
      <Placeholder.Paragraph />
      <div>{props.descri}</div>
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
                console.log(job)
                return <JobCard key={index} name={job.name} descri={job.description}/>
            })
        }  
    </Panel>
);
  


export default JobOffer