import React from "react";

const Channel = ({
  handleBlur,
  handleChange,
  values,
  touched,
  errors,
}: any) => {
  return (
    <div>
      <label htmlFor="name">Channel</label>
      <input
        type="text"
        id="channel"
        name="channel"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.channel}
      />
      {touched.channel && errors.channel && (
        <div className="error">{errors.channel} </div>
      )}
    </div>
  );
};

export default Channel;
