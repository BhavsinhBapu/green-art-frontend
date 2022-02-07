import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";

const Edit: NextPage = () => {
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
                          <input
                            type="hidden"
                            name="_token"
                            defaultValue="UHxumztviDLlLBs3t8g3IMcfQsz9pSMy9wObVejT"
                          />{" "}
                          <div className="uplode-profile">
                            <input
                              type="file"
                              name="file_one"
                              id="upload-user-img"
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
                      <form action="/user-profile-update" method="post">
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="UHxumztviDLlLBs3t8g3IMcfQsz9pSMy9wObVejT"
                        />{" "}
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            defaultValue="Mr"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            defaultValue="User"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                          />
                          <small>
                            Please add phone number with country phone code but
                            not (+ sign.) Ex. for portugal 351*****
                          </small>
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <select name="country" id="" className="form-control">
                            <option value="af">Afghanistan</option>
                            <option value="al">Albania</option>
                            <option value="dz">Algeria</option>
                            <option value="ds">American Samoa</option>
                            <option value="ad">Andorra</option>
                            <option value="ao">Angola</option>
                            <option value="ai">Anguilla</option>
                            <option value="aq">Antarctica</option>
                            <option value="ag">Antigua and Barbuda</option>
                            <option value="ar">Argentina</option>
                            <option value="am">Armenia</option>
                            <option value="aw">Aruba</option>
                            <option value="au">Australia</option>
                            <option value="at">Austria</option>
                            <option value="az">Azerbaijan</option>
                            <option value="bs">Bahamas</option>
                            <option value="bh">Bahrain</option>
                            <option value="bd">Bangladesh</option>
                            <option value="bb">Barbados</option>
                            <option value="by">Belarus</option>
                            <option value="be">Belgium</option>
                            <option value="bz">Belize</option>
                            <option value="bj">Benin</option>
                            <option value="bm">Bermuda</option>
                            <option value="bt">Bhutan</option>
                            <option value="bo">Bolivia</option>
                            <option value="ba">Bosnia and Herzegovina</option>
                            <option value="bw">Botswana</option>
                            <option value="br">Brazil</option>
                            <option value="io">
                              British Indian Ocean Territory
                            </option>
                            <option value="bn">Brunei</option>
                            <option value="bg">Bulgaria</option>
                            <option value="bf">Burkina</option>
                            <option value="bi">Burundi</option>
                            <option value="kh">Cambodia</option>
                            <option value="cm">Cameroon</option>
                            <option value="ca">Canada</option>
                            <option value="cv">Cape Verde</option>
                            <option value="ky">Cayman Islands</option>
                            <option value="cf">Central African Republic</option>
                            <option value="td">Chad</option>
                            <option value="cl">Chile</option>
                            <option value="cn">China</option>
                            <option value="cx">Christmas Island</option>
                            <option value="cc">Cocos Islands</option>
                            <option value="co">Colombia</option>
                            <option value="km">Comoros</option>
                            <option value="ck">Cook Islands</option>
                            <option value="cr">Costa Rica</option>
                            <option value="hr">Croatia</option>
                            <option value="cu">Cuba</option>
                            <option value="cy">Cyprus</option>
                            <option value="cz">Czech Republic</option>
                            <option value="cg">Congo</option>
                            <option value="dk">Denmark</option>
                            <option value="dj">Djibouti</option>
                            <option value="dm">Dominica</option>
                            <option value="tp">East Timor</option>
                            <option value="ec">Ecuador</option>
                            <option value="eg">Egypt</option>
                            <option value="sv">El Salvador</option>
                            <option value="gq">Equatorial Guinea</option>
                            <option value="er">Eritrea</option>
                            <option value="ee">Estonia</option>
                            <option value="et">Ethiopia</option>
                            <option value="fk">Falkland Islands</option>
                            <option value="fo">Faroe</option>
                            <option value="fj">Fiji</option>
                            <option value="fi">Finland</option>
                            <option value="fr">France</option>
                            <option value="pf">French Polynesia</option>
                            <option value="ga">Gabon</option>
                            <option value="gm">Gambia</option>
                            <option value="ge">Georgia</option>
                            <option value="de">Germany</option>
                            <option value="gh">Ghana</option>
                            <option value="gi">Gibraltar</option>
                            <option value="gr">Greece</option>
                            <option value="gl">Greenland</option>
                            <option value="gd">Grenada</option>
                            <option value="gu">Guam</option>
                            <option value="gt">Guatemala</option>
                            <option value="gk">Guernsey</option>
                            <option value="gn">Guinea</option>
                            <option value="gw">Guinea-</option>
                            <option value="gy">Guyana</option>
                            <option value="ht">Haiti</option>
                            <option value="hn">Honduras</option>
                            <option value="hk">Hong Kong</option>
                            <option value="hu">Hungary</option>
                            <option value="is">Iceland</option>
                            <option value="in">India</option>
                            <option value="id">Indonesia</option>
                            <option value="ir">Iran</option>
                            <option value="iq">Iraq</option>
                            <option value="ie">Ireland</option>
                            <option value="im">Isle of</option>
                            <option value="il">Israel</option>
                            <option value="it">Italy</option>
                            <option value="ci">Ivory</option>
                            <option value="jm">Jamaica</option>
                            <option value="jp">Japan</option>
                            <option value="je">Jersey</option>
                            <option value="jo">Jordan</option>
                            <option value="kz">Kazakhstan</option>
                            <option value="ke">Kenya</option>
                            <option value="ki">Kiribati</option>
                            <option value="kp">North Korea</option>
                            <option value="kr">South Korea</option>
                            <option value="xk">Kosovo</option>
                            <option value="kw">Kuwait</option>
                            <option value="kg">Kyrgyzstan</option>
                            <option value="la">Laos</option>
                            <option value="lv">Latvia</option>
                            <option value="lb">Lebanon</option>
                            <option value="ls">Lesotho</option>
                            <option value="lr">Liberia</option>
                            <option value="ly">Libya</option>
                            <option value="li">Liechtenstein</option>
                            <option value="lt">Lithuania</option>
                            <option value="lu">Luxembourg</option>
                            <option value="mo">Macau</option>
                            <option value="mk">Macedonia</option>
                            <option value="mg">Madagascar</option>
                            <option value="mw">Malawi</option>
                            <option value="my">Malaysia</option>
                            <option value="mv">Maldives</option>
                            <option value="ml">Mali</option>
                            <option value="mt">Malta</option>
                            <option value="mh">Marshall Islands</option>
                            <option value="mr">Mauritania</option>
                            <option value="mu">Mauritius</option>
                            <option value="ty">Mayotte</option>
                            <option value="mx">Mexico</option>
                            <option value="fm">Micronesia</option>
                            <option value="md">Moldova, Republic of</option>
                            <option value="mc">Monaco</option>
                            <option value="mn">Mongolia</option>
                            <option value="me">Montenegro</option>
                            <option value="ms">Montserrat</option>
                            <option value="ma">Morocco</option>
                            <option value="mz">Mozambique</option>
                            <option value="mm">Myanmar</option>
                            <option value="na">Namibia</option>
                            <option value="nr">Nauru</option>
                            <option value="np">Nepal</option>
                            <option value="nl">Netherlands</option>
                            <option value="an">Netherlands Antilles</option>
                            <option value="nc">New Caledonia</option>
                            <option value="nz">New Zealand</option>
                            <option value="ni">Nicaragua</option>
                            <option value="ne">Niger</option>
                            <option value="ng">Nigeria</option>
                            <option value="nu">Niue</option>
                            <option value="mp">Northern Mariana Islands</option>
                            <option value="no">Norway</option>
                            <option value="om">Oman</option>
                            <option value="pk">Pakistan</option>
                            <option value="pw">Palau</option>
                            <option value="ps">Palestine</option>
                            <option value="pa">Panama</option>
                            <option value="pg">Papua New Guinea</option>
                            <option value="py">Paraguay</option>
                            <option value="pe">Peru</option>
                            <option value="ph">Philippines</option>
                            <option value="pn">Pitcairn</option>
                            <option value="pl">Poland</option>
                            <option value="pt">Portugal</option>
                            <option value="qa">Qatar</option>
                            <option value="re">Reunion</option>
                            <option value="ro">Romania</option>
                            <option value="ru">Russian</option>
                            <option value="rw">Rwanda</option>
                            <option value="kn">Saint Kitts and Nevis</option>
                            <option value="lc">Saint Lucia</option>
                            <option value="vc">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="ws">Samoa</option>
                            <option value="sm">San Marino</option>
                            <option value="st">Sao Tome and</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="sn">Senegal</option>
                            <option value="rs">Serbia</option>
                            <option value="sc">Seychelles</option>
                            <option value="sl">Sierra</option>
                            <option value="sg">Singapore</option>
                            <option value="sk">Slovakia</option>
                            <option value="si">Slovenia</option>
                            <option value="sb">Solomon Islands</option>
                            <option value="so">Somalia</option>
                            <option value="za">South Africa</option>
                            <option value="es">Spain</option>
                            <option value="lk">Sri Lanka</option>
                            <option value="sd">Sudan</option>
                            <option value="sr">Suriname</option>
                            <option value="sj">Svalbard and Jan Mayen</option>
                            <option value="sz">Swaziland</option>
                            <option value="se">Sweden</option>
                            <option value="ch">Switzerland</option>
                            <option value="sy">Syria</option>
                            <option value="tw">Taiwan</option>
                            <option value="tj">Tajikistan</option>
                            <option value="tz">Tanzania</option>
                            <option value="th">Thailand</option>
                            <option value="tg">Togo</option>
                            <option value="tk">Tokelau</option>
                            <option value="to">Tonga</option>
                            <option value="tt">Trinidad and Tobago</option>
                            <option value="tn">Tunisia</option>
                            <option value="tr">Turkey</option>
                            <option value="tm">Turkmenistan</option>
                            <option value="tc">Turks and Caicos Islands</option>
                            <option value="tv">Tuvalu</option>
                            <option value="ug">Uganda</option>
                            <option value="ua">Ukraine</option>
                            <option value="ae">United Arab Emirates</option>
                            <option value="gb">United</option>
                            <option value="uy">Uruguay</option>
                            <option value="uz">Uzbekistan</option>
                            <option value="vu">Vanuatu</option>
                            <option value="va">Vatican City State</option>
                            <option value="ve">Venezuela</option>
                            <option value="vn">Vietnam</option>
                            <option value="vi">Virgin Islands (U.S.)</option>
                            <option value="wf">
                              Wallis and Futuna Islands
                            </option>
                            <option value="eh">Western</option>
                            <option value="ye">Yemen</option>
                            <option value="zm">Zambia</option>
                            <option value="zw">Zimbabwe</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Gender</label>
                          <select className="form-control" name="gender" id="">
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

export default Edit;
