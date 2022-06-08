// import React, { Component } from "react";
// import "./style.css";
// class Form extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <form action="">
//           {/* <label for="fname">First Name</label> */}
//           <input
//             type="text"
//             name="fullname"
//             placeholder="Enter Your Full Name"
//           />
//           {/* <label for="lname">Last Name</label> */}
//           <input
//             type="text"
//             name="phonenumber"
//             placeholder="Enter Phone Number"
//           />
//           {/* <label for="country">Country</label> */}
//           <select name="yourjob">
//             <option value="Eng">Eng</option>
//             <option value="Tech">Tech</option>
//             <option value="SWE">SWE</option>
//           </select>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
import React from "react";

// import ReactDOM from "react-dom";

import { useFormik } from "formik";

import * as yup from "yup";
import "./style.css";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",

      Email: "",

      PhoneNumber: "",
    },

    validationSchema: yup.object({
      Name: yup
        .string()

        .max(20, "Name should not exceed 20 Characters")

        .required("Please Enter Full Name"),

      Email: yup
        .string()

        .required("Please Enter Your Email"),

      PhoneNumber: yup
        .string()

        .required("Invalid  PhoneNumber"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <p>
          <input
            type="text"
            name="Name"
            placeholder="Enter Your Full Name"
            {...formik.getFieldProps("Name")}
          ></input>

          {formik.touched.Name && formik.errors.Name ? (
            <span className="edit-error" style={{ color: "red" }}>
              {formik.errors.Name}
            </span>
          ) : null}
        </p>

        <p>
          <input
            type="text"
            name="Email"
            placeholder="Enter Your Email"
            {...formik.getFieldProps("Email")}
          ></input>

          {formik.touched.Email && formik.errors.Email ? (
            <span className="edit-error" style={{ color: "red" }}>
              {formik.errors.Email}
            </span>
          ) : null}
        </p>

        <p>
          <input
            type="text"
            name="PhoneNumber"
            placeholder="Enter Your Phone Number"
            {...formik.getFieldProps("PhoneNumber")}
          ></input>

          {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
            <span className="edit-error" style={{ color: "red" }}>
              {formik.errors.PhoneNumber}
            </span>
          ) : null}
        </p>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default Form;
