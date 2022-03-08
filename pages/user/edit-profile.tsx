import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import React, { ChangeEvent, FormEvent, useState } from "react";
import countries from "lib/values/country.json";
import { useDispatch, useSelector } from "react-redux";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { RootState } from "state/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { UpdateUserInfoByTokenAction } from "state/actions/user";
const Edit: NextPage = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const uploadFile = (e: any) => {
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("photo", file);
    formdata.append("first_name", user.first_name);
    formdata.append("last_name", user.last_name);
    formdata.append("email", user.email);
    formdata.append("country", user.country);
    formdata.append("gender", user.gender);
    formdata.append("phone", user.phone);
    dispatch(UpdateUserInfoByTokenAction(formdata));
  };
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title">
                {user?.first_name + " " + user?.last_name}
              </h2>
              <h3 className="user-mail">{user?.email}</h3>
            </div>
          </div>
          {/* {uploadImageProcess && (
         
          )} */}
          <div className="profile-area">
            <h4 className="section-title-medium">Update Profile Information</h4>
            <div className="section-wrapper">
              <div className="user-profile">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="user-profile-left">
                      <div className="user-thumbnail">
                        <img src={user?.photo} className="img-fluid" alt="" />
                        {/* <Field type="hidden" name="_token" />  */}
                        <div className="uplode-profile">
                          <input
                            type="file"
                            name="file"
                            id="upload-user-img"
                            onChange={(e) => uploadFile(e)}
                          />
                          <label
                            htmlFor="upload-user-img"
                            className="upload-user-img"
                          >
                            <i className="fa fa-pencil" aria-hidden="true" />
                          </label>
                        </div>
                      </div>

                      <div className="user-profile-content">
                        <h2>{user?.first_name + " " + user?.last_name}</h2>
                        <h4>{user?.email}</h4>
                      </div>
                    </div>
                  </div>
                  <Formik
                    enableReinitialize={true}
                    initialValues={{
                      first_name: user?.first_name,
                      last_name: user?.last_name,
                      country: user?.country,
                      gender: user?.gender,
                      phone: user?.phone,
                    }}
                    onSubmit={async (values) => {
                      console.log(values, "submitted");
                      dispatch(UpdateUserInfoByTokenAction(values));
                    }}
                  >
                    <div className="col-lg-8">
                      <div className="user-profile-form">
                        <Form>
                          {/* <Field type="hidden" name="_token" />  */}
                          <div className="form-group">
                            <label>First Name</label>
                            <Field
                              type="text"
                              name="first_name"
                              className="form-control"
                              placeholder="First Name"
                              id="first_name"
                            />
                          </div>
                          <div className="form-group">
                            <label>Last Name</label>
                            <Field
                              type="text"
                              name="last_name"
                              className="form-control"
                              placeholder="Last Name"
                              id="last_name"
                            />
                          </div>
                          <div className="form-group">
                            <label>Phone</label>
                            <Field
                              type="text"
                              name="phone"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                            />
                            <small>
                              Please add phone number with country phone code
                              but not (+ sign.) Ex. for portugal 351*****
                            </small>
                          </div>
                          <div className="form-group">
                            <label>Country</label>
                            <Field
                              as="select"
                              name="country"
                              id="country"
                              className="form-control"
                            >
                              {countries.map((country: any) => (
                                <option
                                  key={country.value}
                                  value={country.value}
                                  selected={country.value === user?.country}
                                >
                                  {country.name}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <div className="form-group">
                            <label>Gender</label>
                            <Field
                              className="form-control"
                              name="gender"
                              id=""
                              as="select"
                            >
                              <option selected={user?.gender === 1} value={1}>
                                Male
                              </option>
                              <option selected={user?.gender === 2} value={2}>
                                Female
                              </option>
                              <option selected={user?.gender === 3} value={3}>
                                Others
                              </option>
                            </Field>
                          </div>
                          <button
                            type="submit"
                            className="btn nimmu-user-sibmit-button"
                          >
                            <span>Update Profile</span>
                          </button>
                        </Form>
                      </div>
                    </div>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/edit-profile");
  return {
    props: {},
  };
};

export default Edit;
