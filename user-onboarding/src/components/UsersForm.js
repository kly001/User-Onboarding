import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";


const UsersForm = () => {


    return(
      <div className="users-form">
        <h1>Users Form</h1>
        
        <Form>
            <Field type="text" name="name" placeholder="Name" /> 
            <Field type="email" name="email" placeholder="Email"/>
            <Field type="text" name="password" placeholder="Password"/>
            <button type="submit">Submit</button>
        </Form>
       
        </div>
    )
}

//Function that takes in a component, extends some logic onto that component
//Returns a new component (copy of the passed in component) with the extended logic
const FormikUsersForm = withFormik()(UsersForm) //currying functions


export default FormikUsersForm