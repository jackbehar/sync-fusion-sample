import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";

const ApiTestPublic = (props) => {

  const [users, setUsers] = useState([])


  const apiCall = props.apiCall
  const fetchUserData = () => {
    fetch(apiCall)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  // const userResults = JSON.stringify(users)
  // const map = new Map(Object.entries(JSON.parse(userResults)));

  return (
    <div>
    {users.length > 0 && (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )}
  </div>
  );
}
ApiTestPublic.propTypes = {
  apiCall: PropTypes.string
};

ApiTestPublic.defaultProps = {
  apiCall: "https://jsonplaceholder.typicode.com/users"
}
export default ApiTestPublic