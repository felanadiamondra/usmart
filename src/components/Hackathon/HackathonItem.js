import { Panel, Placeholder, Row, Col, Grid } from 'rsuite';
const HackathonItem = (props) => {
    return (
        <Panel {...props} bordered header={props.name}>
            <Placeholder.Paragraph />
            <div>{props.descri}</div>
        </Panel>
    );
};

export default HackathonItem