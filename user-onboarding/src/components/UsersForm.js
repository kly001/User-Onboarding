import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";

const UsersForm = ({errors, touched}) => {
    return(
      <div className="users-form">
        <h1>Users Form</h1> 
        <Form>
            <Field type="text" name="name" placeholder="Name" /> 
            {touched.name && errors.name &&(
            <p className="error">{errors.name}</p>)}
            <Field type="email" name="email" placeholder="Email"/>
            {touched.email && errors.email &&(
            <p className="error">{errors.email}</p>)}
            <Field type="text" name="password" placeholder="Password"/>
            {touched.password && errors.password &&(
            <p className="error">{errors.password}</p>)}
              <label className="checkbox-container">
                  Terms of Service
                <Field
                  type="checkbox"
                  name="terms-of-service"
                    />
                  <span className="checkmark" />
              </label>
            <button type="submit">Submit</button>
        </Form>
      </div>
    )
}

//Function that takes in a component, extends some logic onto that component
//Returns a new component (copy of the passed in component) with the extended logic
const FormikUsersForm = withFormik({
  mapPropsToValues({ name, email, password }){
    return {
    name: name || "",
    email: email || "",
    password: password || ""
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