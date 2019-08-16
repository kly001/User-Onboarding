import React, {useState} from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";

const UsersForm = ({errors, touched}) => {
  const [users, setUsers] = useState([])
    return(
      <div className="users-form">
        <h1>Users Form</h1> 
        <Form>
            <Field type="text" name="name" placeholder="Name" /> 
            {touched.name && errors.name &&(
            <p className="error">{errors.name}</p>
            )}

            <Field type="email" name="email" placeholder="Email"/>
            {touched.email && errors.email &&(
            <p className="error">{errors.email}</p>
            )}

            <Field type="text" name="password" placeholder="Password"/>
            {touched.password && errors.password &&(
            <p className="error">{errors.password}</p>
            )}

            <Field component="select" className="gender" name="gender">
                <option>Choose an Option</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
                <option value="decline">Decline to Answer</option>
            </Field>

              <label>
                Terms of Service
                <Field type="checkbox" name="service"/>       
              </label>
            
            <button type="submit">Submit</button>
        </Form>
        {users.map (user => (
          <p>{user.name}</p>
        ))}
        </div>
    )
}

//Function that takes in a component, extends some logic onto that component
//Returns a new component (copy of the passed in component) with the extended logic
const FormikUsersForm = withFormik({
  mapPropsToValues({ name, email, password, gender, service }){
    return {
    name: name || "",
    email: email || "",
    password: password || "",
    gender: gender || "",
    service: service || false
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required()
}),
  
handleSubmit(values){
  // console.log(values)
  axios
  .post("https://reqres.in/api/users/",values )
  .then(res => console.log(res) )
  .catch(error => console.log(error.response))
},

})(UsersForm) //currying functions


export default FormikUsersForm