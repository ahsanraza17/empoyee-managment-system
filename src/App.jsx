import { useContext, useState, useEffect } from 'react'
import Login from './components/auth/Login'
import AdminDashboard from './components/dashboard/AdminDashboard'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const {userData, user, setUser} = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    if(userLoggedIn){
      setUser(userLoggedIn.role)
    }

  }, [setUser])
  
  

  const handleLogin = (email, password) => {
    if(userData){
      const dataOfAdmin = userData?.adminData.find((e) => e.email == email && e.password == password)
      if(dataOfAdmin){
        setUser("admin");
        setLoggedInUserData(dataOfAdmin);
        localStorage.setItem("userLoggedIn", JSON.stringify({role: "admin"}));
      }
      const dataOfEmployee = userData?.employeeData.find((e) => e.email == email && e.password == password)
      if(dataOfEmployee){
        setUser("employee");
        setLoggedInUserData(dataOfEmployee)
        localStorage.setItem("userLoggedIn", JSON.stringify({role: "employee"}));
      }
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ""}
    {user == "admin" && <AdminDashboard data={loggedInUserData} />}
    {user == "employee" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  )
}

export default App;
