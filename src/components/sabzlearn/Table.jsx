import { useEffect,useState } from 'react';
import React from 'react'
import { Table,Container,Modal,Button,Form,InputGroup } from 'react-bootstrap';
import { AiFillDelete,AiFillEdit } from "react-icons/ai";



export default function Tables() {

  const [users,setUsers] = useState([])
  const [userID,setUserID] = useState([])
  const [close,setClose] = useState('none')
  const [getdata,setGetdata] = useState(false)
  const [editModalRefresh,setEditModalRefresh] = useState(false)
  const [editModalDisplay,setEditModalDisplay] = useState(false)
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')

  const firsthandler = (event)=>{
    setFirstName(event.target.value)
  }
  const lasthandler = (event)=>{
    setLastName(event.target.value)
  }
  const submithandler = async (event)=>{
    event.preventDefault()

    let userinfo ={
      firstName,
      lastName
    }

    await fetch(`https://training-8c8da-default-rtdb.firebaseio.com/users/${userID}.json`,{
      method:'PUT',
      body:JSON.stringify(userinfo)
    }).then(response => console.log(response))

    setEditModalRefresh(prev => !prev)
  }

  const removeHandler = async()=>{
    await fetch(`https://training-8c8da-default-rtdb.firebaseio.com/users/${userID}.json`,{
      method:'DELETE'
    })

    setGetdata(prev => !prev)
  }

  useEffect(()=>{
     fetch('https://training-8c8da-default-rtdb.firebaseio.com/users.json').then(response=>response.json())
    .then(response=>setUsers(Object.entries(response)))
  },[getdata,editModalRefresh])
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th style={{width:30}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{user[1].firstName}</td>
            <td>{user[1].lastName}</td>
            <td style={{display:'flex',justifyContent:'space-evenly'}}>
              <AiFillDelete onClick={()=>{
              setClose('block')
              setUserID(user[0])
              }}size={23} style={{cursor:'pointer'}}/>
              <AiFillEdit onClick={()=>{
              setEditModalDisplay(true)
              setUserID(user[0])
              setFirstName(user[1].firstName)
              setLastName(user[1].lastName)
              }}size={23} style={{cursor:'pointer'}}/>
            </td>
          </tr>
          ))}
          
        </tbody>
      </Table>
      <div
        className="modal show"
        style={{ display: close, position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure yo want to delete this fucking modal?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setClose('none')}>Close</Button>
            <Button variant="primary" onClick={()=>{
              setClose('none')
              removeHandler()
              }}>im fuckin sure</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={editModalDisplay}>
          <form onSubmit={(event)=>{submithandler(event)}}>
            <Modal.Body>
            <InputGroup style={{display:'flex',flexDirection:'column'}} className="mb-3">
              <Form.Control
              value={firstName}
              onChange={(event)=>firsthandler(event)}
              style={{width:'100%'}}
                placeholder='FirstName'
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <Form.Control
              value={lastName}
              onChange={(event)=>lasthandler(event)}
              style={{width:'100%',marginTop:20}}
                placeholder='LastName'
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={()=>{
                setEditModalDisplay(false)
                setFirstName('')
                setLastName('')
                }}>Close</Button>
              <Button type='submit' variant="primary"  onClick={()=>{
                setEditModalDisplay(false)
              }}>Save changes</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </Container>
  );
}