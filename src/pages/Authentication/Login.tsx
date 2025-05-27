import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, socialLogin, resetLoginFlag } from "../../slices/thunks";

import realwealtdy from "../../assets/images/realwealtdy.svg";
import { createSelector } from 'reselect';
//import images

const Login = (props: any) => {
    const dispatch = useDispatch<any>();
    const selectLayoutState = (state: any) => state;
    const loginpageData = createSelector(
        selectLayoutState,
        (state) => ({
            user: state.Account.user,
            error: state.Login.error,
            loading: state.Login.loading,
            errorMsg: state.Login.errorMsg,
        })
    );
    // Inside your component
    const {
        user, error, errorMsg
    } = useSelector(loginpageData);

    const [userLogin, setUserLogin] = useState<any>([]);
    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.email;
            const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.confirm_password;
            setUserLogin({
                email: updatedUserData,
                password: updatedUserPassword
            });
        }
    }, [user]);

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.router.navigate));
            setLoader(true)
            navigate("/DashboardAnalytics")
        }
    });

    const signIn = (type: any) => {
        dispatch(socialLogin(type, props.router.navigate));
    };


    //for facebook and google authentication
    const socialResponse = (type: any) => {
        signIn(type);
    };


    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
                setLoader(false)
            }, 3000);
        }
    }, [dispatch, errorMsg]);

    document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <svg width="194" height="32" viewBox="0 0 194 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9023 18.3687C17.2938 18.3687 17.6053 18.2677 17.8327 18.0628C18.0628 17.8579 18.1765 17.5927 18.1765 17.2615C18.1765 16.9304 18.0628 16.6651 17.8327 16.4617C17.6053 16.2568 17.2938 16.1558 16.9023 16.1558H8.9472V24.247H29.7169C31.1679 21.839 32.0028 19.0184 32.0028 16.0028C32.0014 7.16366 24.8377 0 16.0014 0C7.16506 0 0 7.16365 0 16C0 24.8363 7.16506 32 16.0014 32C20.9788 32 25.4243 29.7281 28.3585 26.1624H6.91668V14.6781H17.0539C17.8804 14.6781 18.561 14.9125 19.0984 15.3812C19.6373 15.8484 19.9067 16.4673 19.9067 17.2363C19.9067 17.7793 19.7537 18.248 19.452 18.6437C19.1503 19.0423 18.7644 19.3384 18.2929 19.5334L19.3257 21.4531H23.5496V11.9811L23.5299 11.9642L22.9686 11.4366L16.247 5.07139L16.2231 5.09384L9.5057 11.4127H10.1666L10.14 11.4366H20.3319L22.716 13.4671H4.35573L16.247 2.28451L25.5787 11.0591V22.9279H18.5736C18.3547 22.9279 18.1779 22.8227 18.0432 22.6094L16.7578 20.0863C16.6315 19.8744 16.4561 19.7678 16.2287 19.7678H14.7315V22.9265H13.0223V18.3659H16.9009L16.9023 18.3687Z" fill="#4DAF50" />
                                            <path d="M50.0829 24L46.5789 17.64H45.5949V24H41.4909V7.152H48.3789C49.7069 7.152 50.8349 7.384 51.7629 7.848C52.7069 8.312 53.4109 8.952 53.8749 9.768C54.3389 10.568 54.5709 11.464 54.5709 12.456C54.5709 13.576 54.2509 14.576 53.6109 15.456C52.9869 16.336 52.0589 16.96 50.8269 17.328L54.7149 24H50.0829ZM45.5949 14.736H48.1389C48.8909 14.736 49.4509 14.552 49.8189 14.184C50.2029 13.816 50.3949 13.296 50.3949 12.624C50.3949 11.984 50.2029 11.48 49.8189 11.112C49.4509 10.744 48.8909 10.56 48.1389 10.56H45.5949V14.736ZM69.7712 17.088C69.7712 17.472 69.7472 17.872 69.6992 18.288H60.4112C60.4752 19.12 60.7392 19.76 61.2032 20.208C61.6832 20.64 62.2672 20.856 62.9552 20.856C63.9792 20.856 64.6912 20.424 65.0912 19.56H69.4592C69.2352 20.44 68.8272 21.232 68.2352 21.936C67.6592 22.64 66.9312 23.192 66.0512 23.592C65.1712 23.992 64.1872 24.192 63.0992 24.192C61.7872 24.192 60.6192 23.912 59.5952 23.352C58.5712 22.792 57.7712 21.992 57.1952 20.952C56.6192 19.912 56.3312 18.696 56.3312 17.304C56.3312 15.912 56.6112 14.696 57.1712 13.656C57.7472 12.616 58.5472 11.816 59.5712 11.256C60.5952 10.696 61.7712 10.416 63.0992 10.416C64.3952 10.416 65.5472 10.688 66.5552 11.232C67.5632 11.776 68.3472 12.552 68.9072 13.56C69.4832 14.568 69.7712 15.744 69.7712 17.088ZM65.5712 16.008C65.5712 15.304 65.3312 14.744 64.8512 14.328C64.3712 13.912 63.7712 13.704 63.0512 13.704C62.3632 13.704 61.7792 13.904 61.2992 14.304C60.8352 14.704 60.5472 15.272 60.4352 16.008H65.5712ZM71.1202 17.28C71.1202 15.904 71.3762 14.696 71.8882 13.656C72.4162 12.616 73.1282 11.816 74.0242 11.256C74.9202 10.696 75.9202 10.416 77.0242 10.416C77.9682 10.416 78.7922 10.608 79.4962 10.992C80.2162 11.376 80.7682 11.88 81.1522 12.504V10.608H85.2562V24H81.1522V22.104C80.7522 22.728 80.1922 23.232 79.4722 23.616C78.7682 24 77.9442 24.192 77.0002 24.192C75.9122 24.192 74.9202 23.912 74.0242 23.352C73.1282 22.776 72.4162 21.968 71.8882 20.928C71.3762 19.872 71.1202 18.656 71.1202 17.28ZM81.1522 17.304C81.1522 16.28 80.8642 15.472 80.2882 14.88C79.7282 14.288 79.0402 13.992 78.2242 13.992C77.4082 13.992 76.7122 14.288 76.1362 14.88C75.5762 15.456 75.2962 16.256 75.2962 17.28C75.2962 18.304 75.5762 19.12 76.1362 19.728C76.7122 20.32 77.4082 20.616 78.2242 20.616C79.0402 20.616 79.7282 20.32 80.2882 19.728C80.8642 19.136 81.1522 18.328 81.1522 17.304ZM92.3293 6.24V24H88.2253V6.24H92.3293ZM114.527 10.608L110.903 24H106.367L104.255 15.312L102.071 24H97.5594L93.9114 10.608H98.0154L99.9114 20.184L102.167 10.608H106.511L108.791 20.136L110.663 10.608H114.527ZM128.716 17.088C128.716 17.472 128.692 17.872 128.644 18.288H119.356C119.42 19.12 119.684 19.76 120.148 20.208C120.628 20.64 121.212 20.856 121.9 20.856C122.924 20.856 123.636 20.424 124.036 19.56H128.404C128.18 20.44 127.772 21.232 127.18 21.936C126.604 22.64 125.876 23.192 124.996 23.592C124.116 23.992 123.132 24.192 122.044 24.192C120.732 24.192 119.564 23.912 118.54 23.352C117.516 22.792 116.716 21.992 116.14 20.952C115.564 19.912 115.276 18.696 115.276 17.304C115.276 15.912 115.556 14.696 116.116 13.656C116.692 12.616 117.492 11.816 118.516 11.256C119.54 10.696 120.716 10.416 122.044 10.416C123.34 10.416 124.492 10.688 125.5 11.232C126.508 11.776 127.292 12.552 127.852 13.56C128.428 14.568 128.716 15.744 128.716 17.088ZM124.516 16.008C124.516 15.304 124.276 14.744 123.796 14.328C123.316 13.912 122.716 13.704 121.996 13.704C121.308 13.704 120.724 13.904 120.244 14.304C119.78 14.704 119.492 15.272 119.38 16.008H124.516ZM130.066 17.28C130.066 15.904 130.322 14.696 130.834 13.656C131.362 12.616 132.074 11.816 132.97 11.256C133.866 10.696 134.866 10.416 135.97 10.416C136.914 10.416 137.738 10.608 138.442 10.992C139.162 11.376 139.714 11.88 140.098 12.504V10.608H144.202V24H140.098V22.104C139.698 22.728 139.138 23.232 138.418 23.616C137.714 24 136.89 24.192 135.946 24.192C134.858 24.192 133.866 23.912 132.97 23.352C132.074 22.776 131.362 21.968 130.834 20.928C130.322 19.872 130.066 18.656 130.066 17.28ZM140.098 17.304C140.098 16.28 139.81 15.472 139.234 14.88C138.674 14.288 137.986 13.992 137.17 13.992C136.354 13.992 135.658 14.288 135.082 14.88C134.522 15.456 134.242 16.256 134.242 17.28C134.242 18.304 134.522 19.12 135.082 19.728C135.658 20.32 136.354 20.616 137.17 20.616C137.986 20.616 138.674 20.32 139.234 19.728C139.81 19.136 140.098 18.328 140.098 17.304ZM151.275 6.24V24H147.171V6.24H151.275ZM161.713 20.52V24H159.625C158.137 24 156.977 23.64 156.145 22.92C155.313 22.184 154.897 20.992 154.897 19.344V14.016H153.265V10.608H154.897V7.344H159.001V10.608H161.689V14.016H159.001V19.392C159.001 19.792 159.097 20.08 159.289 20.256C159.481 20.432 159.801 20.52 160.249 20.52H161.713ZM163.183 17.28C163.183 15.904 163.439 14.696 163.951 13.656C164.479 12.616 165.191 11.816 166.087 11.256C166.983 10.696 167.983 10.416 169.087 10.416C169.967 10.416 170.767 10.6 171.487 10.968C172.223 11.336 172.799 11.832 173.215 12.456V6.24H177.319V24H173.215V22.08C172.831 22.72 172.279 23.232 171.559 23.616C170.855 24 170.031 24.192 169.087 24.192C167.983 24.192 166.983 23.912 166.087 23.352C165.191 22.776 164.479 21.968 163.951 20.928C163.439 19.872 163.183 18.656 163.183 17.28ZM173.215 17.304C173.215 16.28 172.927 15.472 172.351 14.88C171.791 14.288 171.103 13.992 170.287 13.992C169.471 13.992 168.775 14.288 168.199 14.88C167.639 15.456 167.359 16.256 167.359 17.28C167.359 18.304 167.639 19.12 168.199 19.728C168.775 20.32 169.471 20.616 170.287 20.616C171.103 20.616 171.791 20.32 172.351 19.728C172.927 19.136 173.215 18.328 173.215 17.304ZM193.968 10.608L185.568 30.36H181.152L184.224 23.544L178.776 10.608H183.36L186.456 18.984L189.528 10.608H193.968Z" fill="#091409" />
                                        </svg>
                                    </div>
                                    {/* <p className="mt-3 fs-15 fw-medium text-black">RealWealthy Admin Dashboard</p> */}
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to RealWealtdy Admin Dashboard.</p>
                                        </div>
                                        {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                action="#">

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email</Label>
                                                    <Input
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                                    </div>
                                                    <Label className="form-label" htmlFor="password-input">Password</Label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                            value={validation.values.password || ""}
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5"
                                                            placeholder="Enter Password"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={
                                                                validation.touched.password && validation.errors.password ? true : false
                                                            }
                                                        />
                                                        {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null}
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                </div>

                                                <div className="mt-4">
                                                    <Button color="success"
                                                        disabled={loader && true}
                                                        className="btn btn-success w-100" type="submit">
                                                        {loader && <Spinner size="sm" className='me-2'> Loading... </Spinner>}
                                                        Sign In
                                                    </Button>
                                                </div>

                                                {/* <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="btn btn-primary btn-icon me-1"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                socialResponse("facebook");
                                                            }}
                                                        >
                                                            <i className="ri-facebook-fill fs-16" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn btn-danger btn-icon me-1"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                socialResponse("google");
                                                            }}
                                                        >
                                                            <i className="ri-google-fill fs-16" />
                                                        </Link>
                                                        <Button color="dark" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>{" "}
                                                        <Button color="info" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                    </div>
                                                </div> */}
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>

                                {/* <div className="mt-4 text-center">
                                    <p className="mb-0">Don't have an account ? <Link to="/register" className="fw-semibold text-primary text-decoration-underline"> Signup </Link> </p>
                                </div> */}

                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default withRouter(Login);