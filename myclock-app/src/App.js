/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


*/

//C0743947_Joyce De Moura
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Dialog, TextInput, Button } from 'evergreen-ui';
import moment from 'moment';
import API from './apiControl';


function UserTable() {
  //constants 
  const [users, setUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isDialogTimeOpen, setIsDialogTimeOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserData, setNewUserData] = useState({
    LastName: '',
    FirstName: '',
    DateOfBirth: '',
    Address1: '',
    Address2: '',
    City: '',
    PostalCode: '',
    Country: '',
    Phone: '',
    Email: '',
    UserNotes: ''
  });
  //const [controlTime, setControlTime] = useState(null);
  const [controlTimes, setControlTimes] = useState([]);
  const [controlTime, setControlTime] = useState({
    IDUser: '',
    DateToday: '',
    StartTime: '',
    EndTime: '',
    UserNotes: ''
  });
  const [isControlTimeBT, setIsisControlTimeBT] = useState(false);
  //loading user list
  useEffect(() => {
    API.getUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os usuários:', error);
      });
  }, []);

  //methods to create an user
  const handleFormSubmit = async () => {
    try {
      const response = await API.createUser(newUserData);
      if (response && response.status === 'success') {
        // If the user was created, update the list.
        const updatedUsers = await API.getUsers();
        setUsers(updatedUsers.data);

        // Closes the pop-up form.
        setIsDialogOpen(false);
      } else {

        console.error('Error - User not created:', response);

      }
    } catch (error) {
      console.error('Error - User not created:', error);
    }
  };
  //methods to create user
  const handleInputChange = (e) => {
    // Updates the data of the new user while the user is typing in the form.
    const { name, value } = e.target;
    setNewUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  //method to open dialog edit
  const openDetailsDialog = (user) => {
    setSelectedUser(user); //select user
    setIsDetailsDialogOpen(true); //open the pop-up form.
  };

  const openDetailsDialogTime = async (user) => {
    await setSelectedUser(user); //select user
    //await getcontrolTime(user);//get Times
    clearControlTime();
    const listTime = await getControlTimeByUser({ IDUser: user._id });
    await setControlTimes(listTime);
    await setIsDialogTimeOpen(true); //open the pop-up form.
  };

  const getcontrolTime = async (user) => {
    const dateT = new Date();
    const dToday = dateT.toISOString().split('T')[0];

    await API.controlTime({ IDUser: user._id, DateToday: dToday })
      .then(async response => {
        //console.log('response:',response[0]);
        var result = response[0];
        if (response.length === 0) {
          result = await addControlTime(user, dToday);
        }
        setControlTime(result);
        //console.log('controlTime:',controlTime);
      })
      .catch(error => {
        console.error('Error trying to find the timesheet:', error);
      });
  }

  const addControlTime = async (user, dToday) => {

    try {
      const response = await API.addTime({
        IDUser: user._id,
        DateToday: dToday,
        StartTime: '',
        EndTime: '',
        UserNotes: ''
      });
      if (response && response.status === 'success') {
        return response.data;
      } else {
        console.error('Error - (addControlTime)', response);
        return '';
      }
    } catch (error) {
      console.error('Error[catch] - (addControlTime)', error);
      return '';
    }

  }
  const getControlTimeByUser = async (data) => {
    var result = await API.gethoursByUser(data);
    return result.data;
  }

  const clearControlTime = () => {
    setControlTime({
      IDUser: '',
      DateToday: '',
      StartTime: '',
      EndTime: '',
      UserNotes: ''
    });
  }

  //method to update an user
  const handleUpdateUser = async () => {
    try {
      const response = await API.updateUser(selectedUser);
      if (response && response.status === 'success') {
        // If the user was created, update the list.
        const updatedUsers = await API.getUsers();
        setUsers(updatedUsers.data);

        setIsDetailsDialogOpen(false);
      } else {
        console.error('Error - User not created:', response);
      }

    } catch (error) {
      console.error('Error - User not created:', error);
    }
  };
  //method to Delete an user 
  const handleDeleteUser = async () => {
    try {
      const response = await API.deleteUser(selectedUser);
      if (response && response.status === 'success') {

        const updatedUsers = await API.getUsers();
        setUsers(updatedUsers.data);


        setIsDetailsDialogOpen(false);
      } else {

        console.error('Error - User not created:', response);

      }
    } catch (error) {
      console.error('Error - User not created:', error);

    }
  };
  const handleClockInOutUser = async () => {
    try {
      const response = await API.updatehours(controlTime);
      if (response && response.status === 'success') {
        // If the user was created, update the list.
        const updatedgethours = await getControlTimeByUser(controlTime);
        //console.log('updatedgethours:', updatedgethours);
        setControlTimes(updatedgethours);
        setIsDialogTimeOpen(false);
      } else {
        console.error('Error - User not created:', response);
      }

    } catch (error) {
      console.error('Error - User not created:', error);
    }
  }

  // Method to calculate the working hours (end time-start time) using Moment.js
  const calcularDuracao = (startTimeStr, endTimeStr) => {
    if (!startTimeStr || !endTimeStr) {
      return ''; // return empty if it is missing start time or endtime.
    }

    // Parse strings to datetime(hours) using Moment.js
    const startTime = moment(startTimeStr, 'h:mmA');
    const endTime = moment(endTimeStr, 'h:mmA');

    // verify if hours are valid after parsing.
    if (!startTime.isValid() || !endTime.isValid()) {
      return ''; // return empty if hours is not valid after parsing.
    }

    // calculate hours difference using Moment.js
    const diff = moment.duration(endTime.diff(startTime));

    // return duration time(working hours) formatted
    return `${Math.floor(diff.asHours())}:${diff.minutes() < 10 ? '0' : ''}${diff.minutes()}`;
  };
  //method to Delete an user 
  const deleteTime = async (data) => {
    try {
      const response = await API.deleteHours(data);
      if (response && response.status === 'success') {
        await setControlTimes(await getControlTimeByUser({ IDUser: data.IDUser }));
        clearTime();
      } else {

        console.error('Error - User not created:', response);

      }
    } catch (error) {
      console.error('Error - User not created:', error);

    }
  };

  const createTime = async (userD, data) => {
    try {
      const response = await API.addTime({
        IDUser: userD._id,
        DateToday: data.DateToday,
        StartTime: data.StartTime,
        EndTime: data.EndTime,
        UserNotes: data.UserNotes
      });
      if (response && response.status === 'success') {
        await setControlTimes(await getControlTimeByUser({ IDUser: userD._id }));
        clearTime();
      } else {
        console.error('Error - (addControlTime)', response);
      }
    } catch (error) {
      console.error('Error[catch] - (addControlTime)', error);
    }
  }

  const selectControlTime = (selectT) => {
    setControlTime(selectT);
    setIsisControlTimeBT(true);
  }
  const clearTime = () => {
    clearControlTime();
    setIsisControlTimeBT(false);
  }

  const upDateTime = async (data) => {
    try {
      const response = await API.updatehours(data);
      if (response && response.status === 'success') {
        await setControlTimes(await getControlTimeByUser({ IDUser: data.IDUser }));
        clearTime();
      } else {
        console.error('Error - User not created:', response);
      }

    } catch (error) {
      console.error('Error - User not created:', error);
    }
  }

  //rendering the html
  return (
    <div>
      <h2>My Clock App</h2>
      <Button onClick={() => setIsDialogOpen(true)}>Add New User</Button>
      <Dialog
        isShown={isDialogOpen}
        title="Add a New User"
        onCloseComplete={() => setIsDialogOpen(false)}
        confirmLabel="Add"
        onConfirm={handleFormSubmit}
        cancelLabel="Cancel"
        onCancel={() => setIsDialogOpen(false)}
      >
        <TextInput
          name="LastName"
          placeholder="Last Name"
          value={newUserData.LastName}
          onChange={handleInputChange}
        />
        <TextInput
          name="FirstName"
          placeholder="First Name"
          value={newUserData.FirstName}
          onChange={handleInputChange}
        />
        <TextInput
          name="DateOfBirth"
          placeholder="Date Of Birth"
          value={newUserData.DateOfBirth}
          onChange={handleInputChange}
        />
        <TextInput
          name="Address1"
          placeholder="Address1"
          value={newUserData.Address1}
          onChange={handleInputChange}
        />
        <TextInput
          name="Address2"
          placeholder="Address2"
          value={newUserData.Address2}
          onChange={handleInputChange}
        />
        <TextInput
          name="City"
          placeholder="City"
          value={newUserData.City}
          onChange={handleInputChange}
        />
        <TextInput
          name="PostalCode"
          placeholder="Postal Code"
          value={newUserData.PostalCode}
          onChange={handleInputChange}
        />
        <TextInput
          name="Country"
          placeholder="Country"
          value={newUserData.Country}
          onChange={handleInputChange}
        />
        <TextInput
          name="Phone"
          placeholder="Phone"
          value={newUserData.Phone}
          onChange={handleInputChange}
        />
        <TextInput
          name="Email"
          placeholder="Email"
          value={newUserData.Email}
          onChange={handleInputChange}
        />
        <TextInput
          name="UserNotes"
          placeholder="User Notes"
          value={newUserData.UserNotes}
          onChange={handleInputChange}
        />
      </Dialog>
      <Table>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date Of Birth</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>Phone</th>
            <th>Email</th>
            <th>User Notes</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.LastName}</td>
              <td>{user.FirstName}</td>
              <td>{user.DateOfBirth}</td>
              <td>{user.Address1}</td>
              <td>{user.Address2}</td>
              <td>{user.City}</td>
              <td>{user.PostalCode}</td>
              <td>{user.Country}</td>
              <td>{user.Phone}</td>
              <td>{user.Email}</td>
              <td>{user.UserNotes}</td>
              <td><Button onClick={() => openDetailsDialog(user)}>Update</Button></td>
              <td><Button onClick={() => openDetailsDialogTime(user)}>Clock IN / OUT</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedUser && (
        <Dialog
          isShown={isDetailsDialogOpen}
          title={`User ID: ${selectedUser._id}`}
          onCloseComplete={() => setIsDetailsDialogOpen(false)}
          confirmLabel="Update"
          onConfirm={handleUpdateUser}
          cancelLabel="Cancel"
          onCancel={() => setIsDetailsDialogOpen(false)}

        >
          <TextInput value={selectedUser.LastName} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, LastName: e.target.value
            })} />
          <TextInput value={selectedUser.FirstName} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, FirstName: e.target.value
            })} />
          <TextInput value={selectedUser.DateOfBirth} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, DateOfBirth: e.target.value
            })} />
          <TextInput value={selectedUser.Address1} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, Address1: e.target.value
            })} />
          <TextInput value={selectedUser.Address2} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, Address2: e.target.value
            })} />
          <TextInput value={selectedUser.City} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, City: e.target.value
            })} />
          <TextInput value={selectedUser.PostalCode} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, PostalCode: e.target.value
            })} />
          <TextInput value={selectedUser.Country} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, Country: e.target.value
            })} />
          <TextInput value={selectedUser.Phone} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, Phone: e.target.value
            })} />
          <TextInput value={selectedUser.Email} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, Email: e.target.value
            })} />
          <TextInput value={selectedUser.UserNotes} onChange={(e) =>
            setSelectedUser({
              ...selectedUser, UserNotes: e.target.value
            })} />
          <div class="dialog-content">
            <Button onClick={handleDeleteUser}>Delete</Button>
          </div>
        </Dialog>
      )}
      {controlTimes && selectedUser && (
        <Dialog
          isShown={isDialogTimeOpen}
          title={`Clock IN / Out: ${selectedUser.FirstName}`}
          onCloseComplete={() => setIsDialogTimeOpen(false)}
          confirmLabel="Back"
          onConfirm={() => setIsDialogTimeOpen(false)}
          cancelLabel="Cancel"
          onCancel={() => setIsDialogTimeOpen(false)}
        >
          <div>
            <label>Date</label>
            <TextInput value={controlTime.DateToday} onChange={(e) =>
              setControlTime({
                ...controlTime, DateToday: e.target.value
              })} />
          </div>
          <div>
            <label>Start Time</label>
            <TextInput value={controlTime.StartTime} onChange={(e) =>
              setControlTime({
                ...controlTime, StartTime: e.target.value
              })} />
          </div>
          <div>
            <label>End Time</label>
            <TextInput value={controlTime.EndTime} onChange={(e) =>
              setControlTime({
                ...controlTime, EndTime: e.target.value
              })} />
          </div>
          <div>
            <label>Notes</label>
            <TextInput value={controlTime.UserNotes} onChange={(e) =>
              setControlTime({
                ...controlTime, UserNotes: e.target.value
              })} />
          </div>
          <div class='button-container'>
            <Button class='button' disabled={isControlTimeBT} onClick={() => createTime(selectedUser, controlTime)}>Add</Button>
            <Button class='button' onClick={() => clearTime()}>Clear</Button>
            <Button class='button' disabled={!isControlTimeBT} onClick={() => upDateTime(controlTime)}>Update</Button>
          </div>

          <Table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Start</th>
                <th>End</th>
                <th>Note</th>
                <th>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              {controlTimes.map(time => (
                <tr key={time._id} onDoubleClick={() => selectControlTime(time)}>
                  <td>{time.DateToday}</td>
                  <td>{time.StartTime}</td>
                  <td>{time.EndTime}</td>
                  <td>{time.UserNotes}</td>
                  <td>{calcularDuracao(time.StartTime, time.EndTime)}</td>
                  <td><Button onClick={() => deleteTime(time)}>X</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Dialog>
      )}
    </div>
  );
}

export default UserTable;













