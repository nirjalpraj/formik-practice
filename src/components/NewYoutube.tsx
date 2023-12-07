// import { Formik, Form, Field, ErrorMessage } from "formik";
// import React from "react";
// import * as Yup from "yup";

// const NewYoutube = () => {
//   const validationSchema = Yup.object({
//     name: Yup.string().required("required"),
//     email: Yup.string().email("Invalid Email Format").required("required"),
//     channel: Yup.string().required("Required"),
//   });

//   const initialValues = {
//     name: "",
//     email: "",
//     channel: "",
//   };

//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(value) => {
//         console.log("🚀 ~ file: NewYoutube.tsx:19 ~ onSubmit ~ values:", value)
//         }}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <Field type="text" id="name" name="name" />
//           <ErrorMessage name="name" />
//         </div>

//         <div className="form-control">
//           <label htmlFor="name">E-mail</label>
//           <Field type="email" id="email" name="email" />
//           <ErrorMessage name="email" />
//         </div>

//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <Field type="text" id="channel" name="channel" />
//           <ErrorMessage name="channel" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default NewYoutube;
