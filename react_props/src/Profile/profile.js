import {Row,Col,Button} from 'react-bootstrap';
export const Profile=({fullName,bio,profession,children,like})=>{
    // console.log(fullName,bio,profession)
    return(
        <div>
            <Row className="px-4 my-5">
            <Col sm={7}>
            {children}
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-light">{fullName}</h1>
              <p class="mt-4">
              {bio} <br/>
              {profession}
              </p>
              <Button variant="outline-primary" onClick={()=>like(fullName)}>Click me</Button>
            </Col>
          </Row>

        </div>
    )
 
}
