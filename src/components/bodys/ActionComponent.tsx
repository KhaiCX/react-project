
import { useState } from "react"
import { Button, Col, Modal, Form } from "react-bootstrap"
function ActionComponent() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        console.log(show)
        setShow(true)
    }
    return (
        <>
            <Col sm={8}>
                <h5>List Users:</h5>
            </Col>
            <Col sm={4}>
                <Button onClick={handleShow} variant='success'>Add new User
                </Button>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new User modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ActionComponent