// import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Channel from "./Channel";

function OldYoutube() {
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("Invalid Email Format").required("required"),
    channel: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (value) => {
      console.log("🚀 ~ file: App.tsx:12 ~ App ~ value:", value);
    },
    validationSchema,
  });

  console.log(formik.values);

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name} </div>
        )}

        <label htmlFor="name">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email} </div>
        )}

        <Channel
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          values={formik.values}
          touched={formik.touched}
          errors={formik.errors}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutube;
