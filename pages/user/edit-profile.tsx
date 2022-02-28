import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import React, { ChangeEvent, FormEvent, useState } from "react";
import countries from "lib/values/country.json";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Dynamic from "next/dynamic";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";

const Edit: NextPage = () => {
  type editType = {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone: string;
    country: string;
    gender: string;
    file: File | null;
  };
  const [edit, setEdit] = useState<editType>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    phone: "",
    country: "",
    gender: "",
    file: null,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };
  const editProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(edit, "submitted");
  };
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title">Mr User</h2>
              <h3 className="user-mail">user@email.com</h3>
            </div>
          </div>
          <div className="profile-area">
            <h4 className="section-title-medium">Update Profile Information</h4>
            <div className="section-wrapper">
              <div className="user-profile">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="user-profile-left">
                      <div className="user-thumbnail">
                        <img src="/avater.svg" className="img-fluid" alt="" />
                        <form
                          encType="multipart/form-data"
                          method="post"
                          action="/upload-profile-image"
                        >
                          <input type="hidden" name="_token" />{" "}
                          <div className="uplode-profile">
                            <input
                              type="file"
                              name="file"
                              id="upload-user-img"
                              onChange={handleChange}
                            />
                            <label
                              htmlFor="upload-user-img"
                              className="upload-user-img"
                            >
                              <i className="fa fa-pencil" aria-hidden="true" />
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="user-profile-content">
                        <h2>Mr User</h2>
                        <h4>user@email.com</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="user-profile-form">
                      <form onSubmit={editProfile}>
                        <input type="hidden" name="_token" />{" "}
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            className="form-control"
                            value={edit.first_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            className="form-control"
                            value={edit.last_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={edit.phone}
                            onChange={handleChange}
                          />
                          <small>
                            Please add phone number with country phone code but
                            not (+ sign.) Ex. for portugal 351*****
                          </small>
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <select
                            name="country"
                            id=""
                            className="form-control"
                            value={edit.country}
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) => {
                              e.preventDefault;
                              setEdit({
                                ...edit,
                                country: e.target.value,
                              });
                            }}
                          >
                            {countries.map((country: any) => (
                              <option key={country.value} value={country.value}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Gender</label>
                          <select
                            className="form-control"
                            name="gender"
                            id=""
                            value={edit.gender}
                            onChange={(e) => {
                              setEdit({
                                ...edit,
                                gender: e.target.value,
                              });
                            }}
                          >
                            <option selected value={1}>
                              Male
                            </option>
                            <option value={2}>Female</option>
                            <option value={3}>Others</option>
                          </select>
                        </div>
                        <button className="primary-btn-outline" type="submit">
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Edit.getInitialProps = async (ctx) => {
  await SSRAuthCheck(ctx, "/user/edit-profile");
  return {};
};
export default Edit;
