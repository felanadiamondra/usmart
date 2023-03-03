import { Carousel, Button } from 'rsuite';

const AddHackathon = ()=>{
    return(
    <Carousel className="custom-slider">
        <img src='./Assets/img/hackathon.jpg'/>
        <Button color="cyan" appearance="primary" >
            Organiser un hackathon
        </Button>
    </Carousel>
    )
}
export default AddHackathon;